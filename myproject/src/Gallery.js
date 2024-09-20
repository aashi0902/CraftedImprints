import React, { useState } from "react";
import "./Gallery.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [visiblePhotos, setVisiblePhotos] = useState(10);

  const photos = [
    "/images/m1.webp",
    "/images/m2.webp",
    "/images/m3.jfif",
    "/images/m4.jfif",
    "/images/k1.webp",
    "/images/k2.jfif",
    "/images/k3.avif",
    "/images/k4.jfif",
    "/images/c1.webp",
    "/images/c2.jfif",
    "/images/c3.jfif",
    "/images/c4.jfif",
    "/images/cl1.jfif",
    "/images/cl2.jfif",
    "/images/cl3.jpg",
    "/images/cl4.jpg",
    "/images/t1.avif",
    "/images/t2.jfif",
    "/images/t3.jfif",
    "/images/t4.webp",
    "/images/n1.jpg",
    "/images/n2.jpg",
    "/images/n3.jpg",
    "/images/n4.jpg",
    "/images/mg1.jpeg",
    "/images/mg2.jfif",
    "/images/mg3.avif",
    "/images/mg4.jpg",
  ];

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };

  const handleLoadMore = () => {
    setVisiblePhotos((prevVisiblePhotos) => prevVisiblePhotos + 15);
  };

  return (
    <>
      <NavBar />
      <div className="gallery-container">
        <h2 className="gallery-title">GALLERY</h2>
        <hr />
        <br />
        <div className="gallery-grid">
          {photos.slice(0, visiblePhotos).map((photo, index) => (
            <div key={index} className="gallery-item">
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="gallery-image"
                onClick={() => handlePhotoClick(photo)}
              />
            </div>
          ))}
        </div>

        {visiblePhotos < photos.length && (
          <div className="load-more-container">
            <button onClick={handleLoadMore} className="load-more-button">
              Load More
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )}

        {selectedPhoto && (
          <div className="modal-overlay" onClick={handleClosePhoto}>
            <div className="modal-content">
              <img src={selectedPhoto} alt="Selected" className="modal-image" />
              <button onClick={handleClosePhoto} className="close-button">
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
