import React from "react";
import SelectInput from "../../FormElements/SelectInput/SelectInput";
import TextInput from "../../FormElements/Textinput/TextInput";
import { useForm } from "react-hook-form";
import Orders from "./components/Orders/Orders";
import MainButton from "../../Buttons/MainButton/MainButton";

export default function ShopForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    console.log(value);
  };

  const foodOptions = [
    { label: "", value: "" },
    { label: "Fruits", value: "fruits" },
    { label: "Vegetables", value: "vegetables" },
    { label: "Dairy Products", value: "dairy" },
    { label: "Grains", value: "grains" },
    { label: "Proteins", value: "proteins" },
    { label: "Sweets", value: "sweets" },
  ];

  const orders = [
    {
      id: 1,
      title: "Spring and summershoes",
      price: 20,
      quantity: 3,
      total: 60,
      discountPercentage: 8.71,
      discountedPrice: 55,
      thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg",
    },
    {
      id: 2,
      title: "frock gold printed",
      price: 600,
      quantity: 3,
      total: 1800,
      discountPercentage: 15.55,
      discountedPrice: 1520,
      thumbnail: "https://cdn.dummyjson.com/product-images/43/thumbnail.jpg",
    },
    {
      id: 3,
      title: "frock gold printed",
      price: 600,
      quantity: 3,
      total: 1800,
      discountPercentage: 15.55,
      discountedPrice: 1520,
      thumbnail: "https://cdn.dummyjson.com/product-images/44/thumbnail.jpg",
    },
  ];

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-8">
        <div className="flex-[2] flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Billing Address</h2>

          <div className="flex gap-4">
            <TextInput
              title="First Name"
              type="text"
              name="firstName"
              placeholder="Enter username..."
              required
              errorMessage={errors?.firstName?.message}
              {...register("firstName", { required: "This is required field" })}
            />
            <TextInput
              title="Last Name"
              type="text"
              name="lastName"
              placeholder="Enter lastname..."
              required
              errorMessage={errors?.lastName?.message}
              {...register("lastName", { required: "This is required field" })}
            />
          </div>

          <div className="flex gap-4">
            <SelectInput
              label="Country / Region"
              error={errors}
              name="selectCountry"
              required
              options={foodOptions}
              errorMessage={errors?.selectCountry?.message}
              // {...register("select", {required: "This is required field"})}
              register={register}
            />

            <TextInput
              title="Town / City"
              type="text"
              name="townCity"
              required
              placeholder="Enter Town | City..."
              errorMessage={errors?.townCity?.message}
              {...register("townCity", { required: "This is required field" })}
            />
          </div>

          <div className="flex gap-4">
            <TextInput
              title="Street Address"
              type="text"
              name="streetAddress"
              placeholder="Enter Street Address..."
              required
              errorMessage={errors?.streetAddress?.message}
              {...register("streetAddress", {
                required: "This is required field",
              })}
            />

            <TextInput
              title="Appartment"
              type="text"
              name="appartment"
              placeholder="Enter appartment..."
              errorMessage={errors?.appartment?.message}
              {...register("appartment", {
                required: "This is required field",
              })}
            />
          </div>

          <div className="flex gap-4">
            <SelectInput
              label="State"
              error={errors}
              name="state"
              options={foodOptions}
              required
              errorMessage={errors?.state?.message}
              // {...register("select", {required: "This is required field"})}
              register={register}
            />

            <TextInput
              title="Zip Code"
              type="text"
              name="zipCode"
              placeholder="Enter zip code..."
              required
              errorMessage={errors?.zipCode?.message}
              {...register("zipCode", { required: "This is required field" })}
            />
          </div>

          <div className="flex gap-4">
            <TextInput
              title="Email address"
              type="text"
              name="emailAddress"
              placeholder="Enter emailAddress..."
              required
              errorMessage={errors?.emailAddress?.message}
              {...register("emailAddress", {
                required: "This is required field",
              })}
            />
            <TextInput
              title="Phone Number"
              type="number"
              name="phoneNumber"
              placeholder="Enter phoneNumber..."
              required
              errorMessage={errors?.phoneNumber?.message}
              {...register("phoneNumber", {
                required: "This is required field",
              })}
            />
          </div>

          <div className="flex">
            <textarea
              rows={4}
              className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              name="description"
              placeholder="Description..."
              {...register("description", { required: false })}
            />
          </div>
        </div>

        <div className="flex-1 ">
          <h2 className="text-lg font-semibold">Your Orders</h2>

          <Orders orders={orders} register={register} />

          <div className="pl-20">
            <MainButton type="submit" title="Place Order" className="w-full" />
          </div>
        </div>
      </form>
    </>
  );
}
