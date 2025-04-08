"use client"

import { useEffect, useState } from "react";

export default function ThemePage() {
  const [isDark, setIsDark] = useState(false);

  // Check for user's preferred theme on load
  useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
  };

  return (
    <main className="min-h-screen px-6 py-20 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Theme Toggle</h1>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-[var(--accent)] text-black rounded hover:bg-[var(--accent-hover)] transition"
          >
            {isDark ? "Switch to Light" : "Switch to Dark"}
          </button>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] p-6 bg-[var(--card)] shadow">
          <p className="text-lg text-[var(--text-muted)]">
            This box uses your dynamic theme variables like <code>--card</code>, <code>--text-muted</code>, and <code>--border-color</code>.
          </p>
          <div className="mt-4 text-sm text-[var(--foreground)]">
            <p><strong>Background:</strong> var(--background)</p>
            <p><strong>Foreground:</strong> var(--foreground)</p>
            <p><strong>Accent:</strong> var(--accent)</p>
            <p><strong>Card:</strong> var(--card)</p>
          </div>
        </div>
      </div>
    </main>
  );
};
