'use client'
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from 'next/image';
export default function Journey() {
    const stacks = [
        '/vue.png',
        '/react.png',
        '/nextjs.jpeg',
        '/uniapp.png',
        '/mongodb.jpg',
        '/javascript.png',
        '/typescript.png',
        '/css.png',
        '/html.png',
        '/nodejs.png', '/java.png', '/mysql.png'
    ]
    return (
        <div className="flex flex-col bg-amber-100">
            <div className="flex flex-col gap-1 bg-blue-600 text-xl font-bold p-2 break-words overflow-hidden text-amber-50 text-center">
                <div className="flex items-center justify-center">
                    <span>我的简历
                    </span>
                    <span className='ml-1'>&#128209;</span>
                </div>

                <span className='text-sm'>LEE I HSIU. Software engineer. &#128187;</span>
            </div>
            <div className="grid grid-cols-4 gap-1 items-center">
                {
                    stacks.map(stack => {
                        return (
                            <div className="flex items-center justify-center p-2 w-full h-full" key={stack} >
                                <Image src={'/stacks' + stack} width={32} height={32} alt={stack} />
                            </div>
                        )
                    })
                }
            </div>
            <VerticalTimeline layout="1-column-left">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="2021 - 至今"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<Image src="/myhuawei-logo.png" width={50} height={50} alt="myhuawei-logo"></Image>}
                >
                    <h3 className="vertical-timeline-element-title font-bold">Frontend Team Leader</h3>
                    <h4 className="vertical-timeline-element-subtitle">MyHuawei, CBG IT</h4>
                    <p>
                        20年开始至今，带领团队5人，主要负责我的华为小程序，目前已发布于微信、支付宝两个端侧。<br
                        />
                        另外还负责发布内部IT使用的2B小程序，24年鸿蒙发布后，负责鸿蒙APP上的H5小程序页面适配工作。<br
                        />
                        使用的技术栈为nodejs，Vue3，vite，uniapp，taro等。<br />
                    </p>
                    <p>
                        我的华为小程序最开始先从微信端开始发布，为了未来的跨端发布，仍然选用uniapp作为基础框架搭建。现有存量用户1200W+，日活达到3W+。
                        <br />
                        在开发初期至2024年仍然使用Vue2开发，在24年H2完成了vue2至vue3的切换工作。并且在微信端的基础上，同时发布于支付宝端。<br
                        />
                        另外基于微信<a
                            href="https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html"
                            target="_blank">miniprogram-ci</a
                        >，使用nodejs封装cli工具，完成小程序命令行执行发布、预览、版本管理等操作。
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020 - 2021"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<span className='w-[40px] h-[40px] text-2xl p-1 flex justify-center items-center'>&#129521;</span>}
                >
                    <h3 className="vertical-timeline-element-title font-bold">Frontend Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Devops, CBG IT
                    </h4>
                    <p>
                        负责IT内部低代码平台 “构建器” 的项目交付与开发，主要负责：完成低码平台的构建开发工作(Vue)，开发构建器与渲染器功能，用户通过托拉的简单操作快速构建低保页面。
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - 2020"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title font-bold">Frontend Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">iRetail, CBG IT</h4>
                    <p>
                        负责带领团队（4人）交付天猫、淘宝跨端小程序，包括商品选购、3D商品查看、AR试戴等功能。使用的技术栈包括threejs, vue, uniapp, 阿里云开发等。
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 - 2019"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title font-bold">Backend Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        PHM, 运营商BG
                    </h4>
                    <p>
                        使用Java开发内部IT平台的后端服务，使用框架包括spring boot, tomcat, kafka等，主要对接运营商企业，交付实时编辑机顶盒运营内容平台的后端服务。
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2013 - 2017"
                    iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title font-bold">
                        东南大学 电子科学与技术
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">Southeast University</h4>
                    <p>
                        2013年9月-2017年7月，本科毕业于南京，东南大学电子科学与技术专业，学士学位。
                    </p>
                    <p>
                        计算机二级，英语四六级。雅思7.0的成绩。
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}
