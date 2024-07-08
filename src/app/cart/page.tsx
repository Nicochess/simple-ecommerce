"use client";

import CartItem from "@/components/CartItem";
import { useCart } from "@/context/CartContext";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const { cart } = useCart();
  const [total, setTotal] = useState(0);
  const getTotalAmount = () => {
    return cart?.attributes?.products.reduce(
      (acc, item) => acc + item.attributes.price,
      0
    );
  };

  useEffect(() => {
    if (cart) {
      setTotal(getTotalAmount());
    }
  }, [cart]);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl min-h-screen h- px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cart ? (
                cart.attributes?.products.map((item) => (
                  <CartItem item={item} />
                ))
              ) : (
                <div>Empty</div>
              )}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${total}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
