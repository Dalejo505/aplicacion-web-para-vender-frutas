import Link from 'next/link';
import { Leaf, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold">
                <span className="text-green-400">Fresca</span>
                <span className="text-white">Market</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The all-in-one platform for fruit sellers to build, launch, and grow their online store. Farm fresh, digitally delivered.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Platform</h4>
            <ul className="space-y-3">
              {['Shop All Fruits', 'Meet the Sellers', 'Seller Dashboard', 'Wholesale Pricing', 'API Access'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                hello@frescarmarket.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                +1 (800) 555-FRUIT
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                123 Orchard Lane, San Jose, CA 95101
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; 2024 FrescaMarket Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-green-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}