import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Services from "./Services";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Tips from "./Tips";

function Homepage(){

    const { loginWithRedirect , logout,  user, isAuthenticated } = useAuth0();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
    <div className="font-sans text-gray-900">
      {/* Modern Hero */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: "url('hero_image2.jpg')" }}
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-3xl text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Bring Your Business Online
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Unlock new opportunities and reach a broader audience with Solicio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() =>
                  loginWithRedirect({
                    appState: { returnTo: location.pathname },
                  })
                }
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Sign Up
              </button>
            )}
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-white text-gray-900 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>   

      {/* Tagline */}
      <div className="py-16 flex justify-around items-center mt-9">
        <img
          src="https://gorgeous-gumption-a148f7.netlify.app/pakshi.jpeg"
          alt="Tagline"
          className="mt-6 w-1/4 border-2 rounded-xl shadow-lg shadow-emerald-50 hover:scale-105 transition duration-500"
        />
        <div className="flex flex-col gap-4 p-5 justify-center items-center">
          <h2 className="text-6xl font-semibold tracking-wide">
            छोटे कदम, बड़ी उड़ान
          </h2>
          <p className="mt-4 text-2xl mt-8 text-gray-500 italic">
            (Chhote Kadam, Badi Udaan) - Small Steps, Big Flight
          </p>
        </div>
      </div>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <h3 className="text-4xl font-bold text-center mb-12">
          Success Stories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {[
            {
              name: "Maria Lopez",
              text: "Thanks to MSME Connect, my business has grown exponentially!",
              image: "story1.jpg",
            },
            {
              name: "Gurpeerat Singh",
              text: "Our reach has expanded far beyond our expectations.",
              image: "story2.jpg",
            },
            {
              name: "Ahmed Khan",
              text: "MSME Connect made digital transformation seamless.",
              image: "story3.jpg",
            },
          ].map((story, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-500 overflow-hidden"
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="mb-3 text-gray-600 italic">"{story.text}"</p>
                <p className="font-semibold text-lg">{story.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" class="py-16 sm:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header class="max-w-2xl">
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">How it works</h2>
            <p class="mt-3 text-slate-600">Three simple steps to get value on day one.</p>
          </header>
          <ol class="mt-10 grid gap-6 sm:grid-cols-3">
            <li class="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <span class="text-xs font-bold text-ink">STEP 1</span>
              <h3 class="mt-2 text-lg font-bold">Create your profile</h3>
              <p class="mt-2 text-sm text-slate-600">Tell us your business type, city, and current challenges.</p>
            </li>
            <li class="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <span class="text-xs font-bold text-ink">STEP 2</span>
              <h3 class="mt-2 text-lg font-bold">Pick your tools</h3>
              <p class="mt-2 text-sm text-slate-600">Enable modules like Loan Manager, GST, or Vendor Finder.</p>
            </li>
            <li class="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <span class="text-xs font-bold text-ink">STEP 3</span>
              <h3 class="mt-2 text-lg font-bold">Act &amp; grow</h3>
              <p class="mt-2 text-sm text-slate-600">Get reminders, insights, and local connections to boost profits.</p>
            </li>
          </ol>
        </div>
      </section>

      <section class="py-16 sm:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid gap-6 sm:grid-cols-3">
            <div class="rounded-2xl border border-slate-200 p-6 text-center">
              <div class="text-3xl font-extrabold text-ink">10k+</div>
              <p class="text-sm text-slate-600">MSME owners reached</p>
            </div>
            <div class="rounded-2xl border border-slate-200 p-6 text-center">
              <div class="text-3xl font-extrabold text-ink">7%</div>
              <p class="text-sm text-slate-600">Avg. purchase cost saved</p>
            </div>
            <div class="rounded-2xl border border-slate-200 p-6 text-center">
              <div class="text-3xl font-extrabold text-ink">₹12L</div>
              <p class="text-sm text-slate-600">Late fees avoided</p>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <Tips />
    </div>
  );
}

export default Homepage;