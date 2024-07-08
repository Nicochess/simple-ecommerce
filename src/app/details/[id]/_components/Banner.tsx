import Image from "next/image";
import React from "react";

const Banner = ({ image }: any) => {
  return (
    <div>
      <Image
        src={image}
        width={380}
        height={400}
        layout="responsive"
        alt="Product Banner"
        className="rounded-lg object-cover"
      />
    </div>
  );
};

export default Banner;
