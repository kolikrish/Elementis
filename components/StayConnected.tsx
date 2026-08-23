import * as motion from "motion/react-client";
import Link from "next/link";
import cn from "@/utils/cn";
import {
  InstagramLogo,
  FaceBookLogo,
  TiktokLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "@/components/Icons";
import { CSSProperties } from "react";

interface StayConnectedProps {
  className?: string;
  style?: CSSProperties;
}

const socialLogos = [
  { Component: InstagramLogo, href: "#", key: "instagram" },
  { Component: FaceBookLogo, href: "#", key: "facebook" },
  { Component: TiktokLogo, href: "#", key: "tiktok" },
  { Component: WhatsappLogo, href: "#", key: "whatsapp" },
  { Component: YoutubeLogo, href: "#", key: "youtube" },
];

export default function StayConnected({
  className,
  style,
}: StayConnectedProps) {
  return (
    <nav
      style={{ ...style }}
      aria-label="Social Navigation"
      className={cn("flex flex-col", className)}
    >
      <div>Stay Connected</div>
      <div className="flex items-center">
        {socialLogos.map(({ Component, href, key }) => (
          <Link href={href} key={key}>
            <motion.div
              className="cursor-pointer [&>svg]:size-4 md:[&>svg]:size-7"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.7 }}
              transition={{ ease: "easeInOut" }}
            >
              <Component />
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
