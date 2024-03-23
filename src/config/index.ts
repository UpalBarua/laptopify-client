import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/flash-sale",
    label: "Flash Sale",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
] as const;

export const socialLinks = [
  {
    Icon: Facebook,
    link: "facebook.com",
  },
  {
    Icon: Twitter,
    link: "twitter.com",
  },
  {
    Icon: Instagram,
    link: "instagram.com",
  },
  {
    Icon: Linkedin,
    link: "linkedin.com",
  },
] as const;
