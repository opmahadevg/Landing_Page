import React, { useState } from "react";
import { Link } from "wouter";
import { Check, CheckCircle } from "lucide-react";
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
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#0000EE] selection:text-white">
      <NavBar />

      {/* Hero */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden border-b border-[#E5E5E5] flex items-center justify-center">
        {/* Animated Galaxy Background */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ background: "radial-gradient(ellipse at 20% 50%, #1a1a6e 0%, #0a0a3e 40%, #000020 70%, #000010 100%)" }}
        >
          {/* Particles */}
          <div className="particle" style={{ left: "10%", animationDelay: "0s" }} />
          <div className="particle" style={{ left: "20%", top: "20%", animationDelay: "2s" }} />
          <div className="particle" style={{ left: "30%", top: "80%", animationDelay: "4s" }} />
          <div className="particle" style={{ left: "50%", top: "40%", animationDelay: "1s" }} />
          <div className="particle" style={{ left: "70%", top: "70%", animationDelay: "5s" }} />
          <div className="particle" style={{ left: "80%", top: "30%", animationDelay: "3s" }} />
          <div className="particle" style={{ left: "90%", top: "60%", animationDelay: "6s" }} />
        </div>
        
        <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center">
          <div className="font-bold text-[#0000EE] mb-4 text-lg">Proquoment for Suppliers</div>
          <h1 className="text-3xl md:text-4xl font-black text-[#111111] mb-6 leading-tight">
            Long-term partnerships with international buyers
          </h1>
          <p className="text-[17px] text-gray-500 mb-10 font-medium leading-relaxed">
            Private supplier network for long-term production.<br />
            Pre-qualified brands only. No marketplace. No listings.
          </p>
          <button
            onClick={scrollToRegister}
            className="bg-[#0000EE] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-md text-[17px]"
          >
            Register as a supplier
          </button>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full bg-[#111111] py-4 overflow-hidden flex whitespace-nowrap border-b border-white/10">
        <div className="animate-marquee flex gap-12 items-center text-white text-sm font-medium">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex gap-12">
              <span>Our cooperation has been incredibly valuable. — Richard, China</span>
              <span className="text-gray-600">&middot;</span>
              <span>A genuinely positive experience. — Aftab, Pakistan</span>
              <span className="text-gray-600">&middot;</span>
              <span>Focuses on long-term production. — Antonio, Mexico</span>
              <span className="text-gray-600">&middot;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Who we work with */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-[#111111] mb-16">Suppliers we work with</h2>
          
          <div className="space-y-6">
            {[
              "Are manufacturers, not trading companies",
              "Have export experience with international brands",
              "Can meet consistent quality and delivery timelines",
              "Prefer long-term repeat production over one-off orders",
              "Comfortable with transparent pricing and documentation",
              "Seeking demand-driven opportunities, not marketplace listings"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0000EE]/10 text-[#0000EE] flex items-center justify-center shrink-0">
                  <Check size={16} strokeWidth={3} />
                </div>
                <div className="text-[17px] font-medium text-[#111111]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens after you apply */}
      <section className="bg-[#F7F7F7] py-32 px-6 border-y border-[#E5E5E5]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-[#111111] text-center mb-20">What happens after you apply</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { num: "01", text: "We review your information" },
              { num: "02", text: "We follow up if clarification is needed" },
              { num: "03", text: "Added to supplier database if approved" },
              { num: "04", text: "We reach out when there is a relevant opportunity" }
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="text-3xl font-black text-[#0000EE] mb-6">{step.num}</div>
                <div className="text-[17px] font-bold text-[#111111]">{step.text}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center text-gray-500 font-medium">
            After approval, we only contact suppliers when there is a project with a clear fit.
          </div>
        </div>
      </section>

      {/* Supplier Signup Form */}
      <section id="register" className="bg-white py-32 px-6">
        <div className="max-w-2xl mx-auto">
          {formStatus === "submitted" ? (
            <div className="bg-white border border-gray-200 rounded-3xl p-16 shadow-md text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={40} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-black mb-4">Application received.</h3>
              <p className="text-lg text-gray-500 font-medium">We'll review and be in touch within 5 business days.</p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-md p-10 md:p-14 border border-gray-100">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-black text-[#111111] mb-4">Apply to join the network</h2>
                <p className="text-[16px] text-gray-500 font-medium">
                  We request comprehensive information upfront to match you to the right opportunities.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#111111]">Company Name</label>
                  <input required type="text" className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px]" />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#111111]">Your Name and Role</label>
                  <input required type="text" className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[14px] font-bold text-[#111111]">Country</label>
                    <select required className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px] appearance-none">
                      <option value="">Select...</option>
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
                    <label className="block text-[14px] font-bold text-[#111111]">City / Region</label>
                    <input required type="text" className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#111111]">Manufacturing Specialty</label>
                  <select required className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px] appearance-none">
                    <option value="">Select...</option>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[14px] font-bold text-[#111111]">Annual Production Capacity</label>
                    <select required className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px] appearance-none">
                      <option value="">Select...</option>
                      <option value="U500">Under $500K</option>
                      <option value="500-2M">$500K&ndash;$2M</option>
                      <option value="2M-10M">$2M&ndash;$10M</option>
                      <option value="10M+">$10M+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[14px] font-bold text-[#111111]">Minimum Order Quantity</label>
                    <input required type="text" className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#111111]">Export Experience</label>
                  <select required className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px] appearance-none">
                    <option value="">Select...</option>
                    <option value="<1">Less than 1 year</option>
                    <option value="1-3">1&ndash;3 years</option>
                    <option value="3-5">3&ndash;5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[14px] font-bold text-[#111111]">Email Address</label>
                    <input required type="email" className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px]" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[14px] font-bold text-[#111111]">Phone / WhatsApp</label>
                    <input required type="text" className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#111111]">Brief about your factory</label>
                  <textarea required rows={4} className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all resize-none text-[15px]"></textarea>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full bg-[#0000EE] hover:bg-blue-700 text-white font-bold py-4 rounded-full transition-colors text-[16px] shadow-sm">
                    Submit Application
                  </button>
                  <p className="text-center text-[13px] text-gray-500 mt-6 font-medium">
                    By submitting you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <FooterBar />
    </div>
  );
}
