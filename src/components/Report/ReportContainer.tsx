import CardWrap from '@/common/CardWrap';
import StockHeader from './StockHeader/StockHeader';
import StockChartContainer from './StockChart/StockChartContainer';
import StockSumaryContainer from './StockSumary/StockSummaryContainer';
import StockReportContainer from './StockReport/StockReportContainer';
import StockAnalysis from './StockAnalysis/StockAnalysis';
import { StockInfo } from './type/report/stockType';

interface Props {
  stockInfo: StockInfo | undefined;
}
/**
 * 메인 페이지
 * @returns
 */
export default function ReportContainer({
  stockInfo,
}: Props): JSX.Element | null {
  if (!stockInfo) return null;
  const { code } = stockInfo;
  return (
    <div className=" w-[100%] mx-auto md:w-[600px]">
      <div className="flex flex-col flex-wrap gap-2">
        <div className="p-2">
          <StockHeader stockInfo={stockInfo} />
        </div>
        {/* 첫번째 줄 */}
        <div className="space-y-3 w-full ">
          <CardWrap width="100%" height="270px" className="p-4 md:p-6">
            <StockSumaryContainer stockInfo={stockInfo} />
          </CardWrap>
          <CardWrap width="100%" height="270px" className="p-4 md:p-6">
            <StockChartContainer code={code} />
          </CardWrap>
          <CardWrap width="100%" height="270px" className="p-4 md:p-6">
            <StockReportContainer code={code} />
          </CardWrap>
          <CardWrap width="100%" height="350px" className="p-4 md:p-6">
            <StockAnalysis stockInfo={stockInfo} />
          </CardWrap>
        </div>
      </div>
    </div>
  );
}
