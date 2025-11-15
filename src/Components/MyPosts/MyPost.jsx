import React, { use, useEffect, useRef, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../Provider/ContextProvider";
import Loader from "../Loader/Loader";
import "./myPost.css";
import { Link } from "react-router";

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
                <tr key={crop._id} className="hover:bg-gray-50">
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
                  <td className="flex items-center justify-center px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-2">
                    <Link
                      className="  text-green-600  p-2 rounded-full hover:bg-green-100 transition"
                      to={`/post/edit/${crop._id}`}
                    >
                      <FaEdit />
                    </Link>
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
