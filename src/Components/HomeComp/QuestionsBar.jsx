import { Disclosure } from "@headlessui/react";
import { AiOutlineArrowDown } from "react-icons/ai";

const QuestionsBar = ({ question, a1, a2 }) => {
  return (
    <>
      <div className="mx-auto w-full max-w-md rounded-xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-[#303030] cursor-pointer w-full py-2 px-4 flex items-center justify-between">
                <span>What is Hflix?</span>
                <AiOutlineArrowDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#303030] text-white prose prose-headings:text-white">
                <h4>
                  Hflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                </h4>
                <h6>
                  You can watch as much as you want, whenever you want without a
                  single commercial – all for one low monthly price. There's
                  always something new to discover and new TV shows and movies
                  are added every week!
                </h6>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-[#303030] cursor-pointer w-full py-2 px-4 flex items-center justify-between">
                <span>How much does Hflix cost?</span>
                <AiOutlineArrowDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#303030] text-white prose prose-headings:text-white">
                <h4>
                  {/* Watch Hflix on your smartphone, tablet, Smart TV, laptop, or */}
                  streaming device, all for one fixed monthly fee. Plans range
                  from USD7.99 to USD11.99 a month. No extra costs, no
                  contracts.
                </h4>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-[#303030] cursor-pointer w-full py-2 px-4 flex items-center justify-between">
                <span>Where can I watch?</span>
                <AiOutlineArrowDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#303030] text-white prose prose-headings:text-white">
                <h4>
                  Watch anywhere, anytime. Sign in with your Hflix account to
                  watch instantly on the web at hflix.com from your personal
                  computer or on any internet-connected device that offers the
                  hflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                </h4>
                <h6>
                  You can also download your favorite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Hflix with you anywhere.
                </h6>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-[#303030] cursor-pointer w-full py-2 px-4 flex items-center justify-between">
                <span>How do I cancel?</span>
                <AiOutlineArrowDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#303030] text-white prose prose-headings:text-white">
                <h4>
                  Hflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </h4>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-[#303030] cursor-pointer w-full py-2 px-4 flex items-center justify-between">
                <span>What can I watch on Hflix?</span>
                <AiOutlineArrowDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#303030] text-white prose prose-headings:text-white">
                <h4>
                  Hflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Hflix originals,
                  and more. Watch as much as you want, anytime you want.
                </h4>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-[#303030] cursor-pointer w-full py-2 px-4 flex items-center justify-between">
                <span>Is Hflix good for Kids?</span>
                <AiOutlineArrowDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#303030] text-white prose prose-headings:text-white">
                <h4>
                  The Hflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space.
                </h4>
                <h6>
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </h6>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default QuestionsBar;
