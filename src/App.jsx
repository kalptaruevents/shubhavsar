import React from "react";
import Navbar from "./components/Navbar";
import HeroThree from "./components/HeroThree";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import TestimonialSection from "./components/TestimonialSection"; // We'll create this

export default function App() {
  return (
     <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-pink-100 via-yellow-50 to-yellow-200 font-poppins relative">
      <Navbar />

      <div id="home">
        <HeroThree />
      </div>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="testimonials">
        <TestimonialSection />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
