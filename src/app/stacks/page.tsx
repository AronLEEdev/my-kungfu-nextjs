"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css/effect-cards";
import "swiper/css";
import "./page.css";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
const techStacks = [
  {
    id: "react",
    included: true,
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    href: "https://reactjs.org/"
  },
  {
    id: "nextjs",
    included: true,
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    href: "https://nextjs.org/"
  },
  {
    id: "tailwindcss",
    included: true,
    name: "TailwindCSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    href: "https://tailwindcss.com/"
  },
  {
    id: "typescript",
    included: true,
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    href: "https://www.typescriptlang.org/"
  },
  {
    id: "shadcn",
    included: true,
    name: "Shadcn UI",
    image: "/shadcn-ui.png",
    href: "https://ui.shadcn.com/"
  },
  {
    id: "prisma",
    included: true,
    name: "Prisma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    href: "https://www.prisma.io/"
  },
  {
    id: "postgresql",
    included: true,
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    href: "https://www.postgresql.org/"
  },
  {
    id: "vercel",
    included: true,
    name: "Vercel",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
    href: "https://vercel.com/"
  },
  {
    id: "vue",
    name: "Vue.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    included: false,
    href: "https://vuejs.org/"
  },
  {
    id: "nodejs",
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    included: false,
    href: "https://nodejs.org/"
  },
  {
    id: "express",
    name: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    included: false,
    href: "https://expressjs.com/"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    included: false,
    href: "https://www.mongodb.com/"
  },
  {
    id: "mongoose",
    name: "Mongoose",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    included: false,
    href: "https://mongoosejs.com/"
  },
  {
    id: "uniapp",
    name: "Uniapp",
    image: "/stacks/uniapp.png",
    included: false,
    href: "https://uniapp.dcloud.io/"
  },
  {
    id: "svelte",
    name: "Svelte",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    included: false,
    href: "https://svelte.dev/"
  },
  {
    id: "threejs",
    name: "Three.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
    included: false,
    href: "https://threejs.org/"
  },
  {
    id: "webpack",
    name: "Webpack",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    included: false,
    href: "https://webpack.js.org/"
  },
  {
    id: "vite",
    name: "Vite",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    included: false,
    href: "https://vitejs.dev/"
  },
  {
    id: "playwright",
    name: "Playwright",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
    included: false,
    href: "https://playwright.dev/"
  },
  {
    id: "cypress",
    name: "Cypress",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
    included: false,
    href: "https://www.cypress.io/"
  },
  {
    id: "wechat",
    name: "WeChat",
    image: "/wechat.png",
    included: false,
    href: "https://mp.weixin.qq.com/cgi-bin/wx"
  },
  {
    id: "alipay",
    name: "Alipay",
    image: "/alipay.jpg",
    included: false,
    href: "https://open.alipay.com/"
  }
];

const tools = [
  {
    id: "myssl",
    name: "MySSL",
    href: "https://myssl.com/",
    desc: "HTTPS网站SSL证书检测"
  },
  {
    id: "lbgQQ",
    name: "腾讯位置服务",
    href: "https://lbs.qq.com/getPoint/",
    desc: "腾讯地图坐标地点转换"
  },
  {
    id: "baiduMap",
    name: "百度地图坐标拾取",
    href: "https://api.map.baidu.com/lbsapi/getpoint/index.html",
    desc: "百度地图坐标地点转换工具"
  },
  {
    id: "amap",
    name: "高德地图服务",
    href: "https://lbs.amap.com/tools/picker",
    desc: "高德地图坐标地点转换工具"
  },
  {
    id: "regulex",
    name: "Regulex",
    href: "https://jex.im/regulex/",
    desc: "正则表达式可视化工具"
  },
  {
    id: "cssSprite",
    name: "CSS Sprite",
    href: "https://www.toptal.com/developers/css/sprite-generator/",
    desc: "精灵图生成器"
  },
  {
    id: "ReDosChecker",
    name: "ReDoS checker",
    href: "https://devina.io/redos-checker",
    desc: "检测正则表达式是否存在DoS漏洞"
  },
  {
    id: "excalidraw",
    name: "Excalidraw",
    href: "https://excalidraw.com/",
    desc: "手绘风的在线绘图工具（挺好看的）"
  },
  {
    id: "tutor",
    name: "算法可视化工具",
    href: "https://pythontutor.com/javascript.html#mode=edit",
    desc: "用于解析算法的可视化工具，帮助理解每一步算法的执行过程"
  }
];
export default function Stacks() {
  return (
    <div className="flex flex-col gap-4 justify-center p-4">
      <div className="font-bold text-2xl w-full text-center mt-4">
        Tech used for this site
      </div>
      <p className="font-light">
        This site is a <span className="bg-amber-200">Next.js</span> app, using
        tailwindcss and shadcn/ui for ui styling, prisma as ORM and postgresql
        as database. Deployed on Vercel.
      </p>
      <Swiper
        modules={[EffectCards, Autoplay]}
        effect={"cards"}
        autoplay={{ delay: 2000 }}
      >
        {techStacks
          .filter((el) => el.included)
          .map((el) => {
            return (
              <SwiperSlide
                key={el.id}
                className="p-4 flex flex-col items-center justify-center gap-4"
                onClick={() => window.open(el.href)}
              >
                <img width={200} height={200} src={el.image} alt={el.name} />
                <span className="font-bold">{el.name}</span>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="font-bold text-2xl w-full text-center mt-4">
        Other tech stacks <span>&#128161;</span>
        <br />
        <span className="text-sm text-blue-500 ">
          encountered in daily work
        </span>
      </div>
      <div className="grid grid-cols-3 items-center justify-center">
        {techStacks
          .filter((el) => !el.included)
          .map((el) => {
            return (
              <div
                key={el.id}
                className="flex flex-col gap-2 items-center px-4 py-2"
                onClick={() => window.open(el.href)}
              >
                <img width={50} height={50} src={el.image} alt={el.name} />
                <span className="underline text-blue-400">{el.name}</span>
              </div>
            );
          })}
      </div>
      <div className="font-bold text-2xl w-full text-center mt-4">
        Some useful tools <span>&#128295;</span>
        <br />
        <span className="text-sm text-blue-500">
          pretty handy if you ask me
        </span>
      </div>
      <Card className="flex flex-col p-4 gap-4">
        {tools.map((el) => {
          return (
            <div
              key={el.id}
              className="flex flex-col gap-1 justify-center"
              onClick={() => window.open(el.href)}
            >
              <div className="w-fit text-blue-500 underline">{el.name}</div>
              <div className="text-sm text-gray-600 break-words text-left">
                {el.desc}
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
