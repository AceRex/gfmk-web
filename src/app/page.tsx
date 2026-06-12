"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import fellowship from "../../public/fellowship.jpeg";
import media from "../../public/media.jpg";
import teach from "../../public/teach.jpg";
import Link from "next/link";
import { FaArrowRight, FaTimes, FaMapMarkerAlt, FaClock } from "react-icons/fa";

type ProgramItem = {
  src: string; // URL path string for /public/programs images
  title: string;
  subtitle: string; // theme / scripture reference
  tag: string;
  date: string;
  time: string;
  venue: string;
  address: string;
};

const programs: ProgramItem[] = [
  {
    src: "/programs/4 prophetic Sunday.png",
    title: "4 Prophetic Sundays",
    subtitle: "A 4 Sundays Power Packed Service",
    tag: "Series",
    date: "Sun 7, 14, 21 & 28 June 2026",
    time: "7AM Prompt",
    venue: "GOFAMINT Ketu District HDQ",
    address: "19, Olatunji Ige Street, Ikosi Ketu, Lagos",
  },
  {
    src: "/programs/First Sunday.png",
    title: "Spirit of Prayer",
    subtitle: "Romans 8:26 · 1st Sunday",
    tag: "Prayer",
    date: "Sun 7th June 2026",
    time: "7AM Prompt",
    venue: "GOFAMINT Ketu District HDQ",
    address: "19, Olatunji Ige Street, Ikosi Ketu, Lagos",
  },
  {
    src: "/programs/Second Sunday.png",
    title: "Build Up",
    subtitle: "Jude 1:20 · 2nd Sunday",
    tag: "Teaching",
    date: "Sun 14th June 2026",
    time: "7AM Prompt",
    venue: "GOFAMINT Ketu District HDQ",
    address: "19, Olatunji Ige Street, Ikosi Ketu, Lagos",
  },
  {
    src: "/programs/Thanksgiving.png",
    title: "Thanksgiving Service",
    subtitle: "Join us this Sunday for Thanksgiving",
    tag: "Thanksgiving",
    date: "Sun 31st May 2026",
    time: "7AM Prompt",
    venue: "GOFAMINT Ketu District HDQ",
    address: "Olatunji Ige Street, Ikosi Ketu, Lagos",
  },
  {
    src: "/programs/Worship in Love.png",
    title: "Worship in Love 2.0",
    subtitle: "Ketu District Youth Choir Presents",
    tag: "Youth Choir",
    date: "Sun 28th June 2026",
    time: "3:00 PM Prompt",
    venue: "GOFAMINT God's Glory Assembly",
    address: "5/8 Goodluck Street, Alapere, Ketu, Lagos",
  },
];

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

  const [selected, setSelected] = useState<ProgramItem | null>(null);

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

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <main>
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(12px)",
          }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-[12px] overflow-hidden shadow-2xl"
            style={{
              animation: "modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            {/* Caption bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-s3 text-white px-3 py-1 rounded-[12px] mb-2">
                {selected.tag}
              </span>
              <h2 className="text-white font-extrabold text-[28px] leading-tight">
                {selected.title}
              </h2>
              <p className="text-w1/80 text-[13px] italic mt-0.5 mb-3">
                {selected.subtitle}
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-w1/80 text-[13px] flex items-center gap-2">
                  <FaClock size={11} className="text-s3" />
                  {selected.date} &nbsp;·&nbsp; {selected.time}
                </p>
                <p className="text-w1/80 text-[13px] flex items-center gap-2">
                  <FaMapMarkerAlt size={11} className="text-s3" />
                  {selected.venue} — {selected.address}
                </p>
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/80 transition-colors"
              aria-label="Close"
            >
              <FaTimes size={14} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

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
            className="text-white font-semibold text-[70px] md:text-[150px] lg:text-[200px] tracking-[-0.1em]"
          >
            {sop[0].title}
          </p>
          <span
            ref={descRef}
            className="w-[250px] md:w-[500px] lg:w-[700px] text-center font-light text-white text-[12px] md:text-[16px] lg:text-[24px]"
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
                <h3 className="font-extrabold text-w1 text-[15px] md:text-[25px] lg:text-[30px] tracking-[-0.05em]">
                  WELCOME TO CHURCH
                </h3>
                <h2 className="text-w1 font-extralight text-[13px] md:text-[15px] lg:text-[18px]">
                  This is -{" "}
                  <span className="font-semibold">
                    The Gospel Faith Mission International,
                    <br /> Ketu District.
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-[20px] md:gap-[30px] w-full overflow-x-scroll no-scrollbar md:overflow-x-hidden">
              <div className="h-[300px] md:h-[500px] bg-white w-[260px] md:w-1/3 shrink-0 relative rounded-[12px] overflow-hidden">
                <div className="absolute bottom-0 w-full z-10 p-[12px]">
                  <p className="text-[20px] md:text-[30px] text-white uppercase font-extrabold">
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

              <div className="h-[300px] md:h-[500px] bg-white w-[260px] md:w-1/3 shrink-0 relative rounded-[12px] overflow-hidden">
                <div className="absolute bottom-0 w-full z-10 p-[12px]">
                  <p className="text-[20px] md:text-[30px] text-white uppercase font-extrabold">
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

              <div className="h-[300px] md:h-[500px] bg-white w-[260px] md:w-1/3 shrink-0 relative rounded-[12px] overflow-hidden">
                <div className="absolute bottom-0 w-full z-10 p-[12px]">
                  <p className="text-[20px] md:text-[30px] text-white uppercase font-extrabold">
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

      {/* ── Programs for the Month ── */}
      <div className="bg-white w-full py-[80px] px-[24px] flex flex-col items-center gap-[40px]">
        {/* Section header */}
        <div className="flex flex-col items-center gap-[10px]">
          <div className="bg-s3 font-medium rounded-[12px] text-[8px] md:text-[10px] lg:text-[12px] w-fit py-[4px] px-[16px] flex items-center justify-center text-w2">
            📣 Announcement
          </div>
          <h3 className="font-extrabold text-s3 text-[15px] md:text-[20px] lg:text-[30px] tracking-[-0.05em]">
            Programs for the Month
          </h3>
          <p className="text-p3/60 text-[13px] md:text-[14px] lg:text-[15px] max-w-[480px] text-center">
            Join us this month for powerful gatherings, Bible study, fellowship
            and more.
          </p>
        </div>

        {/* Masonry grid */}
        <div
          className="w-full max-w-[1200px]"
          style={{
            columns: "3 260px",
            columnGap: "16px",
          }}
        >
          {programs.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelected(item)}
              className="relative mb-[16px] rounded-[14px] overflow-hidden cursor-pointer group break-inside-avoid"
              style={{
                animation: `cardFadeUp 0.5s ease both`,
                animationDelay: `${i * 80}ms`,
              }}
            >
              {/* Natural image height gives masonry effect */}
              <Image
                src={item.src}
                alt={item.title}
                width={600}
                height={800}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ display: "block" }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[16px]">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-s3 text-white px-2 py-0.5 rounded-full w-fit mb-1">
                  {item.tag}
                </span>
                <p className="text-white font-bold text-[16px] leading-tight">
                  {item.title}
                </p>
                <p className="text-w1/70 text-[12px] italic mt-0.5">
                  {item.subtitle}
                </p>
                <p className="text-w1/60 text-[11px] mt-1.5 flex items-center gap-1">
                  <FaClock size={9} /> {item.date} · {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
