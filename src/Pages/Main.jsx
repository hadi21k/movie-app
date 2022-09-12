import HeroMovie from "../Components/Dashboard/HeroMovie";
import ScrollData from "../Components/Dashboard/ScrollData";
import { url } from "../Requests/request,js";
const Main = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroMovie />
      <ScrollData category="Popular" url={url.requestPopular} />
      <ScrollData category="Trending" url={url.requestTrending} />
      <ScrollData category="Now Playing" url={url.requestNowPlaying} />
      <ScrollData category="Tv" url={url.requestTv} />
      <ScrollData category="Action" url={url.requestAction} />
      <ScrollData category="Comedy" url={url.requestComedy} />
      <ScrollData category="Horror" url={url.requestHorror} />
      <ScrollData category="Romance" url={url.requestRomance} />
    </div>
  );
};

export default Main;
