import Fileupload from "../Fileupload";
import Listensong from "../Listensong";
const Intialupload = () => {
  return (
    <div className="flex flex-col xl:flex-row h-[100vh]">
      <Fileupload />
      <Listensong />
    </div>
  );
};
export default Intialupload;
