/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./App.css";

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const galleryImages = [
    "https://via.placeholder.com/150x300.png?text=Image+1",
    "https://via.placeholder.com/150x300.png?text=Image+2",
    "https://via.placeholder.com/150x300.png?text=Image+3",
    "https://via.placeholder.com/150x300.png?text=Image+4",
  ];

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
    <div className="app">
      <div
        className="iphone"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <p>Hello world!</p>
      </div>
      <input
        style={{
          display: "none",
        }}
        type="file"
        onChange={handleImageUpload}
      />

      <button
        id="upload-button"
        onClick={() => {
          const fileInput = document.querySelector(
            "input[type=file]"
          ) as HTMLInputElement;
          fileInput?.click();
        }}
      >
        Upload Image
      </button>

      <div className="gallery">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Wallpaper ${index + 1}`}
            onClick={() => handleGalleryImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
