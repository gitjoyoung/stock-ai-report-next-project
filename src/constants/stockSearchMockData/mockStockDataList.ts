import { StockInfo } from '@/components/Report/type/report/stockType';

// 좋은 주식 데이터
const goodStocks: StockInfo[] = [
  { ticker: 'AVGO', name: '브로드컴', code: 'AVGO.O' },
  { ticker: 'AAPL', name: '애플', code: 'AAPL.O' },
  { ticker: 'NVDA', name: '엔비디아', code: 'NVDA.O' },
  { ticker: 'AMZN', name: '아마존', code: 'AMZN.O' },
  { ticker: 'MSFT', name: '마이크로소프트', code: 'MSFT.O' },
];

// 나쁜 주식 데이터
const badStocks: StockInfo[] = [
  { ticker: 'HOOD', name: '로빈후드', code: 'HOOD.O' },
  { ticker: 'SAVA', name: '카사바사이언스', code: 'SAVA.O' },
  { ticker: 'PTON', name: '펠로톤', code: 'PTON.O' },
  { ticker: 'GPRO', name: '고프로', code: 'GPRO.O' },
];

const defaltStocks: StockInfo[] = [
  { ticker: 'TSLA', name: '테슬라', code: 'TSLA.O' },
  { ticker: 'MSFT', name: 'MS', code: 'MSFT.O' },
  { ticker: 'GOOGL', name: '구글', code: 'GOOGL.O' },
  { ticker: 'U', name: '유니티', code: 'U' },
];

// 모든 주식 데이터를 병합
const allStocks: StockInfo[] = [...goodStocks, ...badStocks, ...defaltStocks];

// Map을 사용하여 중복 제거
const stockMap = new Map<string, StockInfo>();

allStocks.forEach((stock) => {
  stockMap.set(stock.ticker, stock);
});

// Map에서 고유한 주식 목록을 배열로 변환
export const mockStockDataList: StockInfo[] = Array.from(stockMap.values());
