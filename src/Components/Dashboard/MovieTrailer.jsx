import YouTube from "react-youtube";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";

const MovieTrailer = ({
  trailerId,
  setTrailerId,
  showTrailer,
  setShowTrailer,
}) => {
  const ref = useRef();

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const onEnd = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowTrailer(false);
    setTrailerId("");
  };

  function closeModal() {
    setShowTrailer(false);
  }

  return (
    <>
      <Transition appear show={showTrailer} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 z-[100]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[100]">
            <div className="min-h-screen flex items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="md:w-3/4 w-full overflow-hidden">
                  <YouTube
                    ref={ref}
                    className="h-[60vh] md:h-[500px] w-[100%]"
                    videoId={trailerId ? trailerId : ""}
                    opts={opts}
                    onReady={() => setShowTrailer(true)}
                    onEnd={onEnd}
                    loading="lazy"
                    onError={() => setShowTrailer(false)}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MovieTrailer;
