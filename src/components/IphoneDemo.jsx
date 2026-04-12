import { Iphone } from "@/components/ui/iphone"; // adjust path if needed
import { Button } from "@/components/ui/button";

export default function IphoneDemo() {
  return (
    <div className="flex items-center justify-center gap-15 px-15 bg-[#f5f5f3] py-20">
    <div className="w-[434px]">
      <Iphone src="https://mir-s3-cdn-cf.behance.net/projects/808/8053b1245706555.Y3JvcCw0MTE3LDMyMjAsNzg0LDM2Ng.jpg" />
    </div>

    <h2 className="text-4xl font-bold max-w-125">
      IOS APP DEVELOPMENT WITH SWIFT AND SWIFTUI DEV<br/>
      <Button className="bg-blue-700 text-white size-8px"variant="outline">See more</Button>
    </h2>
    </div>
  )
}