"use client";
import { useTranslation } from "react-i18next";
import { DirectionAwareHover } from "./ui/DirectionAwareHover";
import { catalogue } from "@/data";
import "../src/i18n";

const Catalogue = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="py-20" id="catalogue">
      <h1 className="heading p-10 md:p-20 relative top-0">
        {t("Просмотрите наш каталог")}
      </h1>
      <div className="flex items-center flex-wrap justify-center p-4 gap-14">
        {catalogue.map((item) => (
          <div
            className="lg:min-h-[22rem] md:h-[22rem] h-[15rem] flex items-center justify-center sm:w-80 w-[80vw]"
            key={item.id}
          >
            <DirectionAwareHover imageUrl={item.img}>
              <p className="font-bold text-lg md:text-2xl md:leading-6 leading-5 mb-2">{t(item.title)}</p>
              <p className="font-normal text-[.6rem] w-[12rem] md:w-72 md:text-sm mb-2">
                {t(item.des)}
              </p>
                <p className="text-[0.55rem] md:text-sm ">
                  {item.additionalInfo.title ? `${t(item.additionalInfo.title)}` : null}
                </p>
              <ul>
                <li className="text-[0.55rem] md:text-sm">
                  {item.additionalInfo.features.first ? `${t(item.additionalInfo.features.first)}` : null}
                </li>
                <li className="text-[0.55rem] md:text-sm">
                 {item.additionalInfo.features.second ? `${t(item.additionalInfo.features.second)}` : null}
                </li>
                <li className="text-[0.55rem] md:text-sm">
                 {item.additionalInfo.features.third ? `${t(item.additionalInfo.features.third)}` : null}
                </li>
                <li className="text-[0.55rem] md:text-sm">
                 {item.additionalInfo.features.fourth ? `${t(item.additionalInfo.features.fourth)}` : null}
                </li>
                <li className="text-[0.55rem] md:text-sm">
                 {item.additionalInfo.features.fiveth ? `${t(item.additionalInfo.features.fiveth)}` : null}
                </li>
                <li className="text-[0.55rem] md:text-sm">
                 {item.additionalInfo.features.sixth ? `${t(item.additionalInfo.features.sixth)}` : null}
                </li>
                <li className="text-xs"></li>
              </ul>
            </DirectionAwareHover>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
