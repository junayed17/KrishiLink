import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/ContextProvider";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Profile = () => {
  const reference = useRef(null);
  const [addiTionalInfo, setAddiTionalInfo] = useState({
    totalPost: 0,
    totalInterest: 0,
  });
  const { handleUpdateProfile, user, setUser } = use(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleModal() {
    reference.current.showModal();
  }

  useEffect(() => {
    const data = {};
    fetch(`http://localhost:3000/myPosts?email=${user.email}`)
      .then((res) => res.json())
      .then((result) => (data.totalPost = result.length))
      .catch((err) => console.log(err));
    fetch(`http://localhost:3000/myInterestedPosts/${user.email}`)
      .then((res) => res.json())
      .then((result) => {
        data.totalInterest = result.length;
      });
    setAddiTionalInfo(data)

  }, [user.email]);

  console.log(addiTionalInfo);
  

  function handleUpdate(userDataa) {
    if (userDataa.photo.length) {
      const formData = new FormData();
      formData.append("image", userDataa.photo[0]);
      const imgUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMG_BB_API_KEY
      }`;
      fetch(imgUrl, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          const userData = {
            displayName: userDataa.name,
            photoURL: result.data.display_url,
          };
          handleUpdateProfile(userData).then((result2) => {
            const data4 = {
              ...user,
              displayName: userDataa.name,
              photoURL: user.photoURL,
            };
            setUser(data4);
            toast.success("Profile updated successfully!");
          });
        });
    } else {
      handleUpdateProfile({
        isplayName: userDataa.name,
        photoURL: user.photoURL,
      }).then((result2) => {
        const data4 = {
          ...user,
          displayName: userDataa.name,
          photoURL: user.photoURL,
        };
        console.log(data4, userDataa.name);

        setUser(data4);
        toast.success("Profile name updated successfully!");
      });
    }

    reference.current.close();
  }

  if (!user) {
    return <Loader />;
  }
  return (
    <section className="max-w-[1440px] mx-auto mt-6">
      <title>KrisiLink | MyProfile</title>
      <div>
        <div className="relative max-w-[400px] bg-white/90 backdrop-blur-3xl rounded-2xl p-8 shadow-sm border border-green-100 transform scale-90 mx-auto">
          {/* Profile Top Background */}
          <div className="absolute left-0 top-0 w-full h-24 bg-green-500 rounded-t-2xl -z-10"></div>

          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full bg-gray-100 mx-auto mb-4 overflow-hidden border-4 border-white shadow-md flex items-center justify-center">
            <img src={user.photoURL} alt="" />
          </div>

          {/* Profile Info */}
          <div className="text-left mb-6">
            <p className="text-2xl font-semibold text-gray-900 mb-1 headingFont">
              {user.displayName}
            </p>
            <p className="text-lg text-gray-600 mb-2">{user.email}</p>
          </div>

          {/* CTA Button */}
          <button
            className="headingFont w-full px-4 py-4 mt-6 rounded-xl bg-green-500 hover:bg-green-600 hover:text-white font-bold transition-all text-xl"
            onClick={handleModal}
          >
            Update Profile
          </button>

          {/* Stats */}
          <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              {" "}
              <div className="font-semibold text-sm text-gray-900">
                User
              </div>
              <div className="text-sm font-semibold text-gray-600">
               Role
              </div>
            </div>
            <div className="text-center">
              {" "}
              <div className="font-semibold text-gray-900">
                {addiTionalInfo.totalPost}
              </div>
              <div className="text-sm font-semibold text-gray-600">Posts</div>
            </div>
            <div className="text-center">
              {" "}
              <div className="font-semibold text-gray-900">
                {addiTionalInfo.totalInterest}
              </div>
              <div className="text-sm font-semibold text-gray-600">
                Interests
              </div>
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
            onSubmit={handleSubmit(handleUpdate)}
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
                  {...register("name", { required: "Name is required" })}
                />

                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div class="relative mb-4">
                <input
                  type="file"
                  placeholder="Enter Profile Url.."
                  class="w-full p-4 pr-12 text-sm leading-5 border border-gray-200 rounded-lg shadow-sm outline-none focus:border-green-400"
                  name="photo"
                  // defaultValue={user.photoURL}
                  {...register("photo")}
                />
                {errors.photo && (
                  <span className="text-red-500">{errors.photo.message}</span>
                )}
              </div>
            </div>
            <button
              type="submit"
              class="w-full py-3 px-5 bg-green-500 text-white text-sm font-medium uppercase rounded-lg shadow-md hover:bg-green-600 transition duration-150 ease-in-out focus:outline-none focus:ring-opacity-50 headingFont text-xl"
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
