import React from "react";
import CardCareer from "@/components/card_career";

export default function career() {
  return (
    <div className="flex-col min-h-screen">
      <div className="relative z-40">
        <img
          src="/images/News.png"
          className="object-cover bg-center h-full w-full"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl md:text-4xl lg:text-5xl">
          Career
        </h1>
      </div>
      <div className="mx-12 lg:mx-24 px-6 my-4 py-4 md:py-8 lg:py-12">
        <CardCareer />
      </div>
    </div>
  );
}
