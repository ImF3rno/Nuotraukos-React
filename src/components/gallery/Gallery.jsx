import React from "react";

const Gallery = ({ photos }) => {
  return (
    <div className="row">
      {photos.map((photo) => (
        <div className="col-md-4" key={photo.title}>
          <div className="card mb-4 shadow-sm">
            <img src={photo.url} className="card-img-top" alt={photo.title} />
            <div className="card-body">
              <h5 className="card-title">{photo.title}</h5>
              <p className="card-text">{photo.url}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;