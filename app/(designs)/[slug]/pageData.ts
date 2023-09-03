import { StaticImageData } from "next/image";
// images for web-design page
import express from "/public/assets/web-design/desktop/image-express.jpg";
import transfer from "/public/assets/web-design/desktop/image-transfer.jpg";
import builder from "/public/assets/web-design/desktop/image-builder.jpg";
import blogr from "/public/assets/web-design/desktop/image-blogr.jpg";
import photon from "/public/assets/web-design/desktop/image-photon.jpg";
import camp from "/public/assets/web-design/desktop/image-transfer.jpg";
// images for app-design page
import airfilter from "/public/assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "/public/assets/app-design/desktop/image-eyecam.jpg";
import faceit from "/public/assets/app-design/desktop/image-faceit.jpg";
import loopstudios from "/public/assets/app-design/desktop/image-loopstudios.jpg";
import todo from "/public/assets/app-design/desktop/image-todo.jpg";
// images for graphic-design page
import boxedWater from "/public/assets/graphic-design/desktop/image-boxed-water.jpg";
import change from "/public/assets/graphic-design/desktop/image-change.jpg";
import science from "/public/assets/graphic-design/desktop/image-science.jpg";

export const slugs = ["web-design", "app-design", "graphic-design"] as const;

export type Slug = (typeof slugs)[number];

type Card = {
  image: StaticImageData;
  title: string;
  description: string;
};

type PageData = {
  title: string;
  introduction: string;
  cards: Card[];
};

type AllPagesData = {
  [K in Slug]: PageData;
};

const allPagesData: AllPagesData = {
  "web-design": {
    title: "web design",
    introduction:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    cards: [
      {
        image: express,
        title: "express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        image: transfer,
        title: "transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
      },
      {
        image: photon,
        title: "photon",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        image: builder,
        title: "builder",
        description:
          "Connects users with local contractors based on their location",
      },
      {
        image: blogr,
        title: "blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
      },
      {
        image: camp,
        title: "camp",
        description:
          "Get expert training in coding, data, design, and digital marketing",
      },
    ],
  },
  "app-design": {
    title: "app design",
    introduction:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    cards: [
      {
        image: airfilter,
        title: "airfilter",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        image: eyecam,
        title: "eyecam",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
      },
      {
        image: faceit,
        title: "faceit",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
      },
      {
        image: todo,
        title: "todo",
        description:
          "A todo app that features cloud sync with light and dark mode",
      },
      {
        image: loopstudios,
        title: "loopstudios",
        description: "A VR experience app made for Loopstudios",
      },
    ],
  },
  "graphic-design": {
    title: "graphic design",
    introduction:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    cards: [
      {
        image: change,
        title: "tim brown",
        description:
          "A book cover designed for Tim Brown’s new release, ‘Change’",
      },
      {
        image: boxedWater,
        title: "boxed water",
        description: "A simple packaging concept made for Boxed Water",
      },
      {
        image: science,
        title: "science!",
        description:
          "A poster made in collaboration with the Federal Art Project",
      },
    ],
  },
};

export default allPagesData;
