import { Android } from "@/components/ui/android";
import { Iphone } from "@/components/ui/iphone";
import  {Button} from "@/components/ui/button";

export default function AndroidDemo() {
  return (
<div className="flex items-center font-serif justify-center gap-10 px-10 bg-[#36f7ed] py-20">

  {/* LEFT SIDE (Mobile) */}
  {/* <div className="w-[300px] flex items-center justify-center h-[600px]">
    <Android
      className="w-full h-full object-contain rounded-[30px]"
      src="https://img.freepik.com/free-vector/instagram-story-with-photo_23-2148483131.jpg?semt=ais_hybrid&w=740&q=80"
    />
  </div> */}

  {/* RIGHT SIDE (Text) */}
  <h1 className="text-4xl font-bold max-w-125">
    ANDROID APP DEVELOPMENT WITH KOTLIN, FIREBASE 
    & <br/>
    FLUTTER DEVELOPMENT<br/>
    <Button className="bg-blue-700 text-white size-8px" variant="outline">DIVE</Button>
  </h1>

    <div className="w-[300px] h-600px items-center justify-center">
      <Iphone videoSrc="https://linkbase.ca/wp-content/uploads/2025/03/Late-Check-Out.mov" />
    </div>


</div>
  )
};