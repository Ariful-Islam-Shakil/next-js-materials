"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [pythonVersion, setPythonVersion] = React.useState("3.10");
  const [githubRepo, setGithubRepo] = React.useState("");
  const [branch, setBranch] = React.useState("main");

  const pythonVersions = ["3.7", "3.8", "3.9", "3.10", "3.11"];
  const branches = ["main", "dev", "feature"];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="flex gap-15 mb-8 justify-end mt-3 mr-3">
          {!sidebarOpen && (
            <button
              className="mr-auto px-3 py-1 bg-gray-800 text-white rounded hover:bg-blue-700 transition-colors"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open Sidebar"
            >
              &#187;&#187;
            </button>
          )}
          <Link href="/overview" className="no-underline text-white hover:text-blue-600">Overview</Link>
          <Link href="/refactor" className="no-underline text-white hover:text-blue-600">Refactor</Link>
          <Link href="/analyzer" className="no-underline text-white hover:text-blue-600">Analyze</Link>
          <Link href="/dependency_management" className="no-underline text-white hover:text-blue-600">Dependency</Link>
          <Link href="/readme_generation" className="no-underline text-white hover:text-blue-600">Readme</Link>
          <Link href="/github_action" className="no-underline text-white hover:text-blue-600">GitHub</Link>
        </nav>
        
        <div className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white shadow-lg z-50 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Settings</h2>
              <button
                className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-blue-700 transition-colors"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close Sidebar"
              >
                &#171;&#171;
              </button>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Python Version</label>
              <select
                className="w-full p-2 rounded bg-gray-800 text-white"
                value={pythonVersion}
                onChange={e => setPythonVersion(e.target.value)}
              >
                {pythonVersions.map(ver => (
                  <option key={ver} value={ver}>{ver}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">GitHub Repo Link (TSX)</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-800 text-white"
                value={githubRepo}
                onChange={e => setGithubRepo(e.target.value)}
                placeholder="https://github.com/user/repo"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Branch</label>
              <select
                className="w-full p-2 rounded bg-gray-800 text-white"
                value={branch}
                onChange={e => setBranch(e.target.value)}
              >
                {branches.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
/**
# RootLayout Component Notes

This file defines the main layout for the Next.js app, including navigation and a sidebar for settings.

## Features

- **Navigation Bar**: 
  - Contains links for Overview, Refactor, Analyze, Dependency, Readme, and GitHub.
  - Sidebar toggle button (open/close).

- **Sidebar**:
  - Settings panel with:
    - Python version selector (dropdown).
    - GitHub repo link input.
    - Branch selector (dropdown).
  - Sidebar visibility controlled by `sidebarOpen` state.

- **State Management**:
  - `sidebarOpen`: Controls sidebar visibility.
  - `pythonVersion`: Selected Python version.
  - `githubRepo`: GitHub repository link.
  - `branch`: Selected branch.

- **Styling**:
  - Uses custom fonts (`Geist`, `Geist_Mono`).
  - Tailwind CSS classes for layout and appearance.

## Usage

Wraps all page content (`{children}`) with navigation and sidebar. Settings can be adjusted via the sidebar and are stored in component state.

*/

