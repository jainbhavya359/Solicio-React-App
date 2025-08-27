import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function ContactUs() {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [subject , setSubject] = useState("");
  const [textArea , setTextArea] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect( () => {
    const fetchData = async () => {
      try{
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/questions`);
        if(!res.ok){
            throw new Error("Network issue");
        }else{
            const json = await res.json();
            setData(json);
        }
      }catch (err){
        console.log(err);
        setError(err);
      }finally{
        setLoading(false);
      }
    }

    fetchData();

    window.scrollTo(0,0);
  }, []);

  console.log(data);

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message: textArea })
      });

      if (response.ok) {
        alert('Message sent!');
        setName('');
        setEmail('');
        setSubject('');
        setTextArea('');
      } else {
        alert('Failed to send message');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Error occurred');
    }
  }

  return (
    <div className="font-sans text-gray-800 mt-9">

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={textArea}
                onChange={(e) => setTextArea(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                onClick={handleClick}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p>Email: <a href="mailto:contact@msmeconnect.com" className="text-blue-600 underline">contact@msmeconnect.com</a></p>
            <p>Phone: +1 234 567 890</p>

            <div className="flex space-x-4 mt-4">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>

            <h3 className="mt-6 mb-2 font-semibold">Our Location</h3>
            <img
              src="/map.png" // Replace with your actual image
              alt="Our Location"
              className="w-full rounded"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-16 sm:py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header class="max-w-2xl">
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">FAQs</h2>
            <p class="mt-3 text-slate-600">Click to expand answers.</p>
          </header>
          <div class="mt-8 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            <details class="group p-6" open="">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <h3 class="font-semibold">Is Solicio free to use?</h3>
                <span class="ml-4 h-6 w-6 rounded-full border border-slate-300 flex justify-center items-center pb-1">+</span>
              </summary>
              <p class="mt-3 text-sm text-slate-600">Yes, core features are free. Advanced modules like automated GST or credit insights may be paid later.</p>
            </details>
            <details class="group p-6">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <h3 class="font-semibold">Do you support Hindi?</h3>
                <span class="ml-4 h-6 w-6 rounded-full border border-slate-300 flex justify-center items-center pb-1">+</span>
              </summary>
              <p class="mt-3 text-sm text-slate-600">Yes. Key screens and guides are available in Hindi and English.</p>
            </details>
            <details class="group p-6">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <h3 class="font-semibold">How do you handle data privacy?</h3>
                <span class="ml-4 h-6 w-6 rounded-full border border-slate-300 flex justify-center items-center pb-1">+</span>
              </summary>
              <p class="mt-3 text-sm text-slate-600">We follow best practices and never sell your data. You can export or delete your data anytime.</p>
            </details>
            <details class="group p-6">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <h3 class="font-semibold">Can I find local wholesalers?</h3>
                <span class="ml-4 h-6 w-6 rounded-full border border-slate-300 flex justify-center items-center pb-1">+</span>
              </summary>
              <p class="mt-3 text-sm text-slate-600">Yes. Use the Local Wholesalers Network to discover suppliers near you and compare offers.</p>
            </details>
            {loading ? <div className="flex justify-center items-center py-5">
                <div className="w-6 h-6 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                </div> : error ? <p>Error Occured</p> : 
              data.map((data) => {
                if(data.answer){
                  return (
                    <details class="group p-6">
                      <summary class="flex cursor-pointer list-none items-center justify-between">
                        <h3 class="font-semibold">{data.message}</h3>
                        <span class="ml-4 h-6 w-6 rounded-full border border-slate-300 flex justify-center items-center pb-1">+</span>
                      </summary>
                      <p className="pt-3 text-sm">User: {data.name}</p>
                      <p class="mt-3 text-sm text-slate-600">{data.answer}</p>
                    </details>
                  );
                }
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}
