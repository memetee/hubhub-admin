import React, { memo } from "react";
import "@/assets/css/style.css";
import { RouterProvider} from "react-router-dom";
import router from "./router";

const App = memo(() => {
  return (
    <RouterProvider router={router}/>
  );
});

export default App;
