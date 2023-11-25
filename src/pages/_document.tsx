import Navigation from "@/components/navigation";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-800 w-screen h-screen overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
