export default function StockAnalysisSkeleton() {
  return (
    <article className="flex flex-col gap-2 w-full h-full">
      <div className=" h-4 bg-slate-200 animate-pulse w-full rounded-md" />
      <div className=" h-4 bg-slate-200 animate-pulse w-[85%] rounded-md" />
      <div className=" h-4 bg-slate-200 animate-pulse w-full rounded-md" />
      <div className=" h-4 bg-slate-200 animate-pulse w-[90%]  rounded-md" />
      <div className=" h-4 bg-slate-200 animate-pulse w-full rounded-md" />
    </article>
  );
}
