import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {}
const Fileupload: React.FC<Props> = ({}) => {
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    console.log("step 1", file);
    setSelectedFile(file);
  };

  const handleSaveFile = () => {
    if (selectedFile) {
      console.log("step 2", selectedFile);
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = (event) => {
        const fileData = event?.target?.result;
        console.log("EVENT", event);
        const result = {
          title: selectedFile.name,
          data: fileData,
          size: selectedFile.size,
        };
        console.log("step 3", result);

        const localAudioFile = localStorage.getItem("audioFile");
        let audioFileArr;
        if (localAudioFile) {
          audioFileArr = JSON.parse(localAudioFile);
          console.log("step 4", audioFileArr);
        }
        if (audioFileArr && audioFileArr.length > 0) {
          const output = [...audioFileArr, result];
          localStorage.setItem("audioFile", JSON.stringify(output));
        } else {
          const output = [result];
          localStorage.setItem("audioFile", JSON.stringify(output));
        }
        const songInput = document.getElementById(
          "songInput",
        ) as HTMLInputElement;
        if (songInput) {
          songInput.value = "";
        }
      };
      toast("Audio File Saved, Now Go Play !!");
    } else {
      toast("No Audio File chosen !!");
    }
  };

  return (
    <div className="w-full xl:w-2/4 h-[50%] xl:h-[100vh] relative bg-[#9e8f88]">
      <div>
        <p className="absolute hidden xl:block xl:text-8xl text-[#f9f0de] xl:right-0 xl:top-20">
          PLAY
        </p>
        <div className=" xl:hidden flex justify-center items-center">
          <p className="absolute text-center top-2  text-4xl text-[#f9f0de]">
            PLAY ME
          </p>
        </div>
      </div>
      <div className="flex flex-col h-full justify-center items-center p-[80px]">
        <div className="flex justify-center">
          <input
            className="w-[200px] rounded-md bg-[#F9F0DE]"
            type="file"
            accept=".mp3, .wav"
            id="songInput"
            onChange={handleFileChange}
          />
        </div>
        <ToastContainer />
        <button
          className="p-2 w-auto bg-[#F9F0DE] mt-9 rounded text-[#4D2E34]"
          onClick={handleSaveFile}
        >
          Save Song
        </button>
      </div>
    </div>
  );
};
export default Fileupload;
