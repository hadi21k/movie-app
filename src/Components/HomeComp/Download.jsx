import HomeDetails from "./HomeDetails";

const Download = () => {
  return (
    <div className="bg-black py-10 border-b-8 border-[#222] grid grid-cols-1 lg:grid-cols-2">
      <div className="grid order-2 place-items-center lg:order-1">
        <div className="relative">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
          <div className="absolute h-20 border-2 top-[80%] border-[#222] w-1/2 max-w-1/2 transform translate-x-1/2 flex items-center justify-between bg-black rounded-lg p-2">
            <div className="flex items-center w-1/2 h-full space-x-3">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                className="h-full"
              />
              <div>
                <h4 className="font-semibold text-white">Stranger Things</h4>
                <h6 className="text-sm font-base text-[#0071eb]">
                  Downloading...
                </h6>
              </div>
            </div>
            <div className="w-12 h-full bg-no-repeat bg-cover bg-animate-download"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center order-1 space-y-3 lg:order-2">
        <HomeDetails
          title="
          Download your shows to watch offline.
           "
          description=" 
          Save your favorites easily and always have something to watch.
           "
        />
      </div>
    </div>
  );
};

export default Download;
