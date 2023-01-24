import React from "react";

import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import Education from "./routes/education";
import Overview from "./routes/overview";
import Skills from "./routes/skills";
import { Projects } from "routes/projects";
import { Experience } from "routes/experience";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import "holderjs";
import "swiper/css/bundle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root1";
import ErrorPage from "./error-page";

export function Site() {


  const router = createBrowserRouter([
    {
      path: "/",
      // action: rootAction,
      element: <Root/>,
      errorElement: <ErrorPage />,
      // loader: rootLoader,
      children: [
        // {
        //   errorElement: <ErrorPage />,
        //   action:() => console.log("empty route"), //rootAction,

        //   children: [
        { index: true, element: <Overview /> },
        {
          path: "education",
          element: <Education />,
          // loader: contactLoader,
          // action: contactAction,
        },
        {
          path: "experience",
          element: <Experience />,
          // action: editAction,
          // loader: contactLoader,
        },
        {
          path: "projects",
          element: <Projects />,
          // errorElement: <div>Oops! There was an error.</div>,
          // action: destroyAction,
        },
        {
          path: "skills",
          element: <Skills />,
          // errorElement: <div>Oops! There was an error.</div>,
          // action: destroyAction,
        },
        //   ],
        // },
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

// ========================================

// ReactDOM.render(<Site  className="Site" />, document.getElementById("root"));
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Site/>
  </React.StrictMode>
);
