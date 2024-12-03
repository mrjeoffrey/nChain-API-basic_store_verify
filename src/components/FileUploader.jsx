import React from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const onDrop = (acceptedFiles) => console.log("Files:", acceptedFiles);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-400 p-4 rounded bg-gray-50 text-center"
    >
      <input {...getInputProps()} />
      <p>Drag & drop files here, or click to select files</p>
    </div>
  );
};

export default FileUploader;
