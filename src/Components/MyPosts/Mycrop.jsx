import React, { useRef } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Mycrop = ({crop,index}) => {
  const editRef = useRef(null);
  const deleteRef = useRef(null);

    function handleEditModal(event) {
      console.log(editRef.current);

      editRef.current.showModal();
    }
    function handleDeleteModal(event) {
      console.log(deleteRef.current);
      console.log("working");

      deleteRef.current.showModal();
    }
    function handleDelete(event) {
      deleteRef.current.close();
    }
  return (
    <div>
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
            onClick={handleEditModal}
          >
            <FaEdit />
          </button>
          <button
            className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-100 transition"
            aria-label={`Delete ${crop.name}`}
            onClick={handleDeleteModal}
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>

      {/*edit modal*/}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle px-4"
        ref={editRef}
      >
        <div className="modal-box">
          <form
            className="form flex flex-col gap-4 bg-white p-8 w-full max-w-xl mx-auto rounded-xl font-sans shadow-2xl border border-green-100"
            // onSubmit={handleCropAdd}
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
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="Type"
                  className="text-sm text-[#151717] font-semibold mb-1 block"
                >
                  Type
                </label>
                <select
                  id="Type"
                  name="type"
                  className="input w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-500 transition duration-150"
                  required
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
                />
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
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="Photo"
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
            // onClick={handleDelete}
          >
            Delete
          </button>
          <form method="dialog" className="modal-backdrop">
            <button className="btn"> close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Mycrop;