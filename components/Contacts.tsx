"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { contacts } from "@/data";
import { PinContainer } from "./ui/Pin";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import "../src/i18n";
import Link from "next/link";

const Contacts = () => {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "@METALSKLAD_bot";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className="py-20" id="contacts">
      <h1 className="heading">
        {t("Наши")}
        <span className="text-purple"> {t("контакты")}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {contacts.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={t("Локация")}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24000.274678623493!2d69.182161!3d41.24281!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE0JzI2LjciTiA2OcKwMTEnMTMuMCJF!5e0!3m2!1sru!2sus!4v1716976796328!5m2!1sru!2sus"
                    width="400"
                    height="300"
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>{" "}
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {t(item.title)}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {t(item.des)}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center"></div>
                <div className="flex justify-center items-center">
                  <Link href={item.link} target="_blank" className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {t("Перейти")}
                  </Link>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
        <div className="w-full relative max-w-xs md:mt-10">
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-6 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h1 className="font-bold text-xl text-white mb-3 relative z-50">
              {t("Контакты")}
            </h1>
            <p className="font-normal text-base text-slate-200 mb-3 relative z-50">
              {t("Оцинкованный прокат")}: <br /> +998 94 672 40 00 <br />
            </p>
            <p className="font-normal text-base text-slate-200 mb-3 relative z-50">
              {t("Трубная продукция")}: <br /> +998 93 554 98 98
              <br />
            </p>
            <p className="font-normal text-base text-slate-200 mb-3 relative z-50">
              {t("Оцинкованные профили для гипсокартона")}: <br /> +998 99 720
              17 17
            </p>
            <p className="font-normal text-base text-slate-200 relative z-50">
              {t("Металлопрокат")}: <br /> +998 90 109 09 09
            </p>
            <div className="md:mt-0 mt-8 mb-4">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              ></div>
              <MagicButton
                title={
                  copied
                    ? t("Юзернейм скопирован!")
                    : t("Скопируйте юзернейм телеграм бота")
                }
                icon={<IoCopyOutline />}
                width="50"
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
