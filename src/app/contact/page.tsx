import {H1} from "@/components/ui/H1";  // Changed to default import
import { Metadata } from "next";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to contact with me.",
};

export default function Page() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/sushant0709", label: "GitHub: sushant0709" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/sushantkhattar", label: "LinkedIn: sushantkhattar" },
    { icon: FaTwitter, href: "https://x.com/SushantKhattar1", label: "X (Twitter): SushantKhattar1" },
    { icon: FaInstagram, href: "https://www.instagram.com/sushant.khattar/", label: "Instagram: sushant.khattar" },
  ];

  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <p>Connect with me on my social media accounts:</p>
        <ul className="list-none space-y-2">
          {socialLinks.map((link, index) => (
            <li key={index} className="flex items-center space-x-2">
              <link.icon size={24} />
              <a
                href={link.href}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <hr className="border-muted" />
      </section>      
    </section>
  );
}