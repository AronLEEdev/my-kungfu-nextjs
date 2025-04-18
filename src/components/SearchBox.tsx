"use client";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
export function SearchBox() {
  return (
    <div className="flex">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <span>&#128270;</span>
            Search
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle asChild>
              <div className="flex items-center gap-2 pr-4">
                <span className="text-sm text-left">&#128270;</span>
                <Input
                  className="text-sm flex-1"
                  placeholder="Search documentation"
                />
              </div>
            </DialogTitle>
            <Separator className="mt-4" />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
