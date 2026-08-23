"use client";

import { useIsMobile } from "@/app/providers";
import { useState, useRef, Dispatch, SetStateAction } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoPlayer from "@/components/VideoPlayer";
import { PlaySVG } from "@/components/Icons";
import Cursor from "@/components/Cursor";
import { useCursor } from "@/hooks/useCursor";
import useMaskImage from "@/hooks/useMaskImage";

function HeroDesktopClient({
  setPlayIntro,
}: {
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "50vh start"],
  });
  const maskImage = useMaskImage(scrollYProgress, false, {
    divisions: 24,
    inset: 0.15,
    gap: 0.3,
    vh: 100,
  });
  const { handlers, cursorProps } = useCursor();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <>
      <div className="absolute inset-0 overflow-clip" ref={containerRef}>
        <motion.div style={{ y, maskImage }} className="h-full">
          <video className="size-full object-cover" autoPlay muted loop>
            <source src="/Hero/elementismp4.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          className="absolute inset-x-0 top-0 flex h-screen cursor-pointer flex-col justify-end gap-8"
          {...handlers}
          onClick={() => {
            handlers.onMouseLeave();
            setPlayIntro((prev) => !prev);
          }}
        />
      </div>
      <Cursor
        {...cursorProps}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full p-6"
      >
        <PlaySVG />
      </Cursor>
    </>
  );
}

function HeroMobileClient({
  playIntro,
  setPlayIntro,
}: {
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
  playIntro: boolean;
}) {
  return (
    <div
      className="absolute inset-0 grid place-items-center"
      onClick={() => setPlayIntro((prev) => !prev)}
    >
      <video
        className="size-full object-cover md:hidden"
        autoPlay
        muted
        loop
        poster="/Hero/elementis-cover-mjpg.png"
      >
        <source src="Hero/elementismp4.mp4" type="video/mp4" />
      </video>
      <Cursor
        renderCursor={!playIntro}
        isMobile={true}
        className="absolute grid aspect-square w-11 place-items-center rounded-full"
      >
        <PlaySVG className="w-1/3" />
      </Cursor>
    </div>
  );
}

export default function HeroClient() {
  const isMobile = useIsMobile();
  const [playIntro, setPlayIntro] = useState(false);

  return (
    <>
      {isMobile ? (
        <HeroMobileClient playIntro={playIntro} setPlayIntro={setPlayIntro} />
      ) : (
        <HeroDesktopClient setPlayIntro={setPlayIntro} />
      )}
      <VideoPlayer
        isMobile={isMobile}
        playIntro={playIntro}
        setPlayIntro={setPlayIntro}
      />
    </>
  );
}
