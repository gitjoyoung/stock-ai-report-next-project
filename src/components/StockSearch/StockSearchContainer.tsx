import React from 'react';
import StockSearchList from './StockSearchList';
import BodyFont from '@/common/Font/BodyFont';
import StockSearchBox from './StockSearchBox';
import CardWrap from '@/common/CardWrap';
import { mockStockDataList } from '@/constants/stockSearchMockData/mockStockDataList';

export default async function StockSearchContainer() {
  return (
    <div className="mx-auto max-w-[430px]  h-full justify-center flex flex-col items-center gap-4 px-1 ">
      <CardWrap
        bgColor="white"
        padding
        className="w-full flex flex-col items-center gap-2 p-5"
      >
        <BodyFont weight="bold" level="1">
          해외주식 검색하기
        </BodyFont>
        <div className="my-3 mx-3">
          <StockSearchBox />
        </div>
      </CardWrap>
      <div className="w-full mx-auto">
        <BodyFont weight="bold" level="3">
          인기 종목 검색 LIST
        </BodyFont>
        <StockSearchList />
      </div>
    </div>
  );
}
