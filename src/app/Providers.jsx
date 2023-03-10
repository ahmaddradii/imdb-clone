"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem="true" attribute="class">
      <div className="dark:text-gray-200 dark:bg-gray-700 text-gray-700 min-h-screen transition-colors duration-300 select-none">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
