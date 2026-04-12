import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export default function VelocityScroll() {
  return (
    <ScrollVelocityContainer className="text-4xl font-bold md:text-7xl">
      <ScrollVelocityRow baseVelocity={20} direction={1}>
         || PORTFOLIO
      </ScrollVelocityRow>
      <ScrollVelocityRow baseVelocity={20} direction={-1}>
         PORTFOLIO || 
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
}