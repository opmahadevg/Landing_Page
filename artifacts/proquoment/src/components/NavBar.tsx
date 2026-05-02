import { Link } from "wouter";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#E5E5E5] px-6 h-[60px] flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="font-sans text-[20px] font-bold text-[#111111] flex items-baseline">
          Proquoment<span className="text-[#0000EE]">.</span>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-500">
        <Link href="/#how-it-works" className="hover:text-[#111111] transition-colors">How it works</Link>
        <Link href="/#pricing" className="hover:text-[#111111] transition-colors">Pricing</Link>
        <Link href="/suppliers" className="hover:text-[#111111] transition-colors">For suppliers</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link 
          href="/sign-in" 
          className="text-[#111111] text-[15px] font-medium border border-gray-300 rounded-full px-5 py-2 hover:bg-gray-50 transition-colors"
        >
          Sign in
        </Link>
        <a
          href="https://www.proquoment.in/waitlist"
          target="_blank"
          rel="noreferrer"
          className="bg-[#0000EE] hover:bg-blue-700 text-white text-[15px] font-medium px-5 py-2 rounded-full transition-colors"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
