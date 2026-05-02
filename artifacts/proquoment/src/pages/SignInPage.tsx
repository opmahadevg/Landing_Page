import { useState, useEffect } from "react";
import { Link, useSearch } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const defaultSignup = params.get("mode") === "signup";

  const [isSignup, setIsSignup] = useState(defaultSignup);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setIsSignup(defaultSignup);
  }, [defaultSignup]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <nav className="w-full border-b border-gray-100 px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Proquoment" className="w-8 h-8 rounded-xl object-cover" />
          <span className="text-xl font-bold tracking-tight text-gray-900">Proquoment<span className="text-[#000EEF]">.</span></span>
        </Link>
        <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </nav>

      <div className="flex-1 flex">
        {/* Left panel — brand */}
        <div className="hidden lg:flex flex-col justify-between w-[480px] shrink-0 bg-[#000EEF] p-12 text-white">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold tracking-wide mb-12 border border-white/10">
              <Globe className="w-3.5 h-3.5" />
              For Buyers
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Source smarter.<br />Build faster.<br />Pay less.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Connect with vetted Indian manufacturers, get AI-powered spec translation, and manage your entire production cycle — all in one platform.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { metric: "40%", label: "Average cost savings" },
              { metric: "3x", label: "More supplier options" },
              { metric: "100%", label: "Onsite QA coverage" },
            ].map((stat) => (
              <div key={stat.metric} className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10">
                <div className="text-2xl font-bold">{stat.metric}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel — buyer form */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000EEF]/8 text-[#000EEF] text-xs font-semibold tracking-wide mb-6 border border-[#000EEF]/15">
                Buyer Account
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {isSignup ? "Create your buyer account" : "Sign in to Proquoment"}
              </h1>
              <p className="text-gray-500 text-sm">
                {isSignup
                  ? "Start sourcing with AI-powered procurement."
                  : "Access your sourcing dashboard."}
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {isSignup && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/30 focus:border-[#000EEF] transition"
                  />
                </div>
              )}

              {isSignup && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your company or brand"
                    autoComplete="organization"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/30 focus:border-[#000EEF] transition"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/30 focus:border-[#000EEF] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 8 characters"
                    autoComplete={isSignup ? "new-password" : "current-password"}
                    className="w-full h-11 px-4 pr-11 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/30 focus:border-[#000EEF] transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {!isSignup && (
                <div className="flex justify-end">
                  <button type="button" className="text-xs text-[#000EEF] hover:underline">
                    Forgot password?
                  </button>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-11 bg-[#000EEF] hover:bg-[#000EEF]/90 text-white font-semibold rounded-lg text-sm mt-2"
              >
                {isSignup ? "Sign up & Start Sourcing" : "Sign In"}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => setIsSignup(!isSignup)}
                className="text-[#000EEF] font-semibold hover:underline"
              >
                {isSignup ? "Sign in" : "Sign up"}
              </button>
            </p>

            <div className="border-t border-gray-100 mt-8 pt-6 text-center">
              <p className="text-sm text-gray-500">
                Are you a supplier?{" "}
                <a
                  href="https://supplier.proquoment.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#000EEF] font-semibold hover:underline"
                >
                  Go to Supplier Portal
                </a>
              </p>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
              By continuing, you agree to Proquoment's{" "}
              <a href="#" className="underline">Terms of Service</a> and{" "}
              <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
