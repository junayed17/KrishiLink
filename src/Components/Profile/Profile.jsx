import React, { useRef } from "react";

const Profile = () => {
  const reference = useRef(null);

  function handleModal() {
    reference.current.showModal();
  }


  function handleUpdate(e) {
    e.preventDefault()
    const name=e.target.name.value;
    const photoUrl = e.target.photo.value;
    reference.current.close();
  }








  return (
    <section className="max-w-[1440px] mx-auto px-4 py-10">
      <div>
        <div className="relative max-w-96 bg-white/90 backdrop-blur-3xl rounded-2xl p-8 shadow-lg transform scale-90 mx-auto">
          {/* Profile Top Background */}
          <div className="absolute left-0 top-0 w-full h-24 bg-green-400 rounded-t-2xl -z-10"></div>

          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full bg-gray-100 mx-auto mb-4 overflow-hidden border-4 border-white shadow-md flex items-center justify-center">
            <svg
              fill="#000000"
              viewBox="0 0 64 64"
              height="70px"
              width="70px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18,12c0-5.522,4.478-10,10-10h8c5.522,0,10,4.478,10,10v7c0-3.313-2.687-6-6-6h-6c-2.209,0-4-1.791-4-4 
        c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,2.209-1.791,4-4,4c-3.313,0-6,2.687-6,6V12z"
                fill="#506C7F"
              ></path>
              <path
                d="M62,60c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2v-8c0-1.104,0.447-2.104,1.172-2.828l-0.004-0.004 
        c4.148-3.343,8.896-5.964,14.046-7.714C20.869,45.467,26.117,48,31.973,48c5.862,0,11.115-2.538,14.771-6.56 
        c5.167,1.75,9.929,4.376,14.089,7.728l-0.004,0.004C61.553,49.896,62,50.896,62,52V60z"
                fill="#7d988a"
              ></path>
            </svg>
          </div>

          {/* Profile Info */}
          <div className="text-left mb-6">
            <p className="text-xl font-semibold text-gray-900 mb-1">
              Junayed Ahmmed
            </p>
            <p className="text-sm text-gray-600 mb-2">
              junayedahmmednipun@gmail.com
            </p>
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
            <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-6 text-green-700">
              Update your profile
            </h3>
            <div class="relative">
              <div class="relative mb-4">
                <input
                  type="text"
                  placeholder="Enter your name..."
                  class="w-full p-4 pr-12 text-sm leading-5 border border-gray-200 rounded-lg shadow-sm outline-none focus:border-green-400"
                  name="name"
                />
                <span></span>
              </div>
              <div class="relative mb-4">
                <input
                  type="text"
                  placeholder="Enter Profile Url.."
                  class="w-full p-4 pr-12 text-sm leading-5 border border-gray-200 rounded-lg shadow-sm outline-none focus:border-green-400"
                  name="photo"
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
