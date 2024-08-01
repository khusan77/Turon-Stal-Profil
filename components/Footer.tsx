"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useTranslation } from "react-i18next";
import "../src/i18n";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="w-full pt-20 pb-10">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          width={10}
          height={10}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {t("Готовы ли вы обрести наши")}{" "}
          <span className="text-purple">{t("высококачественные")}</span>{" "}
          {t("продукты")}?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {t("Нажмите кнопку и свяжитесь c нашими менеджерами")} <br />{" "}
          {t("через наш телеграм бот (METALSKLAD_bot)")}
        </p>
        <Link href="https://t.me/METALSKLAD_bot" target="_blank" >
          <MagicButton
            title={t("Свяжитесь с нами!")}
            icon={<FaLocationArrow />}
            width="50"
            position="right"
          />
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
            href={info.link}
            target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 md:mt-0 mt-5"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
