import React from "react";
import ContentTitle from "./ContentTitle";
import ContentParagraph from "./ContentParagraph";
import SocialGrid from "../SocialGrid/SocialGrid";

const Content = () => {
  return (
    <div className="h-fit flex flex-col pt-12 pb-6 max-w-screen-sm mx-auto px-6  gap-4">
      <ContentTitle title="Hello, I'm Alihan 🛰️" />
      <ContentParagraph>
        I&apos;m a geomatics engineer who loves to code. I work professionaly as
        web developer and got my hands on chrome extensions and recently openai.
      </ContentParagraph>
      <ContentParagraph>
        I like to develop applications that practical and runs smoothly. Music,
        sports and philosophy are the forefront of my interests.
      </ContentParagraph>
      <ContentParagraph>
        If you need more information about me, you can reach me on the following
        platforms.
      </ContentParagraph>
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
          {
            url: "https://twitter.com/akeskindev",
            icon: "https://picsum.photos/id/237/200/300.jpg",
            name: "Twitter",
            type: "twitter",
          },
          {
            url: "https://www.instagram.com/100times.blog?igsh=MTl4bGFxZjdsZnBlZg%3D%3D&utm_source=qr",
            icon: "https://picsum.photos/id/237/200/300.jpg",
            name: "Instagram",
            type: "instagram",
          },
          {
            url: "https://open.spotify.com/intl-tr/artist/3WeMjON0dGGhqyD1Wmo4Sl",
            icon: "https://picsum.photos/id/237/200/300.jpg",
            name: "spotify",
            type: "spotify",
          },
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
