import Link from "next/link";

export const metadata = {
  title: "Hexa Weight Tracker",
  description: "Track your weight with an app that's as simple as it gets.",
};

export default function Apps() {
  return (
    <div className="md:px-24 px-4">
      <header className="h-24 px-5 flex items-center">
        <Link rel="noopener noreferrer" href="/apps">
          <h2 className="mb-3 text-2xl font-semibold cursor-pointer">
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>
          </h2>
        </Link>
        <div className="flex items-center justify-end grow h-full italic opacity-30">
          Hexa Weight Tracker
        </div>
      </header>
      <main className="pb-24 text-4xl "></main>
    </div>
  );
}
