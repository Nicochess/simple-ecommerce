import { Flower } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  item: Product;
};

const ProductItem: React.FC<Props> = ({ item }) => {
  return (
    <Link href={`/details/${item.id}`}>
      <div className="hover:border-gray-400 rounded-lg border-transparent border cursor-pointer">
        <div>
          <Image
            alt="item"
            src={item.attributes.banner.data.attributes.url}
            className="rounded-t-lg"
            layout="responsive"
            width={300}
            height={200}
          />
        </div>
        <div className="p-3">
          <h2 className="font-medium text-lg">{item.attributes.title}</h2>
          <div className="flex items-center gap-2">
            <Flower className="text-gray-400 h-4 w-4" />
            <p className="text-sm text-gray-400">{item.attributes.category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
