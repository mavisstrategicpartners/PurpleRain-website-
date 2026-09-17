import { Link } from "react-router-dom";
import SilentVideo from "../components/SilentVideo.jsx";
import { galleryImages, galleryVideos } from "../data/catalogue";

export default function Gallery() {
  return (
    <>
      <section className="wrap page-hero">
        <p className="eyebrow">Gallery</p>
        <h1>Our events</h1>
        <p>
          Photos and videos from PurpleRain Events & Hire. Tap a picture to see
          the matching hire item.
        </p>
      </section>
      <section className="wrap">
        <div className="gallery-videos">
          {galleryVideos.map((src) => (
            <SilentVideo key={src} src={src} />
          ))}
        </div>
        <div className="gallery-page">
          {galleryImages.map((image) => (
            <Link to={`/hire/${image.slug}`} key={image.slug}>
              <img src={image.src} alt={image.alt} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
