"use client";

import { createContext, Dispatch, useContext, useState } from "react";

type Attributes = {
  products: Product[];
};

export type Cart = {
  attributes: Attributes;
  id: number;
};

type cartContextType = {
  cart: Cart;
  addCartItem: (item: Product) => void;
  setCart: React.SetStateAction<Dispatch<Cart>>;
};

const defaultCart: cartContextType = {
  cart: {} as Cart,
  addCartItem: () => {},
  setCart: () => {},
};

const CartContext = createContext<cartContextType>(defaultCart);

export const useCart = () => {
  return useContext(CartContext);
};

type Props = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<Cart>({} as Cart);

  const addCartItem = (item: Product) => {
    setCart((prev: Cart) => {
      if (!prev) {
        return {
          attributes: {
            products: [item],
          },
        } as Cart;
      }

      return {
        ...prev,
        attributes: {
          ...prev?.attributes,
          products: [...prev?.attributes.products, item],
        },
      } as Cart;
    });
  };

  const value = {
    cart,
    setCart,
    addCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
