import React from "react";

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12" id="portfolio">
      <h2 className="text-3xl font-bold text-center mb-6">Our Portfolio</h2>
      <p className="text-center text-gray-600 mb-10">
        A glimpse of our past events, designs, and celebrations.
      </p>

      {/* Images */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <img src="/images/portfolio1.jpg" alt="Event 1" className="rounded-lg shadow hover:scale-105 transition" />
        <img src="/images/portfolio2.jpg" alt="Event 2" className="rounded-lg shadow hover:scale-105 transition" />
        <img src="/images/portfolio3.jpg" alt="Event 3" className="rounded-lg shadow hover:scale-105 transition" />
        <img src="/images/portfolio4.jpg" alt="Event 4" className="rounded-lg shadow hover:scale-105 transition" />
        <img src="/images/portfolio5.jpg" alt="Event 5" className="rounded-lg shadow hover:scale-105 transition" />
        <img src="/images/portfolio6.jpg" alt="Event 6" className="rounded-lg shadow hover:scale-105 transition" />
      </div>

      {/* Videos */}
      <h3 className="text-2xl font-semibold text-center mb-6">Event Highlights</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <video
          src="/videos/video1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[500px] object-cover rounded-lg shadow hover:scale-105 transition"
        />
        <video
          src="/videos/video2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[500px] object-cover rounded-lg shadow hover:scale-105 transition"
        />
        <video
          src="/videos/video3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[500px] object-cover rounded-lg shadow hover:scale-105 transition"
        />
      </div>
    </div>
  );
}
