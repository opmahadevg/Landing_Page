import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2,
  User,
  ChevronDown,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const inquiryTypes = [
  "I want to source a product",
  "I want to become a supplier",
  "Partnership / Integration",
  "Press & Media",
  "Investor Relations",
  "General Enquiry",
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email us",
    value: "Proquoment@gmail.com",
    href: "mailto:Proquoment@gmail.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 79820 65422",
    href: "tel:+917982065422",
  },
  {
    icon: Phone,
    label: "Call us (alternate)",
    value: "+91 70119 77280",
    href: "tel:+917011977280",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Gurgaon, Haryana, India",
    href: "https://maps.google.com/?q=Gurgaon,Haryana,India",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.proquoment.in",
    href: "https://www.proquoment.in",
  },
];

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/proquoment",
    color: "hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/30",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    href: "https://twitter.com/proquoment",
    color: "hover:bg-gray-900/8 hover:text-gray-900 hover:border-gray-300",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/proquoment",
    color: "hover:bg-pink-500/10 hover:text-pink-600 hover:border-pink-200",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@Proquoment",
    color: "hover:bg-red-500/10 hover:text-red-600 hover:border-red-200",
  },
];

const emptyForm = {
  full_name: "",
  email: "",
  company: "",
  phone: "",
  inquiry_type: "",
  country: "",
  message: "",
  referral: "",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  const set = (key: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: supabaseError } = await supabase.from("contacts").insert({
      full_name: form.full_name,
      email: form.email,
      company: form.company || null,
      phone: form.phone || null,
      inquiry_type: form.inquiry_type,
      country: form.country || null,
      message: form.message,
      referral: form.referral || null,
    });

    setLoading(false);

    if (supabaseError) {
      setError("Something went wrong. Please try again or email us directly.");
      console.error(supabaseError);
    } else {
      setSubmitted(true);
      setForm(emptyForm);
    }
  };

  const inputClass =
    "w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000EEF]/25 focus:border-[#000EEF] transition";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-18 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Proquoment" className="w-9 h-9 rounded-xl object-cover" />
            <span className="text-2xl font-bold tracking-tight">
              Proquoment<span className="text-[#000EEF]">.</span>
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-50/80 to-white border-b border-gray-100">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <motion.div {...fadeUp}>
            <Badge className="bg-[#000EEF]/10 text-[#000EEF] border-[#000EEF]/20 mb-5 px-4 py-1.5 text-sm font-semibold">
              Get in touch
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-5">
              We'd love to hear from you
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Whether you're a buyer looking to source smarter, a supplier wanting to join our network, or just want to learn more — we're here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">

            {/* Left — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Message received!</h2>
                  <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
                    Thanks for reaching out. Our team typically responds within 1 business day.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-lg border-gray-200"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        <User className="w-3.5 h-3.5 inline mr-1.5 text-gray-400" />
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.full_name}
                        onChange={set("full_name")}
                        placeholder="Your full name"
                        autoComplete="name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        <Mail className="w-3.5 h-3.5 inline mr-1.5 text-gray-400" />
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@company.com"
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        <Building2 className="w-3.5 h-3.5 inline mr-1.5 text-gray-400" />
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={set("company")}
                        placeholder="Your company name"
                        autoComplete="organization"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        <Phone className="w-3.5 h-3.5 inline mr-1.5 text-gray-400" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="+1 234 567 8900"
                        autoComplete="tel"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      <MessageSquare className="w-3.5 h-3.5 inline mr-1.5 text-gray-400" />
                      What can we help you with? <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={form.inquiry_type}
                        onChange={set("inquiry_type")}
                        className="w-full h-11 px-4 pr-10 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#000EEF]/25 focus:border-[#000EEF] transition"
                      >
                        <option value="" disabled>Select an inquiry type…</option>
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Country / Region
                    </label>
                    <input
                      type="text"
                      value={form.country}
                      onChange={set("country")}
                      placeholder="e.g. United States, Germany, UAE…"
                      autoComplete="country-name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tell us what you're looking for, what you manufacture, or any questions you have…"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#000EEF]/25 focus:border-[#000EEF] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      How did you hear about us?
                    </label>
                    <div className="relative">
                      <select
                        value={form.referral}
                        onChange={set("referral")}
                        className="w-full h-11 px-4 pr-10 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#000EEF]/25 focus:border-[#000EEF] transition"
                      >
                        <option value="">Select an option…</option>
                        <option>LinkedIn</option>
                        <option>Google Search</option>
                        <option>Twitter / X</option>
                        <option>Instagram</option>
                        <option>Word of mouth</option>
                        <option>News / Press</option>
                        <option>Trade show / Event</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full h-12 bg-[#000EEF] hover:bg-[#000EEF]/90 text-white font-semibold rounded-lg text-sm shadow-lg shadow-[#000EEF]/20 disabled:opacity-70"
                  >
                    {loading ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</>
                    ) : (
                      <><Send className="w-4 h-4 mr-2" /> Send Message</>
                    )}
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form you agree to our{" "}
                    <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
                    We typically respond within 1 business day.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Right — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Contact details */}
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Contact details</h3>
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center shrink-0 group-hover:border-[#000EEF]/30 group-hover:bg-[#000EEF]/5 transition-all">
                      <item.icon className="w-4 h-4 text-[#000EEF]" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-400 mb-0.5">{item.label}</div>
                      <div className="text-sm font-semibold text-gray-800 group-hover:text-[#000EEF] transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-5">Follow us</h3>
                <div className="space-y-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-600 transition-all ${s.color}`}
                    >
                      <s.icon className="w-4 h-4" />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div className="bg-[#000EEF] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-white/80">We're actively responding</span>
                </div>
                <p className="text-2xl font-bold mb-2">Under 24 hours</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Average response time for buyer enquiries. Supplier applications are reviewed within 48 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100 bg-white mt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Proquoment" className="w-8 h-8 rounded-xl object-cover" />
            <span className="font-bold text-xl tracking-tight">Proquoment<span className="text-[#000EEF]">.</span></span>
          </Link>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <Link href="/privacy-policy" className="hover:text-[#000EEF] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#000EEF] transition-colors">Terms of Service</Link>
          </div>
          <div className="text-sm text-gray-400">© 2025 Proquoment. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
