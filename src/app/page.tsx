"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-screen  relative"
      >
        <div
          ref={textRef}
          className="text-red-500 absolute -bottom-0 font-semibold left-0 text-[300px] tracking-[-0.1em]"
        >
          {sop[0].title}
        </div>
        <div
          ref={descRef}
          className="absolute bottom-[250px] right-0 w-[500px] font-light text-[20px]"
        >
          {sop[0].description}
        </div>
      </div>
    </main>
  );
}
