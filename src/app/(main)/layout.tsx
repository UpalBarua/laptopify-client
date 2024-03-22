import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
