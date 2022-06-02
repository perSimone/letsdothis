import React from "react";
import { navLinks } from "../../src/data";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
        <span>
          <Image src="/logo.svg" alt="SP Logo" width={172} height={60} />
        </span>
      <nav>
        {navLinks.map((link, index) => {
          return (
            <ul>
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
  );
}