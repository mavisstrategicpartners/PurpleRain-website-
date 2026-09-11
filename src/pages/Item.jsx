import { Link, Navigate, useParams } from "react-router-dom";
import { getItem, items } from "../data/catalogue";
import { itemEnquiryHref } from "../data/site";
import ItemCard from "../components/ItemCard.jsx";

export default function Item() {
  const { slug } = useParams();
  const item = getItem(slug);

  if (!item) return <Navigate to="/hire" replace />;

  const related = items.filter((entry) => entry.slug !== item.slug).slice(0, 3);

  return (
    <>
      <section className="wrap item-page">
        <img src={item.image} alt={item.name} />
        <div>
          <p className="eyebrow">{item.category}</p>
          <h1>{item.name}</h1>
          <p style={{ color: "#5a4650", marginBottom: "1.4rem" }}>
            {item.description}
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={itemEnquiryHref(item)}>
              Enquire on WhatsApp
            </a>
            <Link className="btn btn-outline" to="/hire">
              Back to collection
            </Link>
          </div>
        </div>
      </section>
      <section className="wrap featured">
        <div className="section-head">
          <div>
            <p className="eyebrow">More items</p>
            <h2>You may also like</h2>
          </div>
        </div>
        <div className="catalogue-grid">
          {related.map((entry) => (
            <ItemCard key={entry.slug} item={entry} />
          ))}
        </div>
      </section>
    </>
  );
}
