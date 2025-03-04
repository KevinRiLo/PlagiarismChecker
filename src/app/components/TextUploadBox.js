"use client";  // ✅ Required for client-side state

import { useState } from "react";

export default function TextUploadBox() {
  const [mode, setMode] = useState("text"); // "text" or "file"
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);

  // Handle file selection
  const handleFileChange = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  // Remove file
  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-3xl bg-white p-4 shadow-lg rounded-lg mt-6">
      {mode === "text" ? (
        <textarea
          className="w-full h-40 border rounded p-3"
          placeholder="Paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between border p-2 rounded">
              <span className="text-sm">{file.name}</span>
              <button onClick={() => removeFile(index)} className="text-red-500">Remove</button>
            </div>
          ))}
          <input type="file" onChange={handleFileChange} className="border rounded p-2 w-full" />
        </div>
      )}

      {/* Toggle Bar + Submit Button */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <button
            className={`px-3 py-1 rounded-l ${mode === "text" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => setMode("text")}
          >
            Copy + Paste
          </button>
          <button
            className={`px-3 py-1 rounded-r ${mode === "file" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => setMode("file")}
          >
            Upload File
          </button>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </div>
    </div>
  );
}
