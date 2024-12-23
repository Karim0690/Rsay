"use client";
import ServicesIcons from "@/components/servicesIcons/ServicesIcons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import benefits from "@/data/Services/website-benefits";
import benefitsAr from "@/data/Services/website-benefitsAr";
import { HoverEffectServices } from "@/components/ui/card-hover-effect-service";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";

export default function Page() {
  const t = useTranslations("Services");
  const locale = Cookies.get("locale") || "en";
  const [servicesToDisplay, setServicesToDisplay] = useState([]);
  const [benefitsToDisplay, setBenefitsToDisplay] = useState([]);
  useEffect(() => {
    if (locale === "en") {
      setServicesToDisplay(services);
      setBenefitsToDisplay(benefits);
    } else {
      setServicesToDisplay(servicesAr);
      setBenefitsToDisplay(benefitsAr);
    }
  }, [locale]);

  return (
    <>
      <div className="absolute h-[45rem] md:h-[35rem] w-full -z-10 ">
        <div className="absolute top-0 w-full h-[45rem] md:h-[35rem] bg-black/70 "></div>
        <Image
          src="/Services/website development.jpeg"
          width={1920}
          height={1080}
          alt="bg"
          className="w-full h-[45rem] md:h-[35rem] object-cover "
        />
      </div>
      <div className="px-6 lg:px-0 py-32 lg:justify-around w-full flex flex-col gap-10 items-center h-[45rem] md:h-[35rem] ">
        <ServicesIcons />
        <h1 className="uppercase text-white font-brush text-center text-5xl">
          {t("web")}
        </h1>
        <p className="text-center text-white font-medium text-xl max-w-5xl">
          {t("web-description")}
        </p>
        <Link href="/contact/companies">
          <button className="bg-brand text-white font-semibold w-32 py-3 rounded-xl text-center hover:ring-4 ring-brand hover:bg-brand/25 hover:scale-105 duration-300">
            {t("lets-talk")}
          </button>
        </Link>
      </div>
      <div className="my-20">
        <h2
          className={`${"-rotate-2"} text-center font-brush text-4xl md:text-5xl font-bold`}
        >
          {t("why")}
        </h2>
        {/* filp cards */}
        <div className="mx-auto flex justify-center py-10 sm:py-10 lg:max-w-7xl ">
          <div className="flex justify-center flex-col gap-12 sm:gap-16">
            <div className="grid gap-10 sm:gap-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-3">
              {servicesToDisplay.map((service) => (
                <div
                  key={service.name}
                  className="group h-[320px] w-[320px] [perspective:1000px] mx-auto"
                >
                  <div className="relative h-full w-full rounded-xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face */}
                    <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] bg-white">
                      {service.imageUrl && (
                        <Image
                          className="h-full w-full rounded-xl object-contain"
                          src={service.imageUrl}
                          alt={service.name}
                          width={320}
                          height={320}
                        />
                      )}
                      <p className="mt-4 text-center font-bold text-xl text-gray-800">
                        {service.name}
                      </p>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-600 px-4 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex h-full flex-col items-center justify-center">
                        <Image
                          src={service.icon}
                          alt={service.name}
                          width={64}
                          height={64}
                          className="mb-4"
                        />
                        <h2 className="text-2xl font-bold">{service.name}</h2>
                        <p className="mt-4 text-lg">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h2
          className={`${"-rotate-2"} text-center font-brush text-5xl font-bold`}
        >
          {t("features")}
        </h2>
        <div className="max-w-7xl mx-auto px-8">
          <HoverEffectServices items={benefitsToDisplay} />
        </div>
      </div>
      <div className="my-20 ">
        <h2
          className={`${"-rotate-2"} text-center font-brush text-5xl font-bold`}
        >
          {t("why-choose")}
        </h2>
        <div className="max-w-5xl mx-auto my-20 rounded-xl shadow-xl px-8 bg-slate-50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-2xl max-w-xl text-gray-600 mb-4 order-2 md:order-1">
            {t("why-description")}
          </p>
          <Image
            src="/Services/why.png"
            alt=""
            width={400}
            height={400}
            className="order-1 md:order-2"
          />
        </div>
      </div>
    </>
  );
}

const services = [
  {
    step: "01",
    name: "Strengthening Brand Identity",
    imageUrl: "/Services/brand.jpg",
    icon: "/Services/muscle.png",
    description:
      "Your website reflects your brand’s personality and gives customers a clear understanding of your business and offerings.",
  },
  {
    step: "02",
    name: "24/7 Accessibility",
    imageUrl: "/Services/Accessibility.webp",
    icon: "/Services/24-hour-clock.png",
    description:
      "A website allows customers to engage with your business anytime, anywhere, increasing interaction and boosting sales.",
  },

  {
    step: "03",
    name: "Effective Marketing Tool",
    imageUrl: "/Services/markting.jpg",
    icon: "/Services/promotion.png",
    description:
      "Websites play a key role in digital marketing strategies, such as content marketing and search engine optimization (SEO).",
  },
  {
    step: "04",
    name: "Building Credibility",
    imageUrl: "/Services/credibility.jpg",
    icon: "/Services/trustworthy.png",
    description:
      "A professional website builds trust and showcases your business’s reliability to potential clients.",
  },
  {
    step: "05",
    name: "Market Expansion",
    imageUrl: "/Services/Market-Expansion.jpg",
    icon: "/Services/market.png",
    description:
      "A well-designed website helps you reach new customers beyond geographical boundaries, expanding your market base.",
  },
];
const servicesAr = [
  {
    step: "01",
    name: "تعزيز الهوية الرقمية",
    description:
      "موقع الويب يعكس شخصية العلامة التجارية، ويمنح عملاءك نظرة واضحة حول هويتك وخدماتك",
    imageUrl: "/Services/brand.jpg",
    icon: "/Services/muscle.png",
  },
  {
    step: "02",
    name: "الوصول المستمر",
    description:
      "يمكن للعملاء زيارة موقعك في أي وقت ومن أي مكان، مما يزيد من فرص التواصل ونمو المبيعات",
    imageUrl: "/Services/Accessibility.webp",
    icon: "/Services/24-hour-clock.png",
  },

  {
    step: "03",
    name: "التسويق الفعال (SEO)",
    description:
      "يُعد الموقع الإلكتروني أداة رئيسية في استراتيجيات التسويق الرقمي، مثل تحسين محركات البحث",
    imageUrl: "/Services/markting.jpg",
    icon: "/Services/promotion.png",
  },
  {
    step: "04",
    name: "زيادة المصداقية",
    description:
      " وجود موقع إلكتروني احترافي يعزز ثقة العملاء بك ويُظهر احترافية أعمالك",
    imageUrl: "/Services/credibility.jpg",
    icon: "/Services/trustworthy.png",
  },
  {
    step: "05",
    name: "التوسع في السوق",
    description:
      "يتيح الموقع الوصول إلى أسواق جديدة دون قيود جغرافية، ما يُسهم في زيادة قاعدة العملاء",
    imageUrl: "/Services/Market-Expansion.jpg",
    icon: "/Services/market.png",
  },
];