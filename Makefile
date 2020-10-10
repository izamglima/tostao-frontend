.DEFAULT_GOAL := check

BLUE_COLOR := \033[0;34m
DEFAULT_COLOR := \033[0;39m
DIM_COLOR := \033[0;2m
YELLOW_COLOR := \033[0;33m

VERSION_FILE := package.json
VERSION := $(shell sed -En "s/^.*\"version\": \"([0-9]*\\.[0-9]*\\.[0-9]*)\",*/\\1/p" ${VERSION_FILE})
MAJOR := $(shell echo "${VERSION}" | cut -d . -f1)
MINOR := $(shell echo "${VERSION}" | cut -d . -f2)
PATCH := $(shell echo "${VERSION}" | cut -d . -f3)

.PHONY: check
check: lint test e2e ## Runs lint, unit test and end-to-end tests

.PHONY: e2e
e2e: ## Runs e2e tests.
	@npx ng e2e --configuration=ci

.PHONY: help
help: ## Print this help
	@printf "Tostão ${VERSION}\n"
	@awk -F ':|##' '/^[^\t].+?:.*?##/ { printf "${BLUE_COLOR}%-30s${DEFAULT_COLOR} %s\n", $$1, $$NF }' $(MAKEFILE_LIST)

.PHONY: lint
lint: ## Runs lint.
	@npx ng lint

CHANGELOG_FILE := CHANGELOG.md
DATE := $(shell date +"%Y-%m-%d")
REPO_NAME := tostao-client
REPO := https:\/\/github.com\/tostao-app\/${REPO_NAME}\/compare

.PHONY: release
release: ## Bumps the version and creates the new tag
	@printf "${BLUE_COLOR}The current version is:${DEFAULT_COLOR} ${VERSION}\n" && \
	  read -r -p "Do you want to release a [major|minor|patch]: " TYPE && \
	  case "$$TYPE" in \
	  "major") \
	    MAJOR=$$((${MAJOR}+1)); \
	    MINOR="0"; \
	    PATCH="0"; \
	    NEW_VERSION="$$MAJOR.$$MINOR.$$PATCH" \
	    ;; \
	  "minor") \
	    MINOR=$$((${MINOR}+1)); \
	    PATCH="0" && \
	    NEW_VERSION="${MAJOR}.$$MINOR.$$PATCH" \
	    ;; \
	  "patch") \
	    PATCH=$$((${PATCH}+1)); \
	    NEW_VERSION="${MAJOR}.${MINOR}.$$PATCH" \
	    ;; \
	  *) \
	    printf "\\n${YELLOW_COLOR}Release canceled!\n"; \
	    exit 0 \
	    ;; \
	  esac && \
	  printf "${BLUE_COLOR}The new version is:${DEFAULT_COLOR} $$NEW_VERSION\n" && \
	  printf "\t${DIM_COLOR}Updating ${VERSION_FILE} version${DEFAULT_COLOR}\n" && \
	  perl -p -i -e "s/\"version\": \"${VERSION}\"/\"version\": \"$$NEW_VERSION\"/g" ${VERSION_FILE} && \
	  printf "\t${DIM_COLOR}Updating ${CHANGELOG_FILE} version${DEFAULT_COLOR}\n" && \
	  perl -p -i -e "s/## \[Unreleased\]/## \[Unreleased\]\\n\\n## \[$$NEW_VERSION\] - ${DATE}/g" ${CHANGELOG_FILE} && \
	  perl -p -i -e "s/${REPO}\/${VERSION}...HEAD/${REPO}\/$$NEW_VERSION...HEAD/g" ${CHANGELOG_FILE} && \
	  perl -p -i -e "s/...HEAD/...HEAD\\n\[$$NEW_VERSION\]: ${REPO}\/${VERSION}...$$NEW_VERSION/g" ${CHANGELOG_FILE} && \
	  printf "\t${DIM_COLOR}Recording changes to the repository${DEFAULT_COLOR}\n" && \
	  git add ${VERSION_FILE} ${CHANGELOG_FILE} && \
	  git commit -m "Bump to $$NEW_VERSION" > /dev/null && \
	  printf "\t${DIM_COLOR}Creating release tag${DEFAULT_COLOR}\n" && \
	  git tag -a -m "" $$NEW_VERSION && \
	  printf "\n${BLUE_COLOR}If everything's ok, push the changes to updstream!${DEFAULT_COLOR}\n"

.PHONY: start
start: ## Starts the server
	@npx ng serve

.PHONY: test
test: ## Runs unit tests
	@npx ng test --configuration=ci
