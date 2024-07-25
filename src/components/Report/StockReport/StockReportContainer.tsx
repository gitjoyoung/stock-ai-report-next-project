import dynamic from 'next/dynamic';
import { RenderStockReport } from './RenderStockReport';
import BodyFont from '@/common/Font/BodyFont';

const StockReport = dynamic(() => import('./StockReport'), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse h-full ">
      <RenderStockReport />
    </div>
  ),
});
interface Props {
  code: string;
}

export default function StockReportContainer({ code }: Props) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute ">
        <BodyFont level="1" weight="bold">
          종목 AI 리포트
        </BodyFont>
      </div>
      <StockReport code={code} />
    </div>
  );
}
