'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Leaf, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cartCount] = useState<number>(3);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md group-hover:shadow-green-300 transition-shadow">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold">
              <span className="text-gradient">Fresca</span>
              <span className="text-gray-900">Market</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/products" className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all">Shop</Link>
            <Link href="/sellers" className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all">Sellers</Link>
            <Link href="/dashboard" className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all">Dashboard</Link>
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all flex items-center gap-1">
                More <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/products" className="relative p-2 text-gray-500 hover:text-green-600 rounded-xl hover:bg-green-50 transition-all">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/sellers" className="px-4 py-2 text-sm font-semibold text-gray-700 border-2 border-gray-200 rounded-xl hover:border-green-400 hover:text-green-600 transition-all">
              Log in
            </Link>
            <Link href="/products" className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 transition-all">
              Start Selling
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-green-50 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-green-100 px-4 py-4 space-y-2">
          <Link href="/products" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all">Shop</Link>
          <Link href="/sellers" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all">Sellers</Link>
          <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all">Dashboard</Link>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <Link href="/sellers" onClick={() => setMenuOpen(false)} className="block text-center px-4 py-3 text-sm font-semibold border-2 border-gray-200 rounded-xl text-gray-700">Log in</Link>
            <Link href="/products" onClick={() => setMenuOpen(false)} className="block text-center px-4 py-3 text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl">Start Selling</Link>
          </div>
        </div>
      )}
    </nav>
  );
}