import { Suspense } from 'react';
import StockChartLoader from './StockChartLoader';
import StockSuspenseLoading from '../ReportCommon/SuspenseLoading';
import BodyFont from '@/common/Font/BodyFont';
interface Props {
  code: string | undefined;
}
export default function StockChartContainer({ code }: Props) {
  return (
    <article className="w-full h-[200px] ">
      {/* 타이틀 */}
      <BodyFont level="1" weight="bold">
        주가 차트
      </BodyFont>
      {/* 차트 */}
      <Suspense
        fallback={
          <div className="h-full w-full flex flex-col justify-center items-center">
            <StockSuspenseLoading />
          </div>
        }
      >
        <StockChartLoader code={code} />
      </Suspense>
    </article>
  );
}
