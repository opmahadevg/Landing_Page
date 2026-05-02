import React, { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { DollarSign, Clock, Star, ArrowRight, X } from "lucide-react";
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#0000EE] selection:text-white">
      {/* Announcement Bar */}
      {showBanner && (
        <div className="bg-[#F7F7F7] border-b border-[#E5E5E5] px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex-1 text-center font-medium text-[#0000EE]">
            Announcing Proquoment's India Manufacturing Network — Now open for early access.
          </div>
          <button onClick={() => setShowBanner(false)} className="text-gray-500 hover:text-gray-800">
            <X size={16} />
          </button>
        </div>
      )}

      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Left Side */}
          <div className="w-full lg:w-[40%] flex flex-col items-start text-left z-10">
            <FadeIn>
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-600 mb-8 border border-gray-200 rounded-full px-4 py-1.5 shadow-sm bg-white">
                <span className="flex items-center gap-1"><DollarSign size={14} className="text-gray-400" /> Lower cost</span>
                <span className="text-gray-300">&middot;</span>
                <span className="flex items-center gap-1"><Clock size={14} className="text-gray-400" /> Less hassle</span>
                <span className="text-gray-300">&middot;</span>
                <span className="flex items-center gap-1"><Star size={14} className="text-gray-400" /> Better quality</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-[56px] font-black leading-[1.1] tracking-tight mb-6 text-[#111111]">
                Indian Manufacturing.<br />
                <span className="text-[#0000EE]">Sourced by AI.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-[17px] md:text-[18px] text-gray-500 max-w-md mb-10 font-medium leading-relaxed">
                Lower unit costs. Fewer tariffs. Premium Indian factories.<br />
                None of the work.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="w-full mb-12">
              <a
                href="https://www.proquoment.in/waitlist"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#0000EE] hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-md text-lg"
              >
                Start sourcing for free
              </a>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="text-[13px] text-gray-400 font-medium mb-3">Work with the suppliers behind</div>
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-300">
                <span>Textile Co.</span>
                <span>&middot;</span>
                <span>Surat Mills</span>
                <span>&middot;</span>
                <span>Jaipur Crafts</span>
                <span>&middot;</span>
                <span>Tirupur Exports</span>
                <span>&middot;</span>
                <span>Nashik Industries</span>
              </div>
            </FadeIn>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[55%] lg:ml-auto">
            <FadeIn delay={0.2}>
              <div className="relative bg-[#1A1A1A] rounded-3xl p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                <div className="bg-white rounded-2xl overflow-hidden h-[500px] flex flex-col">
                  {/* Product Image Area */}
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative border-b border-gray-100">
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-600">
                      Target: Canvas Tote Bag
                    </div>
                    <div className="w-32 h-32 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-300">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M16 8v-2a4 4 0 0 0-8 0v2"/></svg>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 bg-white">
                    <div className="text-sm font-semibold text-[#111111] mb-4">
                      Based on your requirements, here are the best Indian suppliers:
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {/* Top Pick */}
                      <div className="bg-white border-2 border-[#0000EE] rounded-xl p-4 shadow-sm relative">
                        <div className="absolute -top-2.5 right-3 bg-[#0000EE] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Top pick</div>
                        <div className="font-bold text-[#111111] text-sm mb-1">Master Textiles</div>
                        <div className="text-xs text-gray-500 mb-3">Heavy Canvas Specialist</div>
                        <div className="text-sm font-bold text-[#0000EE]">$4.20<span className="text-gray-400 text-xs font-medium">/unit</span></div>
                      </div>
                      {/* Others */}
                      <div className="bg-[#F7F7F7] border border-gray-100 rounded-xl p-4">
                        <div className="font-bold text-[#111111] text-sm mb-1">Surat Fabrics</div>
                        <div className="text-xs text-gray-500 mb-3">Industrial Textiles</div>
                        <div className="text-sm font-bold text-gray-700">$4.05<span className="text-gray-400 text-xs font-medium">/unit</span></div>
                      </div>
                      <div className="bg-[#F7F7F7] border border-gray-100 rounded-xl p-4">
                        <div className="font-bold text-[#111111] text-sm mb-1">Jaipur Weavers</div>
                        <div className="text-xs text-gray-500 mb-3">Cotton &amp; Canvas</div>
                        <div className="text-sm font-bold text-gray-700">$4.50<span className="text-gray-400 text-xs font-medium">/unit</span></div>
                      </div>
                      <div className="bg-[#F7F7F7] border border-gray-100 rounded-xl p-4">
                        <div className="font-bold text-[#111111] text-sm mb-1">Tirupur Co.</div>
                        <div className="text-xs text-gray-500 mb-3">Garment &amp; Bags</div>
                        <div className="text-sm font-bold text-gray-700">$4.15<span className="text-gray-400 text-xs font-medium">/unit</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#F7F7F7] py-12 border-y border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-gray-200">
            <div className="text-center px-4">
              <div className="text-3xl font-black text-[#111111] mb-1">2,400+</div>
              <div className="text-sm text-gray-500 font-medium">Verified Suppliers</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-black text-[#111111] mb-1">18</div>
              <div className="text-sm text-gray-500 font-medium">Manufacturing Hubs</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-black text-[#111111] mb-1">60%</div>
              <div className="text-sm text-gray-500 font-medium">Cost Reduction</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-black text-[#111111] mb-1">14-Day</div>
              <div className="text-sm text-gray-500 font-medium">Avg Quote</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#111111] mb-4">How Proquoment works</h2>
            <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
              From product description to door delivery — handled.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Specify",
                desc: "Describe your product. Our AI converts it into factory-ready technical specs."
              },
              {
                num: "02",
                title: "Source",
                desc: "We identify the best-matched Indian manufacturers and collect real quotes."
              },
              {
                num: "03",
                title: "Deliver",
                desc: "Place your order. We manage production, QA, and freight door to door."
              }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-[12px] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 h-full">
                  <div className="text-[#0000EE] text-lg font-bold mb-6">{step.num}.</div>
                  <h3 className="text-xl font-bold text-[#111111] mb-4">{step.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="bg-[#F7F7F7] py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-wider text-gray-400 mb-4 uppercase">AI-POWERED</div>
              <h2 className="text-4xl font-black text-[#111111] leading-[1.1] mb-6">
                Specify anything.<br />We source it.
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                Upload a sketch, photo, or plain description. Proquoment's AI translates it into manufacturing specs and finds the right factory in seconds.
              </p>
              <Link href="/#how-it-works" className="inline-flex items-center text-[#0000EE] font-bold hover:text-blue-800 transition-colors">
                See how it works <ArrowRight size={18} className="ml-1" />
              </Link>
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-[12px] shadow-xl p-8 border border-gray-100">
                <div className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-wider">Product Specification</div>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase">Product type</label>
                    <div className="bg-[#F7F7F7] border border-gray-200 rounded-lg p-3 text-sm font-semibold text-[#111111]">Industrial Canvas Bag</div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase">Material</label>
                    <div className="bg-[#F7F7F7] border border-gray-200 rounded-lg p-3 text-sm font-semibold text-[#111111]">600D Oxford Fabric</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase">Quantity</label>
                      <div className="bg-[#F7F7F7] border border-gray-200 rounded-lg p-3 text-sm font-semibold text-[#111111]">5,000 units</div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase">Target</label>
                      <div className="bg-[#F7F7F7] border border-gray-200 rounded-lg p-3 text-sm font-semibold text-[#111111]">$8.50/unit</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#0000EE] text-white font-bold py-3.5 rounded-[12px] mb-4 shadow-sm">
                  Find Suppliers
                </button>

                <div className="bg-blue-50/50 border border-blue-100 text-[#0000EE] text-xs font-medium p-3 rounded-lg flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#0000EE] rounded-full animate-pulse"></div>
                  AI found 12 matching suppliers in Surat and Nashik...
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="bg-white py-32 px-6 border-t border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#111111]">Trusted by sourcing teams worldwide</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Our unit costs dropped 38% in the first production run. Proquoment handled specs, factory, QA, and shipping.",
                author: "Arjun S., Operations Lead"
              },
              {
                quote: "We replaced 3 sourcing agencies with one platform. The AI spec translation alone saves us weeks per project.",
                author: "Maria K., Product Director"
              },
              {
                quote: "Finding verified Indian manufacturers used to take months. Proquoment delivered quotes in 14 days.",
                author: "James T., Founder"
              }
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-[12px] p-8 shadow-sm border border-gray-200 h-full flex flex-col justify-between">
                  <p className="text-gray-600 font-medium leading-relaxed mb-8">"{t.quote}"</p>
                  <div className="text-sm font-bold text-[#111111]">{t.author}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto bg-[#111111] rounded-3xl p-16 text-center">
          <FadeIn>
            <h2 className="text-4xl font-black text-white mb-4">Ready to source from India?</h2>
            <p className="text-lg text-gray-400 font-medium mb-10">Join 200+ brands sourcing smarter with Proquoment.</p>
            <a
              href="https://www.proquoment.in/waitlist"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#0000EE] hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full transition-colors shadow-lg text-lg mb-6"
            >
              Start sourcing for free
            </a>
            <div className="text-sm text-gray-500 font-medium">
              No commitment &middot; 48-hour response
            </div>
          </FadeIn>
        </div>
      </section>

      <FooterBar />
    </div>
  );
}
