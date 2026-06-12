import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-w1 border-t border-t-pDark/5 px-6 md:px-24">
      <div className="w-full md:w-[85%] m-auto flex flex-col md:flex-row justify-between mb-8 gap-8 py-12">
        <div>
          <h5 className="text-sm font-bold text-p1 mb-3">About</h5>
          <ul className="list-none flex flex-col gap-4 text-sm">
            <li>
              <Link href={"#"}>Our Mission</Link>
            </li>
            <li>
              <Link href={"#"}>Our Vision</Link>
            </li>
            <li>
              <Link href={"#"}>Our Values</Link>
            </li>
            <li>
              <Link href={"#"}>Our Ministers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold text-p1 mb-3">Ministries</h5>
          <ul className="list-none flex flex-col gap-4 text-sm">
            <li>
              <Link href={"#"}>Evangelism/Outreach</Link>
            </li>
            <li>
              <Link href={"#"}>Youth</Link>
            </li>
            <li>
              <Link href={"#"}>C.E.U</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold text-p1 mb-3">Media</h5>
          <ul className="list-none flex flex-col gap-4 text-sm">
            <li>
              <Link href={"#"}>Sermons</Link>
            </li>
            <li>
              <Link href={"#"}>Audio Message</Link>
            </li>
            <li>
              <Link href={"#"}>Service Summary</Link>
            </li>
            <li>
              <Link href={"#"}>Events</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold text-p1 mb-3">Join Us</h5>
          <ul className="list-none flex flex-col gap-4 text-sm">
            <li>
              <Link href={"#"}>Our Location</Link>
            </li>
            <li>
              <Link href={"#"}>Our Church</Link>
            </li>
            <li>
              <Link href={"#"}>Our Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold text-p1 mb-3">Others</h5>
          <ul className="list-none flex flex-col gap-4 text-sm">
            <li>
              <Link href={"#"}>Lets Pray with You</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-t-pDark/10 p-4 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col md:flex-row text-sm font-semibold">
          <p className="mr-2">
            19 Olatunji Ige Street, Ikosi Ketu, Lagos State, NG. 🇳🇬 |{" "}
          </p>
          <Link
            href="mailto:gofamintketuassembly@gmail.com"
            className="text-s3"
          >
            gofamintketuassembly@gmail.com
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href={"#"}>
            <IoLogoYoutube size={25} aria-label="YouTube" />
          </Link>
          <Link href={"#"}>
            <FaSquareFacebook size={25} aria-label="Facebook" />
          </Link>
          <Link href={"#"}>
            <AiFillInstagram size={25} aria-label="Instagram" />
          </Link>
        </div>
      </div>
      <p className="text-sm w-full md:w-[80%] m-auto text-center border-t border-t-pDark/5 p-8">
        <span className="text-amber-500 font-bold relative inline-flex items-center shiny-text">
          Celebrating 50 years of Gods faithfulness
        </span>{" "}
        | © 2024 GOFAMINT KETU ASSEMBLY. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
