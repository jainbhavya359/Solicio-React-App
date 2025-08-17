import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Tips from "./Tips";

export default function AboutUs() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  return (
    <div className="font-sans text-gray-800 mt-9 pt-4">

      {/* Mission and Vision */}
      <section className="px-6 py-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Mission and Vision</h2>
        <p>
          At MSME Connect, our mission is to empower small and medium enterprises by providing them with accessible resources and connections. Our vision is to create a thriving ecosystem where local businesses can flourish and contribute significantly to the economy.
        </p>
      </section>

      {/* History */}
      <section className="px-6 py-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our History</h2>
        <p>
          Founded in 2010, MSME Connect started as a small initiative to bridge the gap between local businesses and potential markets. Over the years, we have grown into a platform that not only connects businesses but also provides them with the tools and insights needed for sustainable growth.
        </p>
      </section>

      {/* Meet Our Team */}
      <section className="px-6 py-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { name: "Alex Johnson", role: "CEO", img: "/team1.jpg" },
            { name: "Maria Gonzalez", role: "COO", img: "/team2.jpg" },
            { name: "Samuel Lee", role: "CTO", img: "/team3.jpg" },
          ].map((member, i) => (
            <div key={i}>
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-2 object-cover"
              />
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 py-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
        <p>
          MSME Connect has helped over 500 local businesses increase their visibility and grow their customer base. By fostering partnerships and providing valuable insights, we have made a significant impact on the local economy, driving growth and innovation.
        </p>
      </section>

      <Tips />
    </div>
      
  );
}
