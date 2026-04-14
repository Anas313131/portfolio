import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const IMAGES_ROW_A = [
  "https://res.cloudinary.com/drstwrm0b/image/upload/q_auto/f_auto/v1775947573/Screenshot_2026-04-12_at_4.05.44_AM_vkeryu.png",
  "https://res.cloudinary.com/drstwrm0b/image/upload/q_auto/f_auto/v1775947738/Screenshot_2026-04-12_at_4.18.36_AM_e9m7kf.png",
];

const IMAGES_ROW_B = [
  "https://res.cloudinary.com/drstwrm0b/image/upload/q_auto/f_auto/v1775947990/Screenshot_2026-04-12_at_4.22.45_AM_dfwxfo.png",
  "https://res.cloudinary.com/drstwrm0b/image/upload/q_auto/f_auto/v1775948118/Screenshot_2026-04-12_at_4.25.00_AM_ja86ns.png",
];

export default function ScrollImages() {
  return (
    <div className="relative bg-green-400 flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
          {IMAGES_ROW_A.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="img"
              className="mx-4 h-40 w-60 rounded-lg object-cover"
            />
          ))}
        </ScrollVelocityRow>

        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
          {IMAGES_ROW_B.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="img"
              className="mx-4 h-40 w-60 rounded-lg object-cover"
            />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}