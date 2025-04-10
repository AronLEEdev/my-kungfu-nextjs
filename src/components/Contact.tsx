"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useState } from "react";
export function Contact() {
  const [showDialog, setShowDialog] = useState(false);
  const EMAIL = "1455832454@qq.com";
  const GIT = "https://github.com/AronLEEdev/my-kungfu-nextjs";
  const [showTip, setShowTip] = useState(false);
  const { width, height } = useWindowSize();
  async function handleOpenChange(payload: boolean) {
    setShowDialog(payload);
    if (payload) {
      try {
        await navigator.clipboard.writeText(EMAIL);
        setShowTip(true);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  }

  const [showWechat, setShowWechat] = useState(false);
  const showConfetti = showWechat || showDialog;

  return (
    <div>
      {showConfetti && (
        <div
          id="confetti"
          className="fixed top-0 left-0 z-[1001] w-full h-full"
        >
          <Confetti width={width} height={height} className="z-[1001]" />
        </div>
      )}
      <div className="flex items-center gap-4">
        <GitHubIcon onClick={() => window.open(GIT)} />
        <Dialog open={showDialog} onOpenChange={(e) => handleOpenChange(e)}>
          <DialogTrigger asChild>
            <EmailIcon />
          </DialogTrigger>
          <DialogContent className="sm:max-w-md rounded-2xl w-2/3 bg-white">
            <DialogHeader>
              <DialogTitle className="text-center">
                <span className="text-8xl mb-4">&#129309;</span>
              </DialogTitle>
              <span className="mt-4 font-bold text-2xl text-center">
                Hi! Email Me!
              </span>
              <span className="mt-4 bg-cyan-600 p-2 rounded-md text-white text-center">
                {EMAIL}
              </span>
              {showTip && (
                <span className="text-sm text-gray-500 mt-2 text-center">
                  Copied to clipboard!
                </span>
              )}
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog open={showWechat} onOpenChange={setShowWechat}>
          <DialogTrigger asChild>
            <img
              width={24}
              height={24}
              src="/wechat-black.svg"
              alt="wechat_black"
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-md rounded-2xl w-2/3 bg-white">
            <DialogHeader>
              <DialogTitle>
                <img
                  className="text-center relative left-1/2 -translate-x-1/2 rounded-2xl"
                  width={150}
                  height={150}
                  src="wechat.png"
                  alt="wechat"
                />
              </DialogTitle>
              <span className="mt-4 font-bold text-2xl text-center">
                Hello! 欢迎随时加我联系！
              </span>
              <span className="mt-4 bg-cyan-600 p-2 rounded-md text-white">
                微信号：hithisisaron
              </span>
              <span className="bg-cyan-600 p-2 rounded-md text-white flex flex-row items-center gap-1">
                手机号：
                <img
                  src="https://em-content.zobj.net/source/apple/419/flag-china_1f1e8-1f1f3.png"
                  width={24}
                  height={24}
                  alt="flag"
                />
                +86 13814114801
              </span>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
