import React, { useState } from 'react';

const ImageUpload = () => {
  const [imageSrc, setImageSrc] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (event) => {
    setImageSrc('');
  };

  return (
    <>
      <label htmlFor="MangaImage" className="relative cursor-pointer group w-full h-full bg-raisin">
        <div className="rounded-lg w-full h-full md:h-full flex flex-col items-center justify-center hover:bg-black hover:bg-opacity-30 transition-colors duration-300">
          {/* Uploaded image or upload prompt */}
          {imageSrc ? (
            <div className="w-full h-full relative">
              <img id="the-picture" src={imageSrc} alt="Uploaded" className="w-full h-full object-contain lg:object-cover rounded-lg" />
              <button type="button" onMouseDown={removeImage} className="absolute top-2 right-2 m-2 bg-amaranth text-rose font-bold px-3 py-1 rounded-lg hover:bg-blush transition-colors z-10">
                Remove
              </button>
              <div className="absolute text-lg inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 font-bold">
                Click to upload
              </div>
            </div>
          ) : (
            <>
              <div className="absolute text-lg top-4 left-0 right-0 text-center text-rose font-bold z-10">Manga Cover</div>
              <div className="text-lg flex items-center justify-center font-bold text-rose ">
                Click to upload
              </div>
            </>
          )}
        </div>
      </label>
      <input id="MangaImage" className="photo-upload hidden" type="file" accept="image/jpg, image/jpeg, image/png, image/gif" onChange={handleImageChange} />
    </>


  );
};

export default ImageUpload;
