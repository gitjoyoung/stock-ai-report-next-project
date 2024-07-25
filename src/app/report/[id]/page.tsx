import ReportContainer from '@/components/Report/ReportContainer';
import { StockInfo } from '@/components/Report/type/report/stockType';
import { mockStockDataList } from '@/constants/stockSearchMockData/mockStockDataList';

interface Props {
  params: {
    id: string;
  };
}

export default async function page({ params }: Props) {
  const { id } = params;
  const deCodeId = await decodeURIComponent(id);

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/report/stockList`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mockStockDataList),
    cache: 'no-cache',
  }); // 검색 리스트 db에 주식 리스트 추가

  const fetchStockList = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/report/stockList?stockName=${deCodeId.replace(/\s+/g, '')}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    }, // db 주식 리스트
  );

  const stockInfo: StockInfo = await fetchStockList.json();
  if (!stockInfo) return null;

  return <ReportContainer stockInfo={stockInfo} />;
}
