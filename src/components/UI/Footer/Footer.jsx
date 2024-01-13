import React from "react";
import MainButton from "../../Buttons/MainButton/MainButton";
import TextInput from "../../FormElements/Textinput/TextInput";
import FooterContactDetails from "./FooterContactDetails/FooterContactDetails";
import FooterLinksSection from "./FooterLinksSection/FooterLinksSection";
import GardenInfo from "./GardenInfo";

export default function Footer() {
  return (
    <footer className="w-full h-full mt-20 flex-col gap-4 bg-[#FBFBFB]">
      <div className="flex items-center justify-between">
        <div className="w-8/12 flex justify-between">
          <GardenInfo title="Carden Care" />
          <GardenInfo title="Plant Renovation" />
          <GardenInfo title="Watering Garden" />
        </div>
        <div className="w-4/12 p-4 flex flex-col gap-4">
          <h2 className="text-lg font-semibold">
            Would you like to join newsletters?
          </h2>
          <div className="w-full flex">
            <input placeholder="Enter you email address" className="w-full px-2 py-4 border" />
            <button className="px-4 py-2 text-lg text-white flex justify-center items-center bg-[#3FB339]">Join</button>
          </div>
          <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
        </div>
      </div>

      <div className="">
        <FooterContactDetails />
      </div>

      <div className="w-full border-b-2">
        <FooterLinksSection />
      </div>

      <div>
<p className="text-center text-sm p-2">© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
