import useTheme from "@/hooks/use-theme";
import { motion } from "framer-motion";
import Image from "next/image";

const ProfilePicture = () => {
  const profilePic = "/profile-pic.png" as const;
  const darkProfilePic = "/profile-pic-dark.png" as const;
  const { theme } = useTheme()

  return (
    <div className="flex flex-col items-center justify-center px-5">
      <div className="relative">
        <motion.div
          transition={{ bounce: true, ease: "easeInOut", duration: 0.4 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            priority={true}
            className={`h-40 w-40 rounded-full border-[0.15rem] object-cover border-slate-50 shadow-xl`}
            quality={95}
            width={250}
            height={250}
            src={theme === 'dark' ? darkProfilePic : profilePic}
            alt="rafli dewanto"
          />
        </motion.div>
        <motion.span
          transition={{ bounce: true, ease: "easeInOut", duration: 0.4 }}
          initial={{ y: 300, x: -300, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          className="absolute bottom-0 right-0 text-4xl"
        >
          👋
        </motion.span>
      </div>
    </div>
  );
};

export default ProfilePicture;
