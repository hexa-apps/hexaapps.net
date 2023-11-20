import Script from "next/script";
import AppButton from "./components/AppButton";

export default function Home() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-49BZHMMWXC"></Script>
      <Script id="google-analytics">
        {`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
		
			gtag('config', 'G-49BZHMMWXC');
		`}
      </Script>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
        <div className="before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] font-sans font-bold text-3xl overflow-hidden">
          <span className="mr-[-6px]">HEXA</span>
          <span className="ml-[-6px]">APPS</span>
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <AppButton
            appURL="/apps"
            appName="Apps"
            description="Find in-depth information about our applications and extensions."
          />
          <AppButton
            appURL="/alihan"
            appName="Alihan"
            description="Simple Frontend Developer."
          />
          <AppButton
            appURL="/berkay"
            appName="Berkay"
            description="Simple Frontend Developer."
          />
        </div>
      </main>
    </>
  );
}
