import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/ContextProvider";
import toast from "react-hot-toast";

const AddCrop = () => {
  const { user } = use(AuthContext);

  const navigate = useNavigate();

  function handleCropAdd(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const type = e.target.type.value;
    const unit = e.target.unit.value;
    const pricePerUnit = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const image = e.target.photo.value;

    const insertedData = {
      name,
      type,
      pricePerUnit,
      unit,
      quantity,
      description,
      location,
      image,
      interests: [],
      owner: {
        ownerEmail: user.email,
        ownerName: user.displayName,
      },
    };
    fetch("http://localhost:3000/addPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(insertedData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Post added sucessfully");
        navigate("/myPost");
      });
  }

  return (
    <section className="px-4 bg-gray-50 min-h-screen flex items-center justify-center">
      <title>KrisiLink | AddPost</title>
      <div className="w-[700px] mx-auto mt-5">
        <form
          className="flex flex-col gap-4 bg-white p-8 w-full  rounded-xl font-sans shadow-2xl border border-green-100"
          onSubmit={handleCropAdd}
        >
          <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-6 text-green-700 headingFont">
            🌱 Post Your Crop for Sale
          </h3>
          <div>
            <label
              for="cropName"
              className="text-sm text-[#151717] font-semibold mb-1 block"
            >
              Crop Name
            </label>
            <input
              id="Name"
              name="name"
              placeholder="name of your crops"
              className=" w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-150"
              type="text"
              required
            />
          </div>
          <div className="sm:flex gap-4">
            <div className="sm:w-1/2">
              <label
                for="cropType"
                className="text-sm text-[#151717] font-semibold mb-1 block"
              >
                Type
              </label>
              <select
                id="Type"
                name="type"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
                required
              >
                <option value="">Select Type</option>
                <option value="Vegetable">Vegetable</option>
                <option value="Fruit">Fruit</option>
                <option value="Grain">Rice</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="sm:w-1/2">
              <label
                for="unit"
                className="text-sm text-[#151717] font-semibold mb-1 block"
              >
                Unit
              </label>
              <select
                id="unit"
                name="unit"
                className=" w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-150"
                required
              >
                <option value="">Select Unit</option>
                <option value="kg">Kg</option>
                <option value="ton">Ton</option>
                <option value="bag">Bag</option>
              </select>
            </div>
            <div className="sm:w-1/2">
              <label
                for="location"
                className="text-sm text-[#151717] font-semibold mb-1 block"
              >
                Location
              </label>
              <input
                id="Location"
                name="location"
                placeholder="Where is the crop grown?"
                className=" w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-150"
                type="text"
                required
              />
            </div>
          </div>

          <div className="sm:flex gap-4">
            <div className="sm:w-2/5">
              <label
                for="pricePerUnit"
                className="text-sm text-[#151717] font-semibold mb-1 block"
              >
                Price per Unit (BDT)
              </label>
              <input
                id="Price"
                name="price"
                placeholder="price Per kg"
                className=" w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-150"
                type="number"
                step="0.01"
                required
              />
            </div>
            <div className="sm:w-2/5">
              <label
                htmlFor="estimatedQuantity"
                className="text-sm text-[#151717] font-semibold mb-1 block"
              >
                Quantity
              </label>
              <input
                id="Quantity"
                name="quantity"
                placeholder="the quantity you expect to harvest"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-150 "
                type="number"
                required
              />
            </div>
          </div>

          <div>
            <label
              for="description"
              className="text-sm text-[#151717] font-semibold mb-1 block"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="type description of your product."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-150 h-24 resize-none"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="cropImage"
              className="text-sm text-[#151717] font-semibold mb-1 block"
            >
              Photo url of the Crop
            </label>
            <input
              id="Photo"
              name="photo"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              type="text"
              required
              placeholder="url Of your crop"
            />
          </div>

          <button
            type="submit"
            className="button-submit mt-6 bg-[#0cdc39] border-none text-white text-lg font-bold rounded-lg h-[55px] w-full cursor-pointer hover:bg-[#0bb730] transition duration-150 shadow-md"
          >
            Post
          </button>

          <div className="text-center mt-3">
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-green-600 underline"
            >
              Go back to Dashboard
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
export default AddCrop;
