import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
    <div className="space-y-3 text-gray-600 leading-relaxed text-sm">{children}</div>
  </div>
);

export default function PrivacyPolicyPage() {
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
      <section className="pt-20 pb-12 bg-gradient-to-b from-gray-50/80 to-white border-b border-gray-100">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <motion.div {...fadeUp}>
            <Badge className="bg-[#000EEF]/10 text-[#000EEF] border-[#000EEF]/20 mb-5 px-4 py-1.5 text-sm font-semibold inline-flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" /> Legal
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-400">Last updated: May 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-6 max-w-3xl"
        >
          <Section title="1. Introduction">
            <p>
              Proquoment ("we", "us", or "our") is an AI-powered B2B procurement platform that connects international
              buyers with verified Indian manufacturers and exporters. We are committed to protecting the personal and
              business information you share with us.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              proquoment.in or use any of our platform portals (buyer.proquoment.in, supplier.proquoment.in,
              form.proquoment.in). Please read this policy carefully.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li><strong>Account information:</strong> Name, email address, phone number, company name, job title, and country of operation.</li>
              <li><strong>Business information:</strong> Product categories, sourcing requirements, manufacturing capabilities, export history, certifications, and financial references.</li>
              <li><strong>Contact form submissions:</strong> Inquiry type, messages, and how you heard about us.</li>
              <li><strong>Communication data:</strong> Emails, messages, and correspondence between buyers and suppliers on the platform.</li>
              <li><strong>Transaction data:</strong> Quotation requests, purchase orders, and related procurement activity.</li>
            </ul>
            <p className="mt-3">We also automatically collect certain technical data when you use our platform:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>IP address, browser type, device identifiers, and operating system</li>
              <li>Pages visited, time spent, and clickstream data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Operate, maintain, and improve the Proquoment platform</li>
              <li>Match buyers with relevant verified Indian suppliers using our AI systems</li>
              <li>Process and fulfil sourcing requests and procurement workflows</li>
              <li>Verify supplier credentials, certifications, and export capacity</li>
              <li>Communicate with you about your account, orders, and platform updates</li>
              <li>Send transactional emails and, where you've opted in, marketing communications</li>
              <li>Detect, prevent, and address fraud, abuse, or security incidents</li>
              <li>Comply with applicable legal obligations in India and the buyer's jurisdiction</li>
            </ul>
          </Section>

          <Section title="4. Sharing of Information">
            <p>
              We do not sell your personal information. We may share your data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li><strong>Between buyers and suppliers:</strong> When a sourcing request is initiated, relevant business details are shared with matched suppliers to facilitate quotations.</li>
              <li><strong>Service providers:</strong> We work with trusted third-party providers for cloud hosting, email delivery, analytics, and payment processing who are bound by confidentiality agreements.</li>
              <li><strong>Legal compliance:</strong> We may disclose information if required by Indian law, court order, or government authority.</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale, your data may be transferred as part of that transaction.</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your personal and business data for as long as your account is active or as needed to provide
              services, comply with legal obligations, resolve disputes, and enforce agreements. When data is no longer
              required, we securely delete or anonymise it.
            </p>
          </Section>

          <Section title="6. Security">
            <p>
              We implement industry-standard technical and organisational measures to protect your information, including
              TLS encryption for data in transit, database access controls, and regular security audits. However, no
              method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Access, correct, or update your personal information</li>
              <li>Request deletion of your data ("right to be forgotten")</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Withdraw consent at any time (without affecting prior processing)</li>
              <li>Lodge a complaint with a relevant data protection authority</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:Proquoment@gmail.com" className="text-[#000EEF] hover:underline font-medium">
                Proquoment@gmail.com
              </a>.
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>
              We use cookies and similar tracking technologies to analyse usage, remember preferences, and improve
              platform performance. You can control cookie settings through your browser; however, disabling certain
              cookies may affect platform functionality. We do not use cookies for cross-site advertising.
            </p>
          </Section>

          <Section title="9. International Transfers">
            <p>
              Proquoment is headquartered in Gurgaon, Haryana, India. Your data may be processed and stored in India
              and in other countries where our service providers operate. By using our platform, you consent to such
              transfers in accordance with applicable data protection laws.
            </p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>
              Our platform is intended solely for business use by individuals aged 18 and above. We do not knowingly
              collect personal information from minors. If you believe a minor has provided us with data, please contact
              us immediately.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy periodically. When we do, we will revise the "Last updated" date at the
              top of this page and, for material changes, notify you via email or a prominent notice on the platform.
              Continued use of Proquoment after changes constitutes acceptance of the revised policy.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have any questions or concerns about this Privacy Policy, please reach out:</p>
            <div className="mt-3 bg-gray-50 rounded-xl border border-gray-100 p-5 space-y-1.5">
              <p><strong>Proquoment</strong></p>
              <p>Gurgaon, Haryana, India</p>
              <p>
                Email:{" "}
                <a href="mailto:Proquoment@gmail.com" className="text-[#000EEF] hover:underline">
                  Proquoment@gmail.com
                </a>
              </p>
              <p>Phone: +91 79820 65422 / +91 70119 77280</p>
            </div>
          </Section>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Proquoment" className="w-8 h-8 rounded-xl object-cover" />
            <span className="font-bold text-xl tracking-tight">Proquoment<span className="text-[#000EEF]">.</span></span>
          </Link>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <Link href="/privacy-policy" className="text-[#000EEF] font-semibold">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#000EEF] transition-colors">Terms of Service</Link>
          </div>
          <div className="text-sm text-gray-400">© 2025 Proquoment. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
