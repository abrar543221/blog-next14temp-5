import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function Banner({
  title,
  image,
  badge,
  category,
  author,
  published_at,
  href,
}) {
  return (
    <Link href={href || ""}>
      <FullContainer className="scale-105">
        <Image
          src={image}
          alt="Background Image"
          priority={true}
          fill={true}
          loading="eager"
          className="-z-10 w-full h-full object-cover absolute top-0"
        />
        <FullContainer className="h-screen  md:h-[70vh] lg:h-[65vh] xl:h-[58vh] p-10 bg-black/30 text-center">
          <div className="flex items-center flex-col justify-end w-10/12 h-full -ml-10 mb-6">
            <div className="bg-white px-10 py-5 w-6/12">
              {category && <Badge>{category}</Badge>}
              <h1 className="font-bold text-xl capitalize max-w-screen-md mt-3">
                {title}
              </h1>
              {author && (
                <div className="flex items-center justify-center font-medium gap-4 mt-2 text-gray-500 whitespace-nowrap">
                  <p className="text-xs">{author}</p> -{" "}
                  <p className="text-xs">{published_at}</p>
                </div>
              )}
            </div>
          </div>
        </FullContainer>
      </FullContainer>
    </Link>
  );
}
