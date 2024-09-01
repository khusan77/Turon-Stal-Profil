"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { useTranslation } from "react-i18next";
import "../../src/i18n";
import { nation } from "@/data";
import Image from "next/image";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  const [selected, setSelected] = useState(nation[0]);
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto sm:px-10 px-2 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="text-xs sm:text-sm !cursor-pointer">
              {t(navItem.name)}
            </span>
            <span className="block sm:hidden">{navItem.icon}</span>
          </Link>
        ))}

        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative -mt-2 w-8 h-4">
                <ListboxButton title="Title" className="relative w-full rounded-md py-0.5 pl-1 pr-1 shadow-sm focus:outline-none">
                  <span className="flex items-center">
                    {selected?.avatar && (
                      <Image
                        src={selected.avatar}
                        alt=""
                        className="h-6 w-6 flex-shrink-0 rounded-full"
                        width={20}
                        height={20}
                        priority
                      />
                    )}
                  </span>
                </ListboxButton>

                <Transition
                  show={open}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#10132E] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {nation.map((flag) => (
                      <ListboxOption
                        key={flag.id}
                        className={({ focus }) =>
                          classNames(
                            focus ? "bg-[#4d5282]" : "",
                            !focus ? "text-gray-900" : "",
                            "select-none rounded-md"
                          )
                        }
                        value={flag}
                      >
                        <div
                          className="flex items-center p-1"
                          onClick={() => i18n.changeLanguage(flag.code)}
                          key={flag.code}
                        >
                          <Image
                            src={flag.avatar}
                            alt="flag_lng"
                            className="h-6 w-6 rounded-full"
                            width={20}
                            height={20}
                          />
                        </div>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
        
      </motion.div>
    </AnimatePresence>
  );
};
