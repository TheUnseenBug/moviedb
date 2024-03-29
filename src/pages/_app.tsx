import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <Navigation />
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
