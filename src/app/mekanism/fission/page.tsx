"use client";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function Fission() {
  const [x, setX] = useState("3");
  const [y, setY] = useState("4");
  const [z, setZ] = useState("3");

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-2xl mb-6">Fission Reactor build costs</h1>
      <form>
        <div className="flex gap-3 flex-wrap justify-evenly">
          <Card className="w-80 h-[6rem] p-2 flex flex-col gap-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              X (width)
            </label>
            <input
              id="x"
              value={x}
              onChange={(e) => setX(e.target.value)}
              type="range"
              min="3"
              max="18"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </Card>
          <Card className="w-80 h-[6rem] p-2 flex flex-col gap-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Y (height)
            </label>
            <input
              id="y"
              value={y}
              onChange={(e) => setY(e.target.value)}
              type="range"
              min="4"
              max="18"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </Card>
          <Card className="w-80 h-[6rem] p-2 flex flex-col gap-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Z (length)
            </label>
            <input
              id="z"
              value={z}
              onChange={(e) => setZ(e.target.value)}
              type="range"
              min="3"
              max="18"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </Card>
          <Card className="w-80 h-[6rem] p-2 flex flex-col gap-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Size:
            </label>
            <div className="flex justify-between items-center">
              <span>
                {x}x{y}x{z}
              </span>
              <Button
              onClick={calculate}
                color="primary"
                className="text-white hover:text-secondary"
              >
                Calculate
              </Button>
            </div>
          </Card>
        </div>
      </form>
    </div>
  );
}

function calculate() {
  console.log('calculate');
}
