"use client"

import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import Slides from "./Slides";
import SlideInfo from "./SlideInfo";
import Controls from "./Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20  h-full w-full">
          
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-5 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-5 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "https://res.cloudinary.com/dtnbwgpca/image/upload/v1722202831/Cooloors/animal-lizard-nature-multi-colored-close-up-generative-ai_pvihqw.jpg",
    location: "Welcome To",
    description:
      "Where our focus is grounded in the pursuit of creating financial stability for young people.",
    title: "The Greater Kenya Organisation",
  },
  {
    img: "https://res.cloudinary.com/dtnbwgpca/image/upload/v1722202863/Cooloors/liquid-purple-art-painting-abstract-colorful-background-with-color-splash-paints-modern-art_ufs8kt.jpg",
    title: "10,000 Tree Planting Project",
    description:
      "We aim to plant 10,000 trees this year, creating greener spaces and promoting environmental sustainability",
    location: "Introducing Our",
  },
  {
    img: "https://res.cloudinary.com/dtnbwgpca/image/upload/v1722202796/Cooloors/abstract-multi-colored-confetti-falling-festive-celebration-generative-ai_ucvtyb.jpg",
    title: "Children and Nature",
    description:
      "With 1,000,000 KES pledged, we are helping school children in need while fostering a greener, healthier Kenya through our tree planting initiative",
    location: "Supporting Our",
  },
  {
    img: "https://res.cloudinary.com/dtnbwgpca/image/upload/v1722202701/Cooloors/top-view-holi-color-white-background-with-blank-circle_t0mq53.jpg",
    title: "Plant For The Future",
    description:
      "Our community is working side by side, planting trees to create a sustainable and beautiful environment for future generations",
    location: "Together We",
  },
];

const initData = sliderData[0];
