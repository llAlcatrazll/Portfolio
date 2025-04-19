// import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Tooling from "./components/tooling";
import Showcase from "./components/showcase";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <>
      <div className="w-100vw h-100vh ">
        <Navbar />
        <Landing />
        <Tooling />
        <Showcase />
      </div>
    </>
  );
}
