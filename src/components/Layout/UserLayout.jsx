import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const UserLayout = () => {
  return (
    <div>
      {/* {header section} */}
      <Header />
      {/* {main content} */}
      <main>
        <Outlet />
      </main>
      {/* {footer section} */}
      <Footer />
    </div>
  );
};

export default UserLayout;
