/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const galleryImages = [
  "https://source.unsplash.com/random/?1",
  "https://source.unsplash.com/random/?2",
  "https://source.unsplash.com/random/?3",
  "https://source.unsplash.com/random/?4",
];

export default function UploadImageScreen() {
  const [backgroundImage, setBackgroundImage] = useState(galleryImages[0]);

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setBackgroundImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleGalleryImageClick = (imageUrl: React.SetStateAction<string>) => {
    setBackgroundImage(imageUrl);
  };

  return (
    <div className="bg-black flex flex-col text-white h-[100vh] w-full">
      <div className="flex-1 mx-4 my-10 md:mb-10 flex flex-col items-center bg-gray-900 rounded-2xl pt-4 max-w-[350px] w-[350px] md:mx-auto outline outline-[6px] outline-gray-800">
        <div className="w-2 top-10 absolute h-2 my-4 bg-black rounded-full"></div>

        <p className="mb-2 mt-4 text-xl font-medium text-center">
          Current Cover Image Gallery
        </p>
        <div
          className="flex-1 rounded-lg w-[90%] mx-auto bg-slate-100 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <input
          style={{ display: "none" }}
          type="file"
          onChange={handleImageUpload}
        />
        <button
          className="w-[90%] my-4 py-2 bg-slate-100 text-black rounded-lg hover:bg-slate-200 transition duration-300 ease-in-out"
          id="upload-button"
          onClick={() => {
            const fileInput = document.querySelector(
              "input[type=file]"
            ) as HTMLInputElement;
            fileInput?.click();
          }}
        >
          Upload Cover Image
        </button>
        <div className="flex w-[90%] justify-between">
          {galleryImages.map((image, index) => (
            <img
              className="w-[23%] object-cover rounded-lg cursor-pointer hover:opacity-80 transition duration-300 ease-in-out"
              key={index}
              src={image}
              alt={`Wallpaper ${index + 1}`}
              onClick={() => handleGalleryImageClick(image)}
            />
          ))}
        </div>
        <div className="w-32 h-1.5 my-4 bg-white rounded-full"></div>
      </div>
    </div>
  );
}
