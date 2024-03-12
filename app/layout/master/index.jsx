import MasterLeftSideBar from "./leftSideBar";
import MasterTopBar from "./topBar";

export default function MasterLayout({ children }) {
  return (
    <div className="bg-white ">
      <MasterLeftSideBar />
      <div className="pl-20">
        <MasterTopBar />
        <main>{children}</main>
      </div>
    </div>
  );
}
