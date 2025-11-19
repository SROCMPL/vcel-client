export default function PortfolioCard({ item }) {
  return (
    <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow-lg transition-all duration-200 holo">
      {/* Top Section */}
      <div className="flex items-start justify-between gap-4 ">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-slate-800 truncate">
            {item.name}
          </h3>
          <p className="text-sm text-blue-500 mt-1">{item.sector}</p>

          <div className="mt-3">
            <span className="inline-block text-xs bg-slate-100 text-black px-2 py-1 rounded-md">
              {item.stage}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-500 mt-4 leading-relaxed">
        {item.description}
      </p>

      {/* Raised & Growth */}
      <div className="mt-6 border-t pt-4 flex items-center justify-between text-xs text-slate-500">
        <div>
          <div className="text-[13px] text-slate-700 font-medium">
            {item.raised}
          </div>
          <div className="text-slate-400">Raised</div>
        </div>

        <div className="text-right">
          <div className="text-[13px] font-medium text-green-600">
            {item.growth}
          </div>
          <div className="text-slate-400">Growth</div>
        </div>
      </div>
    </article>
  );
}
