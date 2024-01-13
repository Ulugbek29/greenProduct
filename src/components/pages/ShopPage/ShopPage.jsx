import React from "react";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import Footer from "../../UI/Footer/Footer";
import ShopForm from "./ShopForm";

export default function ShopPage() {
  return (
    <div>
    <div className="mb-8">
      <div className="py-8">
        <BreadCrumbs />
      </div>
      <ShopForm />
    </div>
      <Footer />
    </div>
  );
}
