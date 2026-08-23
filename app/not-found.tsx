import Link from "next/link";
import { NavigateSVG } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#0F1E16] text-[#A5D6A7]">
      <h1 className="text-6xl font-light">404</h1>
      <p className="mt-4 text-xl font-light">Page Not Found</p>
      <Link
        href="/"
        className="mt-8 flex items-center gap-2 rounded-full border border-[#66BB6A] px-6 py-3 text-sm text-[#E8F5E9] transition-all hover:bg-[#66BB6A] hover:text-[#0F1E16]"
      >
        <span>Return Home</span>
        <NavigateSVG fill="currentColor" />
      </Link>
    </div>
  );
}
