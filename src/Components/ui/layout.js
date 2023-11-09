import FoodItem from "./FoodItem";
import HeaderTop from "./HeaderTop";
import Sidebar from "./sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <HeaderTop />
      <FoodItem />
      <div className="md:flex block">
        <div className="md:block hidden">
          <Sidebar />
        </div>
        <main className="w-full ">{children}</main>
        <div className="md:hidden block w-full">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
