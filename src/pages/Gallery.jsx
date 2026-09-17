import { Link } from "react-router-dom";
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
            <video
              key={src}
              src={src}
              muted
              defaultMuted
              playsInline
              controls
              preload="metadata"
              onLoadedMetadata={(event) => {
                event.currentTarget.muted = true;
                event.currentTarget.defaultMuted = true;
              }}
            />
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
