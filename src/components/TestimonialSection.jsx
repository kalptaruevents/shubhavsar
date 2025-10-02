import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Riya Sharma", text: "Shubh Avsar Events made our wedding absolutely unforgettable! Highly recommended." },
  { name: "Ankit Patel", text: "Professional team, beautiful decorations, and perfect planning!" },
  { name: "Meera Joshi", text: "From start to finish, everything was flawless. Loved their creative ideas!" },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="w-full py-20 px-6 md:px-20 bg-gradient-to-r from-pink-50 via-yellow-100 to-yellow-200 text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-12 text-pink-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        What Clients Say
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <p className="text-gray-700 mb-4">"{t.text}"</p>
            <p className="font-bold text-pink-600">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
