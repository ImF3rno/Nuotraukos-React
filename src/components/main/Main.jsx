import React, { useState } from "react";
import AddPhoto from "../addPhoto/AddPhoto";
import Gallery from "../gallery/Gallery";

const Main = () => {
    const [clicked, setClicked] = useState(false);
    const [photos, setPhotos] = useState([]);
  
    const handleClick = () => {
      setClicked(true);
    };
  
    const handleAddClick = () => {
      setClicked(false);
    };
  
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={handleClick}>
          Gallery
        </button>
        <button className="btn btn-primary" onClick={handleAddClick}>
          Add
        </button>
        {clicked ? (
          <Gallery photos={photos} />
        ) : (
          <AddPhoto onAdd={(newPhotos) => setPhotos([...photos, ...newPhotos])} />
        )}
      </div>
    );
  };

export default Main;