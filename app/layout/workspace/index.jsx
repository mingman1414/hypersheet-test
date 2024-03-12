import MasterLeftSideBar from "../master/leftSideBar";
import MasterTopBar from "../master/topBar";

export default function WorkSpaceLayout({ children }) {
  return (
    <div className="bg-white">
      <MasterLeftSideBar />
      <div className="pl-20">
        <MasterTopBar />
        <main className="p-6 h-[calc(100vh-64px)]">{children}</main>
      </div>
    </div>
  );
}
