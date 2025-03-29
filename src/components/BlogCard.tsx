"use client";
import { Card } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { Button } from './ui/button';

export function BlogCard({ blog }: { blog: Blog }) {
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef(null);

    const { image, title, desc, time, tags } = blog;
    const date = new Date(time);
    const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });
    const formattedDate = formatter.format(date);

    const getCardPosition = () => {
        if (!cardRef.current) return { top: 0, left: 0, width: 0, height: 0 };
        const rect = cardRef.current.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
    };

    const handleClose = () => {
        setIsOpen(false);
        if (cardRef.current) {
            cardRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
        }
    };

    return (
        <div>
            <motion.div
                layout // 启用布局动画
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
                style={{
                    padding: '16px',
                    scale: isOpen ? 0.95 : 1,
                    opacity: isOpen ? 0 : 1 // 展开时隐藏原始卡片
                }}
            >
                <Card className="w-full p-3 flex flex-col text-left h-full justify-between gap-2">
                    <div
                        className="flex flex-col text-left h-full justify-between gap-2"
                        ref={cardRef}
                    >
                        <div className="w-full flex items-center justify-center relative">
                            <Image
                                src={image}
                                alt={title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">{title}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row gap-1">
                                {tags.map((tag) => {
                                    return (
                                        <Badge
                                            key={tag}
                                            className="p-1 bg-blue-400 min-w-10 flex justify-center"
                                        >
                                            {tag}
                                        </Badge>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={handleClose}
                        ></motion.div>

                        <motion.div
                            layout
                            initial={{
                                ...getCardPosition(),
                                position: "fixed"
                            }}
                            animate={{
                                top: "50%",
                                left: "50%",
                                width: "90vw",
                                maxWidth: "800px",
                                height: "auto",
                                maxHeight: "90vh",
                                x: "-50%",
                                y: "-50%",
                                zIndex: 50
                            }}
                            exit={{
                                ...getCardPosition(),
                                position: "fixed",
                                borderRadius: "0.5rem",
                                opacity: 0
                            }}
                            transition={{ type: "spring", damping: 25, stiffness: 500 }}
                            className="bg-background overflow-hidden shadow-xl rounded-xl"
                        >
                            <Card className="h-full overflow-y-auto">
                                <div className="p-6">
                                    <div className="relative w-full aspect-video mb-4">
                                        <Image
                                            src={image}
                                            alt={title}
                                            fill
                                            className="object-contain rounded-lg bg-center"
                                        />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {tags.map((tag) => (
                                            <Badge key={tag} className='p-1 bg-blue-400 min-w-10 flex justify-center'>{tag}</Badge>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4">{desc}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-500">{formattedDate}</p>
                                        <Button className='bg-blue-400'><span className='mr-0.5'>&#128640;</span>查看详情</Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
