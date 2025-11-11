import React, { useState } from "react";
import Details from "./Details";
import BookedForm from "./BookedForm";
import AllInterests from "./AllInterests";

const CropDetails = () => {
  const [isUser, setIsUser] = useState(false);
  return (
    <>
      <section>
        <Details />
      </section>
      <section>{isUser ? <BookedForm /> : <AllInterests />}</section>
    </>
  );
};

export default CropDetails;
