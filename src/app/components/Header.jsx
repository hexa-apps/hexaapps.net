import Link from "next/link";

const Header = ({ appName = "", appURL = "", backPath = "" }) => {
  return (
    <header className="h-24 px-5 flex items-center">
      {backPath && (
        <Link rel="noopener noreferrer" href={backPath}>
          <h2 className="mb-3 text-2xl font-semibold cursor-pointer">
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>
          </h2>
        </Link>
      )}
      <div className="flex items-center justify-end grow h-full">
        <span className="hidden sm:flex italic opacity-30">{appName}</span>
        {appURL && (
          <Link
            rel="noopener noreferrer"
            href={appURL}
            target="_blank"
            className="cursor-pointer"
          >
            <span className="ml-2 text-gray-500 px-4 py-1 flex items-center justify-center text-lg bg-gray-700 dark:bg-white dark:bg-opacity-10 dark:text-white bg-opacity-10 rounded-full">
              Download
            </span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
