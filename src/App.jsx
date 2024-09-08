import React, { memo, Suspense } from "react";
import "@/assets/css/style.css";
import { RouterProvider} from "react-router-dom";
import router from "./router";
import Loading from 'components/loading';
const App = memo(() => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}/>
    </Suspense>
  );
});

export default App;
