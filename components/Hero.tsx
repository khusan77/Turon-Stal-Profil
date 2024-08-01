"use client";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useTranslation } from "react-i18next";
import "../src/i18n";
import Link from "next/link";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="pb-20 pt-36" id="home">
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            {t("Надежный. Прочный. Инновационный.")}
          </p>
          <TextGenerateEffect
            words="Turon Stal Profil"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {t("Надежный металлопрокат для ваших проектов.")}
          </p>
          <Link href="#catalogue">
            <MagicButton
              title={t("Изучите нашу продукцию")}
              icon={<FaLocationArrow />}
              width="80"
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
