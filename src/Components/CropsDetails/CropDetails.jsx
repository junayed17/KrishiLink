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
    fetch(`http://localhost:3000/postDetails/${id}`)
      .then((res) => res.json())
      .then((result) => setPostDetails(result));
  }, [id]);

  useEffect(() => {
    if (user?.email === postDetails?.owner?.ownerEmail) {
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
        <Details postDetails={postDetails} />
      </section>
      <section>
        {isOwner ? (
          <AllInterests postDetails={postDetails} />
        ) : (
          <BookedForm id={id} postDetails={postDetails} user={user} />
        )}
      </section>
    </>
  );
};

export default CropDetails;
