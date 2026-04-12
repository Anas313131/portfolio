import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee"; // fix path if needed

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
]

// ✅ FIX: proper split
const mid = Math.ceil(reviews.length / 2)
const firstRow = reviews.slice(0, mid)
const secondRow = reviews.slice(mid)

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all duration-300",
        "border-gray-200 bg-white hover:shadow-xl hover:-translate-y-1",
        "dark:border-gray-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      )}
    >
      <div className="flex items-center gap-3">
        <img
          className="rounded-full"
          width="40"
          height="40"
          alt={name}
          src={img}
        />
        <div>
          <figcaption className="text-sm font-semibold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {username}
          </p>
        </div>
      </div>

      <blockquote className="mt-3 text-sm text-gray-700 dark:text-gray-300">
        {body}
      </blockquote>
    </figure>
  )
}

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-zinc-900">
      
      {/* Left Column */}
      <Marquee pauseOnHover vertical className="[--duration:25s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Right Column */}
      <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Gradient fade top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white dark:from-black"></div>

      {/* Gradient fade bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-black"></div>
    </div>
  )
}