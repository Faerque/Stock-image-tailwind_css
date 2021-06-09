import React, { useState, useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";
import ImageSearch from "../ImageSearch/ImageSearch";
import Loading from "../Loading/Loading";

const ImageFetch = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(undefined);
  const [term, setTerm] = useState("");

  useEffect(() => {
    getImages();
  }, [term]);

  const getImages = () => {

    setIsLoading(undefined);

    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      )
        .then((res) => res.json())
        .then((data) => {
          setImages(data.hits);
          setIsLoading(true);
        })
        .catch((err) => console.error(err));
    }, 1200);
  };


  return (
    <div>
      <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />
        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center text-red-600 mx-auto mt-32">
            No Images Found!
          </h1>
        )}
        {!isLoading ? (
          <Loading> </Loading>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image}></ImageCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageFetch;
