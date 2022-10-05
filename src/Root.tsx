import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Searchbar from "./components/searchbar/Searchbar";

const Root = () => {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section>
        <Searchbar />
        <Outlet />
      </section>
    </main>
  );
};

export default Root;
