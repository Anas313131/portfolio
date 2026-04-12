import { Android } from "@/components/ui/android";
import { Iphone } from "@/components/ui/iphone";
import  {Button} from "@/components/ui/button";

export default function AndroidDemo() {
  return (
<div className="flex items-center justify-center gap-10 px-10 bg-[#f5f5f3] py-20">

  {/* LEFT SIDE (Mobile) */}
  <div className="w-300px h-600px items-center justify-center">
    <Android
      className="w-full h-full object-contain rounded-[30px]"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1867a489788291.5e00bbeda7d8c.png"
    />
  </div>

  {/* RIGHT SIDE (Text) */}
  <h1 className="text-4xl font-bold max-w-125">
    ANDROID APP DEVELOPMENT WITH KOTLIN, FIREBASE 
    & <br/>
    FLUTTER DEVELOPMENT<br/>
    <Button className="bg-blue-700 text-white size-8px" variant="outline">DIVE</Button>
  </h1>

    <div className="w-[300px] h-600px items-center justify-center">
      <Iphone videoSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
    </div>


</div>
  )
};