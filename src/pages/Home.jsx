import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard.jsx";
import { eventTypes, featuredItems } from "../data/catalogue";

export default function Home() {
  const preview = featuredItems.slice(0, 6);

  return (
    <>
      <section className="hero">
        <img
          src="/images/photo-18.jpeg"
          alt="Bright chrome banquet hall styled by PurpleRain"
        />
        <div className="hero-copy">
          <p className="eyebrow">PurpleRain Events & Hire</p>
          <h1>Exclusive events, furniture rentals and décor.</h1>
          <p>
            We specialise in exclusive events, furniture rentals and exclusive
            décor. Browse what we hire, then enquire on WhatsApp.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-gold" to="/hire">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap intro">
        <div className="intro-copy">
          <p className="eyebrow">About us</p>
          <h2>Furniture hire and décor for your event.</h2>
          <p>
            PurpleRain Events & Hire provides furniture rentals, exclusive décor
            and event items for weddings, birthdays, corporate events and
            private functions in Pretoria and across Gauteng.
          </p>
          <p>
            Look through the photos, choose what you need, then send an enquiry.
            We confirm availability and delivery — there is no online checkout.
          </p>
          <Link className="btn btn-solid" to="/about">
            About PurpleRain
          </Link>
        </div>
        <div className="intro-frame">
          <img
            src="/images/photo-11.jpeg"
            alt="Bright draped long table under white canvas"
          />
        </div>
      </section>

      <section className="wrap featured">
        <div className="section-head">
          <div>
            <p className="eyebrow">For hire</p>
            <h2>Featured items</h2>
          </div>
          <Link className="btn btn-outline" to="/hire">
            View all items
          </Link>
        </div>
        <div className="catalogue-grid" style={{ paddingBottom: 0 }}>
          {featuredItems.map((item) => (
            <ItemCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="events">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">What we cater for</p>
              <h2>Events</h2>
            </div>
          </div>
          <div className="event-row">
            {eventTypes.map((event) => (
              <article className="event-card" key={event.name}>
                <img src={event.image} alt={event.name} />
                <div>
                  <h3>{event.name}</h3>
                  <p>{event.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap gallery-preview">
        <div className="section-head">
          <div>
            <p className="eyebrow">Our work</p>
            <h2>Gallery</h2>
          </div>
          <Link className="btn btn-outline" to="/gallery">
            View Gallery
          </Link>
        </div>
        <div className="mosaic">
          {preview.map((image) => (
            <Link to={`/hire/${image.slug}`} key={image.slug}>
              <img src={image.image} alt={image.name} />
            </Link>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <p className="eyebrow">Get a quote</p>
          <h2>Your satisfaction is our priority.</h2>
          <p>
            Send the event date, guest count and the items you want. We will
            come back with availability and a quote.
          </p>
          <Link className="btn btn-light" to="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
