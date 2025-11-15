import React, { use, useRef } from "react";
import { AuthContext } from "../../Provider/ContextProvider";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";

const Profile = () => {
  const reference = useRef(null);
  const { handleUpdateProfile, user, setUser } = use(AuthContext);
  function handleModal() {
    reference.current.showModal();
  }

  console.log(user);
  function handleUpdate(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    const userData = {
      displayName: name,
      photoURL: photoUrl,
    };
    handleUpdateProfile(userData)
      .then(() => {
        setUser((prevUser) => ({
          ...prevUser,
          displayName: name,
          photoURL: photoUrl,
        }));
        toast.success("profile updated");
      })
      .catch(() => {
        toast.error("profile update cannot possible");
      });
    reference.current.close();
  }

  if (!user) {
    return <Loader />;
  }
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-10">
      <div>
        <div className="relative max-w-[400px] bg-white/90 backdrop-blur-3xl rounded-2xl p-8 shadow-lg transform scale-90 mx-auto">
          {/* Profile Top Background */}
          <div className="absolute left-0 top-0 w-full h-24 bg-green-400 rounded-t-2xl -z-10"></div>

          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full bg-gray-100 mx-auto mb-4 overflow-hidden border-4 border-white shadow-md flex items-center justify-center">
            <img src={user.photoURL} alt="" />
          </div>

          {/* Profile Info */}
          <div className="text-left mb-6">
            <p className="text-xl font-semibold text-gray-900 mb-1 headingFont">
              {user.displayName}
            </p>
            <p className="text-sm text-gray-600 mb-2">{user.email}</p>
          </div>

          {/* CTA Button */}
          <button
            className="w-full py-3 rounded-lg bg-green-400 text-white font-semibold hover:bg-green-500 hover:-translate-y-1 transition-all duration-200"
            onClick={handleModal}
          >
            Update Profile
          </button>

          {/* Stats */}
          <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="font-semibold text-gray-900">15k</div>
              <div className="text-sm text-gray-600">Followers</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">82</div>
              <div className="text-sm text-gray-600">Posts</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">4.8</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        ref={reference}
      >
        <div className="modal-box">
          <form
            class="bg-white p-4 max-w-sm mx-auto rounded-lg shadow-xl"
            onSubmit={handleUpdate}
          >
            <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-6 text-green-700 headingFont">
              Update your profile
            </h3>
            <div class="relative">
              <div class="relative mb-4">
                <input
                  type="text"
                  placeholder="Enter your name..."
                  class="w-full p-4 pr-12 text-sm leading-5 border border-gray-200 rounded-lg shadow-sm outline-none focus:border-green-400"
                  name="name"
                  defaultValue={user.displayName}
                />
                <span></span>
              </div>
              <div class="relative mb-4">
                <input
                  type="text"
                  placeholder="Enter Profile Url.."
                  class="w-full p-4 pr-12 text-sm leading-5 border border-gray-200 rounded-lg shadow-sm outline-none focus:border-green-400"
                  name="photo"
                  defaultValue={user.photoURL}
                />
              </div>
            </div>
            <button
              type="submit"
              class="w-full py-3 px-5 bg-green-400 text-white text-sm font-medium uppercase rounded-lg shadow-md hover:bg-green-400 transition duration-150 ease-in-out focus:outline-none focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Profile;
