"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

// icons
import { BsGrid3X3 } from "react-icons/bs";

export default function ProfileTabs({ userId }: { userId: string | null }) {
    const router = useRouter();
    const currentRoute = usePathname();

    // Define tab items
    const tabs = [
        { label: "POSTS", icon: <BsGrid3X3 size={13} />, path: `/${userId}` },
        {
            label: "REELS",
            icon: (
                <Image
                    className={`dark:invert ${
                        currentRoute === `/${userId}/reels`
                            ? ""
                            : "contrast-[15%]"
                    }`}
                    src="https://cdn-icons-png.flaticon.com/512/12595/12595880.png"
                    alt="reel"
                    width={15}
                    height={15}
                />
            ),
            path: `/${userId}/reels`,
        },
        {
            label: "TAGGED",
            icon: (
                <Image
                    className={`dark:invert ${
                        currentRoute === `/${userId}/tagged`
                            ? ""
                            : "contrast-[15%]"
                    }`}
                    src="https://cdn-icons-png.flaticon.com/512/10349/10349222.png"
                    alt="reel"
                    width={15}
                    height={15}
                />
            ),
            path: `/${userId}/tagged`,
        },
    ];

    return (
        <div className="relative mt-6 z-[500] dark:bg-black border-t border-[#DBDBDB] dark:border-[#2e2e2e] md:mr-[2rem] lg:mr-[8em] lg:ml-[6em] pb-[0.5em]">
            <div className="relative flex justify-evenly text-[#8f8f8f]">
                {tabs.map((tab) => (
                    <div
                        key={tab.path}
                        onClick={() => router.push(tab.path)}
                        className={`relative flex items-center gap-2 cursor-pointer pt-[15px] pb-2 duration-300 ${
                            currentRoute === tab.path
                                ? "text-black dark:text-white font-semibold"
                                : ""
                        }`}
                    >
                        {tab.icon}
                        <p className="text-xs select-none">{tab.label}</p>

                        {/* Animated Top Border */}
                        {currentRoute === tab.path && (
                            <motion.div
                                layoutId="active-tab"
                                className="absolute top-0 left-0 w-full h-[1px] bg-black dark:bg-white rounded-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 250,
                                    damping: 20,
                                    mass: 0.25,
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
