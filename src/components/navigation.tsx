import classNames from "classnames";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [scroll, setScroll] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={classNames(
        ` ${scroll > 0 ? `bg-opacity-100 z-20` : "bg-opacity-20"} fixed
         h-16  bg-black flex items-center w-full`
      )}
    >
      <div className="mx-14 flex items-center">
        <div className="text-3xl font-semibold text-white">MovieDB</div>
        <div className="flex justify-around items-center gap-10 ml-16">
          <button
            className={classNames(
              `text-${router.query.name === "/" ? "white" : "gray-300"}`
            )}
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className={classNames(
              `text-${router.query.name === "Movies" ? "white" : "gray-300"}`
            )}
            onClick={() => router.push("/Movies")}
          >
            Movies
          </button>
          <button
            className={classNames(
              `text-${router.query.name === "Series" ? "white" : "gray-300"}`
            )}
            onClick={() => router.push("/Series")}
          >
            Series
          </button>
          <button
            className={classNames(
              `text-${router.query.name === "Popular" ? "white" : "gray-300"}`
            )}
            onClick={() => router.push("/Popular")}
          >
            Popular
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
function uesEffect(
  arg0: () => void,
  arg1: (number | (Window & typeof globalThis))[]
) {
  throw new Error("Function not implemented.");
}
