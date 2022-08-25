import React from "react";
// import { navLinks } from "../../src/data";
import Navbar from '../components/Navbar';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
        <span>
          <Image className="logo" src="/logo.svg" alt="SP Logo" width={172} height={60} />
        </span>
      <nav>
        <Navbar/>
      </nav>
    </header>
  );
}