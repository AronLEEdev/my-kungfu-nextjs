"use client";
import React from "react";
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
import { useState, useEffect } from "react";

export function highlightText(text: string, keyword: string) {
  const parts = text.split(new RegExp(`(${keyword})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span key={index} className="bg-yellow-200 font-bold">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredResults = data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filteredResults);
      });
  }, [searchTerm]);

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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </DialogTitle>
            <Separator className="mt-4" />
          </DialogHeader>
          <div className="mt-4">
            {results.length > 0 ? (
              <ul>
                {results.map((result, index) => (
                  <li key={index} className="py-2 border-b">
                    <a href={`/blogs/${result.slug}`} className="text-blue-500">
                      {highlightText(result.title, searchTerm)}
                    </a>
                    <p className="text-sm text-gray-600">
                      {highlightText(result.description, searchTerm)}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No results found.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
