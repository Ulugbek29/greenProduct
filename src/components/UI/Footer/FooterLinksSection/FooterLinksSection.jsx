import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import CreditCards from "../../../../assets/images/payment.png";

export default function FooterLinksSection() {
  return (
    <div className="flex p-4">
      <div className="w-8/12 flex items-center">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">My Account</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a>My Account</a>
            </li>
            <li>
              <a>Our Stores</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Speacials</a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">Help & Guide</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a>Help Center</a>
            </li>
            <li>
              <a>How to Buy</a>
            </li>
            <li>
              <a>Shipping & Delivery</a>
            </li>
            <li>
              <a>Product Policy</a>
            </li>
            <li>
              <a>How to Return</a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a>House Plants</a>
            </li>
            <li>
              <a>Potter Plants</a>
            </li>
            <li>
              <a>Seeds</a>
            </li>
            <li>
              <a>Small Plants</a>
            </li>
            <li>
              <a>Accessories</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-4/12 flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Social Media</h2>
          <div className="flex gap-4  text-[#3FB339]">
            <div className="p-3 border-2 rounded-lg border-[#3FB339]">
              <FacebookIcon />
            </div>
            <div className="p-3 border-2 rounded-lg border-[#3FB339]">
              <FacebookIcon />
            </div>
            <div className="p-3 border-2 rounded-lg border-[#3FB339]">
              <FacebookIcon />
            </div>
            <div className="p-3 border-2 rounded-lg border-[#3FB339]">
              <FacebookIcon />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">We Accept</h2>
          <img src={CreditCards} />
        </div>
      </div>
    </div>
  );
}
