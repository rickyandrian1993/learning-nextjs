import { getSetting } from "@/app/queries/getSetting";

export async function Footer() {
  const setting = await getSetting();

  return (
    <footer className="mt-2 py-2 border-t border-white">
      Copyright &copy; {setting.sitename}
    </footer>
  );
}
