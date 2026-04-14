import { Iphone } from "@/components/ui/iphone"; // adjust path if needed
import { Button } from "@/components/ui/button";

export default function IphoneDemo() {
  return (
    <div className="flex items-center font-serif justify-center gap-15 px-15 bg-[#dae71f] py-20">
    <div className="w-[300px] h-600px items-center justify-center">
      <Iphone videoSrc="https://linkbase.ca/wp-content/uploads/2025/04/Digital-Guidebooks.mov" />
    </div>

    <h2 className="text-4xl font-bold max-w-125">
      IOS APP DEVELOPMENT WITH SWIFT & SWIFT UI DEV<br/>
      <Button className="bg-blue-700 text-white size-8px"variant="outline">See more</Button>
    </h2>
    </div>
  )
}