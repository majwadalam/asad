import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-black flex flex-col text-white h-[100vh] w-full">
      <div
        style={{
          backgroundImage: "url('/img.jpg')",
          backgroundSize: "cover",
        }}
        className="h-full mx-4 my-10 flex flex-col items-center bg-gray-900 rounded-2xl pt-[25vh] w-[350px] max-w-[350px] md:mx-auto outline outline-[6px] outline-gray-800"
      >
        <div className="w-2 top-10 absolute h-2 my-4 bg-black rounded-full"></div>
        <h1 className="text-center text-2xl md:text-5xl md:py-10 py-4">
          Luminex
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <button
            className="w-64 py-2 bg-slate-100 text-black rounded-lg hover:bg-slate-200 transition duration-300 ease-in-out"
            onClick={() => navigate("/upload")}
          >
            Upload Image
          </button>
          <button
            className="w-64 py-2 bg-slate-100 text-black rounded-lg hover:bg-slate-200 transition duration-300 ease-in-out"
            onClick={() => navigate("/add-text")}
          >
            Add Text
          </button>
          <button
            className="w-64 py-2 bg-slate-100 text-black rounded-lg hover:bg-slate-200 transition duration-300 ease-in-out"
            onClick={() => navigate("/gallery")}
          >
            Gallery
          </button>
        </div>
        <div className="mt-auto w-32 h-1.5 my-4 bg-white rounded-full"></div>
      </div>
    </div>
  );
}
