import React, { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050A1F] text-white font-sans selection:bg-[#000EEF] selection:text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-8 pt-20 pb-20 overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,14,239,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,14,239,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
        <div 
          className="absolute inset-0 z-0 opacity-25 pointer-events-none mix-blend-luminosity bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050A1F]/50 via-transparent to-[#050A1F] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          <FadeIn>
            <div className="text-[#000EEF] font-mono text-xs tracking-[0.2em] font-bold mb-8 uppercase">
              INDUSTRIAL PROCUREMENT INTELLIGENCE
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-[88px] font-black leading-[0.95] tracking-tight mb-8">
              Source Smarter.<br />
              Procure Faster.<br />
              <span className="text-[#000EEF]">Grow Bigger.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Proquoment connects international buyers to verified Indian manufacturers through AI-powered specification translation and end-to-end production management.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center gap-4 mb-20">
            <a
              href="https://www.proquoment.in/waitlist"
              target="_blank"
              rel="noreferrer"
              className="bg-[#000EEF] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-[4px] transition-colors w-full sm:w-auto"
            >
              Request Access
            </a>
            <Link
              href="/suppliers"
              className="border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold px-8 py-4 rounded-[4px] transition-all w-full sm:w-auto"
            >
              For Suppliers
            </Link>
          </FadeIn>

          <FadeIn delay={0.4} className="w-full max-w-4xl mx-auto border-t border-b border-white/10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <div className="py-6 px-4 flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">2,400+</div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Verified Suppliers</div>
            </div>
            <div className="py-6 px-4 flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">18</div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Manufacturing Hubs</div>
            </div>
            <div className="py-6 px-4 flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">60%</div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Avg Cost Reduction</div>
            </div>
            <div className="py-6 px-4 flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">14 Days</div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Avg Quote Time</div>
            </div>
          </FadeIn>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="text-white text-2xl">&darr;</div>
          </div>
        </div>
      </section>

      {/* CHAPTER 01: SPECIFY */}
      <section id="how-it-works" className="relative bg-[#F7F8FC] text-[#050A1F] py-32 px-8 overflow-hidden">
        <div className="absolute left-0 top-0 text-[#000EEF] opacity-10 text-[160px] font-black leading-none select-none pointer-events-none -translate-x-1/4 -translate-y-1/4">
          01
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <FadeIn>
            <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6 uppercase">STEP 01 &mdash; SPECIFY</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">
              Describe your product.<br />We handle the rest.
            </h2>
            <p className="text-xl text-[#050A1F]/70 leading-relaxed font-medium mb-12">
              Upload specs, images, or just a plain description. Our AI converts your requirements into factory-ready technical documentation, translated for manufacturers in Tirupur, Surat, Jaipur, and 15 other Indian production hubs.
            </p>
            <ul className="space-y-4">
              {['Automated spec translation', 'Multi-language factory docs', 'Tariff + material cost analysis'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#050A1F]">
                  <span className="text-[#000EEF]">&check;</span> {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-xl shadow-2xl p-8 border border-black/5">
              <div className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest border-b pb-4">Product Specification</div>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Product Type</label>
                  <div className="w-full bg-gray-50 border rounded-[4px] p-3 text-sm font-medium">Industrial Coveralls</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">Material</label>
                    <div className="w-full bg-gray-50 border rounded-[4px] p-3 text-sm font-medium">100% Cotton Drill</div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">Quantity</label>
                    <div className="w-full bg-gray-50 border rounded-[4px] p-3 text-sm font-medium">5,000 units</div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Target Price / Unit</label>
                  <div className="w-full bg-gray-50 border rounded-[4px] p-3 text-sm font-medium">$22.50</div>
                </div>
              </div>
              <button className="w-full bg-[#000EEF] text-white font-bold py-3 rounded-[4px] mb-4">Generate Spec</button>
              <div className="bg-blue-50 text-[#000EEF] text-xs font-mono p-3 rounded-[4px] flex items-center gap-2">
                <span className="animate-pulse h-2 w-2 bg-[#000EEF] rounded-full"></span>
                AI is analyzing manufacturing hubs in Tirupur...
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CHAPTER 02: QUOTE */}
      <section className="bg-[#050A1F] py-32 px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 md:order-1">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
              <div className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Supplier Quotes &mdash; Blue Canvas Jacket</div>
              <div className="space-y-2">
                <div className="grid grid-cols-12 text-xs font-mono font-bold text-gray-500 uppercase pb-2 px-4">
                  <div className="col-span-4">Supplier</div>
                  <div className="col-span-3">Specialty</div>
                  <div className="col-span-3">Price</div>
                  <div className="col-span-2">Rating</div>
                </div>
                {[
                  { name: "Angela Textiles", city: "Surat", spec: "Industrial", price: "$42.50", rating: "98%", badge: "Top Pick" },
                  { name: "Master Weavers", city: "Jaipur", spec: "Canvas", price: "$38.90", rating: "99%", badge: "Best Value" },
                  { name: "Global Logistics", city: "Nasik", spec: "Heavy", price: "$41.00", rating: "95%" }
                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-12 text-sm p-4 rounded-[4px] items-center ${i === 0 ? 'bg-[#000EEF]/10 border border-[#000EEF]/30' : 'bg-black/20'}`}>
                    <div className="col-span-4 font-medium">
                      <div className="text-white">{row.name}</div>
                      <div className="text-xs text-gray-500">{row.city}</div>
                    </div>
                    <div className="col-span-3 text-gray-400">{row.spec}</div>
                    <div className="col-span-3 text-white font-mono">{row.price}<span className="text-gray-500 text-xs">/unit</span></div>
                    <div className="col-span-2 flex items-center gap-2">
                      <span className="text-[#000EEF]">&starf;</span> {row.rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="order-1 md:order-2">
            <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6 uppercase">STEP 02 &mdash; QUOTE</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">
              Multiple vetted quotes.<br />Transparent pricing.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-medium mb-12">
              Sourcing experts and AI identify the best-matched Indian manufacturers for your product. Compare real quotes from pre-vetted factories &mdash; no middlemen, no opacity.
            </p>
            <ul className="space-y-4">
              {['Pre-vetted manufacturer network', 'Real-time quote comparison', 'No marketplace fees'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium text-white">
                  <span className="text-[#000EEF]">&check;</span> {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* CHAPTER 03: SAMPLE */}
      <section className="bg-[#F7F8FC] text-[#050A1F] py-32 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6 uppercase">STEP 03 &mdash; SAMPLE</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">
              Touch it before<br />you commit.
            </h2>
            <p className="text-xl text-[#050A1F]/70 leading-relaxed font-medium mb-12">
              Order physical samples from up to 3 manufacturers simultaneously. Compare weight, texture, stitching, and construction before committing to a production run. We negotiate MOQs, lead times, and payment terms on your behalf.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Materials R&D Support', 'Transparent Lead Times', 'Escrow Payment Security'].map((pill, i) => (
                <div key={i} className="bg-white border shadow-sm px-4 py-2 rounded-full text-sm font-bold text-[#050A1F]">
                  {pill}
                </div>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-xl shadow-2xl p-8 border border-black/5 max-w-sm mx-auto">
              <div className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest border-b pb-4">Current Sample Order</div>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-xs font-bold text-gray-500 mb-1">Product</div>
                  <div className="text-lg font-black">Industrial Heavy Jacket</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold text-gray-500 mb-1">Supplier</div>
                    <div className="font-medium">Master Weavers</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 mb-1">Sample Cost</div>
                    <div className="font-mono font-bold text-[#000EEF]">$149.00</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 mb-1">Quantity</div>
                  <div className="font-medium">3 units from 3 factories</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-[4px] p-4 flex items-center justify-between border">
                <div className="text-sm font-bold">Status</div>
                <div className="bg-[#050A1F] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
                  In Transit &mdash; Est. 8 days
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CHAPTER 04: DELIVER */}
      <section className="bg-[#050A1F] py-32 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 md:order-1">
            <div className="max-w-sm mx-auto bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
              <div className="space-y-8 relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-white/10" />
                
                {[
                  { title: "Sample verified", sub: "Material specs confirmed", active: false, done: true, icon: "✓" },
                  { title: "Escrow secured", sub: "Payment finalized", active: false, done: true, icon: "✓" },
                  { title: "Production active", sub: "Cutting in progress", active: true, done: false, icon: "⟳" },
                  { title: "QA + Dispatch", sub: "Scheduled for 14 June", active: false, done: false, icon: "○" }
                ].map((step, i) => (
                  <div key={i} className="relative flex items-start gap-6">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 z-10 
                      ${step.done ? 'bg-green-500 text-white' : step.active ? 'bg-[#000EEF] text-white animate-pulse' : 'bg-gray-700 text-gray-400'}`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className={`font-bold ${step.active || step.done ? 'text-white' : 'text-gray-500'}`}>{step.title}</div>
                      <div className={`text-sm ${step.active || step.done ? 'text-gray-400' : 'text-gray-600'}`}>{step.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="order-1 md:order-2">
            <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6 uppercase">STEP 04 &mdash; DELIVER</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">
              Boots on the ground.<br />Door to door.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-medium mb-12">
              We don't disappear after you place an order. Our on-site inspectors are inside the factory during production, verifying every batch. Logistics coordination, freight forwarding, customs clearance &mdash; we own the outcome.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="w-full bg-[#000EEF] py-6 overflow-hidden flex whitespace-nowrap border-y border-black/20">
        <div className="animate-marquee flex gap-8 items-center text-white font-mono text-lg font-black tracking-widest uppercase">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>TIRUPUR &middot;</span>
              <span>SURAT &middot;</span>
              <span>JAIPUR &middot;</span>
              <span>NASIK &middot;</span>
              <span>LUDHIANA &middot;</span>
              <span>COIMBATORE &middot;</span>
              <span>BANGALORE &middot;</span>
              <span>DELHI &middot;</span>
              <span>MUMBAI &middot;</span>
              <span>CHENNAI &middot;</span>
              <span>AHMEDABAD &middot;</span>
              <span>PUNE &middot;</span>
            </span>
          ))}
        </div>
      </div>

      {/* WHY PROQUOMENT */}
      <section className="bg-[#F7F8FC] text-[#050A1F] py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-20 text-center">
              Built for serious buyers.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                title: "60% lower costs on average",
                desc: "Our manufacturer network competes for your project. You get the benefit."
              },
              {
                title: "100% QA guaranteed",
                desc: "Every shipment goes through our boots-on-ground inspection before dispatch."
              },
              {
                title: "14-day average quote",
                desc: "From description to first supplier quotes in two weeks, not two months."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col text-center">
                <div className="text-3xl font-black mb-4 px-4">{item.title}</div>
                <div className="text-lg text-[#050A1F]/70 font-medium leading-relaxed">{item.desc}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#050A1F] py-32 px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="text-[#000EEF] text-9xl font-serif leading-none h-20 overflow-hidden mb-8">&ldquo;</div>
            <p className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-12">
              Our unit costs dropped 38% in the first production run. Proquoment handled everything &mdash; specs, factory, QA, shipping.
            </p>
            <div className="font-mono text-sm font-bold text-gray-400 uppercase tracking-widest">
              &mdash; Founder, Industrial Hardware Brand, New York
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#050A1F] py-32 px-8 border-t-4 border-[#000EEF]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="font-mono text-xs font-bold tracking-[0.2em] text-[#000EEF] mb-6 uppercase">LIMITED ONBOARDING</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-white">Ready to transform your supply chain?</h2>
            <p className="text-xl text-gray-400 mb-12 font-medium">
              We are selectively onboarding partners for the 2025 production cycle.
            </p>
            <a
              href="https://www.proquoment.in/waitlist"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#000EEF] hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-[4px] transition-colors text-lg mb-6 shadow-[0_0_40px_rgba(0,14,239,0.3)]"
            >
              Request Priority Access
            </a>
            <div className="text-sm font-mono text-gray-500">
              No commitment required &middot; Response within 48 hours
            </div>
          </FadeIn>
        </div>
      </section>

      <FooterBar />
    </div>
  );
}
