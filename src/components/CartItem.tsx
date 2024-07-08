import { Trash2 } from "lucide-react";
import React from "react";

type Props = {
  item: Product;
};

const CartItem: React.FC<Props> = ({ item }) => {
  return (
    <li className="flex items-center gap-4">
      <img
        src={item.attributes.banner.data.attributes.url}
        alt=""
        className="size-16 rounded object-cover"
      />

      <div className="w-full">
        <h3 className="text-sm text-gray-900 font-medium">
          {item.attributes.title}
        </h3>

        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Category: </dt>
            <dd className="inline">{item.attributes.category}</dd>
          </div>
        </dl>
      </div>
      <button className="cursor-pointer">
        <Trash2 className="h-4 w-4" />
      </button>
    </li>
  );
};

export default CartItem;
