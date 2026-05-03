import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
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

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Proquoment" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              Proquoment<span className="text-[#000EEF]">.</span>
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back to home</span><span className="sm:hidden">Home</span>
          </Link>
        </div>
      </nav>
      {/* Hero */}
      <section className="pt-12 sm:pt-20 pb-8 sm:pb-12 bg-gradient-to-b from-gray-50/80 to-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
          <motion.div {...fadeUp}>
            <Badge className="bg-[#000EEF]/10 text-[#000EEF] border-[#000EEF]/20 mb-5 px-4 py-1.5 text-sm font-semibold inline-flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" /> Legal
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-sm text-gray-400">Last updated: March 2026</p>
          </motion.div>
        </div>
      </section>
      {/* Content */}
      <section className="py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-4 sm:px-6 max-w-3xl"
        >
          <Section title="1. Agreement to Terms">
            <p>
              By accessing or using the Proquoment platform — including proquoment.in, buyer.proquoment.in,
              supplier.proquoment.in, and form.proquoment.in — you agree to be bound by these Terms of Service and our
              Privacy Policy. If you do not agree to these terms, please do not use the platform.
            </p>
            <p>
              Proquoment is operated by Proquoment (referred to as "we", "us", or "our"), headquartered in Gurgaon,
              Haryana, India. These terms are governed by the laws of India.
            </p>
          </Section>

          <Section title="2. Platform Description">
            <p>
              Proquoment is a B2B procurement technology platform that uses artificial intelligence to help
              international buyers source products from verified Indian manufacturers and exporters. Our services
              include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>AI-assisted product specification and supplier matching</li>
              <li>Verified supplier discovery and vetting</li>
              <li>Quotation management and procurement workflow tools</li>
              <li>Trade documentation support and communication facilitation</li>
            </ul>
            <p className="mt-3">
              We act as a technology intermediary and do not ourselves manufacture, sell, or take title to any goods
              transacted through the platform.
            </p>
          </Section>

          <Section title="3. Eligibility & Account Registration">
            <p>
              To use Proquoment, you must be at least 18 years of age and have the legal authority to enter into
              binding commercial agreements on behalf of yourself or your organisation.
            </p>
            <p>
              When registering, you agree to provide accurate, current, and complete information. You are responsible
              for maintaining the confidentiality of your account credentials and for all activity that occurs under
              your account. Notify us immediately at Proquoment@gmail.com if you suspect any unauthorised use.
            </p>
          </Section>

          <Section title="4. Buyer Obligations">
            <p>As a buyer on the Proquoment platform, you agree to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Provide accurate and complete sourcing requirements when submitting requests</li>
              <li>Engage with suppliers in good faith and respond to quotations in a timely manner</li>
              <li>Honour confirmed purchase orders and payment obligations</li>
              <li>Comply with all applicable import regulations, customs requirements, and trade laws in your jurisdiction</li>
              <li>Not use the platform to solicit supplier contact details for purposes outside of the platform</li>
            </ul>
          </Section>

          <Section title="5. Supplier Obligations">
            <p>As a supplier on the Proquoment platform, you agree to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Provide accurate information about your manufacturing capabilities, certifications, and product quality</li>
              <li>Maintain all required business licences, export authorisations, and quality certifications</li>
              <li>Respond to buyer enquiries within the timelines specified on the platform</li>
              <li>Deliver goods that conform to agreed specifications, quality standards, and delivery schedules</li>
              <li>Not circumvent the platform to transact directly with buyers introduced through Proquoment</li>
              <li>Comply with all applicable Indian export regulations and international trade laws</li>
            </ul>
          </Section>

          <Section title="6. Prohibited Conduct">
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Use the platform for any fraudulent, deceptive, or unlawful purpose</li>
              <li>Submit false, misleading, or fabricated business credentials or certifications</li>
              <li>Attempt to gain unauthorised access to other accounts or platform systems</li>
              <li>Scrape, harvest, or systematically extract platform data without written permission</li>
              <li>Introduce malware, viruses, or malicious code into the platform</li>
              <li>Engage in price manipulation, bid rigging, or anti-competitive behaviour</li>
              <li>Harass, threaten, or abuse other platform users</li>
            </ul>
            <p className="mt-3">
              Violation of these prohibitions may result in immediate suspension or termination of your account and may
              be reported to relevant authorities.
            </p>
          </Section>

          <Section title="7. Fees & Payments">
            <p>
              Proquoment may charge platform fees for access to premium features, verified supplier introductions, or
              transaction facilitation. Fee structures will be clearly communicated before any charge is applied.
            </p>
            <p>
              All fees are exclusive of applicable taxes including GST. Payment terms are specified in your individual
              subscription or service agreement. Late payments may incur interest at the rate permitted under Indian
              law.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>
              All content on the Proquoment platform — including the AI matching technology, software, design, text,
              logos, and data — is the intellectual property of Proquoment and is protected by applicable copyright,
              trademark, and trade secret laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable licence to use the platform for its intended
              business purpose. You may not copy, reproduce, distribute, or create derivative works from our content
              without written consent.
            </p>
          </Section>

          <Section title="9. Disclaimers & Limitation of Liability">
            <p>
              The platform is provided "as is" and "as available" without warranties of any kind, express or implied.
              We do not warrant that the platform will be uninterrupted, error-free, or free of viruses.
            </p>
            <p>
              Proquoment acts as an intermediary and is not a party to any transaction between buyers and suppliers. We
              are not liable for the quality, safety, legality, or delivery of goods; buyer's ability to pay; or
              supplier's ability to manufacture and export.
            </p>
            <p>
              To the maximum extent permitted by law, Proquoment's total liability to you for any claim arising from
              use of the platform shall not exceed the fees paid by you to Proquoment in the three months preceding the
              claim.
            </p>
          </Section>

          <Section title="10. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Proquoment and its officers, directors, employees, and
              agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising out of
              your use of the platform, your violation of these Terms, or your infringement of any third-party rights.
            </p>
          </Section>

          <Section title="11. Termination">
            <p>
              Either party may terminate the relationship at any time. We reserve the right to suspend or terminate
              your access without notice if we determine that you have violated these Terms, engaged in fraudulent
              activity, or pose a risk to other users or the platform.
            </p>
            <p>
              Upon termination, your right to use the platform ceases immediately. Provisions that by their nature
              should survive termination — including intellectual property, disclaimers, indemnification, and dispute
              resolution — will remain in effect.
            </p>
          </Section>

          <Section title="12. Governing Law & Dispute Resolution">
            <p>
              These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out
              of or in connection with these Terms shall first be attempted to be resolved through good-faith
              negotiation.
            </p>
            <p>
              If negotiation fails, disputes shall be submitted to binding arbitration under the Arbitration and
              Conciliation Act, 1996, with the seat of arbitration in Gurgaon, Haryana, India. The language of
              arbitration shall be English.
            </p>
          </Section>

          <Section title="13. Changes to Terms">
            <p>
              We may modify these Terms at any time. When we make material changes, we will update the "Last updated"
              date and notify you via email or a platform announcement. Your continued use of Proquoment after changes
              take effect constitutes your acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="14. Contact Us">
            <p>For questions about these Terms of Service, please contact us:</p>
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
            <Link href="/privacy-policy" className="hover:text-[#000EEF] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-[#000EEF] font-semibold">Terms of Service</Link>
          </div>
          <div className="text-sm text-gray-400">© 2026 Proquoment. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
