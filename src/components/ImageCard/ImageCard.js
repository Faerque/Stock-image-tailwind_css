import React from "react";
import "./ImageCard.css";
import Fade from "react-reveal/Fade";

const ImageCard = ({ image }) => {
  const tag = image.tags.split(",");
  console.log(image);

  return (
    <Fade bottom cascade>
    <div className="max-w-md justify-between rounded overflow-hidden shadow-lg bg-gray-700">
      <a href={image.pageURL} target="_blank">
        <img src={image.webformatURL} alt=" " className="w-full rounded" />
      </a>

      <div className="mx-4">
        <div className="text-green-500 text-xl my-2">Photo by {image.user}</div>
      </div>
      <div>
        <ul className="mx-4 text-sm subpixel-antialiased">
          <li>Views: {image.views}</li>
          <li>Downloads: {image.downloads}</li>
          <li>Likes: {image.likes}</li>
        </ul>
      </div>
      <div className="p-3  space-x-3">
        {tag.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-green-200 rounded-full px-3 py-2 my-2 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
    </Fade>
    
  );
};

export default ImageCard;
