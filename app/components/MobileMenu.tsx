"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { SiteBrand } from "./SiteBrand";

type MobileMenuItem = {
  label: string;
  href: string;
  active?: boolean;
};

/** Figma 5804:19439 — full-screen mobile menu */
export function MobileMenu({ items }: { items: MobileMenuItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        className="flex size-[30px] shrink-0 items-center justify-center"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/header/menu-mobile.png"
          alt=""
          width={30}
          height={30}
          className="block size-[30px]"
        />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[300] flex flex-col bg-[#f2f2f2]"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between px-4 pt-[22px]">
            <SiteBrand compact onNavigate={() => setOpen(false)} />
            <button
              type="button"
              className="flex size-6 shrink-0 items-center justify-center"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav
            aria-label="Primary"
            className="flex flex-col gap-[44px] px-4 pt-[48px] text-[24px] font-normal uppercase leading-[28px] text-black"
          >
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={item.active ? "underline underline-offset-4" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
