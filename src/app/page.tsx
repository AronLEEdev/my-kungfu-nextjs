import { Button } from "@/components/ui/button";
import styles from "./page.module.css";
import Image from "next/image";
import Finger from '@/components/Finger';
export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/iKnowKungFu.gif"
            width={300}
            height={300}
            alt="KungFu"
          />
          <div className="text-4xl p-2">
            Welcome to my{" "}
            <span className="font-bold text-orange-500">Kung-Fu!!</span>
          </div>
          <div className="text-2xl p-2">
            独立搭建的博客，记录我的coding生涯.
          </div>
          <div className="text-xl p-2">下面是我的自我介绍：</div>
          <Button className="mt-2 bg-green-500 font-bold">Start Here!</Button>
        </div>
      </main>
      <Finger />
    </div>
  );
}
