import React from "react";
import { Link } from "react-router-dom";

function Footer (){
    const year = new Date().getFullYear();

    return (
        <footer className="py-6 px-4 text-sm bg-black text-white flex flex-col gap-4 justify-between items-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm">
                <div>
                <div class="flex items-center gap-2">
                    <span class="grid h-9 w-9 place-items-center rounded-xl bg-ink text-white font-black">S</span>
                    <span class="font-extrabold">Solicio</span>
                </div>
                <p class="mt-3 text-slate-600">Empowering small businesses — छोटे व्यवसायों को सशक्त बनाना.</p>
                </div>
                <div>
                <h4 class="font-semibold mb-2">Product</h4>
                <ul class="space-y-1 text-slate-600">
                    <li><Link to="/services" className="hover:text-ink">Services</Link></li>
                    <li><a href="#process" class="hover:text-ink">How it works</a></li>
                    <li><Link to="/contact" className="hover:text-ink">FAQs</Link></li>
                </ul>
                </div>
                <div>
                <h4 class="font-semibold mb-2">Company</h4>
                <ul class="space-y-1 text-slate-600">
                    <li><Link to="/about" className="hover:text-ink">About</Link></li>
                    <li><Link to="/about" className="hover:text-ink">Privacy</Link></li>
                    <li><Link to="/about" className="hover:text-ink">Terms</Link></li>
                </ul>
                </div>
                <div>
                <h4 class="font-semibold mb-2">Contact</h4>
                <ul class="space-y-1 text-slate-600">
                    <li>Email: hello@solicio.in</li>
                    <li>Support: +91‑00000 00000</li>
                    <li><Link to="/profile" className="hover:text-ink">Create Account</Link></li>
                </ul>
                </div>
            </div>
            <p>© {year} MSME Connect. All rights reserved.</p>
        </footer>
    );
}

export default Footer;