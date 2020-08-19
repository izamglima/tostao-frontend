import { TestBed } from '@angular/core/testing';
import { ChartsService } from './charts.service';

describe('ChartsService', () => {
  let service: ChartsService;
  const data = {
    dataExpenses: [
      35, 35, 35
    ],
    labelExpenses: [
      'Market', 'Transport', 'Home'
    ],
    dataPriceMonths: [
      '3y', '1y', '6m', '3m', '1m', '1w', '24h'
    ],
    dataIncomeMonths: [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'
    ],
    dataIncomeValues: [
      8, 4, 6, 11, 12, 8, 6.5, 10
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('randomData should return a object with random data', () => {
    expect(service.getRandomData()).toEqual(data);
  });

});
