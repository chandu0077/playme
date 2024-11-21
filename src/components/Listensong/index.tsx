import { Link } from "react-router-dom";
import { NextRouter, useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Listensong = () => {
  const router: NextRouter = useRouter();
  const handleSaveFile = () => {
    const item = localStorage.getItem("audioFile");
    if (item) {
      const localfile = JSON.parse(item);
      if (localfile) {
        router.push("/audioplay");
      }
    } else {
      toast("No audio File found !!");
    }
  };
  return (
    <div className="w-full xl:w-2/4 h-[50%] xl:h-[100vh] bg-[#f9f0de] relative">
      <h1 className="absolute hidden xl:block xl:left-0 xl:top-20 text-6xl xl:text-8xl text-[#9e8f88]">
        ME
      </h1>
      <div className="w-full flex flex-col h-full justify-center items-center  xl:mt-0 xl:p-[180px]">
        <p className="text-[26px] text-[#4d2e34]">Listen Songs !!</p>
        <ToastContainer />
        <button
          className="p-2 w-auto bg-[#4d2e34] mt-9 rounded text-white"
          onClick={handleSaveFile}
        >
          Go Play
        </button>
      </div>
    </div>
  );
};
export default Listensong;
