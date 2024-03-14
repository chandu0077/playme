import { Link } from "react-router-dom";
import { NextRouter, useRouter } from "next/router";

const Listensong = () => {
  const router: NextRouter = useRouter();
  const handleSaveFile = () => {
    router.push("/audioplay");
  };
  return (
    <div className="w-2/4 h-[100vh] bg-[#f9f0de] relative">
      <h1 className="absolute left-0 top-20 text-8xl text-[#9e8f88]">ME</h1>
      <div className="flex flex-col h-full justify-center items-center p-[180px]">
        <p className="text-[##4d2e34]">Listen Songs !!</p>
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
