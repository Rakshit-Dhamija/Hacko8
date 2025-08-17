// This template requires the Embla Auto Scroll plugin to be installed:
// npm install embla-carousel-auto-scroll

"use client";;
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { InfiniteSlider } from "./ui/infinite-slider";

const Logos3 = ({
  heading = "Trusted by these companies",

  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://shadcnblocks.com/images/block/logos/astro.svg",
      className: "h-15 w-64",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://shadcnblocks.com/images/block/logos/figma.svg",
      className: "h-15 w-64",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
      className: "h-15 w-64",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://shadcnblocks.com/images/block/logos/react.png",
      className: "h-15 w-64",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://shadcnblocks.com/images/block/logos/shadcn-ui.svg",
      className: "h-15 w-64",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://shadcnblocks.com/images/block/logos/supabase.svg",
      className: "h-15 w-64",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://shadcnblocks.com/images/block/logos/tailwind.svg",
      className: "h-4 w-64",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://shadcnblocks.com/images/block/logos/vercel.svg",
      className: "h-15 w-64",
    },
  ]
}) => {
  return (
    <section>
      <div className="">
        <div
          className="relative flex items-center justify-center w-fit overflow-hidden">
          <InfiniteSlider gap={25} className="w-fit h-fit">
            <div
              className="relative h-[180px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[180px] w-64"
              />
            </div>
            <div
              className="relative h-[180px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[180px] w-64"
              />
            </div>
            <div
              className="relative h-[180px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[180px] w-64"
              />
            </div>
            <div
              className="relative h-[180px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[180px] w-64"
              />
            </div>
            <div
              className="relative h-[180px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[180px] w-64"
              />
            </div>
            <div
              className="relative h-[180px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[180px] w-64"
              />
            </div>
          </InfiniteSlider>
        </div>
        <div
          className="relative flex items-center justify-center w-fit overflow-hidden">
          <InfiniteSlider gap={25} reverse className="w-fit h-fit">
            <div
              className="relative h-[150px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[150px] w-64"
              />
            </div>
            <div
              className="relative h-[150px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[150px] w-64"
              />
            </div>
            <div
              className="relative h-[150px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[150px] w-64"
              />
            </div>
            <div
              className="relative h-[150px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[150px] w-64"
              />
            </div>
            <div
              className="relative h-[150px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[150px] w-64"
              />
            </div>
          </InfiniteSlider>
        </div>
        <div
          className="relative flex items-center justify-center w-fit overflow-hidden">
          <InfiniteSlider gap={25} className="w-fit h-fit">
            <div
              className="relative h-[100px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[100px] w-64"
              />
            </div>
            <div
              className="relative h-[100px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[100px] w-64"
              />
            </div>
            <div
              className="relative h-[100px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[100px] w-64"
              />
            </div>
            <div
              className="relative h-[100px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[100px] w-64"
              />
            </div>
            <div
              className="relative h-[100px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[100px] w-64"
              />
            </div>
            <div
              className="relative h-[100px] w-64 px-15 bg-amber-800 shadow-md shadow-white rounded-3xl my-5"
            >
              <img
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Apple Music logo"
                className="absolute inset-0 h-[100px] w-64"
              />
            </div>
          </InfiniteSlider>
        </div>
        {/* <div
          className="relative mx-auto flex items-center justify-center w-full overflow-hidden">
          <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true })]}>
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                  <div className="mx-10 px-20 flex shrink-0 items-center  bg-red-500 justify-center">
                    <div>
                      <img src={logo.image} alt={logo.description} className={logo.className} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div> */}
      </div>
    </section>
  );
};

export { Logos3 };
