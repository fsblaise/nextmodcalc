import { Link } from "@nextui-org/link";
import {Image} from "@nextui-org/image";
import NextLink from "next/link";
import mekanismPng from '../../../public/mekanism.png'

export default function Mekanism() {
  return (
    <div className="max-w-[600px] flex-grow-[100] overflow-auto text-center mx-auto">
      <h1 className="text-2xl mb-8">Welcome to Mekanism</h1>
      <p>
        In this section you will find different calculators for multi-block
        structures from Mekanism.
      </p>
      <p className="my-4">
        The formulas used in these pages are based on the latest version of the
        mod.
      </p>
      <p className="my-4">
        Most of the calculators and formulas exists thanks to a guide about
        building max sized variants, found on{" "}
        <a className="text-secondary hover:opacity-80" href="https://www.reddit.com/r/feedthebeast/comments/m109gs/making_the_largest_fission_reactor_from_mekanism/">
          Reddit
        </a>
      </p>
      <Image className="my-8 mx-auto" removeWrapper src={mekanismPng.src} alt="Mekanism" width={300} height={500}></Image>
      <p> 
        In the future there will be 3D representation of the given contraptions,
        to help visualize to the players.
      </p>
    </div>
  );
}
