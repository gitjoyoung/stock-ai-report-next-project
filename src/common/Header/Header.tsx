import Link from 'next/link';
import React from 'react';
import HeadingFont from '../Font/HeadingFont';
import BodyFont from '../Font/BodyFont';

export default function Header() {
  return (
    <header className="mb-3 px-5 flex justify-start items-center bg-grayscale-0 h-[64px]">
      <Link href="/">
        <HeadingFont level="4" weight="bold" className="text-primary-800">
          해투비
        </HeadingFont>
      </Link>
      <BodyFont level="3" weight="medium">
        (해외주식 투자 비서)
      </BodyFont>
    </header>
  );
}
