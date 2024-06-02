import React from "react";
import Image from "next/image";

type ContentBoxProps = {
  imgSrc: string;
  altText: string;
  header: string;
  content: string;
  reverse?: boolean;
  className?: string;
};

export default function ContentBox({
  imgSrc,
  altText,
  header,
  content,
  reverse = false,
  className,
}: ContentBoxProps) {
  return (
    <div
      className={`flex items-center w-full ${
        reverse ? "flex-row-reverse" : "flex-row"
      } ${className}`} // Add className here
    >
      <div className="relative h-96 w-96">
        <Image
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          alt={altText}
          className="rounded-lg"
        />
      </div>
      <div className={` w-1/2 mx-auto text-center"}`}>
        <h2 className="text-5xl font-bold mb-2">{header}</h2>
        <p className="text-2xl">{content}</p>
      </div>
    </div>
  );
}

