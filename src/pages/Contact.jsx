import { useState } from "react";
import { site, whatsappHref } from "../data/site";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    event: "Wedding",
    date: "",
    notes: "",
  });

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const message = [
      `Hello PurpleRain, my name is ${form.name || "a guest"}.`,
      `Event type: ${form.event}.`,
      form.date ? `Date: ${form.date}.` : null,
      form.notes ? `Details: ${form.notes}` : null,
      "Please share availability and a hire quote.",
    ]
      .filter(Boolean)
      .join(" ");
    window.location.href = whatsappHref(message);
  }

  return (
    <>
      <section className="wrap page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Enquire for your date.</h1>
        <p>
          Message us on WhatsApp with the event type and the items you need. We
          will come back to you with availability.
        </p>
      </section>
      <section className="wrap contact-grid">
        <aside className="contact-card">
          <p className="eyebrow">Contact</p>
          <h2 style={{ fontSize: "2.4rem", margin: "0.6rem 0 1rem" }}>
            PurpleRain
          </h2>
          <p>
            {site.address}
            <br />
            {site.suburb}
            <br />
            {site.city}
            <br />
            {site.region}
          </p>
          <p style={{ marginTop: "1rem" }}>
            {site.phoneDisplay}
            <br />
            {site.phoneAlt}
          </p>
          <p style={{ marginTop: "1rem" }}>{site.hours}</p>
        </aside>
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={update} required />
          <label htmlFor="event">Event type</label>
          <select id="event" name="event" value={form.event} onChange={update}>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Corporate</option>
            <option>Private function</option>
            <option>Celebration</option>
          </select>
          <label htmlFor="date">Event date</label>
          <input id="date" name="date" type="date" value={form.date} onChange={update} />
          <label htmlFor="notes">Pieces or notes</label>
          <textarea id="notes" name="notes" value={form.notes} onChange={update} />
          <button className="btn btn-solid" type="submit">
            Continue on WhatsApp
          </button>
        </form>
      </section>
    </>
  );
}
