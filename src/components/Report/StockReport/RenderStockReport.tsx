import HeadingFont from '@/common/Font/HeadingFont';
import { StockReport } from '../type/report/stockType';
import StockPolarChart from './StockPolarChart';
import StockReportList from './StockReportList';

export const RenderStockReport = ({
  overallScore = 0,
  scores = [
    {
      subject: '주가',
      score: 0,
      fullMark: 100,
    },
    {
      subject: '투자',
      score: 0,
      fullMark: 100,
    },
    {
      subject: '수익성',
      score: 0,
      fullMark: 100,
    },
    {
      subject: '성장성',
      score: 0,
      fullMark: 100,
    },
    {
      subject: '관심도',
      score: 0,
      fullMark: 100,
    },
  ],
}: StockReport) => (
  <section className=" space-y-6">
    <div className="flex justify-end">
      <HeadingFont level="3" weight="medium" className="text-grayscale-700">
        {overallScore}점
      </HeadingFont>
    </div>
    <div className="flex gap-2 flex-wrap items-center justify-center md:justify-between">
      <div className=" w-[50%] md:w-[45%] h-[180px] z-10">
        <StockPolarChart
          dataKey="subject"
          valueKey="score"
          data={scores}
          cx="45%"
          viewAxis={true}
        />
      </div>
      <div className="">
        <StockReportList data={scores} />
      </div>
    </div>
  </section>
);
