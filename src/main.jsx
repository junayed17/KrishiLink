import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Provider/Router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import ContextProvider from "./Provider/ContextProvider.jsx";

// function Root() {
//   useEffect(() => {
//     AOS.init({
//       offset: 200,
//       delay: 0,
//       duration:300,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

  // return (
    // <ContextProvider>
    //   <RouterProvider router={router} />
    // </ContextProvider>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
