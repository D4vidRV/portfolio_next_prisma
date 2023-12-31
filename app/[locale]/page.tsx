import React from "react";
import Me from "@/public/me1.png";
import Image from "next/image";
import { Tooltip } from "./components/tooltip";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

interface technologyLogo {
  logo: React.JSX.Element;
  name: string;
}

const technologyLogos: technologyLogo[] = [
  {
    logo: (
      <svg width="128" height="128" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-teal-500 hover:text-teal-600">
    <path fill="#14b8a6" d="m12 2.5l8.84 3.15l-1.34 11.7L12 21.5l-7.5-4.15l-1.34-11.7L12 2.5m0 2.1L6.47 17h2.06l1.11-2.78h4.7L15.45 17h2.05L12 4.6m1.62 7.9h-3.23L12 8.63l1.62 3.87Z"/>
</svg>
    ),
    name: "Angular",
  },
  {
    logo: (
      <svg width="1rem" height="1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-teal-500 hover:text-teal-600">
      <path fill="none" stroke="#14b8a6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9a3 3 0 0 0-3-3h-.5A3.5 3.5 0 0 0 3 9.5v5A3.5 3.5 0 0 0 6.5 18H7a3 3 0 0 0 3-3m6-8l-1 10m5-10l-1 10m-5-7h7.5m-.5 4h-7.5"/>
  </svg>
    ),
    name: "C#",
  },
  {
    logo: (
      <svg
        width="1rem"
        height="1rem"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="#14b8a6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <path d="M17.5 19H22m0 0l-2.5-2.5M22 19l-2.5 2.5M12 2L9.5 4.5L12 7" />
          <path d="M10.5 4.5a7.5 7.5 0 0 1 0 15H2" />
          <path d="M6.756 5.5A7.497 7.497 0 0 0 3 12c0 1.688.558 3.246 1.5 4.5" />
        </g>
      </svg>
    ),
    name: "Agile",
  },
  {
    logo: (
      <svg
        width="1rem"
        height="1rem"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#14b8a6"
          d="M10.657 23.994h-9.45A1.212 1.212 0 0 1 0 22.788v-9.18h.071c5.784 0 10.504 4.65 10.586 10.386Zm7.606 0h-4.045C14.135 16.246 7.795 9.977 0 9.942V6.038h.071c9.983 0 18.121 8.044 18.192 17.956Zm4.53 0h-.97C21.754 12.071 11.995 2.407 0 2.372v-1.16C0 .55.544.006 1.207.006h7.64C15.733 2.49 21.257 7.789 24 14.508v8.291c0 .663-.544 1.195-1.207 1.195ZM16.713.006h6.092A1.19 1.19 0 0 1 24 1.2v5.914c-.91-1.242-2.046-2.65-3.158-3.762C19.588 2.11 18.122.987 16.714.005Z"
        />
      </svg>
    ),
    name: "MQTT",
  },
  {
    logo: (
      <svg
        width="1rem"
        height="1rem"
        viewBox="0 0 512 208"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <defs>
          <linearGradient id="logosGrpc0" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#72C9C9" />
            <stop offset="100%" stopColor="#02B0AD" />
          </linearGradient>
          <linearGradient id="logosGrpc1" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#03B6B4" />
            <stop offset="100%" stopColor="#74CBCA" />
          </linearGradient>
        </defs>
        <path
          fill="#244B5A"
          d="M56.678 179.868a40.246 40.246 0 0 0 14.42 11.938a43.222 43.222 0 0 0 19.768 4.487a42.464 42.464 0 0 0 16.234-2.769a28.18 28.18 0 0 0 10.79-7.544a29.098 29.098 0 0 0 5.922-11.174a49.903 49.903 0 0 0 1.814-13.655v-16.043h-.381a34.445 34.445 0 0 1-14.9 12.988a45.958 45.958 0 0 1-18.525 3.82a48.184 48.184 0 0 1-18.239-3.438a46.394 46.394 0 0 1-14.803-9.455a43.5 43.5 0 0 1-9.932-14.421a45.253 45.253 0 0 1-3.628-18.144a47.463 47.463 0 0 1 3.439-18.144a46.64 46.64 0 0 1 9.453-14.706a42.642 42.642 0 0 1 14.325-9.837a46.147 46.147 0 0 1 18.24-3.533c2.849.017 5.691.272 8.498.763a40.246 40.246 0 0 1 8.977 2.675a41.352 41.352 0 0 1 17.095 13.753h.38v-14.9h12.608v88.622a71.906 71.906 0 0 1-1.815 15.47a38.212 38.212 0 0 1-7.067 15.088a40.24 40.24 0 0 1-14.611 11.462c-6.24 3.054-14.39 4.581-24.448 4.581a61.406 61.406 0 0 1-23.874-4.391A55.485 55.485 0 0 1 47.32 189.8l9.357-9.933Zm2.291-63.79a34.222 34.222 0 0 0 2.58 13.272a34.87 34.87 0 0 0 7.065 10.886a34.172 34.172 0 0 0 10.505 7.45a30.912 30.912 0 0 0 13.083 2.77a35.036 35.036 0 0 0 24.065-9.454a30.428 30.428 0 0 0 7.354-10.793a34.762 34.762 0 0 0 2.388-14.132a38.025 38.025 0 0 0-2.292-13.275a31.883 31.883 0 0 0-6.686-10.886a32.304 32.304 0 0 0-10.695-7.449a34.815 34.815 0 0 0-14.134-2.77a30.94 30.94 0 0 0-13.083 2.77a34.266 34.266 0 0 0-10.505 7.449a34.947 34.947 0 0 0-7.067 10.886a34.249 34.249 0 0 0-2.578 13.275Zm130.638 45.838h-13.75V26.69h41.636c13.751 0 24.606 2.992 32.564 8.977c7.957 5.986 11.936 15.027 11.938 27.121a33.791 33.791 0 0 1-8.881 23.778c-5.922 6.432-14.485 10.156-25.689 11.173l38.963 64.177h-16.809l-37.05-62.838h-22.92l-.002 62.838Zm0-75.444h24.448a54.954 54.954 0 0 0 15.566-1.91a28.907 28.907 0 0 0 10.219-5.06a18.482 18.482 0 0 0 5.538-7.449a24.716 24.716 0 0 0 1.719-9.265a24.212 24.212 0 0 0-1.72-9.07a19.22 19.22 0 0 0-5.537-7.546a27.013 27.013 0 0 0-10.22-5.062a57.796 57.796 0 0 0-15.565-1.813h-24.448v47.175ZM290.068 26.69h39.346c13.75 0 24.605 2.993 32.563 8.978c7.957 5.986 11.936 15.027 11.938 27.122c0 12.098-3.98 21.17-11.938 27.215c-7.958 6.05-18.812 9.074-32.563 9.073h-25.593v62.838h-13.753V26.69Zm13.755 59.784h22.155a54.969 54.969 0 0 0 15.566-1.911a28.923 28.923 0 0 0 10.218-5.06a18.49 18.49 0 0 0 5.538-7.449a24.696 24.696 0 0 0 1.72-9.264a24.192 24.192 0 0 0-1.72-9.071a19.227 19.227 0 0 0-5.538-7.546a27.027 27.027 0 0 0-10.218-5.061a57.81 57.81 0 0 0-15.566-1.814h-22.157l.001 47.176ZM512 140.524a52.447 52.447 0 0 1-8.497 9.741a53.718 53.718 0 0 1-11.556 7.925a65.907 65.907 0 0 1-14.037 5.254a64.865 64.865 0 0 1-15.95 1.91a72.337 72.337 0 0 1-27.979-5.348a67.123 67.123 0 0 1-37.149-37.244a74.005 74.005 0 0 1-5.347-28.46a74.01 74.01 0 0 1 5.347-28.458a67.115 67.115 0 0 1 37.15-37.242a72.32 72.32 0 0 1 27.978-5.348a68.361 68.361 0 0 1 25.212 4.964a50.855 50.855 0 0 1 21.581 16.427l-12.03 8.977a32.925 32.925 0 0 0-5.732-6.495a41.835 41.835 0 0 0-8.306-5.729a51.866 51.866 0 0 0-10.029-4.01a38.797 38.797 0 0 0-10.696-1.529a54.855 54.855 0 0 0-23.3 4.775a52.918 52.918 0 0 0-17.475 12.795A56.294 56.294 0 0 0 410.2 72.053a66.723 66.723 0 0 0 0 44.5a56.27 56.27 0 0 0 10.984 18.622a52.853 52.853 0 0 0 17.475 12.796a54.796 54.796 0 0 0 23.3 4.777a59.045 59.045 0 0 0 10.6-.956a44.027 44.027 0 0 0 10.315-3.246a39.027 39.027 0 0 0 9.55-6.21a46.028 46.028 0 0 0 8.307-9.833L512 140.524Z"
        />
        <path
          fill="url(#logosGrpc0)"
          d="M10.392 10.392h50.18v50.18h-50.18z"
          transform="rotate(-135.213 35.482 35.482)"
        />
        <path
          fill="url(#logosGrpc1)"
          d="M117.73 20.346h29.433v29.433H117.73z"
          transform="rotate(-135.213 132.446 35.063)"
        />
        <path
          fill="#244B5A"
          d="M36.909 14.027L15.502 35.595l21.567 21.407l18.245-.067l-19.133-18.98l94.477-.35l-8.28 8.336l9.123-.033l10.704-10.784l-10.784-10.703l-9.123.033l8.343 8.277l-94.477.35l18.99-19.121z"
        />
      </svg>
    ),
    name: "gRPC",
  },
  {
    logo: (
      <svg
        width="1rem"
        height="1rem"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path
          fill="#14b8a6"
          d="M1 15V9h1.5v2h2V9H6v6H4.5v-2.5h-2V15H1Zm7.5 0v-4.5H7V9h4.5v1.5H10V15H8.5Zm5.5 0v-4.5h-1.5V9H17v1.5h-1.5V15H14Zm4 0V9h3.5q.6 0 1.05.45T23 10.5v1q0 .6-.45 1.05T21.5 13h-2v2H18Zm1.5-3.5h2v-1h-2v1Z"
        />
      </svg>
    ),
    name: "Http",
  },
  {
    logo: (
      <svg
        viewBox="0 0 448 512"
        fill="currentColor"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z" />
      </svg>
    ),
    name: "Linux",
  },
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M18.75 11.35a4.32 4.32 0 01-.79-.08 3.9 3.9 0 01-.73-.23l-.17-.04h-.12q-.15 0-.15.21v.33a.43.43 0 000 .19.5.5 0 00.21.19 3 3 0 00.76.26 4.38 4.38 0 001 .12 3 3 0 001-.14 1.94 1.94 0 00.73-.37 1.81 1.81 0 00.49-.58 1.79 1.79 0 00.17-.78 1.54 1.54 0 00-.3-.93 2.15 2.15 0 00-1-.64l-.95-.3a2 2 0 01-.73-.36.65.65 0 01-.2-.47.66.66 0 01.31-.6 1.82 1.82 0 01.89-.18 2.89 2.89 0 011.27.26.79.79 0 00.26.08c.1 0 .15-.08.15-.22v-.36a.38.38 0 00-.06-.22.56.56 0 00-.2-.16 1.55 1.55 0 00-.28-.12 3.44 3.44 0 00-.38-.11l-.44-.1A3.4 3.4 0 0019 6a2.82 2.82 0 00-.83.11 2.19 2.19 0 00-.7.35A1.61 1.61 0 0017 7a1.5 1.5 0 00-.18.74 1.6 1.6 0 00.33 1 2.08 2.08 0 001.06.68l1 .3a1.58 1.58 0 01.67.34.66.66 0 01.18.47.72.72 0 01-.35.63 1.83 1.83 0 01-.96.19zM12.94 6.5a.48.48 0 00-.13-.26.37.37 0 00-.26-.07H12a.43.43 0 00-.26.07.42.42 0 00-.13.26l-1 4.4-1.14-4.4a.48.48 0 00-.14-.26s-.13-.07-.26-.07h-.65c-.11 0-.16.06-.16.17a1.22 1.22 0 00.06.27l1.56 5.14A.61.61 0 0010 12a.45.45 0 00.26.06h.57a.49.49 0 00.27-.06.57.57 0 00.12-.27l1-4.28 1 4.29a.42.42 0 00.12.26.4.4 0 00.27.07h.57a.41.41 0 00.25-.07.44.44 0 00.14-.26l1.61-5.14a.73.73 0 000-.16.52.52 0 000-.11.15.15 0 00-.17-.17h-.62a.45.45 0 00-.26.07.68.68 0 00-.13.26L14 11zM5.77 8.63a5.92 5.92 0 00-.71-.05 2.42 2.42 0 00-1.63.52 1.72 1.72 0 00-.6 1.37 1.7 1.7 0 00.49 1.28 1.82 1.82 0 001.33.48 2.48 2.48 0 002-.92 3.5 3.5 0 00.2.39 2.34 2.34 0 00.24.31.26.26 0 00.37 0l.42-.28a.28.28 0 00.13-.2.27.27 0 000-.16 3.63 3.63 0 01-.21-.47 2 2 0 01-.07-.6V8.19a2.2 2.2 0 00-.55-1.64A2.42 2.42 0 005.33 6a3.9 3.9 0 00-1 .13 3.9 3.9 0 00-.84.3.47.47 0 00-.18.14.37.37 0 000 .23v.33c0 .14 0 .2.14.2a.26.26 0 00.11 0l.23-.08A4.32 4.32 0 014.42 7a3 3 0 01.72-.09 1.5 1.5 0 011.08.31 1.46 1.46 0 01.31 1.06v.49zm.78.9v.27a2.36 2.36 0 01-.07.58 1.06 1.06 0 01-.23.43 1.38 1.38 0 01-.63.42 2.12 2.12 0 01-.68.12.94.94 0 01-.7-.24.92.92 0 01-.24-.71.92.92 0 01.33-.76 1.52 1.52 0 011-.27h.62a5.67 5.67 0 01.6.16zM19.76 15a19.68 19.68 0 01-7.55 1.54 20 20 0 01-9.9-2.62c-.24-.15-.43.1-.22.29A14.68 14.68 0 0012 18a14.4 14.4 0 008.1-2.47c.34-.31.03-.72-.34-.53z" />
        <path d="M18.38 14.06c-.19.14-.16.33.05.3.71-.09 2.28-.27 2.56.09s-.31 1.83-.58 2.49c-.08.2.1.28.28.13a3.9 3.9 0 001.23-3.34 3.94 3.94 0 00-3.54.33z" />
      </svg>
    ),
    name: "AWS",
  },
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 01-.48-.48L12 9l.45 10a3.57 3.57 0 01-.45.48z" />
      </svg>
    ),
    name: "MongoDB",
  },
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 00.26-3.74.86.86 0 00-.66-.74 3.12 3.12 0 00-2.08.61v.18a11.34 11.34 0 01-.06 2.41 2.37 2.37 0 00.62 2 2 2 0 001.43.63 8.05 8.05 0 01.3-.81zM10 8.58a.36.36 0 01-.09-.23.19.19 0 01.09-.12.74.74 0 01.48-.07c.25 0 .5.16.48.34a.51.51 0 01-.49.33h-.06a.63.63 0 01-.41-.25z" />
        <path d="M7.88 11a12.58 12.58 0 00.06-2.3v-.28a7 7 0 011.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 001 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 017.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 00-.29.35c-.35.43-.5.58-1.51.79a2 2 0 00-.4.11 1 1 0 00.37.16 2.21 2.21 0 002.5-.8.41.41 0 000-.35.59.59 0 00-.25-.37zm6.29-5.82a5.29 5.29 0 00.08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 01.26.48 1.79 1.79 0 00.15.31 3.72 3.72 0 00.16-2.13 7.51 7.51 0 01-.07-1.05 6 6 0 01.14-.93zm-.56-.16a.6.6 0 01-.32.17h-.06a.47.47 0 01-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 01-.12.26z" />
        <path d="M17 4.88a6.06 6.06 0 011.37 2.57.71.71 0 010 .15 5.67 5.67 0 01-.09 1.06 7.11 7.11 0 00-.09.86 6.61 6.61 0 00.07 1 4 4 0 01-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 00-3.81-1.8 7.34 7.34 0 00-1.63.16A6.17 6.17 0 0117 4.88z" />
        <path d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 01-1 .13 19.74 19.74 0 002.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0016.37 2a8.44 8.44 0 00-2.46.35 9.38 9.38 0 00-1.45-.14 4.8 4.8 0 00-2.46.62 12.22 12.22 0 00-1.77-.44A5.44 5.44 0 004 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 001 4.67A15.76 15.76 0 004.4 15a3.39 3.39 0 001.75 1.83 1.71 1.71 0 001.69-.37 2 2 0 001 .59 3.65 3.65 0 002.35-.14v.81a8.46 8.46 0 00.31 2.36 1 1 0 010 .13 3 3 0 00.71 1.24 2.08 2.08 0 001.49.56 3 3 0 00.7-.08 3.27 3.27 0 002.21-1.27 7.34 7.34 0 00.91-4v-.26h.17a5.24 5.24 0 002.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 01-1.8.34 2.62 2.62 0 01-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 01-2.25 2.3 3.23 3.23 0 01-.66.07A2 2 0 0112 20a16.77 16.77 0 01-.28-4.06 2.56 2.56 0 01-1.78.66 3.94 3.94 0 01-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 01.19-.24 2.56 2.56 0 01-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 01-1.11.63 1.23 1.23 0 01-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 01-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 012.41-.66 5.58 5.58 0 011.4.18 7.51 7.51 0 012.5-.4 5.35 5.35 0 014.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 01-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z" />
        <path d="M17.43 13.59a4 4 0 01-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 012.12-.61 6.28 6.28 0 00-1.13-1.94 5.41 5.41 0 00-4.13-2 3.34 3.34 0 00-2.55.95A5.82 5.82 0 008.51 7.8l.15-.08A3.7 3.7 0 0110 7.3a1.45 1.45 0 011.76 1.19 5.73 5.73 0 01-.29 4.09 3.29 3.29 0 00-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 01.57.07 1.16 1.16 0 01.62.74v.16a.28.28 0 010 .09 22.22 22.22 0 00.22 4.9 1.5 1.5 0 002 1.09A1.92 1.92 0 0016.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z" />
        <path d="M18 14.33l-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 00.93.12 4.29 4.29 0 001.38-.29 3 3 0 00.79-.52 3.47 3.47 0 01-2.43-.05z" />
      </svg>
    ),
    name: "PostgreSQL",
  },
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M12 5.37l-.44-.06L6 14.9c.24.21.4.48.47.78h11.06c.07-.3.23-.57.47-.78l-5.56-9.59-.44.06M6.6 16.53l4.28 2.53c.29-.27.69-.43 1.12-.43.43 0 .83.16 1.12.43l4.28-2.53H6.6M12 22a1.68 1.68 0 01-1.68-1.68l.09-.56-4.3-2.55c-.31.36-.76.58-1.27.58a1.68 1.68 0 01-1.68-1.68c0-.79.53-1.45 1.26-1.64V9.36c-.83-.11-1.47-.82-1.47-1.68A1.68 1.68 0 014.63 6c.55 0 1.03.26 1.34.66l4.41-2.53-.06-.45c0-.93.75-1.68 1.68-1.68.93 0 1.68.75 1.68 1.68l-.06.45 4.41 2.53c.31-.4.79-.66 1.34-.66a1.68 1.68 0 011.68 1.68c0 .86-.64 1.57-1.47 1.68v5.11c.73.19 1.26.85 1.26 1.64a1.68 1.68 0 01-1.68 1.68c-.51 0-.96-.22-1.27-.58l-4.3 2.55.09.56A1.68 1.68 0 0112 22M10.8 4.86L6.3 7.44l.02.24c0 .71-.44 1.32-1.06 1.57l.03 5.25 5.51-9.64m2.4 0l5.51 9.64.03-5.25c-.62-.25-1.06-.86-1.06-1.57l.02-.24-4.5-2.58z" />
      </svg>
    ),
    name: "GraphQL",
  },
  {
    logo: (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M15.698 7.287L8.712.302a1.03 1.03 0 00-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 011.55 1.56l1.773 1.774a1.224 1.224 0 011.267 2.025 1.226 1.226 0 01-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 11-1.008-.036V5.887a1.226 1.226 0 01-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 000 1.457l6.986 6.986a1.03 1.03 0 001.457 0l6.953-6.953a1.031 1.031 0 000-1.457" />
      </svg>
    ),
    name: "Git",
  },
  {
    logo: (
      <svg
        viewBox="0 0 640 512"
        fill="currentColor"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z" />
      </svg>
    ),
    name: "Docker",
  },
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M13.9 2.01L3.9 12l3.09 3.09 2.71-2.7L20.09 2l-6.19.01zm.82 14.6l5.39-5.38h-5.93c-.11 0-.26 0-.34.07l-2.23 2.23-3.09 3.07 3.09 3.1 2.15 2.15c.07.07.14.17.26.15h6.07z" />
      </svg>
    ),
    name: "Flutter",
  },
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M3.79 10.17a.18.18 0 00-.11 0l-.2.27H7a.15.15 0 00.1-.06l.17-.26v-.05zm-1.47.89a.14.14 0 00-.11 0l-.2.26v.05h4.6a.09.09 0 00.09-.06l.08-.23v-.06zM4.6 12a.13.13 0 00-.1.06l-.13.24v.06h2.15a.08.08 0 00.07-.07v-.23s0-.07-.06-.07zm15.99-3.07a3.62 3.62 0 00-2.78-.5 4.09 4.09 0 00-2.72 1.63 4 4 0 00-.67 1.26h-3.14a.25.25 0 00-.24.16c-.14.25-.37.76-.5 1.06s0 .29.18.29h1.88a2.8 2.8 0 01-.26.36 1.81 1.81 0 01-1.65.65 1.53 1.53 0 01-1.32-1.53 2.07 2.07 0 011-1.85 1.71 1.71 0 011.77-.15 1.36 1.36 0 01.45.37c.13.15.14.14.29.1l1.63-.43c.12 0 .16-.08.1-.16a3 3 0 00-1.13-1.38 3.35 3.35 0 00-2.58-.47A4.31 4.31 0 008.16 10a3.81 3.81 0 00-.82 2.85A3 3 0 008.57 15a3.46 3.46 0 002.62.65A4.06 4.06 0 0014 14a4.33 4.33 0 00.41-.69 3 3 0 001 1.55 3.68 3.68 0 002.38.86c.25 0 .51 0 .78-.09a4.51 4.51 0 002.33-1.25A3.72 3.72 0 0022 11.1a3 3 0 00-1.41-2.17zm-1.78 4.73a1.81 1.81 0 01-1.59.06 1.61 1.61 0 01-.9-1.84A2.12 2.12 0 0118 10.19a1.59 1.59 0 012 1.29 2.91 2.91 0 010 .32 2.11 2.11 0 01-1.19 1.86z" />
      </svg>
    ),
    name: "GO",
  },
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 01.013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 00.074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 00-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 01-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 00-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 00-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 00-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 008.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 00-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 00-.236.118c-.043.018-.086.043-.124.062a.559.559 0 01-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 00-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 00-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 00-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 01-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 01-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 00-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 00-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 00.074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 00.117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 00.08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 00.136.08c.043.025.093.05.142.069a.73.73 0 00.124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 01-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 01-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 01.031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 00-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 00-.13-.031.472.472 0 00-.13-.019 1.01 1.01 0 00-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 00-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 00-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 001.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 01-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 01-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 01-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 01-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 01-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 005.857-4.68 9.893 9.893 0 01-1.667 3.986 9.758 9.758 0 001.655-1.376 9.824 9.824 0 002.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 01-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 01-.185.378 4.735 4.735 0 01-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 01-.18.155l-.142.124a3.459 3.459 0 01-.347.241 4.295 4.295 0 01-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 01-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 01-.297.012 4.66 4.66 0 01-.422-.025 3.137 3.137 0 01-.421-.062 3.136 3.136 0 01-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 00.818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 00.334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 00-.05-.415 4.493 4.493 0 00-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 00-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 00-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 00-.124-.062 2.415 2.415 0 00-.589-.26z" />
      </svg>
    ),
    name: "Nest",
  },
  {
    logo: (
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
    name: "Typescript",
  },
  {
    logo: (
      <svg
        viewBox="0 0 640 512"
        fill="currentColor"
        height="1em"
        width="1em"
        className="w-16 h-16 text-teal-500 hover:text-teal-600"
      >
        <path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z" />
      </svg>
    ),
    name: "Node",
  },
];

const Home = () => {
  const locale = useLocale();
  const t = useTranslations("Index");
  // console.log(locale);

  return (
    <>
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        <div className="space-y-2 pt-5 pb-8 md:space-x-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
            {t("title")}
          </h1>
        </div>

        <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              alt="Picture of profile"
              src={Me}
              className="h-60 w-60 rounded-full object-cover object-top"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              David Ramirez
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-center">
              {t("occupation")}
            </p>
            {/* CONTACTS LINKS ICONS */}
            <div className="flex space-x-5 pt-6">
              {/* Github */}
              <a href="https://github.com/D4vidRV" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/david-ram%C3%ADrez-villalobos-36b627220/"
                target="_blank"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:davidramirezcr.dev@gmail.com" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="https://twitter.com/Avalon_CR" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <a
              className="no-underline relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              href={
                locale == "en"
                  ? "https://drive.google.com/uc?id=1WcH5NQqcmxTMy2TgxLNg0DlFfTVpBIPC&export=download&authuser=0"
                  : "https://drive.google.com/uc?id=10OzSWoo9vXitbicwS-y0Y445roaqTh-4&export=download&authuser=0"
              }
              download={"david_ramirez_cv.pdf"}
            >
              <span className="flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {t("downloadButtonText")}
                <svg
                  className="ml-2 fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-12">
        <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
          {t("skills")}
        </h3>
        <div className="p-4 grid grid-cols-4 gap-x-12 sm:grid-cols-6 xl:grid-cols-10">
          {technologyLogos
            .map((technology, index) => (
              <div key={index} className="mb-8">
                <Tooltip tooltip={technology.name}>
                  <div className="my-3">{technology.logo}</div>
                </Tooltip>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </>
  );
};

export default Home;
