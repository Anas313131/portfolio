import VelocityScroll from "./components/VelocityScroll";
import ScrollImages from "./components/ScrollImages";
import AndroidDemo from "./components/AndroidDemo";
import LensDemo from "./components/LensDemo";
import IconCloudDemo from "./components/IconCloudDemo.jsx";
import Nav from "./components/Nav.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <div>
      <Nav/>
      <Hero /><br/>
      <IconCloudDemo/><br/>
      <VelocityScroll />
      <ScrollImages />
      <LensDemo /> <br/><br/>
      <AndroidDemo/>
      <Newsletter/>
    </div>
  );
}

export default App;