import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { checkCoverArt } from '../../utils';

const ImageUpload = ({ onImageUpload, imageFilename, imageSrc, formData }) => {

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onImageUpload({ imageName: file.name, imageSrc: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    onImageUpload({ imageName: '', imageSrc: '' });
  };

  useEffect(() => {
    if (imageFilename && onImageUpload) {
      onImageUpload({ imageName: imageFilename, imageSrc });
    }
  }, [imageFilename, imageSrc, onImageUpload]);

  console.log(`Image Name: ${imageFilename}`);
  console.log(`Image Src: ${imageSrc}`);



  return (
    <>
      {(imageSrc || imageFilename) ? (
        <div className="w-full h-full relative">
          {imageSrc && (
            <img id="the-picture" src={imageSrc} alt="Uploaded" className="w-full h-full object-contain lg:object-cover rounded-lg" />
          )}
          {imageSrc && (
            <div className="absolute top-2 right-2 m-2 z-10">
              <button type="button" onClick={removeImage} className="bg-amaranth text-rose font-bold px-3 py-1 rounded-lg hover:bg-blush transition-colors z-10">
                Remove
              </button>
            </div>
          )}
          {imageSrc && (
            <div className="absolute text-lg inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 font-bold">
              Image Selected
            </div>
          )}
          {!imageSrc && imageFilename && (
            <>
              <img src={checkCoverArt(imageFilename, formData.mangaId)} alt="Cover Art" className="w-full h-full object-contain lg:object-cover rounded-lg" />
              <div className="absolute top-2 right-2 m-2 z-10">
                <button type="button" onClick={removeImage} className="bg-amaranth text-rose font-bold px-3 py-1 rounded-lg hover:bg-blush transition-colors z-10">
                  Remove
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <>
          <label htmlFor="MangaImage" className="relative cursor-pointer group w-full h-full bg-raisin">
            <div className="rounded-lg w-full h-full md:h-full flex flex-col items-center justify-center hover:bg-black hover:bg-opacity-30 transition-colors duration-300">
              <div className="absolute text-lg top-4 left-0 right-0 text-center text-rose font-bold z-10">Manga Cover</div>
              <div className="text-lg flex items-center justify-center font-bold text-rose">
                Click to upload
              </div>
            </div>
          </label>
        </>
      )}
      <input id="MangaImage" className="photo-upload hidden" type="file" accept="image/jpg, image/jpeg, image/png, image/gif" onChange={handleImageChange} />
    </>
  );
  
  
};

ImageUpload.propTypes = {
    onImageUpload: PropTypes.func,
    mode: PropTypes.oneOf(['add', 'edit']).isRequired,
    id: PropTypes.string,
    imageFilename: PropTypes.string,
    imageSrc: PropTypes.string,
    formData: PropTypes.shape({
        title: PropTypes.string,
        mangaId: PropTypes.string,
        yearPublished: PropTypes.string,
        chapters: PropTypes.string,
        author: PropTypes.arrayOf(PropTypes.string),
        state: PropTypes.string,
        status: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string
    })
};

export default ImageUpload;
