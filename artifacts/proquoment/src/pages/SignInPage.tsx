import React, { useState } from "react";
import { Link } from "wouter";
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
import { Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050A1F] text-white font-sans selection:bg-[#000EEF] selection:text-white">
      <NavBar />

      <main className="flex-1 relative flex items-center justify-center p-8 overflow-hidden">
        {/* Background Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: "linear-gradient(rgba(0,14,239,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,14,239,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative z-10 w-full max-w-md bg-white text-[#050A1F] rounded-xl shadow-2xl p-8 md:p-10 border border-black/5">
          {submitted ? (
            <div className="text-center py-8">
              <div className="font-mono text-xs font-bold tracking-widest text-[#000EEF] mb-4 uppercase">INVITE ONLY</div>
              <h2 className="text-2xl font-black mb-4">Platform access is currently invite-only.</h2>
              <p className="text-gray-600 mb-8 font-medium">Join the waitlist to get early access when we expand our capacity.</p>
              <a
                href="https://www.proquoment.in/waitlist"
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-[#000EEF] hover:bg-blue-700 text-white font-bold py-3 rounded-[4px] transition-colors shadow-md"
              >
                Join Waitlist
              </a>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-bold text-gray-500 hover:text-[#050A1F]"
              >
                &larr; Back to sign in
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center text-center mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-[#000EEF]" />
                  <span className="font-mono text-sm tracking-widest font-bold">PROQUOMENT</span>
                </div>
                <h1 className="text-2xl font-black tracking-tight mb-2">Sign in to your account</h1>
                <p className="text-sm text-gray-500 font-medium">
                  New to Proquoment? <a href="https://www.proquoment.in/waitlist" target="_blank" rel="noreferrer" className="text-[#000EEF] hover:underline font-bold">Request access</a>
                </p>
              </div>

              <div className="h-px w-full bg-gray-200 mb-8" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Email address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-bold text-gray-700">Password</label>
                    <a href="#" className="text-xs font-bold text-[#000EEF] hover:underline">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-[4px] px-4 py-3 pr-12 focus:outline-none focus:border-[#000EEF] focus:ring-1 focus:ring-[#000EEF] transition-all" 
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#000EEF] hover:bg-blue-700 text-white font-bold py-3 rounded-[4px] transition-colors shadow-md mt-2">
                  Sign in
                </button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
                <div className="relative flex justify-center"><span className="bg-white px-4 text-xs font-bold text-gray-400 uppercase">OR</span></div>
              </div>

              <Link 
                href="/suppliers#register"
                className="block w-full text-center border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-[#050A1F] font-bold py-3 rounded-[4px] transition-colors"
              >
                Sign in as Supplier
              </Link>
            </>
          )}
        </div>
      </main>

      <FooterBar />
    </div>
  );
}
