"use client";

import { Cart, useCart } from "@/context/CartContext";
import GlobalApi from "@/utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { LoaderCircle, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  product: Product;
};

const DetailsInfo: React.FC<Props> = ({ product }) => {
  const { user } = useUser();
  const { cart, addCartItem } = useCart();
  const router = useRouter();

  type UserType = typeof user;

  const addProductToCart = async (user: NonNullable<UserType>) => {
    const body = {
      data: {
        username: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        products: [product],
      },
    };
    try {
      let res;

      if (cart?.id) {
        res = await GlobalApi.addToCart(cart.id, {
          data: {
            products: [...cart.attributes.products, product],
          },
        });

        addCartItem(product);
      } else {
        res = await GlobalApi.createCart(body);
        addCartItem(product);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [isAddingProductToCart, setIsAddingProductToCart] =
    React.useState(false);

  const onAddToCart = async () => {
    if (user) {
      setIsAddingProductToCart(true);
      await addProductToCart(user);
      setIsAddingProductToCart(false);
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{product.attributes?.title}</h1>
      <p className="font-medium text-gray-500 italic">
        {product.attributes.category}
      </p>
      <p className="text-gray-500">
        {product.attributes.description[0].children[0].text}
      </p>
      <p className="text-3xl font-bold">$ {product.attributes.price}</p>
      <div>
        <button
          className="flex border rounded-lg gap-2 py-4 px-10 bg-teal-500 text-white"
          onClick={() => onAddToCart()}
        >
          {isAddingProductToCart ? <LoaderCircle className="animate-spin" /> : <ShoppingCart />}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DetailsInfo;
 