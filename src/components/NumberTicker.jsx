import { NumberTicker } from "@/components/ui/number-ticker";

export function NumberTickerDemo() {
  return (
    <div className="flex items-center justify-center h-[200px] w-full gap-60 px-10 bg-gradient-to-b from-grey-500 to-zinc-900">
      
      {/* Clients */} 
      <div className="text-center">
        <h2 className="text-white font-bold text-3xl mb-2">CLIENTS</h2>
        <h1>
          <NumberTicker value={2000} className="text-red-400 text-4xl font-bold"/>
        </h1>
      </div>

      {/* Downloads */}
      <div className="text-center">
        <h2 className="text-white font-bold text-3xl mb-2">DOWNLOADS</h2>
        <h1>
          <NumberTicker value={5000} className="text-red-400 font-extrabold text-4xl font-bold"/>
        </h1>
      </div>

      {/* Views */}
      <div className="text-center">
        <h2 className="text-white font-bold text-3xl mb-2">VIEWS</h2>
        <h1>
          <NumberTicker value={20000} className="text-red-400 font-extrabold text-4xl font-bold"/>
        </h1>
      </div>

    </div>
  )
}