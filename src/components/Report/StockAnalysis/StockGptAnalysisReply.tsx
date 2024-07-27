import BodyFont from '@/common/Font/BodyFont';
import { StockInfo } from '../type/report/stockType';
import { gptAnalysisPrompt } from '@/constants/Analysis/gptAnalysis';

interface Props {
  stockInfo: StockInfo | undefined;
}

export default async function StockGptAnalysisReply({ stockInfo }: Props) {
  if (!stockInfo) return null;
  const { code } = stockInfo;
  const { system, message } = await gptAnalysisPrompt(code);
  const getFetch = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gpt`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      system,
      message,
    }),
    cache: 'no-store',
  });

  const data = await getFetch.json();

  return (
    <div className="h-full w-full">
      <BodyFont
        level="4"
        weight="regular"
        className="leading-relaxed break-words whitespace-pre-line"
      >
        {data}
      </BodyFont>
    </div>
  );
}
