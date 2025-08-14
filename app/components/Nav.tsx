"use client";

import { Setting } from "@/app/types/Setting";
import Link from "next/link";
import { use } from "react";

export function Nav({ settingPromise }: { settingPromise: Promise<Setting> }) {
  const setting = use(settingPromise);

  console.log("setting", setting);
  return (
    <nav className="flex justify-center gap-4 p-4">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/product"}>Product</Link>
      <Link href={"/admin"}>Admin</Link>
      <Link href={"/user"}>User</Link>
      <Link href={"/posts"}>Posts</Link>
    </nav>
  );
}
