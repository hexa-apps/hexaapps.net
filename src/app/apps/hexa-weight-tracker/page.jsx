import Link from "next/link";

export const metadata = {
  title: "Hexa Weight Tracker",
  description: "Track your weight with an app that's as simple as it gets.",
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
            Hexa Weight Tracker
          </span>
          <Link
            rel="noopener noreferrer"
            href="https://apps.apple.com/us/app/hexa-weight-tracker/id6443335021"
            target="_blank"
            className="cursor-pointer"
          >
            <span className="ml-2 text-white px-4 py-1 flex items-center justify-center text-lg bg-white bg-opacity-10 rounded-full">
              Download
            </span>
          </Link>
        </div>
      </header>
    </div>
  );
}
