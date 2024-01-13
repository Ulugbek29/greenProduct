import React from "react";

export default function Order({ order }) {
  return (
    <div className="flex gap-2 items-center bg-[#BFBFB]] p-2">
      <div className="w-2/12 rounded-lg overflow-hidden">
        <img src={order.thumbnail} className="w-full h-[60px] object-cover" />
      </div>
      <div className="w-6/12 flex flex-col gap-1">
        <p className="text-lg font-semibold">{order.title}</p>
        <span>Total: {order.total}</span>
      </div>

      <p className="w-2/12">(x {order.quantity})</p>

      <h2 className="w-2/12 text-xl font-semibold text-[#3FB339]">
        ${order.price}.00
      </h2>
    </div>
  );
}
