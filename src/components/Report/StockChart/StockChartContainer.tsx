import { Suspense } from 'react';
import StockChartLoader from './StockChartLoader';
import StockSuspenseLoading from '../ReportCommon/SuspenseLoading';
import BodyFont from '@/common/Font/BodyFont';
interface Props {
  code: string | undefined;
}
export default function StockChartContainer({ code }: Props) {
  return (
    <div className=" w-full h-full">
      {/* 타이틀 */}
      <BodyFont level="1" weight="bold">
        주가 차트
      </BodyFont>
      {/* 차트 */}
      <Suspense
        fallback={
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <StockSuspenseLoading />
          </div>
        }
      >
        <StockChartLoader code={code} />
      </Suspense>
    </div>
  );
}
