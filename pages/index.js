import useTheme from "next-theme";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

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
    <div className="text-gray-700 dark:text-white dark:bg-gray-700 bg-gray-200">
      <div>next app</div>
      <button onClick={themeChanger}>Change Theme</button>
    </div>
  );
}
