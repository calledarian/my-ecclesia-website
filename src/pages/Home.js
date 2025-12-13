import "../CSS/hero.css"; // Import the CSS file for styling
import EventGallery from "./Gallery";
import BannerSwiper from "../components/Header";
// import Classes from "../pages/Classes";
function Home() {
  return (
    <>
    <BannerSwiper />
    <EventGallery />
    </>
  );
}

export default Home;
