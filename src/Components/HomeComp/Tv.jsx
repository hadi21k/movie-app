import React from "react";
import HomeDetails from "./HomeDetails";

const Tv = () => {
  return (
    <div className="bg-black min-h-[300px] py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-y-8 border-[#222]">
      <div className="flex flex-col justify-center space-y-3 text-white tv-text">
        <HomeDetails
          title="Enjor on your TV"
          description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        />
      </div>
      <div className="grid place-items-center">
        <video autoPlay muted loop playsInline>
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};

export default Tv;
