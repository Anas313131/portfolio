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

function App() {
  return (
    <div>
      <Nav/>
      <Hero /><br/>
      <VideoTextDemo />
      <IconCloudDemo/><br/>
      <VelocityScroll />
      <ScrollImages />
      <LensDemo /> <br/>
      <AndroidDemo/>
      <Marquee />
      <IphoneDemo/>
      <Newsletter/>
    </div>
  );
}

export default App;