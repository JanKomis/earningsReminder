import { auth } from "@/auth";
import ContentBox from "@/components/homepage/ContentBox";
import { HomePageCarousel } from "@/components/homepage/HomePageCarousel";
import { StockCarousel } from "@/components/homepage/StockCarousel";

import { Button } from "@/components/ui/button";

import Image from "next/image";

export default async function Home() {
  return (
    <div className="w-11/12 mx-auto flex flex-col min-h-screen">
      <header className="py-4">
        <h1 className="text-8xl font-bold">Stock reminder</h1>
        <p className="text-2xl font-bold">
          Application for analyzing 500+ stock titles with the option to set
          custom email alerts.
        </p>
      </header>
      <main className="grid grid-cols-4 gap-4">
        <ContentBox
          imgSrc="/images/find_stock.webp"
          altText="Some stocks"
          header="Choose stocks"
          content="Choose from over 500 stocks that have weekly options listed on the CBOE. End of day data is sourced from Yahoo Finance."
          reverse={false}
          className="col-span-3 col-start-1"
        />
        <ContentBox
          imgSrc="/images/analyse.webp"
          altText="Analyse stocks"
          header="Analyse stocks"
          content="Compare stocks both among themselves and against historical data based on basic statistical methods."
          reverse={true}
          className="col-span-3 col-start-2"
        />
        <ContentBox
          imgSrc="/images/email.webp"
          altText="Email reminder"
          header="Set email reminder"
          content="Did any stocks make significant moves, or are there upcoming earnings announcements? Set up email alerts to ensure you don't miss anything."
          reverse={false}
          className="col-span-3 col-start-1"
        />
      </main>
      <footer className="text-right py-4">
        <p className="">
          ©2024 by <b>Jan Komiš</b>
        </p>
      </footer>
    </div>
  );
}

