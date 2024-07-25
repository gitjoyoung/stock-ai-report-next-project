import StockFavorButton from './StockFavorButton';
import StockLogoImage from '../ReportCommon/StockLogoImage';
import { StockInfo } from '../type/report/stockType';
import HeadingFont from '@/common/Font/HeadingFont';
import BodyFont from '@/common/Font/BodyFont';

interface Props {
  stockInfo: StockInfo | undefined;
}

export default function StockHeader({ stockInfo }: Props) {
  if (!stockInfo) return null;
  const { name, code, ticker } = stockInfo;
  return (
    <article className="flex justify-between w-full">
      <div className="flex items-center gap-3">
        <StockLogoImage width={42} height={42} code={code} />
        <div className="flex gap-2 items-center">
          <HeadingFont level="4" weight="bold">
            {name}
          </HeadingFont>
          <BodyFont level="4" weight="regular">
            ∙
          </BodyFont>
          <BodyFont level="4" weight="medium">
            {ticker}
          </BodyFont>
        </div>
      </div>
    </article>
  );
}
