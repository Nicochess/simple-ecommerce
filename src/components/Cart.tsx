import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";
import CartItem from "./CartItem";
import { ShoppingCart } from "lucide-react";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart: React.FC<Props> = ({ setOpen }) => {
  const { cart } = useCart();
  return (
    <>
      <div
        className="fixed w-screen h-screen left-0 top-0 z-10"
        onClick={() => setOpen((prev) => !prev)}
      />
      <div
        className="absolute z-10 top-12 right-10 w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 rounded"
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
      >
        <button
          className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Close cart</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mt-4 space-y-6">
          <ul className="space-y-4">
            {cart?.attributes?.products ? (
              cart?.attributes?.products.map((item) => <CartItem item={item} />)
            ) : (
              <div className="flex justify-center items-center font-medium h-10 gap-2 opacity-80">
                <ShoppingCart className="h-5 w-5" /> Empty Cart
              </div>
            )}
          </ul>

          <div className="space-y-3 text-center">
            <Link
              href="/cart"
              onClick={() => setOpen((prev) => !prev)}
              className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
            >
              View my cart
            </Link>

            <Link
              href="/checkout"
              className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
