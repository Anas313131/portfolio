import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

export function DiaTextRevealDemo2() {
  return (
    <div className="flex min-h-56 items-center justify-center p-8">
      <DiaTextReveal
        className="text-8xl  font-bold tracking-tight"
        colors={["#22d3ee", "#818cf8", "#f472b6", "#34d399"]}
        text="WHAT YOU LOOKING FOR?"
      />
    </div>
  )
}


