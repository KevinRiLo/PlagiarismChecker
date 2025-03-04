"use client";  // ✅ Required for client-side state

export default function UploadSidebar({ uploadedFiles }) {
  return (
    <div className="w-64 bg-gray-100 p-4 shadow-lg rounded-lg">
      <h3 className="font-bold mb-2">Previous Uploads</h3>
      <ul className="space-y-2">
        {uploadedFiles.length > 0 ? (
          uploadedFiles.map((file, index) => (
            <li key={index} className="p-2 bg-white rounded shadow-sm text-sm">
              {file.name}
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No uploads yet.</p>
        )}
      </ul>
    </div>
  );
}
