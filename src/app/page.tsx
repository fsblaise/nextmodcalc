"use client";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { Image } from "@nextui-org/image";
import firebaseLogo from "../../public/Firebase_Logo.png";
import nextLogo from "../../public/Nextjs-logo.png";
import reactLogo from "../../public/React-logo.png";
import tailwindLogo from "../../public/Tailwind_CSS_logo.png";
import nextUILogo from "../../public/nextui-logo.png";
import { Card } from "@nextui-org/card";
import NextImage from "next/image";
import useWindowDimensions from "@/hooks/windowDimensions";

export default function Home() {
  const { width, height } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  let itemsPerPage = 3;
  if (width < 768) {
    itemsPerPage = 1;
  } else if (width < 1024) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 3;
  }

  const imgArray = [
    <Image
      key={0}
      as={NextImage}
      src={nextLogo.src}
      alt="Next.js"
      width={300}
      height={300}
    ></Image>,
    <Image
      key={1}
      as={NextImage}
      src={reactLogo.src}
      alt="React.js"
      width={300}
      height={300}
    ></Image>,
    <Image
      key={2}
      as={NextImage}
      src={firebaseLogo.src}
      alt="Firebase"
      width={300}
      height={300}
    ></Image>,
    <Image
      key={3}
      as={NextImage}
      src={tailwindLogo.src}
      alt="TailwindCSS"
      width={300}
      height={300}
    ></Image>,
    <Image
      key={4}
      as={NextImage}
      src={nextUILogo.src}
      alt="NextUI"
      width={300}
      height={300}
    ></Image>,
  ];
  const numPages = Math.ceil(imgArray.length / itemsPerPage);

  const subArrays = Array.from({ length: numPages }, (_, i) =>
    imgArray.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
  );

  return (
    <div className="w-full h-[calc(100vh-65px)] snap-y snap-mandatory overflow-x-hidden">
      <div className="w-full h-[calc(100vh-65px)] flex items-center justify-center text-[3rem] font-bold text-center bg-black snap-start">
        <div id="asd">
          Welcome to
          <span className="text-[var(--secondary)]"> N</span>
          <span>ext</span>
          <span className="text-[var(--primary)]">M</span>
          <span>od</span>
          <span className="text-[var(--tertiary)]">C</span>
          <span>alc</span>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-65px)] flex items-center justify-center text-[2rem] font-bold text-center snap-start p-6">
        <span className="w-full lg:w-[50%]">
          Calculate and design multiblock structures for minecraft mods
        </span>
      </div>
      <div className="w-full h-[calc(50vh-65px)] flex items-center justify-center text-[2rem] font-bold text-center snap-start p-6">
        Wrapper 1
      </div>
      <div className="w-full h-[calc(50vh-65px)] text-[2rem] font-bold snap-start p-6">
        Technologies
        <div className="relative w-full h-full flex flex-nowrap justify-center items-center overflow-x-hidden">
          {subArrays.map((subArray, i) => (
            <div
              key={i}
              className={`absolute h-full w-full flex flex-nowrap justify-center gap-4 py-8 px-2`}
              style={{
                transform: `translateX(${100 * (i - activeIndex)}%)`, // Slide-in animation
                transition: "transform 600ms ease-in-out", // Apply transition to the container
              }}
            >
              {subArray.map((item, j) => (
                <Card
                  key={j}
                  className="justify-center items-center p-8 dark:bg-foreground"
                >
                  {item}
                </Card>
              ))}
            </div>
          ))}
          <Button
            isIconOnly
            variant="light"
            className="!absolute top-2/4 left-0 -translate-y-2/4 transition-all rounded-full z-10"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex(Math.max(activeIndex - 1, 0))}
          >
            <span
              className={`material-symbols-outlined ${
                activeIndex === 0 ? "text-tertiary/50" : "text-tertiary"
              }`}
            >
              arrow_back_ios_new
            </span>
          </Button>
          <Button
            isIconOnly
            variant="light"
            className="!absolute top-2/4 right-0 -translate-y-2/4 transition-all rounded-full z-10"
            disabled={activeIndex === numPages - 1}
            onClick={() =>
              setActiveIndex(Math.min(activeIndex + 1, numPages - 1))
            }
          >
            <span
              className={`material-symbols-outlined ${
                activeIndex === numPages - 1
                  ? "text-tertiary/50"
                  : "text-tertiary"
              }`}
            >
              arrow_forward_ios
            </span>
          </Button>
          <div className="absolute bottom-4 z-50 flex gap-2">
            {new Array(numPages).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
