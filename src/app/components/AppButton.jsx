import Link from "next/link";

const AppButton = ({
  appURL = "",
  appName = "",
  description = "",
  target = "",
}) => (
  <Link
    rel="noopener noreferrer"
    target={target && target}
    href={appURL}
    className="group flex flex-col items-center justify-between rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  >
    {appName && (
      <h2 className="mb-3 text-2xl font-semibold">
        {appName}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
    )}
    {description && (
      <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
    )}
  </Link>
);
export default AppButton;
