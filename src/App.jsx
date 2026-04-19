import VelocityScroll from "./components/VelocityScroll";
import ScrollImages from "./components/ScrollImages";
import AndroidDemo from "./components/AndroidDemo";
import LensDemo from "./components/LensDemo";
import IconCloudDemo from "./components/IconCloudDemo.jsx";
import Nav from "./components/Nav.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Hero from "./components/Hero.jsx";
import { VideoTextDemo } from "./components/VideoTextDemo";
import { Marquee } from "./components/ui/marquee";
import IphoneDemo from "./components/IphoneDemo";
import { NumberTickerDemo } from "./components/NumberTicker";
import ScrollTriggered from "./components/ScrollTriggered";
import { AuroraTextDemo } from "./components/AuroraText";
import { DiaTextRevealDemo2 } from "./components/DiaTextReveal";
import { TypingAnimation } from "./components/ui/typing-animation";



function App() {
  return (
    <div>
      <Nav/>
      <Hero/><br/>
      <DiaTextRevealDemo2/>
      <AuroraTextDemo/>
      <VideoTextDemo/>
      <NumberTickerDemo/>
      <IconCloudDemo/><br/>
      <VelocityScroll /><br/>
      <ScrollImages /><br/>
      <LensDemo /> <br/>
      <AndroidDemo/>
      <Marquee />
      <IphoneDemo/>
      <ScrollTriggered />
      <TypingAnimation/>
      <Newsletter/>
    </div>
  );
}

export default App;