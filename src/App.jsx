import React, { useMemo, useState } from "react";
import { company, products, stats, strengths } from "./siteData";

const SectionHeading = ({ eyebrow, title, text, light = false }) => (
  <div className={`section-heading ${light ? "text-white" : ""}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);

function App() {
  const [form, setForm] = useState({ name: "", phone: "", product: "", message: "" });

  const productOptions = useMemo(() => products.map((item) => item.title), []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    if (company.whatsapp.includes("X")) {
      alert("Please update the WhatsApp number in src/siteData.js before using the enquiry form.");
      return;
    }

    const message = [
      `Hello ${company.name},`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.product ? `Product: ${form.product}` : "",
      form.message ? `Requirement: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top site-navbar">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
              {/* <span className="brand-mark">V</span> */}
              <span>
                {/* <strong>{company.shortName}</strong>
                <small>Metals & Engineering</small> */}
                <img src="/images/veddhyaa.png" height={"100px"} alt="" />
              </span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                {[
                  ["Home", "home"],
                  ["About", "about"],
                  ["Products", "products"],
                  ["Why Us", "why-us"],
                  ["Contact", "contact"],
                ].map(([label, id]) => (
                  <li className="nav-item" key={id}>
                    <a className="nav-link" href={`#${id}`}>
                      {label}
                    </a>
                  </li>
                ))}
                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                  <a className="btn btn-brand btn-sm px-3" href="#contact">
                    Get Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container position-relative hero-content">
            <div className="row align-items-center min-vh-100 py-5">
              <div className="col-lg-8 col-xl-7 pt-5">
                <span className="hero-kicker">METALS • ENGINEERING • INDUSTRIAL SUPPLY</span>
                <h1>{company.tagline}</h1>
                <p className="hero-lead">{company.heroText}</p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a href="#products" className="btn btn-brand btn-lg">
                    Explore Products <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                  <a href="#contact" className="btn btn-outline-light btn-lg">
                    Send Enquiry
                  </a>
                </div>
                <div className="hero-contact-row mt-5">
                  <a href={`tel:${company.phoneLink}`}>
                    <i className="bi bi-telephone-fill"></i> {company.phoneDisplay}
                  </a>
                  <a href={company.indiaMartCatalog} target="_blank" rel="noreferrer">
                    <i className="bi bi-box-arrow-up-right"></i> IndiaMART Catalog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container">
            <div className="row g-0">
              {stats.map((item) => (
                <div className="col-6 col-lg-3" key={item.label}>
                  <div className="stat-item">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-space bg-white">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-wrap">
                  <img src="/images/about.webp" alt="Veddhyaa Metals and Engineering" className="img-fluid" />
                  <div className="experience-card">
                    <i className="bi bi-buildings"></i>
                    <div>
                      <strong>Industrial</strong>
                      <span>Business Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <SectionHeading
                  eyebrow="ABOUT US"
                  title="A professional digital presence for Veddhyaa Metals & Engineering"
                  text="Use this section for the exact company introduction from your IndiaMART profile. The layout is already production-ready; only the verified business copy needs to be replaced."
                />
                <p className="text-secondary mb-4">
                  Present your company capabilities, product range, quality approach and service strengths in a concise way that helps industrial buyers understand the business quickly.
                </p>
                <div className="row g-3 mb-4">
                  {[
                    "Industrial product enquiries",
                    "Clear product presentation",
                    "Responsive customer support",
                    "Direct quotation assistance",
                  ].map((item) => (
                    <div className="col-sm-6" key={item}>
                      <div className="check-line">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <a href={company.indiaMartProfile} target="_blank" rel="noreferrer" className="text-link">
                  View IndiaMART profile <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section-space bg-soft">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-5">
              <SectionHeading
                eyebrow="OUR PRODUCTS"
                title="Products & Services"
                text="Replace these six sample cards with the exact categories from the IndiaMART products page."
              />
              <a href={company.indiaMartCatalog} target="_blank" rel="noreferrer" className="btn btn-outline-brand">
                View Full Catalog <i className="bi bi-arrow-up-right ms-2"></i>
              </a>
            </div>

            <div className="row g-4">
              {products.map((product, index) => (
                <div className="col-md-6 col-lg-4" key={product.title}>
                  <article className="product-card h-100">
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                      <span className="product-number">0{index + 1}</span>
                    </div>
                    <div className="product-body">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <a href="#contact" className="product-link">
                        Request Quote <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="section-space dark-section">
          <div className="container">
            <div className="row align-items-end mb-5">
              <div className="col-lg-7">
                <SectionHeading
                  light
                  eyebrow="WHY CHOOSE US"
                  title="Built to inspire confidence before the first enquiry"
                  text="A clean industrial website should communicate credibility, responsiveness and product clarity without unnecessary visual clutter."
                />
              </div>
            </div>

            <div className="row g-4">
              {strengths.map((item) => (
                <div className="col-sm-6 col-lg-3" key={item.title}>
                  <div className="strength-card h-100">
                    <div className="strength-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <div className="cta-inner">
              <div>
                <span className="eyebrow">NEED A QUOTATION?</span>
                <h2>Share your product requirement with our team.</h2>
              </div>
              <a href="#contact" className="btn btn-light btn-lg">
                Enquire Now <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section-space bg-white">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5">
                <SectionHeading
                  eyebrow="CONTACT US"
                  title="Let’s discuss your requirement"
                  text="Update the contact details in src/siteData.js once and they will automatically reflect across the website."
                />

                <div className="contact-list mt-4">
                  <div className="contact-item">
                    <span><i className="bi bi-telephone"></i></span>
                    <div>
                      <small>Call us</small>
                      <a href={`tel:${company.phoneLink}`}>{company.phoneDisplay}</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span><i className="bi bi-envelope"></i></span>
                    <div>
                      <small>Email</small>
                      <a href={`mailto:${company.email}`}>{company.email}</a>
                    </div>
                  </div>
                  <div className="contact-item align-items-start">
                    <span><i className="bi bi-geo-alt"></i></span>
                    <div>
                      <small>Address</small>
                      <p>{company.address}</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span><i className="bi bi-clock"></i></span>
                    <div>
                      <small>Working hours</small>
                      <p>{company.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="enquiry-card">
                  <h3>Request a Quote</h3>
                  <p>Submit the form to continue the enquiry on WhatsApp.</p>
                  <form onSubmit={sendWhatsApp} className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        required
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Product / Service</label>
                      <select className="form-select" name="product" value={form.product} onChange={onChange}>
                        <option value="">Select a product</option>
                        {productOptions.map((item) => (
                          <option value={item} key={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Requirement</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        placeholder="Tell us what you need..."
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-brand btn-lg w-100" type="submit">
                        Send Enquiry on WhatsApp <i className="bi bi-whatsapp ms-2"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="footer-brand d-flex align-items-center gap-2 mb-3">
                                <img src="/images/veddhyaa.png" height={"100px"} alt="" />

              </div>
              <p>
                A clean one-page business website for product discovery, company credibility and direct enquiries.
              </p>
            </div>
            <div className="col-lg-4">
              <h6>Quick Links</h6>
              <div className="footer-links">
                <a href="#about">About</a>
                <a href="#products">Products</a>
                <a href="#why-us">Why Us</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div className="col-lg-3">
              <h6>Catalog</h6>
              <a href={company.indiaMartCatalog} target="_blank" rel="noreferrer" className="footer-external">
                IndiaMART <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
            <span>Built with React + Bootstrap</span>
          </div>
        </div>
      </footer>

      <a className="whatsapp-float" href="#contact" aria-label="Enquire on WhatsApp">
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}

export default App;
