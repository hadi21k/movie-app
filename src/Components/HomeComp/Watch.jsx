import HomeDetails from "./HomeDetails";

const Watch = () => {
  return (
    <div className="bg-black min-h-[300px] py-8 border-b-8 border-[#222] grid grid-cols-1 gap-6 lg:grid-cols-2">
      <HomeDetails
        title="Watch everywhere."
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
      />
      <div className="relative grid place-items-center">
        <img
          className="z-20"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        />
        <video
          className="absolute z-10 h-full top-10 left-1/2 max-h-[47%] transform -translate-x-1/2  w-full max-w-[63%]"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};

export default Watch;
