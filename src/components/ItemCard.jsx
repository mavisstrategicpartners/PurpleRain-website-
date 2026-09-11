import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <article className="item-card">
      <img src={item.image} alt={item.name} />
      <div className="item-body">
        <h3>{item.name}</h3>
        <p>{item.short}</p>
        <div className="item-actions">
          <Link className="btn btn-sm btn-outline" to={`/hire/${item.slug}`}>
            View Item
          </Link>
        </div>
      </div>
    </article>
  );
}
