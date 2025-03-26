'use client'
import { Button } from "@/components/ui/button";
import styles from "./page.module.css";
import Image from "next/image";
import Finger from '@/components/Finger';
import Journey from '@/components/Journey';
import { motion } from "motion/react"
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="flex flex-col justify-center items-center p-4">
          <Image
            src="/images/iKnowKungFu.gif"
            width={300}
            height={300}
            alt="KungFu"
          />
          <div className="text-4xl p-2 my-4">
            Welcome to my{" "}
            <span className="font-bold text-orange-500">Kung-Fu!!</span>
          </div>
          <div className="text-2xl p-2 mb-4">
            独立搭建的博客，记录我的coding生涯.
          </div>
          <div className="text-xl p-2">下面是我的自我介绍：</div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button id="startBtn" className="mt-2 bg-green-500 font-bold" onClick={() => handleOnClick()}>&#128293; Start Here!</Button>
          </motion.div>
        </div>
      </main>
      <Finger />
      <Journey />
    </div>
  );
}
