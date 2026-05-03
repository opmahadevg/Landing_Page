import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Factory, Globe, MessageSquare, PackageSearch, ShieldCheck, Truck, ArrowUpRight, Zap, Settings2, Star, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <img src="/logo.png" alt="Proquoment" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight">Proquoment<span className="text-primary">.</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a>
            <Link href="/suppliers" className="hover:text-primary transition-colors">For Suppliers</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-semibold" onClick={() => window.open('https://buyer.proquoment.in', '_blank')}>Sign in</Button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-5" onClick={() => window.open('https://buyer.proquoment.in', '_blank')}>
              Sign up &amp; Start Sourcing
            </Button>
          </div>
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">How it works</a>
                <Link href="/suppliers" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">For Suppliers</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">Contact</Link>
                <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
                  <Button variant="outline" className="w-full font-semibold rounded-lg" onClick={() => { setMobileOpen(false); window.open('https://buyer.proquoment.in', '_blank'); }}>Sign in</Button>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg" onClick={() => { setMobileOpen(false); window.open('https://buyer.proquoment.in', '_blank'); }}>Sign up &amp; Start Sourcing</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-2xl text-center lg:text-left">
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs sm:text-sm font-semibold tracking-wide mb-6 sm:mb-8 border border-primary/10">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Industrial Supply Chain Intelligence
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] font-bold tracking-tight text-gray-900 mb-5 sm:mb-6">
                Global Product Sourcing.<br />
                <span className="text-primary">Automated.</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-lg font-medium mx-auto lg:mx-0">
                Lower unit costs. Fewer tariffs. Premium factories. None of the work.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold" onClick={() => window.open('https://buyer.proquoment.in', '_blank')}>
                  Sign up &amp; Start Sourcing
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-xl px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold border-gray-200 hover:bg-gray-50">
                    Book a call
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Right: UI Mockup — hidden on mobile */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              {/* Glow backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-[2.5rem] blur-3xl"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100/80 flex flex-col" style={{ background: 'linear-gradient(145deg, #0a0f2e 0%, #000EEF 100%)' }}>
                {/* App Header Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold leading-none">Proquoment Copilot</p>
                      <p className="text-white/40 text-[10px] mt-0.5">Spec Analysis Mode</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-[10px] text-white/50 font-medium">Live</span>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex flex-col gap-4 px-5 pt-5 pb-3">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[80%]">
                      <p className="text-white/90 text-xs leading-relaxed">Men's black puffed jackets, qty 200, ship to New York by Q3</p>
                    </div>
                  </div>

                  {/* AI message */}
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                      <Zap className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-white/10 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-white/85 text-xs leading-relaxed">
                        Got it — 200 puffed jackets, black. Do you want 700-fill goose down or a synthetic fill? Synthetic saves ~18% per unit with similar warmth for the NYC climate.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spec Card */}
                <div className="mx-5 mb-5 mt-2 rounded-xl overflow-hidden border border-white/10">
                  {/* Card Header */}
                  <div className="bg-white/10 px-4 py-3 flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Settings2 className="w-3.5 h-3.5 text-white/60" />
                      <span className="text-white text-xs font-semibold">Product Specifications</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-400/20 border border-green-400/30 rounded-full px-2.5 py-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span className="text-green-300 text-[10px] font-semibold">Verified</span>
                    </div>
                  </div>

                  {/* Spec Rows */}
                  <div className="bg-white/5 divide-y divide-white/8">
                    {[
                      { label: 'Primary Material', value: 'Gore-Tex Pro', verified: true },
                      { label: 'Coating', value: 'DWR Finish', verified: false },
                      { label: 'Seam Type', value: 'Heat Tape', verified: false },
                      { label: 'Fill Type', value: 'Synthetic 650-fill', verified: false },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between px-4 py-2.5">
                        <span className="text-white/45 text-xs">{row.label}</span>
                        <span className="text-white/90 text-xs font-medium flex items-center gap-1.5">
                          {row.value}
                          {row.verified && <CheckCircle2 className="w-3 h-3 text-green-400" />}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div className="bg-primary/60 border-t border-white/10 px-4 py-2.5 flex items-center justify-between">
                    <span className="text-white/60 text-[10px]">Ready to match with 12 verified factories</span>
                    <div className="flex items-center gap-1 text-white text-[10px] font-semibold">
                      Find Suppliers <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 px-3.5 py-2.5 flex items-center gap-2.5">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-none">12 suppliers matched</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Avg. response: 6h</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Trust Strip */}
      <section className="py-8 sm:py-10 border-y border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400">
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">Work with the suppliers behind</span>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 grayscale opacity-60">
            <span className="font-bold text-xl font-serif">UNIQLO</span>
            <span className="font-black text-2xl tracking-tighter">adidas</span>
            <span className="font-bold text-2xl tracking-widest">TATA</span>
            <span className="font-bold text-xl tracking-tight">Reliance</span>
            <span className="font-bold text-xl">ZARA</span>
          </div>
        </div>
      </section>
      {/* How it works */}
      <section id="how-it-works" className="py-16 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">How it works: End-to-end sourcing</h2>
            <p className="text-base sm:text-xl text-gray-600">Add your product details and let Proquoment handle the complexity.</p>
          </div>

          <div className="space-y-16 sm:space-y-32">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Step 1 UI Mockup */}
              <div className="order-2 md:order-1 relative">
                {/* Glow backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-[2.5rem] blur-3xl pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 flex flex-col" style={{ background: 'linear-gradient(145deg, #0a0f2e 0%, #000EEF 100%)' }}>

                  {/* Header bar */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                        <PackageSearch className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold leading-none">New Sourcing Request</p>
                        <p className="text-white/40 text-[10px] mt-0.5">AI Spec Builder</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] text-white/50 font-medium">AI ready</span>
                    </div>
                  </div>

                  {/* Input area */}
                  <div className="px-5 pt-5 pb-3">
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 mb-1">
                      <p className="text-[10px] text-white/35 font-medium uppercase tracking-widest mb-2">Describe your product</p>
                      <p className="text-white/85 text-xs leading-relaxed">
                        Men's black puffed jacket, 200 units, sizes S–XL, synthetic fill, DWR coating. Ship to New York warehouse by Q3.
                      </p>
                      <div className="mt-2.5 flex items-center gap-1">
                        <div className="h-0.5 w-0.5 rounded-full bg-white/50 animate-pulse" />
                        <div className="h-0.5 w-3 rounded-full bg-white/30" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
                      <span className="text-white/40 text-[10px] font-medium">AI extracting specifications…</span>
                    </div>
                  </div>

                  {/* Spec card */}
                  <div className="mx-5 mb-5 mt-1 rounded-xl overflow-hidden border border-white/10">
                    <div className="bg-white/10 px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Settings2 className="w-3.5 h-3.5 text-white/60" />
                        <span className="text-white text-xs font-semibold">Generated Spec Sheet</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-green-400/20 border border-green-400/30 rounded-full px-2.5 py-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
                        <span className="text-green-300 text-[10px] font-semibold">Auto-filled</span>
                      </div>
                    </div>

                    <div className="bg-white/5 divide-y divide-white/[0.06]">
                      {[
                        { label: 'Product Type', value: 'Puffed Jacket', done: true },
                        { label: 'Fill Material', value: 'Synthetic 650-fill', done: true },
                        { label: 'Outer Shell', value: 'DWR Nylon', done: true },
                        { label: 'Quantity', value: '200 units (S–XL)', done: true },
                        { label: 'Delivery Target', value: 'New York · Q3', done: true },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between px-4 py-2.5">
                          <span className="text-white/40 text-xs">{row.label}</span>
                          <span className="text-white/90 text-xs font-medium flex items-center gap-1.5">
                            {row.value}
                            {row.done && <CheckCircle2 className="w-3 h-3 text-green-400" />}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-primary/50 border-t border-white/10 px-4 py-2.5 flex items-center justify-between">
                      <span className="text-white/60 text-[10px]">Ready to send to 14 matched factories</span>
                      <div className="flex items-center gap-1 text-white text-[10px] font-semibold">
                        Find Suppliers <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 px-3.5 py-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-none">Spec sheet ready</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Generated in 8 seconds</p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Add your product details</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Upload specs, images, or just a description. AI translates it into exactly what suppliers need, formatting it into professional industrial spec sheets automatically.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Get multiple quotes from the best suppliers</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Let AI and sourcing experts find vetted factories for your product. Transparent quotes, reliable suppliers, and significantly lower unit costs compared to open marketplaces.
                </p>
              </div>

              {/* Step 2 Mockup — Supplier Quotes */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-bl from-primary/15 via-primary/5 to-transparent rounded-[2.5rem] blur-3xl pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 flex flex-col" style={{ background: 'linear-gradient(145deg, #0a0f2e 0%, #000EEF 100%)' }}>

                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                        <Globe className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold leading-none">Supplier Quotes</p>
                        <p className="text-white/40 text-[10px] mt-0.5">Men's Black Puffed Jacket · 200 units</p>
                      </div>
                    </div>
                    <div className="bg-green-400/20 border border-green-400/30 rounded-full px-2.5 py-0.5">
                      <span className="text-green-300 text-[10px] font-semibold">3 quotes received</span>
                    </div>
                  </div>

                  {/* Supplier rows */}
                  <div className="px-5 py-4 flex flex-col gap-3">
                    {[
                      { initial: 'A', name: 'Apex Garments', location: 'Surat, Gujarat', rating: '99%', price: '$38.90', badge: 'Best Value', badgeClass: 'bg-green-400/20 text-green-300 border-green-400/30', highlight: true },
                      { initial: 'M', name: 'Modern Textiles', location: 'Jaipur, Rajasthan', rating: '97%', price: '$41.50', badge: 'Top Pick', badgeClass: 'bg-white/15 text-white/80 border-white/20', highlight: false },
                      { initial: 'G', name: 'Global Knits', location: 'Tirupur, Tamil Nadu', rating: '95%', price: '$44.00', badge: null, badgeClass: '', highlight: false },
                    ].map((s) => (
                      <div key={s.name} className={`rounded-xl px-4 py-3 flex items-center justify-between border ${s.highlight ? 'bg-white/12 border-white/20' : 'bg-white/5 border-white/8'}`}>
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-white/15 border border-white/15 flex items-center justify-center shrink-0">
                            <span className="text-white text-xs font-bold">{s.initial}</span>
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-white/90 text-xs font-semibold">{s.name}</span>
                              {s.badge && (
                                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full border ${s.badgeClass}`}>{s.badge}</span>
                              )}
                            </div>
                            <p className="text-white/40 text-[10px] mt-0.5">{s.location} · <span className="text-green-400">{s.rating} rated</span></p>
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-3">
                          <p className="text-white font-bold text-sm">{s.price}</p>
                          <p className="text-white/35 text-[10px]">per unit</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mx-5 mb-5 bg-primary/50 border border-white/10 rounded-xl px-4 py-2.5 flex items-center justify-between">
                    <span className="text-white/55 text-[10px]">Avg. response time: 6 hours</span>
                    <div className="flex items-center gap-1 text-white text-[10px] font-semibold">
                      Compare quotes <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 px-3.5 py-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-none">$9.10 saved/unit</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">vs. open marketplace</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Step 3 Mockup — Sample & Negotiation */}
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-[2.5rem] blur-3xl pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 flex flex-col" style={{ background: 'linear-gradient(145deg, #0a0f2e 0%, #000EEF 100%)' }}>

                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                        <Truck className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold leading-none">Sample Order #PQ-2841</p>
                        <p className="text-white/40 text-[10px] mt-0.5">Apex Garments · Surat</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-primary/40 border border-white/15 rounded-full px-2.5 py-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                      <span className="text-white/70 text-[10px] font-medium">In transit</span>
                    </div>
                  </div>

                  {/* Sample tracking */}
                  <div className="px-5 pt-4 pb-3">
                    <p className="text-white/35 text-[10px] font-semibold uppercase tracking-widest mb-3">Sample Progress</p>
                    <div className="flex items-center gap-0 mb-4">
                      {[
                        { label: 'Ordered', done: true },
                        { label: 'Produced', done: true },
                        { label: 'Shipped', done: true },
                        { label: 'Delivered', done: false },
                      ].map((step, i, arr) => (
                        <div key={step.label} className="flex items-center flex-1">
                          <div className="flex flex-col items-center gap-1 flex-1">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${step.done ? 'bg-green-400/20 border-green-400/40' : 'bg-white/5 border-white/15'}`}>
                              {step.done
                                ? <CheckCircle2 className="w-3 h-3 text-green-400" />
                                : <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                              }
                            </div>
                            <span className={`text-[9px] font-medium ${step.done ? 'text-white/60' : 'text-white/25'}`}>{step.label}</span>
                          </div>
                          {i < arr.length - 1 && (
                            <div className={`h-px flex-1 -mt-3.5 ${step.done ? 'bg-green-400/30' : 'bg-white/10'}`} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Negotiation card */}
                  <div className="mx-5 mb-5 rounded-xl overflow-hidden border border-white/10">
                    <div className="bg-white/10 px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
                      <MessageSquare className="w-3.5 h-3.5 text-white/60" />
                      <span className="text-white text-xs font-semibold">Price Negotiation</span>
                    </div>
                    <div className="bg-white/5 px-4 py-3 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white/40 text-xs">Supplier quoted</span>
                        <span className="text-white/50 text-xs font-medium line-through">$48.00 / unit</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/40 text-xs">Proquoment negotiated</span>
                        <span className="text-green-300 text-xs font-bold">$38.90 / unit</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 border-t border-white/8">
                        <span className="text-white/35 text-[10px]">Total savings on 200 units</span>
                        <span className="text-green-300 text-[10px] font-semibold">$1,820 saved</span>
                      </div>
                    </div>
                    <div className="bg-green-500/20 border-t border-green-400/20 px-4 py-2.5 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-300 text-[10px] font-semibold">Sample approved · Final order confirmed</span>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 px-3.5 py-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-none">Sample approved</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Order confirmed</p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Order samples, pick a supplier, get better pricing</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Review physical samples and pick manufacturers with confidence. We handle the communication and negotiate aggressively on your behalf.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-primary font-bold text-xl">4</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Onsite QA and delivery handled for you</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We manage production end-to-end with onsite quality checks, logistics oversight, and freight forwarding directly to your warehouse.
                </p>
              </div>

              {/* Step 4 Mockup — QA & Delivery */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-bl from-primary/15 via-primary/5 to-transparent rounded-[2.5rem] blur-3xl pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 flex flex-col" style={{ background: 'linear-gradient(145deg, #0a0f2e 0%, #000EEF 100%)' }}>

                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                        <ShieldCheck className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold leading-none">Production & QA Monitor</p>
                        <p className="text-white/40 text-[10px] mt-0.5">Order #PQ-2841 · Apex Garments</p>
                      </div>
                    </div>
                    <div className="bg-green-400/20 border border-green-400/30 rounded-full px-2.5 py-0.5">
                      <span className="text-green-300 text-[10px] font-semibold">On schedule</span>
                    </div>
                  </div>

                  {/* Production stages */}
                  <div className="px-5 pt-4 pb-2">
                    <p className="text-white/35 text-[10px] font-semibold uppercase tracking-widest mb-3">Production Stages</p>
                    <div className="space-y-2.5">
                      {[
                        { label: 'Material Procurement', pct: 100, done: true },
                        { label: 'Cutting & Stitching', pct: 100, done: true },
                        { label: 'Quality Inspection', pct: 100, done: true },
                        { label: 'Packing & Dispatch', pct: 72, done: false },
                      ].map((stage) => (
                        <div key={stage.label}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white/60 text-[10px] font-medium">{stage.label}</span>
                            <span className={`text-[10px] font-semibold ${stage.done ? 'text-green-400' : 'text-white/50'}`}>{stage.done ? '✓ Done' : `${stage.pct}%`}</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${stage.done ? 'bg-green-400' : 'bg-primary/80'}`}
                              style={{ width: `${stage.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* QA checks */}
                  <div className="mx-5 mt-3 mb-5 rounded-xl overflow-hidden border border-white/10">
                    <div className="bg-white/10 px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
                      <Factory className="w-3.5 h-3.5 text-white/60" />
                      <span className="text-white text-xs font-semibold">Onsite QA Checklist</span>
                    </div>
                    <div className="bg-white/5 divide-y divide-white/[0.06]">
                      {[
                        'Stitching & seam integrity',
                        'Fill weight & distribution',
                        'Zipper & closure test',
                        'Measurements (S–XL) verified',
                      ].map((check) => (
                        <div key={check} className="flex items-center gap-3 px-4 py-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                          <span className="text-white/70 text-xs">{check}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-primary/50 border-t border-white/10 px-4 py-2.5 flex items-center justify-between">
                      <span className="text-white/55 text-[10px]">Shipping to: New York Warehouse</span>
                      <div className="flex items-center gap-1 text-white text-[10px] font-semibold">
                        Track shipment <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 px-3.5 py-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                    <Truck className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-none">Cleared for dispatch</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">ETA: 14 days to NYC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Supplier Quotes UI Section */}
      <section className="py-16 sm:py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">Get multiple quotes from the best suppliers</h2>
            <p className="text-base sm:text-lg text-gray-600">Vetted manufacturers competing for your project.</p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-4">
            {[
              { name: 'Angela', company: 'Industrial Textiles', location: 'Surat', rating: '98%', price: '$42.50', badge: 'Top Pick', badgeColor: 'bg-primary/10 text-primary border-primary/20' },
              { name: 'Frank', company: 'Master Weavers', location: 'Jaipur', rating: '99%', price: '$38.90', badge: 'Best Value', badgeColor: 'bg-green-100 text-green-700 border-green-200' },
              { name: 'Jason', company: 'Global Logistics', location: 'Nasik', rating: '95%', price: '$41.00', badge: null }
            ].map((supplier, i) => (
              <Card key={i} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 sm:p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                    <Avatar className="h-10 w-10 sm:h-14 sm:w-14 border border-gray-100 shrink-0">
                      <AvatarFallback className="bg-gray-100 text-gray-600 font-semibold">{supplier.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{supplier.name}</h4>
                        {supplier.badge && (
                          <Badge variant="outline" className={`${supplier.badgeColor} text-xs`}>{supplier.badge}</Badge>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium truncate">
                        {supplier.company} · {supplier.location} · <span className="text-green-600">{supplier.rating} Rating</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">{supplier.price}</div>
                    <div className="text-xs sm:text-sm text-gray-500">per unit</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Production Timeline */}
      <section className="py-16 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">Onsite QA and delivery handled for you</h2>
            <p className="text-base sm:text-xl text-gray-600">We don't just find the supplier. We oversee the entire production cycle.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: PackageSearch, title: 'Sample requested', desc: 'Material specs confirmed. Prototype production initiated.' },
              { icon: ShieldCheck, title: 'Payment completed', desc: 'Secure escrow financing finalized. Material procurement has begun.' },
              { icon: Factory, title: 'Production started', desc: 'Cutting and assembly in progress. Real-time factory floor updates active.' },
              { icon: Truck, title: 'QA completed', desc: 'On-site inspectors verified the shipment. Products cleared for global dispatch.' }
            ].map((step, i) => (
              <div key={i} className="relative">
                {i !== 3 && <div className="hidden md:block absolute top-6 left-12 right-0 h-px bg-gray-200" />}
                <div className="relative z-10 w-12 h-12 bg-white border-2 border-gray-100 shadow-sm rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Scrolling Ticker */}
      <section className="py-16 bg-gray-900 overflow-hidden text-white">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee flex gap-16 items-center px-8">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="font-medium text-lg">Priya · Mumbai · Textiles</span></div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="font-medium text-lg">Rajesh · Surat · Garments</span></div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="font-medium text-lg">Anita · Bangalore · Electronics</span></div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="font-medium text-lg">Mahesh · Chennai · Automotive</span></div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="font-medium text-lg">Deepa · Delhi · Packaging</span></div>
              </React.Fragment>
            ))}
          </div>
          {/* Duplicate for seamless looping */}
          <div className="animate-marquee flex gap-16 items-center px-8" aria-hidden="true">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="font-medium text-lg">Priya · Mumbai · Textiles</span></div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="font-medium text-lg">Rajesh · Surat · Garments</span></div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="font-medium text-lg">Anita · Bangalore · Electronics</span></div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="font-medium text-lg">Mahesh · Chennai · Automotive</span></div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /><span className="font-medium text-lg">Deepa · Delhi · Packaging</span></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      {/* Buyer Testimonials */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <motion.div {...{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }} className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5 text-sm font-semibold">Buyer Stories</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Trusted by buyers around the world</h2>
            <p className="text-lg text-gray-500">From New York to Dubai, sourcing teams rely on Proquoment to find the best Indian manufacturers.</p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            {/* Featured large card */}
            <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 border-primary/15 shadow-sm">
              <CardContent className="pt-6 sm:pt-0">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <div>
                    <div className="flex gap-0.5 mb-5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-xl font-medium text-gray-900 leading-relaxed">
                      "We cut our per-unit cost by 38% on our first order and haven't looked back. Proquoment's AI matched us with a factory in Tirupur that we never would have found on our own. The spec translation alone saved us weeks of back-and-forth."
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Avatar className="size-12">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Marcus Webb" />
                      <AvatarFallback>MW</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-semibold text-gray-900 not-italic">Marcus Webb</cite>
                      <span className="block text-sm text-gray-500">Head of Sourcing · Threadline Co. 🇺🇸 New York, USA</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            {/* Wide card */}
            <Card className="md:col-span-2 border-gray-100 shadow-sm">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <div>
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-lg font-medium text-gray-800">"Three quotes in 48 hours, all from verified factories. We picked one, received samples in 10 days, and placed a bulk order within a month. Remarkable efficiency."</p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Avatar className="size-12">
                      <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sophie Hartmann" />
                      <AvatarFallback>SH</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-semibold text-gray-900 not-italic">Sophie Hartmann</cite>
                      <span className="block text-sm text-gray-500">Procurement Lead · Müller Brands 🇩🇪 Berlin, Germany</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            {/* Small card 1 */}
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-gray-700 leading-relaxed">"Onsite QA was a game-changer. Zero defects on our first container. Couldn't have managed this without Proquoment."</p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <Avatar className="size-10">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/52.jpg" alt="Khalid Al Mansoori" />
                      <AvatarFallback>KA</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-semibold text-gray-900 not-italic">Khalid Al Mansoori</cite>
                      <span className="block text-xs text-gray-500">Import Director 🇦🇪 Dubai, UAE</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            {/* Small card 2 */}
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-gray-700 leading-relaxed">"Proquoment replaced three different vendors and a freight broker for us. One platform, total visibility. Brilliant."</p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <Avatar className="size-10">
                      <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" alt="Amelia Chen" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-semibold text-gray-900 not-italic">Amelia Chen</cite>
                      <span className="block text-xs text-gray-500">Operations Manager 🇦🇺 Sydney, Australia</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Second row of 3 cards */}
          <div className="grid gap-4 sm:grid-cols-3 mt-4">
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-5">
                  <div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-gray-700 leading-relaxed">"The AI spec translation is magic. I uploaded a napkin sketch and got a full industrial sheet back in minutes. Factories knew exactly what to quote on."</p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <Avatar className="size-10">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/76.jpg" alt="Liam O'Brien" />
                      <AvatarFallback>LO</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-semibold text-gray-900 not-italic">Liam O'Brien</cite>
                      <span className="block text-xs text-gray-500">Founder · Verve Gear 🇬🇧 London, UK</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-gray-100 shadow-sm">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-5">
                  <div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-gray-700 leading-relaxed">"We'd been burned by suppliers before. Proquoment's vetting process gave us real confidence — certifications, capacity, payment history. Everything transparent."</p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <Avatar className="size-10">
                      <AvatarImage src="https://randomuser.me/api/portraits/women/55.jpg" alt="Fatima Zahra" />
                      <AvatarFallback>FZ</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-semibold text-gray-900 not-italic">Fatima Zahra</cite>
                      <span className="block text-xs text-gray-500">Supply Chain Head 🇸🇦 Riyadh, Saudi Arabia</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-gray-100 shadow-sm">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-5">
                  <div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-gray-700 leading-relaxed">"As a small brand sourcing internationally for the first time, having a team handle negotiations and logistics gave us confidence we couldn't get anywhere else."</p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <Avatar className="size-10">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/88.jpg" alt="Takeshi Mori" />
                      <AvatarFallback>TM</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-semibold text-gray-900 not-italic">Takeshi Mori</cite>
                      <span className="block text-xs text-gray-500">Co-Founder · Mori Supply 🇯🇵 Tokyo, Japan</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-xl tracking-tight">Proquoment.</div>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <div className="text-sm text-gray-400">© 2026 Proquoment. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
