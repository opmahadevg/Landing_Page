import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
  BarChart3,
  Package,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-80px" },
};

const benefits = [
  {
    icon: TrendingUp,
    title: "Steady order flow",
    desc: "Receive a consistent stream of qualified RFQs from international buyers — no cold outreach required.",
  },
  {
    icon: Globe,
    title: "Global buyer access",
    desc: "Connect with buyers from the US, EU, Middle East, and Southeast Asia who are actively sourcing from India.",
  },
  {
    icon: ShieldCheck,
    title: "Verified profiles",
    desc: "Earn a verified badge after our onboarding review. Buyers trust verified suppliers more and convert faster.",
  },
  {
    icon: Zap,
    title: "AI-powered matching",
    desc: "Our AI matches your production capabilities with the right buyers, so every RFQ you receive is relevant.",
  },
  {
    icon: Users,
    title: "Dedicated account support",
    desc: "A sourcing expert from our team handles buyer communication, negotiations, and contract coordination.",
  },
  {
    icon: BarChart3,
    title: "Performance analytics",
    desc: "Track your quote win rate, order history, buyer satisfaction scores, and revenue trends in one dashboard.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Create your supplier profile",
    desc: "Register your factory with production capabilities, certifications, MOQ, lead times, and product categories. Our team verifies your details within 48 hours.",
  },
  {
    step: "02",
    title: "Receive matched RFQs",
    desc: "When a buyer submits a sourcing request that matches your category and capacity, you get notified instantly with full product specifications.",
  },
  {
    step: "03",
    title: "Submit your quote",
    desc: "Use our structured quoting tool to submit pricing, lead time, and MOQ. No email chains — everything happens in the platform.",
  },
  {
    step: "04",
    title: "Win the order",
    desc: "If selected, our team coordinates sampling, escrow payment, and production scheduling. You focus on manufacturing — we handle the rest.",
  },
];

const stats = [
  { value: "500+", label: "Active buyers" },
  { value: "48h", label: "Avg. RFQ to quote" },
  { value: "92%", label: "Payment on time" },
  { value: "35+", label: "Product categories" },
];

const testimonials = [
  {
    quote: "We went from struggling to find international buyers to receiving 4-5 qualified RFQs every week. Proquoment changed our export game.",
    name: "Ramesh Patel",
    company: "Surat Textile Mills",
    location: "Surat, Gujarat",
    rating: 5,
  },
  {
    quote: "The escrow payment system gave us confidence to take larger orders. We've grown our export revenue by 3x in 8 months.",
    name: "Anita Sharma",
    company: "Bangalore Electronics Pvt Ltd",
    location: "Bangalore, Karnataka",
    rating: 5,
  },
  {
    quote: "Before Proquoment we had no systematic way to reach overseas buyers. Now we have a pipeline and a team that speaks for us internationally.",
    name: "Mahesh Kulkarni",
    company: "Nasik Auto Components",
    location: "Nasik, Maharashtra",
    rating: 5,
  },
];

const categories = [
  "Textiles & Garments",
  "Automotive Parts",
  "Electronics",
  "Packaging",
  "Industrial Equipment",
  "Chemicals & Plastics",
  "Furniture",
  "Food & Agriculture",
  "Leather Goods",
  "Jewelry & Accessories",
];

export default function SuppliersPage() {
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);

  const openSupplierPortal = () => {
    window.open("https://supplier.proquoment.in/", "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Proquoment<span className="text-[#000EEF]">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/#how-it-works" className="hover:text-[#000EEF] transition-colors">How it works</Link>
            <Link href="/suppliers" className="text-[#000EEF] font-semibold border-b-2 border-[#000EEF] pb-0.5">For Suppliers</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="#supplier-auth">
              <Button variant="ghost" className="font-semibold text-sm">Supplier Sign in</Button>
            </a>
            <Button
              className="bg-[#000EEF] hover:bg-[#000EEF]/90 text-white font-semibold rounded-lg px-5 text-sm"
              onClick={openSupplierPortal}
            >
              Apply as Supplier
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-28 overflow-hidden bg-gradient-to-b from-gray-50/80 to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#000EEF]/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <Badge className="bg-[#000EEF]/10 text-[#000EEF] border-[#000EEF]/20 mb-6 px-4 py-1.5 text-sm font-semibold">
              For Indian Manufacturers &amp; Exporters
            </Badge>
            <h1 className="text-[56px] leading-[1.05] font-bold tracking-tight text-gray-900 mb-6">
              Grow your exports.<br />
              <span className="text-[#000EEF]">Without the complexity.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-10 font-medium">
              Join Proquoment's verified supplier network and get matched with international buyers looking for exactly what you make — from Surat to Seattle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#000EEF] hover:bg-[#000EEF]/90 text-white rounded-xl px-8 h-14 text-base font-semibold shadow-lg shadow-[#000EEF]/20"
                onClick={openSupplierPortal}
              >
                Apply as a Supplier <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href="#supplier-auth">
                <Button size="lg" variant="outline" className="rounded-xl px-8 h-14 text-base font-semibold border-gray-200">
                  Already a supplier? Sign in
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((s) => (
              <motion.div key={s.value} variants={fadeUp} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#000EEF] mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Why suppliers choose Proquoment
            </h2>
            <p className="text-lg text-gray-600">
              We make it simple for Indian manufacturers to reach, win, and fulfil international orders.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeUp} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#000EEF]/20 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#000EEF]/8 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#000EEF]/12 transition-colors">
                  <b.icon className="w-5 h-5 text-[#000EEF]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works for suppliers */}
      <section className="py-28 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              How the supplier process works
            </h2>
            <p className="text-lg text-gray-600">From registration to your first international order in days.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-8 pb-12 last:pb-0"
              >
                {i < howItWorks.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-gray-200" />
                )}
                <div className="relative z-10 w-12 h-12 bg-[#000EEF] text-white rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-[#000EEF]/20">
                  {item.step}
                </div>
                <div className="pt-2 pb-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              We source across all categories
            </h2>
            <p className="text-gray-600">If you make it, we can find buyers for it.</p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto"
          >
            {categories.map((cat) => (
              <motion.span
                key={cat}
                variants={fadeUp}
                className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-[#000EEF]/5 hover:border-[#000EEF]/30 hover:text-[#000EEF] transition-colors cursor-default"
              >
                {cat}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-[#000EEF]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
              Suppliers across India trust Proquoment
            </h2>
            <p className="text-white/70 text-lg">Real results from manufacturers like you.</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="bg-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed mb-8 text-[15px]">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-white/60 mt-1 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5" />{t.company}
                  </div>
                  <div className="text-sm text-white/50 mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />{t.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Supplier Auth — Sign In / Sign Up */}
      <section id="supplier-auth" className="py-28 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10">
              <Badge className="bg-[#000EEF]/10 text-[#000EEF] border-[#000EEF]/20 mb-4 px-4 py-1.5 text-sm font-semibold">
                Supplier Portal
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">
                {authMode === "signin" ? "Sign in to your supplier account" : "Create a supplier account"}
              </h2>
              <p className="text-gray-500 text-sm">
                {authMode === "signin"
                  ? "Access your RFQ dashboard, quotes, and order history."
                  : "Get started and start receiving RFQs from global buyers."}
              </p>
            </motion.div>

            {/* Toggle */}
            <motion.div {...fadeUp} className="flex rounded-xl bg-white border border-gray-200 p-1 mb-6 gap-1">
              <button
                onClick={() => setAuthMode("signin")}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  authMode === "signin"
                    ? "bg-[#000EEF] text-white shadow"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setAuthMode("signup")}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  authMode === "signup"
                    ? "bg-[#000EEF] text-white shadow"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign Up
              </button>
            </motion.div>

            <motion.form
              {...fadeUp}
              onSubmit={(e) => e.preventDefault()}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 space-y-4"
            >
              {authMode === "signup" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company / Business Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Textiles Pvt Ltd"
                      autoComplete="organization"
                      className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/30 focus:border-[#000EEF] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Contact Person Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/30 focus:border-[#000EEF] transition"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Email</label>
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
                    autoComplete={authMode === "signup" ? "new-password" : "current-password"}
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

              {authMode === "signin" && (
                <div className="flex justify-end">
                  <button type="button" className="text-xs text-[#000EEF] hover:underline">Forgot password?</button>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-11 bg-[#000EEF] hover:bg-[#000EEF]/90 text-white font-semibold rounded-lg text-sm"
              >
                {authMode === "signin" ? "Sign In to Supplier Dashboard" : "Create Supplier Account"}
              </Button>

              <div className="border-t border-gray-100 pt-4 text-center">
                <p className="text-xs text-gray-500 mb-3">
                  Want to apply as a new supplier with a full profile?
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-10 rounded-lg text-sm border-[#000EEF]/30 text-[#000EEF] hover:bg-[#000EEF]/5"
                  onClick={openSupplierPortal}
                >
                  Apply via Supplier Portal <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.form>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, text: "48h review guarantee" },
                { icon: CheckCircle2, text: "No listing fee" },
                { icon: Globe, text: "Global buyer access" },
              ].map((item) => (
                <div key={item.text} className="flex flex-col items-center gap-2 text-center p-4">
                  <item.icon className="w-5 h-5 text-[#000EEF]" />
                  <span className="text-xs text-gray-500 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              Looking to buy?{" "}
              <Link href="/signin" className="text-[#000EEF] font-semibold hover:underline">
                Sign in as a Buyer
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA to supplier portal */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#000EEF]/3" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Ready to start receiving international orders?
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
              Apply through our dedicated supplier portal. Our team reviews every application within 48 hours.
            </p>
            <Button
              size="lg"
              className="bg-[#000EEF] hover:bg-[#000EEF]/90 text-white rounded-xl px-10 h-14 text-base font-semibold shadow-lg shadow-[#000EEF]/20"
              onClick={openSupplierPortal}
            >
              Apply at supplier.proquoment.in <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="font-bold text-xl tracking-tight">Proquoment.</Link>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-[#000EEF] transition-colors">Home</Link>
            <Link href="/suppliers" className="hover:text-[#000EEF] transition-colors">For Suppliers</Link>
            <Link href="/signin" className="hover:text-[#000EEF] transition-colors">Buyer Sign in</Link>
            <a href="https://www.proquoment.in/contact" target="_blank" rel="noreferrer" className="hover:text-[#000EEF] transition-colors">Contact</a>
          </div>
          <div className="text-sm text-gray-400">© 2025 Proquoment. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
