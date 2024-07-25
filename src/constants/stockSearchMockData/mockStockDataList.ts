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

// 기본 주식 데이터
const defaltStocks: StockInfo[] = [
  { ticker: 'TSLA', name: '테슬라', code: 'TSLA.O' },
  { ticker: 'MSFT', name: 'MS', code: 'MSFT.O' },
  { ticker: 'GOOGL', name: '구글', code: 'GOOGL.O' },
  { ticker: 'U', name: '유니티', code: 'U' },
];

// 고성장 기술주
const growthStocks: StockInfo[] = [
  { ticker: 'FB', name: '페이스북', code: 'FB.O' },
  { ticker: 'SNAP', name: '스냅챗', code: 'SNAP.O' },
  { ticker: 'SPOT', name: '스포티파이', code: 'SPOT.O' },
  { ticker: 'SQ', name: '스퀘어', code: 'SQ.O' },
  { ticker: 'ZM', name: '줌 비디오 커뮤니케이션즈', code: 'ZM.O' },
];

// 전통적인 블루칩 주식
const blueChipStocks: StockInfo[] = [
  { ticker: 'KO', name: '코카콜라', code: 'KO.N' },
  { ticker: 'PEP', name: '펩시', code: 'PEP.N' },
  { ticker: 'JNJ', name: '존슨앤존슨', code: 'JNJ.N' },
  { ticker: 'PG', name: '프록터앤드갬블', code: 'PG.N' },
  { ticker: 'XOM', name: '엑손모빌', code: 'XOM.N' },
];

// 혁신적인 스타트업
const startupStocks: StockInfo[] = [
  { ticker: 'BYND', name: '비욘드 미트', code: 'BYND.O' },
  { ticker: 'ROKU', name: '로쿠', code: 'ROKU.O' },
  { ticker: 'PLTR', name: '팔란티어', code: 'PLTR.O' },
  { ticker: 'DOCU', name: '도큐사인', code: 'DOCU.O' },
  { ticker: 'CRWD', name: '크라우드스트라이크', code: 'CRWD.O' },
];

// 모든 주식 데이터를 병합
const allStocks: StockInfo[] = [
  ...goodStocks,
  ...badStocks,
  ...defaltStocks,
  ...growthStocks,
  ...blueChipStocks,
  ...startupStocks,
];

// Map을 사용하여 중복 제거
const stockMap = new Map<string, StockInfo>();

allStocks.forEach((stock) => {
  stockMap.set(stock.ticker, stock);
});

// Map에서 고유한 주식 목록을 배열로 변환
export const mockStockDataList: StockInfo[] = Array.from(stockMap.values());
