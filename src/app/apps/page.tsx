import Link from "next/link";

export const metadata = {
  title: "Apps",
  description: "Apps",
};

export default function Apps() {
  return (
    <div className="md:px-24 px-4">
      <header className="h-24 px-5 flex items-center">
        <Link rel="noopener noreferrer" href="/">
          <h2 className="mb-3 text-2xl font-semibold cursor-pointer">
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>
          </h2>
        </Link>
        <div className="flex items-center justify-end grow h-full italic opacity-30">Apps</div>
      </header>
      <main className="pb-24 text-4xl ">
        <div className="text-center flex flex-col lg:grid lg:grid-cols-3 gap-2">
          <Link
            rel="noopener noreferrer"
            href="/apps/find-my-thing"
            className="group flex flex-col items-center justify-between rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Find My Thing{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find your thing with this app.
            </p>
          </Link>
          <Link
            rel="noopener noreferrer"
            href="/apps/hexa-weight-tracker"
            className="group flex flex-col items-center justify-between rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Hexa Weight Tracker{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Track your weight with this app.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
