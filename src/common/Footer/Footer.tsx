import BodyFont from '../Font/BodyFont';

export default function Footer() {
  return (
    <div className="mt-4 h-[120px]  bg-gray-800  text-white flex items-center justify-center gap-2 flex-col">
      <BodyFont level="5" weight="bold">
        githuborigin@gmail.com
      </BodyFont>
      <BodyFont level="5" weight="bold">
        해외 주식 조회
      </BodyFont>
    </div>
  );
}
