import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Toushal Sewruttun",
  description: "Explore the projects by Toushal Sewruttun",
}

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <> { children }</>;
}