import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Themes | Toushal Sewruttun",
  description: "Explore the projects by Toushal Sewruttun",
}

export default function ThemesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <> { children }</>;
}