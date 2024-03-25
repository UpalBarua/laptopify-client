import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/#brands",
    label: "Brands",
  },
  {
    href: "/laptops",
    label: "Laptops",
  },
  {
    href: "/flash-sales",
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

export const priceRanges = [
  "$699.99 - $1299.99",
  "$1399.99 - $1799.99",
  "$1999.99 - $2399.99",
  "$2499.99 - $2599.99",
] as const;
