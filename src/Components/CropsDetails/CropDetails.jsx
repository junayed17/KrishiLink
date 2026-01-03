import React, { use, useEffect, useState } from "react";
import Details from "./Details";
import BookedForm from "./BookedForm";
import AllInterests from "./AllInterests";
import { AuthContext } from "../../Provider/ContextProvider";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";

const CropDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);

  const [postDetails, setPostDetails] = useState(null);

  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    fetch(`https://krishilink-two.vercel.app/postDetails/${id}`)
      .then((res) => res.json())
      .then((result) => setPostDetails(result));
  }, [id]);

  useEffect(() => {
    if (user?.email && user?.email === postDetails?.owner?.ownerEmail) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [postDetails, user]);

  if (!postDetails) {
    return <Loader />;
  }
  return (
    <>
      <section>
        <title>KrisiLink | PostDetails</title>
        <div
          className={`${
            !isOwner? "grid" : ""
          } grid-cols-12 gap-6 items-start max-w-[1440px] mx-auto my-8`}
        >
          <div className="col-span-12 lg:col-span-8">
            <Details postDetails={postDetails} />
          </div>
          {!isOwner && (
            <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-24">
              <BookedForm id={id} postDetails={postDetails} user={user} />
            </div>
          )}
        </div>
      </section>
      <section>{isOwner && <AllInterests postDetails={postDetails} />}</section>
    </>
  );
};

export default CropDetails;
