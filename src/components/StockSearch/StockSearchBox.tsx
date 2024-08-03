'use client';
import { mockStockDataList } from '@/constants/stockSearchMockData/mockStockDataList';
import { useEffect, useState, useTransition } from 'react';
import { StockInfo } from '../Report/type/report/stockType';
import Link from 'next/link';
import BodyFont from '@/common/Font/BodyFont';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function StockSearchBox() {
  const [search, setSearch] = useState('');
  const [filteredStocks, setFilteredStocks] = useState<StockInfo[]>([]);
  const [isPending, setIsPending] = useTransition();
  const { push } = useRouter();
  const [stockList, setStockList] = useState<StockInfo[]>([]);

  useEffect(() => {
    setStockList(mockStockDataList);
  }, []); // 이후 통신함수로 변경

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value.toUpperCase());
    setIsPending(() => {
      if (value === '') {
        setFilteredStocks([]);
      } else {
        const results = stockList.filter((stock) => stock.name.includes(value));
        setFilteredStocks(results);
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filteredStocks.length > 0) {
      const firstResult = filteredStocks[0];
      push(`/report/${firstResult.name}`);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg flex justify-center items-center gap-2 p-2"
      >
        <input
          type="text"
          className="p-2 focus:outline-none flex-1 w-[200px] md:flex-1 "
          placeholder="종목 이름을 입력하세요"
          value={search}
          onChange={handleChange}
        />
        <button
          disabled={filteredStocks.length === 0}
          type="submit"
          className={`bg-blue-500 text-white py-2 px-3 min-w-[70px] rounded-lg ${
            filteredStocks.length === 0 ? 'bg-gray-300' : 'bg-blue-500'
          }`}
        >
          검색
        </button>
      </form>
      <div className="mt-2">
        {filteredStocks.length > 0
          ? filteredStocks.map((stock) => (
              <Link
                className="flex p-2 border-b gap-1"
                href={`report/${stock.name}`}
                key={uuidv4()}
              >
                <BodyFont level="4" weight="bold">
                  {stock.name}
                </BodyFont>
                <BodyFont level="5" weight="regular">
                  ({stock.ticker})
                </BodyFont>
              </Link>
            ))
          : search && (
              <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
            )}
      </div>
    </div>
  );
}
