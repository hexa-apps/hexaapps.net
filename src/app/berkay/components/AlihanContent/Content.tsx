import React from "react";
import ContentTitle from "./ContentTitle";
import ContentParagraph from "./ContentParagraph";
import SocialGrid from "../SocialGrid/SocialGrid";
import Link from "next/link";

const Content = () => {
  return (
    <div className="h-fit flex flex-col pt-12 pb-6 max-w-screen-sm mx-auto px-6  gap-4">
      <ContentTitle title="Hello, I'm Alihan 🛰️" />
      <ContentParagraph>
        I am a full stack web developer specialized in Javascript technologies.
        Experienced in building POC projects turns into MVP.
      </ContentParagraph>
      <ContentParagraph>
        I work professionaly as web developer and got my hands on chrome
        extensions and recently openai. I am experienced building web based{" "}
        <Link
          target="_blank"
          className="underline"
          href={"https://harita.istanbul"}
        >
          GIS applications.
        </Link>
      </ContentParagraph>
      <ContentParagraph>
        If you need more information about me, you can reach me on the following
        platforms.
      </ContentParagraph>
      <div className="text-center font-bold py-2">
        Full-Stack Web Developer | Javascript | Nodejs | React | OpenAI
      </div>
      <SocialGrid
        socialLinks={[
          {
            url: "https://www.linkedin.com/in/alihankeskin/",
            icon: "https://picsum.photos/id/237/200/300.jpg",
            name: "Linkedin",
            type: "linkedin",
          },
          {
            url: "https://github.com/Ardelon",
            icon: "https://picsum.photos/id/237/200/300.jpg",
            name: "Github",
            type: "github",
          },
          {
            url: "https://medium.com/@akeskinw",
            icon: "https://picsum.photos/id/237/200/300.jpg",
            name: "Medium",
            type: "medium",
          },
          // {
          //   url: "https://twitter.com/akeskindev",
          //   icon: "https://picsum.photos/id/237/200/300.jpg",
          //   name: "Twitter",
          //   type: "twitter",
          // },
          // {
          //   url: "https://www.instagram.com/100times.blog?igsh=MTl4bGFxZjdsZnBlZg%3D%3D&utm_source=qr",
          //   icon: "https://picsum.photos/id/237/200/300.jpg",
          //   name: "Instagram",
          //   type: "instagram",
          // },
          // {
          //   url: "https://open.spotify.com/intl-tr/artist/3WeMjON0dGGhqyD1Wmo4Sl",
          //   icon: "https://picsum.photos/id/237/200/300.jpg",
          //   name: "spotify",
          //   type: "spotify",
          // },
          {
            url: "https://chromewebstore.google.com/detail/tab-tracker/effjhkgfakdenmlpfeadfcdofghpffki",
            icon: "https://picsum.photos/id/237/200/300.jpg",
            name: "webstore",
            type: "webstore",
          },
        ]}
      />
    </div>
  );
};

export default Content;
