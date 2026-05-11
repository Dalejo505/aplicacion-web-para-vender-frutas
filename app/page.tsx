'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle2, Star, Zap, ShieldCheck, Truck, BarChart2, Package,
  ChevronDown, ChevronUp, Users, Globe, Clock, Leaf, ShoppingBag, TrendingUp
} from 'lucide-react';
import { testimonials, pricingTiers, faqs, stats, trustBrands, products, categories } from '../lib/data';

export default function HomePage() {
  const [billingAnnual, setBillingAnnual] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<string | null>('f1');
  const [email, setEmail] = useState<string>('');

  return (
    <div className="overflow-x-hidden">
      {/* ① HERO */}
      <section className="hero-bg min-h-screen relative flex items-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-green-300 opacity-20 blob blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-300 opacity-15 blob blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100 opacity-30 rounded-full blur-3xl" />

        {/* Dot pattern */}
        <div className="absolute inset-0 section-pattern opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Farm-to-Doorstep Marketplace</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              Sell Fresh Fruit{' '}
              <span className="text-gradient">Online,</span>
              <br />
              <span className="text-gray-900">The Modern Way</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
              FrescaMarket gives every fruit seller, farmer, and vendor a beautiful online storefront, automated order management, and real-time analytics — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/products" className="btn-primary animate-pulse-glow">
                Start Selling Today <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/products" className="btn-secondary">
                Browse the Market
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['from-green-400 to-emerald-500','from-orange-400 to-amber-500','from-pink-400 to-rose-500','from-blue-400 to-cyan-500'].map((g, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {['SR','MV','CH','JL'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm font-bold text-gray-900 ml-1">4.9</span>
                </div>
                <p className="text-xs text-gray-500">From 3,800+ sellers worldwide</p>
              </div>
            </div>
          </div>

          {/* Hero Visual — Floating Product Cards */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Main mockup card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-green-100 p-6 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-gray-900">Today's Best Sellers</span>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {products.slice(0, 4).map((p) => (
                    <div key={p.id} className="bg-gradient-to-br from-gray-50 to-green-50/50 rounded-2xl p-3 border border-green-100">
                      <div className="text-3xl mb-2">{p.emoji}</div>
                      <p className="text-xs font-bold text-gray-800 leading-tight">{p.name}</p>
                      <p className="text-xs text-green-600 font-bold mt-1">${p.price}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-3 text-white flex items-center justify-between">
                  <span className="text-sm font-bold">Total Revenue Today</span>
                  <span className="text-lg font-black">$1,284.50</span>
                </div>
              </div>

              {/* Floating stat badge 1 */}
              <div className="absolute -top-6 -right-4 bg-white rounded-2xl shadow-lg border border-orange-100 px-4 py-3 animate-bounce-soft">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  <div>
                    <p className="text-xs text-gray-500">Orders this week</p>
                    <p className="text-base font-black text-gray-900">+24 <span className="text-green-500 text-xs">↑ 18%</span></p>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-green-100 px-4 py-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Freshness Score</p>
                    <p className="text-sm font-black text-gray-900">Excellent \\uD83C\\uDF1F</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ② TRUST BAR */}
      <section className="bg-gray-50 border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by leading businesses and farms</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {trustBrands.map((b) => (
              <div key={b.id} className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors group cursor-pointer">
                <span className="text-xl grayscale group-hover:grayscale-0 transition-all">{b.emoji}</span>
                <span className="text-sm font-bold tracking-tight">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ③ FEATURES */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4">Everything You Need</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Built for <span className="text-gradient">Fruit Sellers</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              From your first listing to your thousandth order, FrescaMarket handles every step of your online fruit business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <ShoppingBag className="w-7 h-7" />, color: 'text-green-600 bg-green-100', title: 'Beautiful Storefront', desc: 'Launch a gorgeous, mobile-optimized fruit shop in minutes. No code needed — customize colors, photos, and product descriptions.' },
              { icon: <Package className="w-7 h-7" />, color: 'text-orange-600 bg-orange-100', title: 'Smart Inventory', desc: 'Track stock levels, get low-inventory alerts, and automatically hide out-of-stock items. Perfect for seasonal and perishable produce.' },
              { icon: <Truck className="w-7 h-7" />, color: 'text-blue-600 bg-blue-100', title: 'Delivery Management', desc: 'Configure custom delivery zones, pickup slots, and shipping fees. Customers choose at checkout. You stay in control.' },
              { icon: <BarChart2 className="w-7 h-7" />, color: 'text-purple-600 bg-purple-100', title: 'Real-Time Analytics', desc: 'See your best-selling products, peak order hours, and revenue trends at a glance. Make smarter decisions with live data.' },
              { icon: <ShieldCheck className="w-7 h-7" />, color: 'text-emerald-600 bg-emerald-100', title: 'Secure Payments', desc: 'Accept Stripe, PayPal, or cash-on-delivery. All transactions are encrypted and funds land directly in your bank account.' },
              { icon: <Zap className="w-7 h-7" />, color: 'text-amber-600 bg-amber-100', title: 'Instant Notifications', desc: 'Get real-time alerts for new orders, payment confirmations, and delivery updates via email, SMS, or push notification.' },