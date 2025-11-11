import React, { use, useState } from "react";
import Details from "./Details";
import BookedForm from "./BookedForm";
import AllInterests from "./AllInterests";
import { AuthContext } from "../../Provider/ContextProvider";

const CropDetails = () => {
  const {user}=use(AuthContext)
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
