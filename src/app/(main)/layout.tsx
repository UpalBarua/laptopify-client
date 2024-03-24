import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
