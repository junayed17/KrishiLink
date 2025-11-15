import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";

const MypostEdit = () => {


  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState(null);

  const { id } = useParams();


  useEffect(() => {
    fetch(`http://localhost:3000/postDetails/${id}`)
      .then((res) => res.json())
      .then((result) => setPostDetails(result));
  }, [id]);

  if (!postDetails) {
    return <Loader />;
  }



  function handleUpdate(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const type = e.target.type.value;
    const unit = e.target.unit.value;
    const pricePerUnit = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const image = e.target.photo.value;

    const updatedData = {
      name,
      type,
      unit,
      pricePerUnit,
      quantity,
      description,
      location,
      image,
    };

    fetch(`http://localhost:3000/myPost/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          toast.success("Post updated sucessfully");
          navigate("/");
        }
      });
  }

  return (
    <div className="mx-4">
      <form
        className="flex flex-col gap-4 bg-white p-8 w-full max-w-xl mx-auto rounded-xl font-sans shadow-2xl border border-green-100 my-5 mx-4"
        onSubmit={handleUpdate}
      >
        <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-6 text-green-700 headingFont">
          Edit Your Post
        </h3>
        <div>
          <label
            for="Name"
            className="text-sm text-[#151717] font-semibold mb-1 block"
          >
            Crop Name
          </label>
          <input
            id="Name"
            name="name"
            placeholder="name of your crops"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
            type="text"
            required
            defaultValue={postDetails.name}
          />
        </div>
        <div className=" gap-4">
          <div className="">
            <label
              for="Type"
              className="text-sm text-[#151717] font-semibold mb-1 block"
            >
              Type
            </label>
            <select
              id="Type"
              name="type"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
              required
              defaultValue={postDetails.type}
            >
              <option value="Vegetable">Vegetable</option>
              <option value="Fruit">Fruit</option>
              <option value="Grain">Rice</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="">
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
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
              type="text"
              required
              defaultValue={postDetails.location}
            />
          </div>
        </div>

        <div className="gap-4">
          <div className="">
            <label
              for="Price"
              className="text-sm text-[#151717] font-semibold mb-1 block"
            >
              Price per Unit (BDT)
            </label>
            <input
              id="Price"
              name="price"
              placeholder="price Per kg"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
              type="number"
              step="0.01"
              required
              defaultValue={postDetails.pricePerUnit}
            />
          </div>

          <div className="">
            <label
              for="unit"
              className="text-sm text-[#151717] font-semibold mb-1 block"
            >
              Unit
            </label>
            <select
              id="unit"
              name="unit"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
              required
              defaultValue={postDetails.unit}
            >
              <option value="">Select Unit</option>
              <option value="kg">Kg</option>
              <option value="ton">Ton</option>
              <option value="bag">Bag</option>
            </select>
          </div>

          <div className="">
            <label
              for="Quantity"
              className="text-sm text-[#151717] font-semibold mb-1 block"
            >
              Quantity
            </label>
            <input
              id="Quantity"
              name="quantity"
              placeholder="the quantity you expect to harvest"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
              type="number"
              required
              defaultValue={postDetails.quantity}
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
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
            required
            defaultValue={postDetails.description}
          ></textarea>
        </div>

        <div>
          <label
            for="Photo"
            className="text-sm text-[#151717] font-semibold mb-1 block"
          >
            Photo url of the Crop
          </label>
          <input
            id="Photo"
            name="photo"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
            type="text"
            required
            placeholder="url Of your crop"
            defaultValue={postDetails.image}
          />
        </div>

        <button
          type="submit"
          className="button-submit mt-6 bg-[#0cdc39] border-none text-white text-lg font-bold rounded-lg h-[55px] w-full cursor-pointer hover:bg-[#0bb730] transition duration-150 shadow-md"
        >
          Update
        </button>

        <div className="text-center mt-3"></div>
      </form>
    </div>
  );
};

export default MypostEdit;
