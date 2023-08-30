"use client";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function Fission() {
  const [x, setX] = useState("3");
  const [y, setY] = useState("4");
  const [z, setZ] = useState("3");
  const [results, setResults] = useState<any>(null);

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
                onClick={(e) => calculate(x, y, z, setResults)}
                color="primary"
                className="text-white hover:text-secondary"
              >
                Calculate
              </Button>
            </div>
          </Card>
          {results && (
            <Card className="w-80 p-2 flex flex-col gap-2">
              <h2 className="mb-2 font-medium text-gray-900 dark:text-white">
                Calculated Results:
              </h2>
              <p className="text-gray-900 dark:text-white">
                Control Rod Assembly: 
                <span className="text-primary font-medium"> {results.controlRodBlocks} </span> 
                blocks
              </p>
              <p className="text-gray-900 dark:text-white">
                Fission Reactor Casing: 
                <span className="text-primary font-medium"> {results.casingBlocks} </span> 
                blocks
              </p>
              <p className="text-gray-900 dark:text-white">
                Fission Fuel Assembly: 
                <span className="text-primary font-medium"> {results.fuelAssemblyBlocks} </span> 
                blocks
              </p>
              <p className="text-gray-900 dark:text-white">
                Reactor Glass: 
                <span className="text-primary font-medium"> {results.reactorGlassBlocks} </span> 
                blocks
              </p>
              <p className="text-gray-900 dark:text-white">
                Fission Reactor Port: 
                <span className="text-primary font-medium"> {results.portBlocks} </span>
                blocks
              </p>
            </Card>
          )}
        </div>
      </form>
    </div>
  );
}

function calculate(x: any, y: any, z: any, setResults: any) {
  const reactorCalculator = new ReactorCalculator(
    parseInt(x),
    parseInt(y),
    parseInt(z)
  );
  const results = reactorCalculator.calculateResources();
  setResults(results);
}

class ReactorCalculator {
  constructor(
    public width: number,
    public height: number,
    public length: number
  ) {}

  calculateResources() {
    const controlRodBlocks = this.calculateControlRodBlocks();
    const casingBlocks = this.calculateCasingBlocks();
    const fuelAssemblyBlocks = this.calculateFuelAssemblyBlocks();
    const reactorGlassBlocks = this.calculateReactorGlassBlocks();
    const portBlocks = this.calculatePortBlocks();

    return {
      controlRodBlocks,
      casingBlocks,
      fuelAssemblyBlocks,
      reactorGlassBlocks,
      portBlocks,
    };
  }

  calculateControlRodBlocks(): number {
    const numRows = this.width - 2;
    const numCols = this.length - 2;
    return Math.ceil((numRows * numCols) / 2);
  }

  calculateCasingBlocks(): number {
    const bottomArea = this.width * this.length;
    const pillars = 4 * (this.height - 2);
    return bottomArea * 2 + pillars;
  }

  calculateFuelAssemblyBlocks(): number {
    return this.calculateControlRodBlocks() * (this.height - 3);
  }

  calculatePortBlocks(): number {
    return Math.min(this.width, this.height, this.length);
  }

  calculateReactorGlassBlocks(): number {
    return (
      4 * ((this.width - 2) * (this.length - 2)) - this.calculatePortBlocks()
    );
  }

  calculateMaterials() {
    
  }

  calculateRawMaterials() {
    
  }
}
