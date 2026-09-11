import { useMemo, useState } from "react";
import ItemCard from "../components/ItemCard.jsx";
import { categories, itemsByCategory } from "../data/catalogue";

export default function Hire() {
  const [category, setCategory] = useState("all");
  const list = useMemo(() => itemsByCategory(category), [category]);

  return (
    <>
      <section className="wrap page-hero">
        <p className="eyebrow">Hire</p>
        <h1>Items for hire</h1>
        <p>
          Dining, lounge, cocktail, backdrops and outdoor items. Open a photo
          for details, then send an enquiry with dates and quantities.
        </p>
      </section>
      <section className="wrap">
        <div className="filters" role="tablist" aria-label="Product categories">
          {categories.map((entry) => (
            <button
              key={entry.id}
              className={`filter ${category === entry.id ? "active" : ""}`}
              type="button"
              onClick={() => setCategory(entry.id)}
            >
              {entry.label}
            </button>
          ))}
        </div>
        <div className="catalogue-grid">
          {list.map((item) => (
            <ItemCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
