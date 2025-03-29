"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export default function Journey({ refProp }) {
  const stacks = [
    "/vue.png",
    "/react.png",
    "/nextjs.jpeg",
    "/uniapp.png",
    "/mongodb.jpg",
    "/javascript.png",
    "/typescript.png",
    "/css.png",
    "/html.png",
    "/nodejs.png",
    "/java.png",
    "/mysql.png"
  ];

  const [fileLang, setFileLang] = useState("cn");
  const [showDialog, setShowDialog] = useState(false);
  const { width, height } = useWindowSize();
  function onDownload(lang: string) {
    setFileLang(lang);
  }
  return (
    <div>
      {showDialog && (
        <div className="fixed top-0 z-[999] w-full h-full">
          <Confetti width={width} height={height} className="z-[999]" />
        </div>
      )}
      <div className="flex flex-col bg-amber-100" ref={refProp}>
        <div className="flex flex-col gap-1 bg-blue-500 text-xl p-2 break-words overflow-hidden text-amber-50 text-center">
          <div className="flex items-center justify-center font-bold mt-4">
            <span>About Me</span>
            <span className="ml-1">&#128209;</span>
          </div>

          <span className="text-sm font-bold mt-4">
            李宜修（LEE I HSIU）. Software engineer. &#128187;
          </span>
          <p className="text-sm mt-4">
            8年软件开发经验，包括6年前端，2年后端开发，涉及技术栈包括但不限于：
            <span className="font-bold">
              Vue, React, Next.js, Uniapp, MongoDB, Node.js, Java, MySQL{" "}
            </span>
            等。
          </p>
          <p className="text-sm mt-4">
            现定居于江苏省南京市，擅长跨端页面的开发，多年前端开发带队经验。
          </p>
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
              <div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="w-full flex justify-center"
                >
                  <Button
                    className="m-4 flex-1 bg-green-600"
                    onClick={() => onDownload("cn")}
                  >
                    <a href="/api/download/resume?lang=cn" target="_blank">
                      <span className="text-lg">&#128070; </span>下载我的简历
                      (CN){" "}
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="w-full flex justify-center"
                >
                  <Button
                    className="m-4 flex-1 mt-0 bg-amber-600"
                    onClick={() => onDownload("en")}
                  >
                    <a href="/api/download/resume?lang=en" target="_blank">
                      <span className="text-lg">&#128070; </span>Click to
                      download (EN)
                    </a>
                  </Button>
                </motion.div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-2xl w-2/3 bg-fuchsia-400">
              <DialogHeader>
                <DialogTitle>
                  <span className="text-8xl mb-4">&#128077;</span>
                </DialogTitle>
                <span className="font-bold text-2xl mt-4 text-white">
                  {fileLang === "cn" ? "感谢！" : "Thank you!"}
                </span>
                <span className="text-white">
                  {fileLang === "cn"
                    ? "随时联系我！"
                    : "Feel free to contact me anytime!"}
                </span>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold text-indigo-600 text-2xl mt-4">
            Skills
          </span>
          <span className="text-ms text-gray-500 mb-6">area of expertise</span>
        </div>
        <div className="grid grid-cols-4 gap-1 items-center mb-4">
          {stacks.map((stack) => {
            return (
              <div
                className="flex items-center justify-center p-2 w-full h-full"
                key={stack}
              >
                <Image
                  src={"/stacks" + stack}
                  width={32}
                  height={32}
                  alt={stack}
                />
              </div>
            );
          })}
        </div>
        <span className="text-center font-bold text-indigo-600 text-2xl my-4">
          Experiences
        </span>
        <VerticalTimeline layout="1-column-left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021 - 至今"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <Image
                src="/myhuawei-logo.png"
                width={50}
                height={50}
                alt="myhuawei-logo"
              ></Image>
            }
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Frontend Team Leader
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              CBG IT, Huawei
            </h4>
            <p>
              20年开始至今，带领团队5人，主要负责我的华为小程序，目前已发布于微信、支付宝两个端侧。
              <br />
              另外还负责发布内部IT使用的2B小程序，24年鸿蒙发布后，负责鸿蒙APP上的H5小程序页面适配工作。
              <br />
              使用的技术栈为nodejs，Vue3，vite，uniapp，taro等。
              <br />
            </p>
            <p>
              我的华为小程序最开始先从微信端开始发布，为了未来的跨端发布，仍然选用uniapp作为基础框架搭建。现有存量用户1200W+，日活达到3W+。
              <br />
              在开发初期至2024年仍然使用Vue2开发，在24年H2完成了vue2至vue3的切换工作。并且在微信端的基础上，同时发布于支付宝端。
              <br />
              另外基于微信
              <a
                href="https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html"
                target="_blank"
              >
                miniprogram-ci
              </a>
              ，使用nodejs封装cli工具，完成小程序命令行执行发布、预览、版本管理等操作。
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={
              <span className="w-[40px] h-[40px] text-2xl p-1 flex justify-center items-center">
                &#129521;
              </span>
            }
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              CBG IT, Huawei
            </h4>
            <p>
              负责IT内部低代码平台 “构建器”
              的项目交付与开发，主要负责：完成低码平台的构建开发工作(Vue)，开发构建器与渲染器功能，用户通过托拉的简单操作快速构建低保页面。
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <Image
                src="/taobao.png"
                className="rounded-4xl"
                width={40}
                height={40}
                alt="taobao"
              />
            }
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              CBG IT, Huawei
            </h4>
            <p>
              负责带领团队（4人）交付天猫、淘宝跨端小程序，包括商品选购、3D商品查看、AR试戴等功能。使用的技术栈包括threejs,
              vue, uniapp, 阿里云开发等。
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 43)" }}
            contentStyle={{ background: "rgb(33, 150, 43)", color: "#fff" }}
            iconStyle={{ background: "rgb(33, 150, 43)", color: "#fff" }}
            icon={
              <span className="w-[40px] h-[40px] text-2xl p-1 flex justify-center items-center">
                &#128250;
              </span>
            }
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Backend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              运营商BG, Huawei
            </h4>
            <p>
              使用Java开发内部IT平台的后端服务，使用框架包括spring boot, tomcat,
              kafka等，主要对接运营商企业，交付实时编辑机顶盒运营内容平台的后端服务。
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013 - 2017"
            contentArrowStyle={{ borderRight: "7px solid  rgb(255, 178, 102)" }}
            contentStyle={{ background: "rgb(255, 178, 102)", color: "#fff" }}
            iconStyle={{ background: "rgb(255, 178, 102)", color: "#fff" }}
            icon={
              <span className="w-[40px] h-[40px] text-2xl p-1 flex justify-center items-center">
                &#127979;
              </span>
            }
          >
            <h3 className="vertical-timeline-element-title font-bold">
              东南大学 电子科学与技术
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Southeast University
            </h4>
            <p>
              2013年9月-2017年7月，本科毕业于南京，东南大学电子科学与技术专业，学士学位。
            </p>
            <p>计算机二级，英语四六级。雅思7.0的成绩。</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <span className="w-[40px] h-[40px] text-2xl p-1 flex justify-center items-center">
                &#129309;
              </span>
            }
          >
            <span className="text-lg">&#128518; Thanks for reading</span>
            <br />
            <span className="text-sm">Feel free to contact me at anytime.</span>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
