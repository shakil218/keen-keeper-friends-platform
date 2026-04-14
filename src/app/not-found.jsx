"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">

      {/* Icon Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
      </motion.div>

      {/* 404 Text */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-6xl font-bold bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
      >
        404
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-semibold mt-4"
      >
        Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-500 mt-2 max-w-md"
      >
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          ← Go Back Home
        </Link>
      </motion.div>

    </div>
  );
}