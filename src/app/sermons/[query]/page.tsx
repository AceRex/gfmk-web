"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ImageTest from "./maxresdefault.jpg";
import { CiPlay1, CiStop1 } from "react-icons/ci";
import { TbLocationShare } from "react-icons/tb";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import VideoList from "@/components/videoList";

export default function Home() {
  const [play, setplay] = useState(false);
  const [preview, setPreview] = useState(false);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleMouseLeave = () => {
    if (!play) {
      setPreview(false);
    }
  };
  return (
    <main className={`min-h-screen gap-2 items-center justify-between`}>
      <div className="w-[75%] m-auto p-12">
        <div className="bg-dark shadow-xl mb-2 w-[100%] relative h-[75vh] rounded-2xl overflow-hidden">
          <div
            className="absolute w-full h-full flex items-center place-content-center "
            onMouseOver={() => setPreview(true)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="rounded-full flex items-center place-content-center p-8 text-white bg-white/40 "
              onClick={() => setplay(!play)}
            >
              {!play ? <CiPlay1 size="50" /> : <CiStop1 size="50" />}
            </div>
          </div>
          <div
            className={`${
              play && "hidden"
            } w-full m-auto absolute bottom-0 bg-pDark/25 backdrop-blur-lg`}
          >
            <div className="flex text-w2 p-4 gap-4">
              <div className="w-[68%]">
                <p className="bg-w2/25 text-w2 p-1 rounded-md w-40 uppercase text-xs text-center font-bold">
                  current Video
                </p>
                <p className=" font-bold text-lg tracking-tighter">
                  Aye mi n fogo fun o | EmmaOMG & The OhEmGee Choir
                </p>
                <p className=" font-semibold text-sm tracking-tight">
                  Pastor Ebenezer Ajayi • August 5, 2024
                </p>
              </div>
              <div className="w-[32%] bg-w2/40 rounded-lg px-6 justify-between flex items-center place-content-center">
                <div className="flex flex-col  text-Dark items-center">
                  <TbLocationShare size="20" />
                  <p className="capitalize text-xs font-bold tracking-tighter">
                    share{" "}
                  </p>
                </div>
                <div className="flex flex-col  text-w2 items-center">
                  <AiOutlineFacebook size="20" />
                  <p className="capitalize text-xs font-bold tracking-tighter">
                    facebook{" "}
                  </p>
                </div>
                <div className="flex flex-col  text-w2 items-center ">
                  <FaInstagram size="20" />
                  <p className="capitalize text-xs font-bold tracking-tighter">
                    instagram
                  </p>
                </div>
              </div>
            </div>
          </div>
          {!preview ? (
            <Image src={""} alt="" className="h-full w-full" />
          ) : (
            <iframe
              width="1000"
              height="585"
              src={`https://www.youtube.com/embed/85B_DpmMunk?si=6Zkh7zek43EFKsai${
                play && !preview
                  ? "autoplay=1&mute=1&modestbranding=1&showinfo=0&controls=0&rel=0"
                  : play && preview
                    ? "autoplay=1&modestbranding=1&showinfo=1&controls=1&rel=0"
                    : ""
              }`}
              title="Video Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
      <VideoList
        heading="Sunday Service Sermon"
        bgStyle="bg-w2"
        videos={array}
      />
      <VideoList heading="Bible Study Messages" bgStyle="" videos={array} />
      <VideoList heading="Thursday Prayer Meeting" bgStyle="" videos={array} />
    </main>
  );
}
