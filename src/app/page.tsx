import Image from "next/image";
import { gradingAQ } from "./lib/gradingAQ";
// import dynamic from 'next/dynamic';
// const LocationDisplay = dynamic(() => import('./components/LocationDisplay'), { ssr: false });
import TitleBlock from "./components/TitleBlock";

export default async function Home() {
  const result = await gradingAQ();
  const displayStyles = "w-40 h-40 rounded-full inline-flex items-center justify-center text-white text-xl font-bold fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex font-sans flex-col items-center justify-center gap-6">
        <div>
          <TitleBlock />
        </div>
        <div className="flex content-start gap-6">
          <div className={`${result ? result.updatedStyle : displayStyles}`}>
            <p className="text-lg font-bold">{result?.aqi}</p>
          </div>
        </div>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
      </footer>
    </div>
  );
}
