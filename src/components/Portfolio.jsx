import React from "react";

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12" id="portfolio">
      <h2 className="text-3xl font-bold text-center mb-6">Our Portfolio</h2>
      <p className="text-center text-gray-600 mb-10">
        A glimpse of our past events, designs, and celebrations.
      </p>

      {/* Images Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <img src="/images/portfolio1.jpg" alt="Event 1" className="rounded-lg shadow hover:scale-105 transition" />
        <img src="/images/portfolio2.jpg" alt="Event 2" className="rounded-lg shadow hover:scale-105 transition" />
        <img src="/images/portfolio3.jpg" alt="Event 3" className="rounded-lg shadow hover:scale-105 transition" />
        <img src="/images/portfolio4.jpg" alt="Event 4" className="rounded-lg shadow hover:scale-105 transition" />
        <img src="/images/portfolio5.jpg" alt="Event 5" className="rounded-lg shadow hover:scale-105 transition" />
        <img src="/images/portfolio6.jpg" alt="Event 6" className="rounded-lg shadow hover:scale-105 transition" />
      </div>

      {/* Instagram Reels */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="aspect-video rounded-lg shadow overflow-hidden">
          <iframe
            src="https://www.instagram.com/reel/DOk_eoCjQKo/embed?autoplay=1&mute=1"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Portfolio Reel 1"
          ></iframe>
        </div>

        <div className="aspect-video rounded-lg shadow overflow-hidden">
          <iframe
            src="https://www.instagram.com/reel/DKemkAvz7zF/embed?autoplay=1&mute=1"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Portfolio Reel 2"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
