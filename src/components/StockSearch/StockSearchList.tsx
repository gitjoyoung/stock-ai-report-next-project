import React from 'react';
import StockLogoImage from '../Report/ReportCommon/StockLogoImage';
import Link from 'next/link';
import { mockStockDataList } from '@/constants/stockSearchMockData/mockStockDataList';
import BodyFont from '@/common/Font/BodyFont';
import { v4 as uuid } from 'uuid';

export default function StockSearchList() {
  return (
    <article className="w-full">
      <ul className="border  bg-white rounded-lg ">
        {mockStockDataList.map((stock) => (
          <li
            key={uuid()}
            className="flex items-center justify-between p-3 border"
          >
            <div className="flex items-center gap-2 justify-between">
              <StockLogoImage width={32} height={32} code={stock.code} />
              <BodyFont weight="bold" level="3">
                {stock.name}
              </BodyFont>
              <BodyFont weight="regular" level="5">
                {stock.ticker}
              </BodyFont>
            </div>
            <Link
              href={`/report/${stock.name}`}
              className="border bg-blue-500 text-white text-sm rounded-lg p-1 px-2"
            >
              {'이동하기'}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
