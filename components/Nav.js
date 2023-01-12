import useTheme from "next-theme";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function Nav() {
  const [mounted, setMounted] = useState(false);
  const [menu, setMenu] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="px-10 sm:px-28 dark:bg-gray-700 dark:text-gray-100 bg-gray-100 text-gray-700">
      <nav className="flex flex-col sm:flex-row justify-between font-semibold">
        <div className="my-10">
          <div className="flex justify-between items-center">
            <a>Abu Hanifa</a>
            <div
              className="sm:hidden cursor-pointer"
              onClick={() => setMenu(!menu)}
            >
              {menu ? (
                <AiOutlineClose className="text-xl" />
              ) : (
                <AiOutlineMenu className="text-xl" />
              )}
            </div>
          </div>
        </div>
        <div
          className={
            "hidden sm:flex flex-col sm:flex-row justify-between items-center gap-10"
          }
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/projects"}>Projects</Link>
          <a>Contact</a>
          <div
            className="flex justify-center items-center cursor-pointer "
            onClick={themeChanger}
          >
            {theme === "dark" ? (
              <BsSun className="inline text-2xl" />
            ) : (
              <FaMoon className="inline text-2xl" />
            )}
          </div>
        </div>
        <div
          className={
            menu
              ? "sm:hidden flex flex-col sm:flex-row justify-between items-center gap-10"
              : "hidden"
          }
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/projects"}>Projects</Link>
          <a>Contact</a>
          <div
            className="flex justify-center items-center cursor-pointer "
            onClick={themeChanger}
          >
            {theme === "dark" ? (
              <BsSun className="inline text-2xl" />
            ) : (
              <FaMoon className="inline text-2xl" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
