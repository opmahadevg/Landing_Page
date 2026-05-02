import { Link } from "wouter";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#050A1F] border-b border-white/10 px-8 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-[#000EEF]" />
        <Link href="/" className="font-mono text-sm tracking-widest font-bold text-white">PROQUOMENT</Link>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Link href="/#how-it-works" className="hover:text-white transition-colors">How it works</Link>
        <Link href="/#platform" className="hover:text-white transition-colors">Platform</Link>
        <Link href="/suppliers" className="hover:text-white transition-colors">Suppliers</Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/sign-in" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Sign in</Link>
        <a
          href="https://www.proquoment.in/waitlist"
          target="_blank"
          rel="noreferrer"
          className="bg-[#000EEF] hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-[4px] transition-colors"
        >
          Request Access
        </a>
      </div>
    </nav>
  );
}
