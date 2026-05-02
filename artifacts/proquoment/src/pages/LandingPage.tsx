import React, { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";

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
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#000EEF]" />
          <span className="font-mono text-sm tracking-widest font-bold">PROQUOMENT</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Platform</a>
          <a href="#" className="hover:text-white transition-colors">Suppliers</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>
        <div>
          <a
            href="https://www.proquoment.in/waitlist"
            target="_blank"
            rel="noreferrer"
            className="bg-[#000EEF] hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-[4px] transition-colors"
          >
            Request Access
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-8 pt-32 pb-20 overflow-hidden border-b border-white/10">
        {/* Background Grid & Image */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,14,239,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,14,239,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
        <div 
          className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-luminosity bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050A1F]/50 via-transparent to-[#050A1F] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          <FadeIn>
            <div className="text-[#000EEF] font-mono text-xs tracking-[0.2em] font-bold mb-8">
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
              Join the Waitlist
            </a>
            <a
              href="#"
              className="border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold px-8 py-4 rounded-[4px] transition-all w-full sm:w-auto"
            >
              Watch how it works
            </a>
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
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Cost Reduction</div>
            </div>
            <div className="py-6 px-4 flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">14 days</div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Avg Quote Time</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full bg-[#000EEF] py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-8 items-center text-white font-mono text-sm font-bold tracking-widest">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>TIRUPUR &middot;</span>
              <span>SURAT &middot;</span>
              <span>JAIPUR &middot;</span>
              <span>NASIK &middot;</span>
              <span>LUDHIANA &middot;</span>
              <span>BANGALORE &middot;</span>
              <span>COIMBATORE &middot;</span>
              <span>DELHI &middot;</span>
              <span>MUMBAI &middot;</span>
              <span>CHENNAI &middot;</span>
            </span>
          ))}
        </div>
      </div>

      {/* How it works */}
      <section className="bg-[#F8F8FC] text-[#050A1F] py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6">THE PROCESS</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-20">End-to-end, handled.</h2>
          </FadeIn>

          <div className="flex flex-col border-t border-[#050A1F]/10">
            {[
              {
                num: "01",
                title: "Specify your product",
                desc: "Upload specs, images, or describe it. Our AI converts your requirements into precise factory-ready documentation in any language."
              },
              {
                num: "02",
                title: "Receive vetted quotes",
                desc: "Sourcing experts and AI identify the best-matched manufacturers. Compare transparent quotes from pre-vetted Indian factories."
              },
              {
                num: "03",
                title: "Order samples and negotiate",
                desc: "Physical samples from multiple factories. We negotiate pricing, MOQs, and payment terms on your behalf."
              },
              {
                num: "04",
                title: "Production and delivery",
                desc: "Boots-on-ground QA inspectors. Logistics coordination. Freight forwarding to your warehouse. We own the outcome."
              }
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="relative py-16 border-b border-[#050A1F]/10 flex flex-col md:flex-row md:items-center gap-8 overflow-hidden group">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-[160px] font-black text-[#000EEF]/5 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                    {step.num}
                  </div>
                  <div className="relative z-10 w-full md:w-1/3">
                    <h3 className="text-3xl font-bold">{step.title}</h3>
                  </div>
                  <div className="relative z-10 w-full md:w-2/3">
                    <p className="text-xl text-[#050A1F]/70 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Network */}
      <section className="bg-[#050A1F] py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6">ACTIVE SUPPLIERS</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-16 text-white">1,200+ manufacturers. Ready now.</h2>
          </FadeIn>

          <FadeIn delay={0.2} className="overflow-x-auto">
            <div className="min-w-[800px] w-full border border-white/10 rounded-[4px] bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-5 text-xs font-mono font-bold text-gray-400 tracking-wider p-4 border-b border-white/10 uppercase">
                <div className="col-span-1">Supplier</div>
                <div className="col-span-1">City</div>
                <div className="col-span-1">Specialty</div>
                <div className="col-span-1">Rating</div>
                <div className="col-span-1 text-right">Avg Lead Time</div>
              </div>
              
              {[
                { name: "Angela Textiles", city: "Surat, Gujarat", spec: "Industrial Garments", rating: "★ 98%", time: "12 days" },
                { name: "Master Weavers Co.", city: "Jaipur, Rajasthan", spec: "Heavyweight Canvas", rating: "★ 99%", time: "10 days" },
                { name: "Global Logistics Partners", city: "Nasik, Maharashtra", spec: "End-to-end Fulfillment", rating: "★ 95%", time: "14 days" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-5 text-sm font-medium text-gray-200 p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                  <div className="col-span-1 text-white">{row.name}</div>
                  <div className="col-span-1">{row.city}</div>
                  <div className="col-span-1">{row.spec}</div>
                  <div className="col-span-1 text-[#000EEF]">{row.rating}</div>
                  <div className="col-span-1 text-right">{row.time}</div>
                </div>
              ))}
              
              <div className="p-4 text-center text-sm font-medium text-gray-500 italic">
                &rarr; 1,197 more suppliers available upon registration
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-12">
            <a
              href="https://www.proquoment.in/waitlist"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#000EEF] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-[4px] transition-colors"
            >
              Join Waitlist
            </a>
          </FadeIn>
        </div>
      </section>

      {/* QA & Delivery */}
      <section className="relative py-40 px-8 flex flex-col items-center justify-center text-center overflow-hidden border-y border-white/10">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/qa-bg.png')" }}
        />
        <div className="absolute inset-0 z-10 bg-[#050A1F]/70" />

        <div className="relative z-20 max-w-4xl mx-auto w-full">
          <FadeIn>
            <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6">QUALITY ASSURANCE</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-16 text-white">We inspect. We approve. We ship.</h2>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
            {["Sample Verified", "Payment Secured", "Production Monitored", "Shipment Cleared"].map((step, i, arr) => (
              <React.Fragment key={step}>
                <div className="text-lg font-bold text-white">{step}</div>
                {i < arr.length - 1 && (
                  <div className="text-[#000EEF] rotate-90 md:rotate-0">&rarr;</div>
                )}
              </React.Fragment>
            ))}
          </FadeIn>

          <FadeIn delay={0.3}>
            <a
              href="#"
              className="inline-block border border-white hover:bg-white hover:text-[#050A1F] text-white font-bold px-8 py-4 rounded-[4px] transition-colors"
            >
              Learn about our QA process
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#F8F8FC] text-[#050A1F] py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="text-[#000EEF] text-8xl font-serif leading-none mb-8">&ldquo;</div>
            <p className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-12">
              Our unit costs dropped 38% in the first production run. Proquoment handled everything &mdash; specs, factory, QA, shipping.
            </p>
            <div className="font-mono text-sm font-bold text-[#050A1F]/60 uppercase tracking-widest">
              &mdash; Founder, Industrial Hardware Brand, New York
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#050A1F] py-32 px-8 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6">LIMITED ONBOARDING</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-white">Ready to transform your supply chain?</h2>
            <p className="text-xl text-gray-400 mb-12 font-medium">
              We are selectively onboarding partners for the 2025 production cycle. Apply now to secure your place.
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

      {/* Footer */}
      <footer className="bg-[#050A1F] px-8 py-12 border-t border-[#000EEF]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#000EEF]" />
              <span className="font-mono text-lg tracking-widest font-bold text-white">PROQUOMENT</span>
            </div>
            <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">Industrial Procurement Intelligence</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Suppliers</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-sm text-gray-600 font-mono">
            &copy; 2025 Proquoment Technologies Pvt. Ltd.
          </div>
        </div>
      </footer>
    </div>
  );
}
