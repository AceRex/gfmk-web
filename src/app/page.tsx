"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import fellowship from "../../public/fellowship.jpeg";
import media from "../../public/media.jpg";
import teach from "../../public/teach.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  const sop = [
    {
      title: "To Preach",
      description:
        "To preach the word of God and bring people into the membership of God's family",
    },
    {
      title: "To Teach",
      description:
        "To teach the word of God, to enhance freedom, promote Christian maturity and bind people to God for service",
    },
    {
      title: "To Live",
      description:
        "To live the word of God, to demonstrate the new life in Christ to the world and ensure security of believers",
    },
  ];

  const textRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = textRef.current;
    const desc = descRef.current;
    if (!el || !desc) return;

    const animateOut = (onComplete: () => void) => {
      gsap.to(el, {
        y: 60,
        opacity: 0,
        skewX: 8,
        duration: 0.6,
        ease: "power2.in",
      });
      gsap.to(desc, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete,
      });
    };

    const animateIn = () => {
      gsap.fromTo(
        el,
        { y: -80, opacity: 0, skewX: -8 },
        { y: 0, opacity: 1, skewX: 0, duration: 0.8, ease: "power3.out" },
      );
      gsap.fromTo(
        desc,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" },
      );
    };

    const cycle = () => {
      animateOut(() => {
        indexRef.current = (indexRef.current + 1) % sop.length;
        if (el) el.textContent = sop[indexRef.current].title;
        if (desc) desc.textContent = sop[indexRef.current].description;
        animateIn();
      });
    };

    animateIn();

    const interval = setInterval(cycle, 10 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div
        style={{
          backgroundImage: 'url("/light.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "overlay",
        }}
        className="w-full"
      >
        <div className="h-screen flex flex-col items-center justify-center">
          <p
            ref={textRef}
            className="text-white font-semibold text-[200px] tracking-[-0.1em]"
          >
            {sop[0].title}
          </p>
          <span
            ref={descRef}
            className="w-[700px] text-center font-light text-white text-[24px]"
          >
            {sop[0].description}
          </span>
        </div>

        <div className="w-full min-h-screen bg-pDark backdrop-blur-md p-[12px] flex flex-col items-center justify-center">
          <div className="max-w-[1350px] min-w-0 mx-auto w-full space-y-[40px]">
            <div className="space-y-[12px]">
              <div className="bg-w2/30 backdrop-blur-md font-medium border border-white rounded-[12px] text-[12px] w-fit py-[4px] px-[16px] flex items-center justify-center text-w2">
                🏠 This is Home!!!
              </div>
              <div className="space-y-[2px]">
                <h3 className="font-extrabold text-w1 text-[30px] tracking-[-0.05em]">
                  WELCOME TO CHURCH
                </h3>
                <h2 className="text-w1 font-extralight text-[18px]">
                  This is -{" "}
                  <span className="font-semibold">
                    The Gospel Faith Mission International,
                    <br /> Ketu District.
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-[30px] w-full">
              <div className="h-[500px] bg-white w-1/3 relative rounded-[12px] overflow-hidden">
                <div className="absolute bottom-0 w-full z-10 p-[12px]">
                  <p className=" text-[30px] text-white uppercase font-extrabold">
                    Sermon
                  </p>
                  <Link href={"#"}>
                    <p className="text-w1 text-[12px] w-fit flex items-center justify-center gap-[6px] bg-w1/40 backdrop-blur-md px-[10px] py-[4px] rounded-[12px] border-[0.5px]">
                      Listen or download sermons
                      <FaArrowRight />
                    </p>
                  </Link>
                </div>
                <Image
                  src={teach}
                  alt="fellowship"
                  fill
                  className="object-cover h-full"
                />
                <div className="absolute bg-gradient-to-t from-black/70 to-transparent w-full h-full top-0 left-0" />
              </div>
              <div className="h-[500px] bg-white w-1/3 relative rounded-[12px] overflow-hidden">
                <div className="absolute bottom-0 w-full z-10 p-[12px]">
                  <p className=" text-[30px] text-white uppercase font-extrabold">
                    Daily devotion
                  </p>
                  <Link href={"#"}>
                    <p className="text-w1 text-[12px] w-fit flex items-center justify-center gap-[6px] bg-w1/40 backdrop-blur-md px-[10px] py-[4px] rounded-[12px] border-[0.5px]">
                      Go to our Daily devotion
                      <FaArrowRight />
                    </p>
                  </Link>
                </div>
                <Image
                  src={fellowship}
                  alt="fellowship"
                  fill
                  className="object-cover h-full"
                />
                <div className="absolute bg-gradient-to-t from-black/70 to-transparent w-full h-full top-0 left-0" />
              </div>
              <div className="h-[500px] bg-white w-1/3 relative rounded-[12px] overflow-hidden">
                <div className="absolute bottom-0 w-full z-10 p-[12px]">
                  <p className=" text-[30px] text-white uppercase font-extrabold">
                    Connect with us
                  </p>
                  <Link href={"#"}>
                    <p className="text-w1 text-[12px] w-fit flex items-center justify-center gap-[6px] bg-w1/40 backdrop-blur-md px-[10px] py-[4px] rounded-[12px] border-[0.5px]">
                      Go to our Social pages
                      <FaArrowRight />
                    </p>
                  </Link>
                </div>
                <Image
                  src={media}
                  alt="fellowship"
                  fill
                  className="object-cover h-full"
                />
                <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-full top-0 left-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
