import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const [mode, setMode] = useState<"buyer" | "supplier">("buyer");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <nav className="w-full border-b border-gray-100 px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Proquoment<span className="text-[#000EEF]">.</span>
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
              Industrial Supply Chain Intelligence
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

        {/* Right panel — form */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md"
          >
            {/* Mode toggle */}
            <div className="flex rounded-xl bg-gray-100 p-1 mb-8 gap-1">
              <button
                onClick={() => setMode("buyer")}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  mode === "buyer"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                I am a Buyer
              </button>
              <button
                onClick={() => { setMode("supplier"); setIsSignup(true); }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  mode === "supplier"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                I am a Supplier
              </button>
            </div>

            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {mode === "buyer"
                  ? isSignup ? "Create your account" : "Sign in to Proquoment"
                  : "Join as a Supplier"}
              </h1>
              <p className="text-gray-500 text-sm">
                {mode === "buyer"
                  ? isSignup
                    ? "Start sourcing with AI-powered procurement."
                    : "Access your sourcing dashboard."
                  : "Register to receive RFQs from global buyers."}
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              {(isSignup || mode === "supplier") && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {mode === "supplier" ? "Company / Business Name" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    placeholder={mode === "supplier" ? "e.g. Rajesh Textiles Pvt Ltd" : "Your full name"}
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/30 focus:border-[#000EEF] transition"
                  />
                </div>
              )}

              {mode === "supplier" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Manufacturing Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Surat, Gujarat"
                      className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/30 focus:border-[#000EEF] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Categories</label>
                    <select className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/30 focus:border-[#000EEF] transition bg-white">
                      <option value="">Select primary category</option>
                      <option>Textiles &amp; Garments</option>
                      <option>Automotive Parts</option>
                      <option>Electronics</option>
                      <option>Packaging</option>
                      <option>Industrial Equipment</option>
                      <option>Chemicals &amp; Plastics</option>
                      <option>Food &amp; Agriculture</option>
                      <option>Other</option>
                    </select>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {mode === "supplier" ? "Business Email" : "Email address"}
                </label>
                <input
                  type="email"
                  placeholder={mode === "supplier" ? "you@business.com" : "you@company.com"}
                  className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/30 focus:border-[#000EEF] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 8 characters"
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

              {mode === "supplier" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Annual Production Capacity</label>
                  <select className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/30 focus:border-[#000EEF] transition bg-white">
                    <option value="">Select capacity</option>
                    <option>Less than 1,000 units/month</option>
                    <option>1,000 – 10,000 units/month</option>
                    <option>10,000 – 100,000 units/month</option>
                    <option>100,000+ units/month</option>
                  </select>
                </div>
              )}

              {!isSignup && mode === "buyer" && (
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
                {mode === "supplier"
                  ? "Apply as Supplier"
                  : isSignup
                  ? "Create Account"
                  : "Sign In"}
              </Button>
            </form>

            {mode === "buyer" && (
              <p className="text-center text-sm text-gray-500 mt-6">
                {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  onClick={() => setIsSignup(!isSignup)}
                  className="text-[#000EEF] font-semibold hover:underline"
                >
                  {isSignup ? "Sign in" : "Sign up"}
                </button>
              </p>
            )}

            {mode === "supplier" && (
              <p className="text-center text-sm text-gray-500 mt-6">
                Already registered as a supplier?{" "}
                <button
                  onClick={() => setIsSignup(false)}
                  className="text-[#000EEF] font-semibold hover:underline"
                >
                  Sign in
                </button>
              </p>
            )}

            <p className="text-center text-xs text-gray-400 mt-8">
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
