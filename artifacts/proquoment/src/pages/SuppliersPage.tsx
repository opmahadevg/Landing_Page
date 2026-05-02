import React, { useState } from "react";
import { Link } from "wouter";
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";

export default function SuppliersPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitted");
  };

  const scrollToRegister = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050A1F] text-white font-sans selection:bg-[#000EEF] selection:text-white">
      <NavBar />

      {/* Hero */}
      <section className="relative py-32 px-8 flex flex-col items-center justify-center text-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,14,239,0.15)_0%,transparent_70%)]" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6 uppercase">FOR SUPPLIERS</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Proquoment for Suppliers
          </h1>
          <p className="text-2xl font-bold text-gray-300 mb-6">
            Long-term partnerships with international buyers
          </p>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            Private supplier network. Pre-qualified brands only. No marketplace. No listings. We only contact you when there's a real project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToRegister}
              className="bg-[#000EEF] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-[4px] transition-colors w-full sm:w-auto"
            >
              Register as a Supplier
            </button>
            <Link
              href="/sign-in"
              className="border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold px-8 py-4 rounded-[4px] transition-all w-full sm:w-auto"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="w-full bg-[#000EEF] py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-8 items-center text-white font-mono text-sm font-bold tracking-widest uppercase">
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

      {/* Who we work with */}
      <section className="bg-[#F7F8FC] text-[#050A1F] py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6 uppercase">CRITERIA</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">Suppliers we work with</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "Are manufacturers, not trading companies",
              "Have export experience with international brands",
              "Can meet consistent quality and delivery timelines",
              "Prefer long-term, repeat production over one-off orders",
              "Comfortable providing transparent pricing and documentation",
              "Seeking long-term, demand-driven opportunities (not marketplace listings)"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#000EEF] text-white flex items-center justify-center shrink-0 text-sm mt-0.5">&check;</div>
                <div className="text-lg font-medium leading-relaxed">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After you apply */}
      <section className="bg-[#050A1F] py-32 px-8 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6 uppercase">PROCESS</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">What happens after you apply</h2>
          
          <div className="space-y-12 mb-16">
            {[
              { num: "01", text: "We review your information" },
              { num: "02", text: "We follow up if clarification is needed" },
              { num: "03", text: "Added to supplier database if approved" },
              { num: "04", text: "We reach out when there is a relevant opportunity" }
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-8 border-b border-white/10 pb-8">
                <div className="text-6xl md:text-8xl font-black text-[#000EEF]/40 select-none">{step.num}</div>
                <div className="text-2xl md:text-3xl font-bold">{step.text}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-[#000EEF]/10 border border-[#000EEF]/30 rounded-[4px] p-6 text-center text-blue-200 font-medium">
            Note: After approval, we only contact suppliers when there is a project with a clear fit.
          </div>
        </div>
      </section>

      {/* Supplier Signup Form */}
      <section id="register" className="bg-[#F7F8FC] text-[#050A1F] py-32 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-6 uppercase">REGISTER</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Apply to join the network</h2>
          <p className="text-xl text-[#050A1F]/70 font-medium mb-12">
            We request comprehensive information upfront to reduce follow-ups and match you to the right opportunities faster.
          </p>

          {formStatus === "submitted" ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6">&check;</div>
              <h3 className="text-2xl font-black mb-4">Application received.</h3>
              <p className="text-lg text-gray-600 font-medium">We'll review your details and be in touch within 5 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-black/5 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold">Company Name <span className="text-red-500">*</span></label>
                  <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold">Your Name + Role <span className="text-red-500">*</span></label>
                  <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all" />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-bold">Country <span className="text-red-500">*</span></label>
                  <select required className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all appearance-none">
                    <option value="">Select country...</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="China">China</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold">City / Region <span className="text-red-500">*</span></label>
                  <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold">Manufacturing Specialty <span className="text-red-500">*</span></label>
                  <select required className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all appearance-none">
                    <option value="">Select specialty...</option>
                    <option value="Garments">Garments &amp; Apparel</option>
                    <option value="Textiles">Industrial Textiles</option>
                    <option value="Canvas">Canvas &amp; Bags</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Automotive">Automotive Parts</option>
                    <option value="Packaging">Packaging</option>
                    <option value="Home">Home Goods</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold">Annual Production Capacity <span className="text-red-500">*</span></label>
                  <select required className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all appearance-none">
                    <option value="">Select capacity...</option>
                    <option value="U500">Under $500K</option>
                    <option value="500-2M">$500K&ndash;$2M</option>
                    <option value="2M-10M">$2M&ndash;$10M</option>
                    <option value="10M+">$10M+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold">Minimum Order Quantity <span className="text-red-500">*</span></label>
                  <input required type="text" placeholder="e.g. 500 units" className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold">Export Experience <span className="text-red-500">*</span></label>
                  <select required className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all appearance-none">
                    <option value="">Select experience...</option>
                    <option value="<1">Less than 1 year</option>
                    <option value="1-3">1&ndash;3 years</option>
                    <option value="3-5">3&ndash;5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold">Email Address <span className="text-red-500">*</span></label>
                  <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold">Phone / WhatsApp <span className="text-red-500">*</span></label>
                  <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold">Brief about your factory <span className="text-red-500">*</span></label>
                <textarea required rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all resize-none"></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-[#000EEF] hover:bg-blue-700 text-white font-bold py-4 rounded-[4px] transition-colors text-lg shadow-lg">
                  Submit Application
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  By submitting you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Testimonials from suppliers */}
      <section className="bg-[#050A1F] py-32 border-t border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee flex gap-8 items-stretch">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="w-[450px] whitespace-normal bg-white/5 border border-white/10 p-8 rounded-xl shrink-0">
                  <div className="text-[#000EEF] text-4xl font-serif leading-none mb-4">&ldquo;</div>
                  <p className="text-lg font-medium text-gray-300 mb-6">Our cooperation has been incredibly valuable. The team's proactive approach and dedication to mutual success stands out.</p>
                  <div className="text-sm font-mono text-gray-500">&mdash; Richard, China</div>
                </div>
                <div className="w-[450px] whitespace-normal bg-white/5 border border-white/10 p-8 rounded-xl shrink-0">
                  <div className="text-[#000EEF] text-4xl font-serif leading-none mb-4">&ldquo;</div>
                  <p className="text-lg font-medium text-gray-300 mb-6">A genuinely positive experience. The sourcing team's responsiveness and professionalism make every collaboration smooth.</p>
                  <div className="text-sm font-mono text-gray-500">&mdash; Aftab, Pakistan</div>
                </div>
                <div className="w-[450px] whitespace-normal bg-white/5 border border-white/10 p-8 rounded-xl shrink-0">
                  <div className="text-[#000EEF] text-4xl font-serif leading-none mb-4">&ldquo;</div>
                  <p className="text-lg font-medium text-gray-300 mb-6">Proquoment focuses on long-term production, not single orders. This helps us plan capacity.</p>
                  <div className="text-sm font-mono text-gray-500">&mdash; Antonio, Mexico</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#050A1F] py-32 px-8 border-t-4 border-[#000EEF]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Interested in working with Proquoment?</h2>
          <p className="text-xl text-gray-400 mb-12 font-medium">
            If you believe your factory aligns with our standards and long-term approach, we'd love to learn more.
          </p>
          <button
            onClick={scrollToRegister}
            className="inline-block bg-[#000EEF] hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-[4px] transition-colors text-lg shadow-[0_0_40px_rgba(0,14,239,0.3)]"
          >
            Register as a Supplier
          </button>
        </div>
      </section>

      <FooterBar />
    </div>
  );
}
