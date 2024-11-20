import { useEffect, useState } from "react";
import { Songdata } from "@/interfaces/songdata";
import { IAudio } from "@/interfaces/filedetails";
import { NextRouter, useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {}
const Audioplay: React.FC<Props> = ({}) => {
  const router: NextRouter = useRouter();
  const [audioDuration, setAudioDuration] = useState<string>("0:00");
  const [currentDuration, setCurrentDuration] = useState<string>("0:00");
  const [audioData, setAudioData] = useState<IAudio[]>();

  // isPlaying
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState<Songdata>();
  const [audioIndex, setAudioIndex] = useState<number>(0);
  const [wallpaper, setWallpaper] = useState<string>("");

  const dummyImgs = [
    "img/jacinto-1.jpg",
    "img/eminem.jpg",
    "img/astronaut.avif",
  ];

  useEffect(() => {
    const audioFile = localStorage.getItem("audioFile");
    if (audioFile) {
      const parsedAudio = JSON.parse(audioFile);
      setAudioData(parsedAudio);
      if (audioIndex === 0) {
        setWallpaper("img/jacinto-1.jpg");
      }
      setSong(parsedAudio[0]);
    }
  }, []);

  const handlePlay = () => {
    if (!isPlaying) {
      playSong();
    } else {
      pauseSong();
    }
  };

  const playSong = () => {
    const audio = document.querySelector("#music") as HTMLAudioElement;
    if (audio) audio.play();

    setIsPlaying(true);
  };

  const pauseSong = () => {
    const audio = document.querySelector("#music") as HTMLAudioElement;
    if (audio) audio.pause();

    setIsPlaying(false);
  };
  const songStop = () => {
    setIsPlaying(false);
  };

  const updateProgressBar = (e: any) => {
    if (isPlaying) {
      const { duration, currentTime } = e.nativeEvent.srcElement;
      console.log(e.srcElement);
      console.log("dur", duration, currentTime);
      // Update the progress bar width
      const progressPercent = (currentTime / duration) * 100;
      const progress = document.getElementById("progress");
      if (progress) progress.style.width = `${progressPercent}%`;

      // Calculate display for duration
      const durationMinutes = Math.floor(duration / 60);
      // setMinutes(durationMinutes);
      let durationSeconds = Math.floor(duration % 60);
      if (durationSeconds < 10) {
        durationSeconds = parseInt(`0${durationSeconds}`);
        // setSeconds(durationSeconds);
      }
      setAudioDuration(`${durationMinutes}:${durationSeconds}`);

      // Calculate display for current duration
      const currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds = Math.floor(currentTime % 60);
      if (currentSeconds < 10) {
        currentSeconds = currentSeconds;
      }
      setCurrentDuration(
        `${currentMinutes}:${currentSeconds.toString().padStart(2, "0")}`,
      );
    }
  };

  useEffect(() => {
    console.log("audioIndex", audioIndex);
    if (audioData && audioIndex >= 0 && audioIndex <= audioData.length - 1) {
      // set wallpaper
      if (audioIndex === 0) {
        setWallpaper("img/jacinto-1.jpg");
      } else if (audioIndex === 1) {
        setWallpaper("img/eminem.jpg");
      } else {
        let randomIdx = Math.floor(Math.random() * (2 - 0 + 1) + 0);
        let randomImg = dummyImgs[randomIdx];
        setWallpaper(randomImg);
      }
      console.log("currentIdx", audioIndex);
      audioData[audioIndex];
      setSong(audioData[audioIndex]);
    } else {
      console.log("END");
    }
  }, [audioIndex]);

  const handleForward = () => {
    if (audioData && audioIndex < audioData.length - 1) {
      setAudioIndex((prevState) => {
        console.log("PREV STATE", prevState);
        return (prevState += 1);
      });
    } else {
      toast("No More Audios to play!!");
    }
  };

  const handlePrev = () => {
    if (audioIndex > 0) {
      setAudioIndex((prevState) => {
        console.log("PREV STATE", prevState);
        return (prevState -= 1);
      });
    } else {
      toast("No More Audios to play!!");
    }
  };

  const handleRoute = () => {
    router.push("/");
  };

  return (
    <div className="relative min-h-[100vh] bg-[#9E8F88] flex justify-center align-center">
      <h1
        onClick={handleRoute}
        className="hidden xl:block cursor-pointer absolute top-10 -left-3 text-4xl bold text-[#EFE7D5] -rotate-45"
      >
        PLAY ME
      </h1>

      {/* BG Card */}
      <div className="w-[350px] mt-[60px] relative h-[500px] bg-[#F9F0DE] rounded-[20px] shadow-[0_15px_30px_5px_rgba(0,0,0,0.3)]">
        {/* IMG Card */}
        <div className="absolute w-[80%] h-[300px] top-[-45px] left-[35px]">
          {wallpaper && (
            <img
              src={wallpaper}
              className="w-[100%] h-[100%] object-cover rounded-[20px] shadow-[0_5px_30px_5px_rgba(0,0,0,0.5)]"
              alt="song banner"
            />
          )}
        </div>

        {/* Title */}
        <p className="mt-[275px]  text-[18px] text-center m-0">{song?.title}</p>

        {song && (
          <audio
            onTimeUpdate={(e) => {
              updateProgressBar(e);
            }}
            onEnded={songStop}
            src={song.data}
            id="music"
          ></audio>
        )}

        {/* duration */}
        <div className="bg-[#9E8F88] rounded-[5px] cursor-pointer h-1 w-[90%] ml-6 mt-8 ">
          <div
            id="progress"
            className="bg-[#4D2E34]  rounded-[5px] h-[100%] w-[0%] transition-[width 0.1s linear]"
          ></div>
          <div className="top-[-25px] flex justify-between">
            <span>{currentDuration}</span>
            <span>{audioDuration}</span>
          </div>
        </div>
        <ToastContainer />
        {/* Controls */}
        <div className="w-full flex justify-center mt-8">
          <div className="flex justify-between w-[150px]">
            <i
              onClick={handlePrev}
              className="fas fa-backward text-[30px] text-[#4D2E34] cursor-pointer select-none"
            ></i>
            {!isPlaying ? (
              <i
                className="fas fa-play text-[30px] text-[#4D2E34] cursor-pointer select-none"
                onClick={handlePlay}
              ></i>
            ) : (
              <i
                className="fas fa-pause text-[30px] text-[#4D2E34] cursor-pointer select-none"
                onClick={handlePlay}
              ></i>
            )}
            <i
              className="fas fa-forward text-[30px] text-[#4D2E34] cursor-pointer select-none"
              onClick={handleForward}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Audioplay;
