"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight">
              SURAJDEV
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
              Building modern websites, web applications, and
              digital experiences that help businesses grow
              online.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-zinc-400">
                Available for freelance projects
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-zinc-400">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Landing Pages</li>
              <li>E-Commerce</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-zinc-400">
              <Link
                href="mailto:hello@surajdev.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                hello@surajdev.com
                <ArrowUpRight size={14} />
              </Link>

              <Link
                href="https://surajdev.vercel.app"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                surajdev.vercel.app
                <ArrowUpRight size={14} />
              </Link>

              <p>Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                Have a project in mind?
              </h3>

              <p className="mt-2 text-zinc-400">
                Let's build something that stands out.
              </p>
            </div>

            <button className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105">
              Start a Project
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} SURAJDEV. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>

            <Link href="#" className="hover:text-white">
              Terms
            </Link>

            <Link href="#" className="hover:text-white">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}