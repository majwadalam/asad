/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function UploadImageScreen() {
  const [text, setText] = useState("");

  return (
    <div className="bg-black flex flex-col text-white h-[100vh] w-full">
      <div className="flex-1 mx-4 my-10 md:mb-10 flex flex-col items-center bg-gray-900 rounded-2xl pt-4 max-w-[350px] w-[350px] md:mx-auto outline outline-[6px] outline-gray-800">
        <p className="mb-2 text-xl font-medium text-center">
          Current Cover Image Text
        </p>
        <div className="flex-1 rounded-lg w-[90%] mx-auto bg-slate-700 bg-cover bg-center flex items-center justify-center">
          <h1 className="text-3xl font-bold">{text}</h1>
        </div>
        <input
          type="text"
          placeholder="Enter text"
          className="w-[90%] my-4 px-4 py-2 bg-slate-100 text-black rounded-lg"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="w-32 h-1.5 my-4 bg-white rounded-full"></div>
      </div>
    </div>
  );
}
