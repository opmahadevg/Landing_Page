import { Link } from "wouter";

export default function FooterBar() {
  return (
    <footer className="bg-[#111111] text-white px-8 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="font-sans text-2xl font-bold flex items-baseline mb-2">
            Proquoment<span className="text-[#0000EE]">.</span>
          </div>
          <p className="text-[15px] text-gray-400 font-medium">
            The world's first AI sourcing agent for Indian manufacturing.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-12 md:gap-24 text-[15px]">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-white mb-2">Platform</div>
            <Link href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">How it works</Link>
            <Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="/suppliers" className="text-gray-400 hover:text-white transition-colors">For Suppliers</Link>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Latest news</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-white mb-2">Account</div>
            <Link href="/sign-in" className="text-gray-400 hover:text-white transition-colors">Sign in</Link>
            <a href="https://www.proquoment.in/waitlist" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">Get started</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-white mb-2">Legal</div>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[14px] text-gray-500">
          &copy; 2025 Proquoment. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
