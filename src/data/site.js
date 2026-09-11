export const site = {
  name: "PurpleRain",
  legalName: "PurpleRain Events & Hire",
  tagline: "Exclusive events, furniture rentals and décor.",
  city: "Johannesburg",
  region: "Gauteng, South Africa",
  email: "enquiries@purplerainhire.co.za",
  phoneDisplay: "082 429 7055",
  phoneAlt: "071 307 7125",
  whatsappNumber: "27824297055",
  hours: "Monday – Saturday, by appointment",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Hire", to: "/hire" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export function whatsappHref(message) {
  const text = encodeURIComponent(
    message ||
      "Hello PurpleRain, I would like to enquire about hiring items for an event."
  );
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export function itemEnquiryHref(item) {
  return whatsappHref(
    `Hello PurpleRain, I am interested in hiring the ${item.name}. Please share availability and a quote.`
  );
}
