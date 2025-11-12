import React, { use, useState } from "react";
import Details from "./Details";
import BookedForm from "./BookedForm";
import AllInterests from "./AllInterests";
import { AuthContext } from "../../Provider/ContextProvider";
import { useParams } from "react-router";

const CropDetails = () => {
  const {id}=useParams()
  const {user}=use(AuthContext)
  console.log(id);
  
  return (
    <>
      <section>
        <Details />
      </section>
      <section>{user ? <BookedForm /> : <AllInterests />}</section>
    </>
  );
};

export default CropDetails;
