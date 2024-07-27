import BodyFont from '@/common/Font/BodyFont';
import dynamic from 'next/dynamic';
import StockSuspenseLoading from '../ReportCommon/SuspenseLoading';

const StockAreaChart = dynamic(() => import('../StockChart/StockAreaChart'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <StockSuspenseLoading />
    </div>
  ),
});
interface Props {
  code: string | undefined;
}
export default async function StockChartLoader({ code }: Props) {
  if (!code) return null;
  const fetchData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/report/chart`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
      cache: 'no-store',
    },
  );
  const chartPeriodData = await fetchData.json();

  return <StockAreaChart chartPeriodData={chartPeriodData} />;
}
