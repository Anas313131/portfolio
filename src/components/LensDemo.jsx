import { Button } from "@/components/ui/button";
import { AuroraText } from "./ui/aurora-text";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/ui/lens";
import { div } from "motion/react-client";

export default function LensDemo() {
  return (
    <div className="flex items-center justify-center gap-8 px-10 bg-[#000000] py-20">
        <h1 className="font-bold text-4xl"><AuroraText> Development with </AuroraText>
            <br/><AuroraText>ReactJs NextJs and NodeJs plus .Net tech stack</AuroraText></h1>x<br/>
    <Card className="relative max-w-md mx-auto">
      <CardHeader>
        <Lens defaultPosition={{ x: 260, y: 150 }}>
          <img
            src="https://res.cloudinary.com/drstwrm0b/image/upload/q_auto/f_auto/v1775947573/Screenshot_2026-04-12_at_4.05.44_AM_vkeryu.png"
            alt="camp"
            className="rounded-lg"
          />
        </Lens>
      </CardHeader>

      <CardContent>
        <CardTitle className="text-2xl">Scorp.ai</CardTitle>
        <CardDescription>
          See our latest and best web app i have made.
        </CardDescription>
      </CardContent>

      <CardFooter className="space-x-4">
        <a href="https://scorpai.netlify.app"><Button>Let's go</Button></a>
        <Button variant="secondary">Another time</Button>
      </CardFooter>
    </Card>
    </div>
    
  );
}