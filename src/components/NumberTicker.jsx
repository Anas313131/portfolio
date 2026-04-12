import { NumberTicker } from "@/components/ui/number-ticker";

export function NumberTickerDemo() {
  return (
    <div className="flex items-center justify-center h-[200px] w-full gap-40 px-10 bg-gradient-to-b from-grey-500 to-zinc-900">
      
      {/* Clients */}
      <div className="text-center">
        <h2 className="text-white text-lg mb-2">CLIENTS</h2>
        <h1 className="text-white text-4xl font-bold">
          <NumberTicker value={400} />
        </h1>
      </div>

      {/* Downloads */}
      <div className="text-center">
        <h2 className="text-white text-lg mb-2">DOWNLOADS</h2>
        <h1 className="text-white text-4xl font-bold">
          <NumberTicker value={2000} />
        </h1>
      </div>

      {/* Views */}
      <div className="text-center">
        <h2 className="text-white text-lg mb-2">VIEWS</h2>
        <h1 className="text-white text-4xl font-bold">
          <NumberTicker value={10000} />
        </h1>
      </div>

    </div>
  )
}