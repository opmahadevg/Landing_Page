import { Link } from "wouter";

export default function FooterBar() {
  return (
    <footer className="bg-[#050A1F] px-8 py-16 border-t border-[#000EEF]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#000EEF]" />
            <span className="font-mono text-lg tracking-widest font-bold text-white">PROQUOMENT</span>
          </div>
          <p className="text-sm text-gray-500 font-medium">Industrial Procurement Intelligence</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-12 md:gap-24 text-sm">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-white mb-2">Platform</div>
            <Link href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">How it works</Link>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-white mb-2">Suppliers</div>
            <Link href="/suppliers#register" className="text-gray-400 hover:text-white transition-colors">Register</Link>
            <Link href="/sign-in" className="text-gray-400 hover:text-white transition-colors">Sign in</Link>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-white mb-2">Legal</div>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 font-mono">
          &copy; 2025 Proquoment Technologies Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
}
