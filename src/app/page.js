"use client";

import { useState } from "react";
import TextUploadBox from "./components/TextUploadBox";
import UploadSidebar from "./components/UploadSidebar";

export default function Home() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <div className="flex flex-col items-center min-h-screen p-10 bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="main_heading">Plagiarism Checker</h1>
        <h2 className="sub_heading">
          Check your writing for originality and ensure every word is authentic with our advanced plagiarism detection.
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 w-full max-w-6xl">
        {/* Left Content (Text Upload Box) */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <TextUploadBox setUploadedFiles={setUploadedFiles} />
        </div>

        {/* Right Sidebar (Previous Uploads) */}
        <div className="p-6 bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg">
          <UploadSidebar uploadedFiles={uploadedFiles} />
        </div>
      </div>
    </div>
  );
}

