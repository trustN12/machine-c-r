import React, { useEffect, useState } from "react";

const Carousel = ({ limit = 4, page = 2 }) => {
  const [images, setImages] = useState([]); // store fetched images
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loading, setLoading] = useState(true);

  //? Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await fetch(
          `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
        );

        const data = await result.json();

        setImages(data.map((img) => img.download_url));
        setLoading(false);
        // console.log(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchImages();
  }, [limit]);

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Loading Images...</p>;
  }

  //todo: Navigate to a given slide index
  const goTo = (index) => {
    if (!images.length) return;
    if (index < 0) {
      index = images.length - 1;
    }
    if (index >= images.length) {
      index = 0;
    }

    setCurrentIdx(index);
  };

  return (
    <div className="w-full mx-auto overflow-hidden">
      {/* Current slide image */}
      <div className="relative my-10 mx-10">
        {images.length > 0 && (
          <img
            loading="lazy"
            src={images[currentIdx]}
            alt="slide-images"
            className="w-full h-64 rounded-lg object-cover"
          />
        )}

        {/* Previous button */}
        <button
          onClick={() => goTo(currentIdx - 1)}
          className="absolute top-1/2 -translate-y-1/2  text-white p-2 left-4 bg-black/50 rounded-full hover:bg-white/50"
        >
          &larr;
        </button>
        {/* Next button */}
        <button
          onClick={() => goTo(currentIdx + 1)}
          className="absolute top-1/2 -translate-y-1/2  text-white p-2 right-4 bg-black/50 rounded-full hover:bg-white/50"
        >
          &rarr;
        </button>
        {/* Indicators */}

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(4)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-2 h-2 rounded-full ${
                idx === currentIdx ? "bg-blue-500" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
