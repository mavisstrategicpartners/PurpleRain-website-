import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function About() {
  return (
    <>
      <section className="wrap page-hero">
        <p className="eyebrow">About</p>
        <h1>PurpleRain Events & Hire</h1>
        <p>
          We specialise in exclusive events, furniture rentals and exclusive
          décor. From lounges and dining sets to backdrops and outdoor pieces,
          we help you put the event together.
        </p>
      </section>
      <section className="wrap split">
        <img
          src="/images/photo-18.jpeg"
          alt="Banquet hall furniture and décor by PurpleRain"
        />
        <div>
          <h2 style={{ fontSize: "2.8rem", margin: "0 0 1rem" }}>
            Serving events across Gauteng.
          </h2>
          <p style={{ marginBottom: "1rem", color: "#4b4b4b" }}>
            We are based at {site.address}, {site.suburb}, {site.city}. We
            deliver furniture and décor to homes, gardens, halls, marquees and
            venues. The photos on this website are from real PurpleRain events.
          </p>
          <p style={{ marginBottom: "1.4rem", color: "#4b4b4b" }}>
            There is no online shop. Browse the items, then send an enquiry.
            We arrange delivery once we have your date and location.
          </p>
          <p style={{ marginBottom: "1.4rem", color: "#4b4b4b" }}>
            {site.phoneDisplay} · {site.phoneAlt}
          </p>
          <div className="hero-actions">
            <Link className="btn btn-solid" to="/hire">
              View items
            </Link>
            <Link className="btn btn-outline" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
