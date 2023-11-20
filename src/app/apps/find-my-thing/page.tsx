import Link from "next/link";
import screenshot from "./assets/screenshot.png";
import blackUS from "./assets/appstore/US/black.svg";
import whiteUS from "./assets/appstore/US/white.svg";
import Image from "next/image";

export const metadata = {
  title: "Find My Thing",
  description: "iOS app to help you find your things",
};

export default function Apps() {
  return (
    <div className="md:px-24 px-4 select-none h-[100svh]">
      <header className="h-24 px-5 flex items-center">
        <Link rel="noopener noreferrer" href="/apps">
          <h2 className="mb-3 text-2xl font-semibold cursor-pointer">
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>
          </h2>
        </Link>
        <div className="flex items-center justify-end grow h-full">
          <span className="hidden sm:flex italic opacity-30">
            Find My Thing
          </span>
          <Link
            rel="noopener noreferrer"
            href="https://apps.apple.com/us/app/find-my-thing/id1636212988"
            target="_blank"
            className="cursor-pointer"
          >
            <span className="ml-2 text-gray-500 px-4 py-1 flex items-center justify-center text-lg bg-gray-700 dark:bg-white dark:bg-opacity-10 dark:text-white bg-opacity-10 rounded-full">
              Download
            </span>
          </Link>
        </div>
      </header>
      <main className="pb-24 flex xs:flex-row flex-col-reverse xs:gap-24 gap-6 w-full">
        <div className="xs:w1/3 w-11/12 ">
          <Image src={screenshot} alt="" />
        </div>
        <div className="text-lg text-gray-950 text-opacity-90 dark:text-white dark:text-opacity-90 ">
          <h1 className="py-5 text-4xl font-bold">A new way to save things</h1>
          <p className="py-3 text-lg">
            Text recognition, location save, open with Apple Maps, and more.
          </p>
          <Link
            rel="noopener noreferrer"
            href={"https://apps.apple.com/us/app/find-my-thing/id1636212988"}
            target="_blank"
            className="flex py-2"
          >
            <Image src={blackUS} alt="" />
          </Link>
        </div>
      </main>
    </div>
  );
}
