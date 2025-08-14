import { getSetting } from "@/app/queries/getSetting";
import { Nav } from "./Nav";

export function Header() {
  const setting = getSetting();

  return (
    <header className="flex align-middle justify-between border-b border-white">
      {/* <div className="self-center text-2xl mx-4">{setting.sitename}</div> */}
      <Nav settingPromise={setting} />
    </header>
  );
}
