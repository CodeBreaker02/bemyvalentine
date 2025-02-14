"use client";

import React, { useState, useRef, useEffect, Fragment } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const armLimit = Math.floor(Math.random() * 3);
const headLimit = Math.floor(Math.random() * 2) + armLimit + 1;
const angerLimit = Math.floor(Math.random() * 2) + headLimit + 1;
const armDuration = 0.1;
const bearDuration = 0.25;
const checkboxDuration = 0.25;
const pawDuration = 0.01;

const BearToggle: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [scaleCount, setScaleCount] = useState(1);
  const [count, setCount] = useState(1);

  const bearRef = useRef<SVGSVGElement>(null);
  const swearRef = useRef<HTMLDivElement>(null);
  const armWrapRef = useRef<HTMLDivElement>(null);
  const pawRef = useRef<HTMLDivElement>(null);
  const armRef = useRef<SVGSVGElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const yesButtonRef = useRef(null);
  const router = useRouter();

  const onYesClick = () => {
    router.push("/yes-response"); // Navigate to the yes-response page
  };

  const onHover = () => {
    if (Math.random() > 0.5 && count > armLimit && bearRef.current) {
      gsap.to(bearRef.current, {
        duration: bearDuration / 2,
        y: "40%",
      });
    }
  };

  const offHover = () => {
    if (!checked && bearRef.current) {
      gsap.to(bearRef.current, {
        duration: bearDuration / 2,
        y: "100%",
      });
    }
  };

  const onChange = () => {
    if (checked) return;
    setChecked(true);
    setScaleCount((prev) => prev + 0.2);

    if (yesButtonRef.current) {
      gsap.to(yesButtonRef.current, {
        duration: 0.3,
        scale: scaleCount + 0.2,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    const grabBearTL = () => {
      let bearTranslation;
      if (count > armLimit && count < headLimit) {
        bearTranslation = "40%";
      } else if (count >= headLimit) {
        bearTranslation = "0%";
      }

      const onComplete = () => {
        setChecked(false);
        setCount(count + 1);
      };

      let onBearComplete = () => {};
      if (Math.random() > 0.5 && count > angerLimit) {
        onBearComplete = () => {
          if (swearRef.current) {
            gsap.set(swearRef.current, { display: "block" });
          }
        };
      }

      const base = armDuration + armDuration + pawDuration;
      const preDelay = Math.random();
      const delay = count > armLimit ? base + bearDuration + preDelay : base;

      const tl = gsap.timeline({ delay: Math.random(), onComplete });

      if (count > armLimit && bearRef.current) {
        tl.to(bearRef.current, {
          duration: bearDuration,
          onComplete: onBearComplete,
          y: bearTranslation,
        });
      }

      if (armWrapRef.current) {
        tl.to(
          armWrapRef.current,
          {
            x: 50,
            duration: armDuration,
          },
          count > armLimit ? preDelay : 0,
        );
      }

      if (armRef.current) {
        tl.to(armRef.current, {
          scaleX: 0.7,
          duration: armDuration,
        });
      }

      if (pawRef.current) {
        tl.to(pawRef.current, {
          duration: pawDuration,
          scaleX: 1,
          onComplete: () => {
            if (swearRef.current) {
              gsap.set(swearRef.current, { display: "none" });
            }
          },
        });
      }

      if (bgRef.current) {
        tl.to(
          bgRef.current,
          {
            duration: checkboxDuration,
            backgroundColor: "#aaa",
          },
          delay,
        );
      }

      if (indicatorRef.current) {
        tl.to(
          indicatorRef.current,
          {
            duration: checkboxDuration,
            x: "0%",
          },
          delay,
        );
      }

      if (pawRef.current) {
        tl.to(
          pawRef.current,
          {
            duration: pawDuration,
            scaleX: 0,
          },
          delay,
        );
      }

      if (armRef.current) {
        tl.to(
          armRef.current,
          {
            duration: pawDuration,
            scaleX: 1,
          },
          delay + pawDuration,
        );
      }

      if (armWrapRef.current) {
        tl.to(
          armWrapRef.current,
          {
            duration: armDuration,
            x: 0,
          },
          delay + pawDuration,
        );
      }

      if (bearRef.current) {
        tl.to(
          bearRef.current,
          {
            duration: bearDuration,
            y: "100%",
          },
          delay + pawDuration,
        );
      }

      return tl;
    };

    const showTimeline = () => {
      const tl = gsap.timeline({
        onStart: () => {},
      });

      if (bgRef.current) {
        tl.to(
          bgRef.current,
          {
            duration: checkboxDuration,
            backgroundColor: "#2eec71",
          },
          0,
        );
      }

      if (indicatorRef.current) {
        tl.to(
          indicatorRef.current,
          {
            duration: checkboxDuration,
            x: "100%",
          },
          0,
        );
      }

      tl.add(grabBearTL(), checkboxDuration);
    };

    if (checked) showTimeline();
  }, [checked, count]);

  return (
    <Fragment>
      <div className="bear__wrap">
        {/*   <div ref={swearRef} className="bear__swear">
          #@$%*!
        </div>*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="326"
          height="100"
          viewBox="0 0 326 402"
          fill="none"
          ref={bearRef}
          className="bear"
          preserveAspectRatio="xMinYMin"
        >
          <g className="scale-[115%]">
            <path
              d="M167.336 399C76.1701 394 -40.9844 386.544 20.002 171L302.149 140C371.501 357.5 258.502 404 167.336 399Z"
              fill="#FFFEFD"
              stroke="#530B0B"
              strokeWidth="4"
            />
            <path
              d="M297.279 120C323.278 193.5 259.276 244.5 178.776 252.5C90.3417 261.295 15.3362 226.5 21.3369 145.5C31.3369 54 82.4 31.8468 152.279 24.5C238.778 15.4057 276.278 72.5 297.279 120Z"
              fill="#FFFEFD"
              stroke="#530B0B"
              strokeWidth="4"
              strokeMiterlimit="1.30541"
            />
            <path
              d="M32.7764 64C39.5556 74.5251 45.8312 78.67 56.7077 76.7075C68.139 74.645 78.5802 67.5934 84.7325 57.7407C88.672 51.4318 89.3118 45.7942 86.5804 39.0695C84.5682 34.1154 81.1222 29.8332 77.0118 26.4132C66.4156 17.5969 54.0541 15.4815 36.7764 27C29.2764 32 25.183 48.1277 32.7764 64Z"
              fill="#6D2323"
              stroke="#530B0B"
              strokeWidth="3"
            />
            <path
              d="M274.745 46.9297C267.966 57.4548 261.69 61.5996 250.814 59.6372C239.383 57.5747 228.941 50.5231 222.789 40.6704C218.849 34.3615 218.21 28.7239 220.941 21.9992C222.953 17.0451 226.399 12.7628 230.51 9.34286C241.106 0.526577 253.467 -1.58882 270.745 9.92968C278.245 14.9297 282.339 31.0574 274.745 46.9297Z"
              fill="#6D2323"
              stroke="#530B0B"
              strokeWidth="3"
            />
            <path
              d="M192.831 177.195C191.704 177.314 190.75 177.468 189.834 177.683C183.194 179.242 176.504 180.165 169.771 179.075C163.916 178.126 158.973 178.456 154.754 181.462C153.576 182.301 152.527 183.368 151.973 184.704C151.91 184.854 151.852 185.007 151.798 185.163C150.249 189.635 153.16 194.325 156.667 197.501C160.614 201.074 164.761 203.425 169.965 205.438C177.652 208.411 186.498 207.224 192.918 202.055C200.655 195.826 204.601 189.641 204.277 182.839C204.133 179.819 201.673 178.155 197.734 177.364C196.124 177.041 194.464 177.022 192.831 177.195Z"
              fill="#530B0B"
              stroke="#530B0B"
              strokeWidth="3"
            />
            <path
              d="M46.9476 141.19C66.5955 106.672 83.6308 97.0128 110.31 100.755C130.943 107.166 141.258 122.452 140.272 147.108C137.82 184.091 99.5063 214.171 72.4877 208.253C45.4691 202.336 35.6511 164.86 46.9476 141.19Z"
              fill="#6D2323"
              stroke="#6D2323"
            />
            <path
              d="M287.914 132.656C269.068 101.938 252.728 93.3416 227.139 96.6719C207.347 102.377 197.453 115.98 198.399 137.921C200.751 170.833 237.501 197.602 263.417 192.336C289.333 187.07 298.75 153.719 287.914 132.656Z"
              fill="#6D2323"
              stroke="#6D2323"
            />
            <path
              d="M208.819 59.2467C205.708 67.6003 216.374 81.2299 230.15 79.9109C237.266 78.1484 239.927 72.8763 237.26 66.721C229.706 54.85 212.374 51.3327 208.819 59.2467Z"
              fill="#530B0B"
              stroke="#530B0B"
            />
            <path
              d="M113.777 62.5C117.277 72 105.276 87.5 89.7768 86C81.7708 83.9956 78.7767 78 81.7768 71C90.2764 57.5 109.776 53.5 113.777 62.5Z"
              fill="#530B0B"
              stroke="#530B0B"
            />
            <path
              d="M167.335 331C55.1722 339.5 -40.5 371.5 22.1136 166.158C26 185 30.5 203 48.5 220C115.273 270.846 231.31 267.928 291.5 194.5C303.837 179.449 303.5 157 302.148 140C365.998 368.5 279.498 322.5 167.335 331Z"
              fill="#6D2323"
              stroke="#6D2323"
              strokeWidth="4"
            />
            <path
              d="M221.5 142.5C226.227 131.647 231.148 133.121 242 142.5"
              stroke="#530B0B"
              strokeWidth="4"
            />
            <path
              d="M108.5 146.597C103.773 135.744 98.8523 137.218 88 146.597"
              stroke="#530B0B"
              strokeWidth="4"
            />
          </g>
        </svg>
      </div>
      <div ref={armWrapRef} className="bear__arm-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="273"
          height="121"
          viewBox="0 0 273 121"
          fill="none"
          ref={armRef}
          className="bear__arm"
          preserveAspectRatio="xMinYMin"
        >
          <path
            d="M270.729 62.5176C271.794 81.0956 267.094 93.4012 258.698 101.613C250.228 109.897 237.695 114.317 222.487 116.43C207.3 118.54 189.729 118.313 171.435 117.543C166.186 117.322 160.874 117.056 155.546 116.789C142.377 116.13 129.117 115.466 116.489 115.466C69.481 115.466 40.7563 110.402 23.8385 101.974C15.4273 97.7838 10.0113 92.7994 6.67895 87.2552C3.34458 81.7076 2 75.4389 2 68.5211C2 54.3289 4.08512 41.4266 14.1535 30.874C24.2909 20.249 42.852 11.6565 76.7151 7.05798C110.664 2.44787 158.493 -0.769141 198.26 5.87939C218.15 9.20474 235.844 14.9702 248.769 24.1152C261.617 33.2063 269.76 45.6289 270.729 62.5176Z"
            fill="#FFFEFD"
            stroke="#6D2323"
            strokeWidth="4"
          />
          <path
            d="M189.049 81.9297C195.828 92.4548 202.104 96.5996 212.98 94.6372C224.411 92.5747 234.853 85.5231 241.005 75.6704C244.944 69.3615 245.584 63.7239 242.853 56.9992C240.841 52.0451 237.395 47.7628 233.284 44.3429C222.688 35.5266 210.327 33.4112 193.049 44.9297C185.549 49.9297 181.455 66.0574 189.049 81.9297Z"
            fill="#6D2323"
            stroke="#6D2323"
            strokeWidth="3"
          />
        </svg>
      </div>
      <span className="checkbox__text2">Yes</span>

      <div ref={pawRef} className="bear__paw" />
      <div className="mask" />
      <button ref={yesButtonRef} className="checkbox2" onClick={onYesClick}>
        <div className="checkbox__bg2"></div>
        <span className="checkbox__text2">Yes</span>
      </button>
      <button className="checkbox" onMouseOver={onHover} onMouseOut={offHover}>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <div ref={bgRef} className="checkbox__bg"></div>
        <span className="checkbox__text">No</span>
      </button>
    </Fragment>
  );
};

export default BearToggle;
