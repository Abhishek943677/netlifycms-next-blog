import Link from "next/link";
import React from "react";
import main from "../../config/navbarmenu.json"
export default function MobileNav({mobile}) {
  return (
    <div className=" flex flex-col bg-white justify-center w-full text-center relative top-[0px] z-50">
      {main.menu.map(({path,name})=><Link href={path} className="mx-4 px-3 py-2" key={name}>
      {name}
      </Link>)}
    </div>
  );
}