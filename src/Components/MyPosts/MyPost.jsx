import React, { use, useEffect, useRef, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../Provider/ContextProvider";
import Loader from "../Loader/Loader";

const MyPost = () => {
  const [crops, setCrops] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [editId, seteditId] = useState(null);

  const editRef = useRef(null);
  const deleteRef = useRef(null);

  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/myPosts?email=${user.email}`)
      .then((res) => res.json())
      .then((result) => setCrops(result))
      .catch((err) => console.log(err));
  }, [user.email]);

  function handleEditModal(id) {
    seteditId(id);
    editRef.current.showModal();
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

    fetch(`http://localhost:3000/myPost/${editId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        editRef.current.close();
        if (result) {
          alert("data updated sucessfully");
        }
      });
  }

  function handleDeleteModal(id) {
    setDeleteId(id);
    deleteRef.current.showModal();
  }
  function handleDelete() {
    fetch(`http://localhost:3000/myPost/${deleteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount === 1) {
          alert("Post Deleted Sucessfully");
          const newPosts = crops.filter((ele) => ele._id != deleteId);
          setCrops(newPosts);
        }
      })
      .catch((err) => console.log(err));
    deleteRef.current.close();
  }

  if (!crops) {
    return <Loader />;
  }

  return (
    <section className="max-w-[1440px] mx-auto pt-10 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price/Unit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {crops.length > 0 ? (
              crops.map((crop, index) => (
                <tr key={crop.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {crop.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {crop.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    BDT {crop.pricePerUnit} / {crop.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {crop.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-2">
                    <button
                      className="text-green-600 hover:text-green-900 p-2 rounded-full hover:bg-green-100 transition"
                      aria-label={`Edit ${crop.name}`}
                      onClick={() => handleEditModal(crop._id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-100 transition"
                      aria-label={`Delete ${crop.name}`}
                      onClick={() => handleDeleteModal(crop._id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  You have no active crop listings.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/*edit modal*/}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle px-4"
        ref={editRef}
      >
        <div className="modal-box">
          <form
            className="flex flex-col gap-4 bg-white p-8 w-full max-w-xl mx-auto rounded-xl font-sans shadow-2xl border border-green-100"
            onSubmit={handleUpdate}
          >
            <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-6 text-green-700">
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
                className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-150"
                type="text"
                required
                defaultValue={crops.name}
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  for="Type"
                  className="text-sm text-[#151717] font-semibold mb-1 block"
                >
                  Type
                </label>
                <select
                  id="Type"
                  name="type"
                  className="input w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
                  required
                  defaultValue={crops.type}
                >
                  <option value="Vegetable">Vegetable</option>
                  <option value="Fruit">Fruit</option>
                  <option value="Grain">Rice</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="w-1/2">
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
                  className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-150"
                  type="text"
                  required
                  defaultValue={crops.location}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2/5">
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
                  className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-150"
                  type="number"
                  step="0.01"
                  required
                  defaultValue={crops.price}
                />
              </div>

              <div className="w-1/2">
                <label
                  for="unit"
                  className="text-sm text-[#151717] font-semibold mb-1 block"
                >
                  Unit
                </label>
                <select
                  id="unit"
                  name="unit"
                  className="input w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
                  required
                  defaultValue={crops.unit}
                >
                  <option value="">Select Unit</option>
                  <option value="kg">Kg</option>
                  <option value="ton">Ton</option>
                  <option value="bag">Bag</option>
                </select>
              </div>

              <div className="w-2/5">
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
                  className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-150"
                  type="number"
                  required
                  defaultValue={crops.quantity}
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
                className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-150 h-24 resize-none"
                required
                defaultValue={crops.description}
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
                className="input w-full p-3 border border-gray-300 rounded-lg bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                type="text"
                required
                placeholder="url Of your crop"
                defaultValue={crops.photo}
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
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* delete modal  */}

      <dialog id="my_modal_2" className="modal px-4" ref={deleteRef}>
        <div className="modal-box">
          <p className="py-4">Are You Sure to Delete?</p>
          <button
            type="submit"
            className="button-submit mt-6 bg-[#0cdc39] border-none text-white text-lg font-bold rounded-lg h-[55px] w-full cursor-pointer hover:bg-[#0bb730] transition duration-150 shadow-md"
            onClick={handleDelete}
          >
            Delete
          </button>
          <form method="dialog" className="modal-backdrop">
            <button className="btn"> close</button>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default MyPost;
