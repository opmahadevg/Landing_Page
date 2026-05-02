import React, { useState } from "react";
import { Link } from "wouter";
import { Eye, EyeOff } from "lucide-react";
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F7] text-[#111111] font-sans selection:bg-[#0000EE] selection:text-white">
      <NavBar />

      <main className="flex-1 relative flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-sm p-10 border border-gray-100">
          
          {submitted ? (
            <div className="text-center py-4">
              <h2 className="text-2xl font-black mb-4">Platform is invite-only.</h2>
              <p className="text-gray-500 mb-8 font-medium">Join the waitlist for early access.</p>
              <a
                href="https://www.proquoment.in/waitlist"
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-[#0000EE] hover:bg-blue-700 text-white font-bold py-3.5 rounded-full transition-colors"
              >
                Join the waitlist
              </a>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-bold text-gray-400 hover:text-gray-600"
              >
                &larr; Back
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center text-center mb-8">
                <div className="font-sans text-[24px] font-bold flex items-baseline mb-6">
                  Proquoment<span className="text-[#0000EE]">.</span>
                </div>
                <h1 className="text-2xl font-black mb-3">Sign in to your account</h1>
                <p className="text-[15px] text-gray-500 font-medium">
                  New to Proquoment? <a href="https://www.proquoment.in/waitlist" target="_blank" rel="noreferrer" className="text-[#0000EE] hover:underline font-bold">Get started &rarr;</a>
                </p>
              </div>

              <div className="h-px w-full bg-gray-100 mb-8" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Email address"
                    required
                    className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px]" 
                  />
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Password"
                      required
                      className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 pr-12 focus:outline-none focus:border-[#0000EE] focus:ring-1 focus:ring-[#0000EE] transition-all text-[15px]" 
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <div className="text-right pt-1">
                    <a href="#" className="text-[13px] font-bold text-[#0000EE] hover:underline">Forgot password?</a>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#0000EE] hover:bg-blue-700 text-white font-bold py-3.5 rounded-full transition-colors mt-4">
                  Sign in
                </button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100" /></div>
                <div className="relative flex justify-center"><span className="bg-white px-4 text-[13px] font-bold text-gray-300 uppercase">OR</span></div>
              </div>

              <Link 
                href="/suppliers#register"
                className="block w-full text-center border border-gray-200 hover:bg-gray-50 text-[#111111] font-bold py-3.5 rounded-full transition-colors"
              >
                Sign in as Supplier
              </Link>
              
              <div className="mt-8 text-center text-[14px] text-gray-500 font-medium">
                Don't have an account? <a href="https://www.proquoment.in/waitlist" target="_blank" rel="noreferrer" className="text-[#0000EE] hover:underline font-bold">Get started &rarr;</a>
              </div>
            </>
          )}
        </div>
      </main>

      <FooterBar />
    </div>
  );
}
