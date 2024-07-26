import StockExchage from './StockExchage';
import { StockInfo } from '../type/report/stockType';
import BodyFont from '@/common/Font/BodyFont';

interface Props {
  stockInfo: StockInfo | undefined;
}

export default async function StockSummary({ stockInfo }: Props) {
  const { code, ticker } = stockInfo!;
  const fetchPrice = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/report/price`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
      cache: 'no-store',
    },
  ); // 주식 가격의 정보 주식의 가격은 항시 변동되기 때문에 캐싱 없이 실시간으로 가져와야함
  const {
    exchangeRate,
    closePrice,
    fluctuationsRatio,
    compareToPreviousClosePrice,
  } = await fetchPrice.json();

  const summaryFetch = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/report/summary`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
      next: {
        revalidate: 3600,
      },
    },
  );
  const summary = await summaryFetch.json();
  return (
    <article className="flex justify-between w-full">
      <div className="flex flex-col justify-between gap-6 ">
        {/* 주식 가격 , 등락 , 원달라 환율  */}
        <StockExchage
          price={closePrice}
          ticker={ticker}
          fluctuation={fluctuationsRatio}
          exchangeRate={exchangeRate}
          changeRate={compareToPreviousClosePrice}
        />
        {/* 주식 설명 */}
        <div className=" w-full ">
          <div className="w-full h-full  p-1 break-words">
            <BodyFont
              level="4"
              weight="regular"
              className=" leading-relaxed break-words whitespace-pre-line"
            >
              {summary}
            </BodyFont>
          </div>
        </div>
      </div>
    </article>
  );
}
