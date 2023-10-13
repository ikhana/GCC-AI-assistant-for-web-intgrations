import "./App.css";

import axios from "axios";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PersonaClient from "./components/PersonaClient";
import { useRiveStateMachine } from "./components/RiveComponent";
import Popup from "./components/Popup";
import Slider from "./components/Slider";
import personaAnimation from "./assets/animations/v02.riv";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [personaClient, setPersonaClient] = useState(null);
  const [isLoadingPersona, setIsLoadingPersona] = useState(false);
  const [isLimit, setIsLimit] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  const [mail, setMail] = useState("");
  const [curPage, setCurPage] = useState(1);
  const [showSlide, setShowSlide] = useState(false);
  const [stateMachineControls, setStateMachineControls] = useState(null);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [shouldStartPersona, setShouldStartPersona] = useState(false);
  const [personaIsReady, setPersonaIsReady] = useState(false);
  const [didShowMoreInfoPopup, setDidShowMoreInfoPopup] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const {
    rive,
    RiveComponent,
    transitionToListening,
    transitionToThinking,
    transitionToSpeaking,
    transitionToSuccessfulResponse,
    transitionToFailResponse,
    transitionToIdle,
  } = useRiveStateMachine({
    src: personaAnimation,
    stateMachineName: "State Machine 1",
    autoplay: true,
  });

  useEffect(() => {
    console.log("loading persona client");
    const script = document.createElement("script");
    script.src =
      "https://api.sindarin.tech/PersonaClientPublic?apikey=4e032688-b83b-4322-abdc-1d146566023b";
    // script.src = 'http://localhost:3004/PersonaClientPublic?apikey=d44486bf-78e4-47b1-aaa0-bbd05ee495a1';

    script.addEventListener("load", async () => {
      console.log("persona client loaded");
      const apiKey = "4e032688-b83b-4322-abdc-1d146566023b";
      const personaClient = new window.PersonaClient(apiKey);
      setPersonaClient(personaClient);
    });
    document.head.appendChild(script);
  }, []);
  const getUserID = async () => {
    try {
      const res = await axios.get("https://geolocation-db.com/json/");

      const userId = res.data.IPv4;
      return userId.replace(/\./g, "_");
    } catch (e) {
      // use localstorage instead
      const userId = localStorage.getItem("scuid");
      if (userId) {
        return userId;
      } else {
        const userId = uuid();
        localStorage.setItem("scuid", userId);
        return userId;
      }
    }
  };
  const handleBegin = async () => {
   
    if (!shouldStartPersona) setShouldStartPersona(true);

    // getUserID().then((userId) => {
    //   personaClient
    //     .init(userId, "SmarterChild")
    //     .then(() => {
    //       console.log("personaClient initialized");
    //       personaClient.on("ready", () => {
    //         personaClient.sayText(`Hello, welcome
    //         to the Persona interactive pitch deck. I’m Andrea, a Persona created by Sindarin Ventures to
    //         guide you through this interactive pitch deck. You can ask me any question about the company
    //         at any time, or simply ask me to go to the next slide to progress through the pitch.`);
    //       });
    //     })
    //     .catch((err) => {
    //       console.log("personaClient init error", err);
    //       if (/You have/gi.test(err)) {
    //         setIsLimit(true);
    //       }
    //     });
    // });
  };
  useEffect(() => {
    if (
      RiveComponent &&
      transitionToListening &&
      transitionToThinking &&
      transitionToSpeaking &&
      transitionToSuccessfulResponse &&
      transitionToFailResponse &&
      transitionToIdle
    ) {
      // console.log('state machine ready')
      setStateMachineControls({
        transitionToListening,
        transitionToThinking,
        transitionToSpeaking,
        transitionToSuccessfulResponse,
        transitionToFailResponse,
        transitionToIdle,
      });
    }
  }, [
    RiveComponent,
    transitionToListening,
    transitionToThinking,
    transitionToSpeaking,
    transitionToSuccessfulResponse,
    transitionToFailResponse,
    transitionToIdle,
  ]);
  useEffect(() => {
    if (personaIsReady) {
      if (isLoadingPersona) {
        console.log("personaIsReady");
        setIsLoadingPersona(false);
      }
    }
  }, [personaIsReady]);

  const onReady = () => {
    setPersonaIsReady(true);
    if (showModal === true) {
      setShowModal(false);
      setTimeout(() => {
        setShowSlide(true);
      }, 1000);
    }
  };
  const isChrome = () => {
    const userAgentData = navigator.userAgentData;
    if (userAgentData) {
      const brands = userAgentData.brands.map((brand) => brand.brand);
      return brands.includes("Google Chrome");
    }
    return false;
  };
  const handleChangeEmail = (event) => {
    setMail(event.target.value);
  };
  const onSaveEmail = async () => {
    const apiURL = "/.netlify/functions/saveEmail";

    const response = await fetch(apiURL, {
      method: "POST",
      body: JSON.stringify({
        ip: ipAddress,
        email: mail,
      }),
    });
    const data = await response.json();
  };
  const onLimitReached = () => {
    if (!isLimitReached) {
      setIsLimitReached(true);
    }
  };
  return (
    <div className="h-[100vh] w-full sm:overflow-hidden">
      {!showSlide && (
        <div className="w-full h-full flex flex-col justify-center items-center z-20 absolute text-white">
          <motion.div
            className="w-[450px] h-auto bg-red-400 rounded-lg flex flex-col p-2"
            animate={
              showModal
                ? {}
                : {
                  opacity: [1, 0],
                }
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5],
              repeatDelay: 3,
            }}
          >

            {navigator.userAgent.indexOf("Chrome") > -1 ? (
              // {!true ? (
              <>
                <p className="text-white text-[24px] text-center pt-4 font-extrabold">
                Welcome to Genuine Cash Conversions, I am Maggie, let's have you brand visualized 
                </p>
                <p className="text-white text-[22px] text-center pt-4 pb-8">
                  Grab your headphones or tune that volume , Embark with us on a voyage through the digital marketing realm, where your narratives transform into impactful conversions.
                </p>
                <button
                  type="button"
                  className="inline-flex justify-center items-center px-6 py-3 font-bold leading-7 text-md shadow-lg rounded-lg text-white bg-red-300 hover:bg-zinc-900 transition ease-in-out duration-200"
                  onClick={handleBegin}
                ><p>Let's Ignite the Campaign</p>
                  {isLoadingPersona && (
                    <div className="p-l150">
                      <svg
                        className="animate-spin justify-right ml-3 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                  )}
                </button>
              </>
            ) : (
              <p className="text-white text-[20px] text-center font-inter">
                Please access the AI deck on Chrome
                Desktop.
              </p>
            )}
          </motion.div>
        </div>
      )}
      {isLimitReached && (
        <div className="w-full h-full flex flex-col justify-center items-center z-20 absolute ">
          <motion.div

            className="w-[500px] bg-zinc-700 flex flex-col justify-center items-center rounded-lg p-2"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            <p className="text-white text-xl">
              You've hit your SmarterChild message limit!
            </p>
            <p className="text-white text-center text-lg mt-4">
              Please enter your email address to keep chatting or stay updated:
            </p>
            <br />
            <input
              className="p-2 w-32 sm:w-64 h-6 border-2 border-black"
              value={mail}
              onChange={handleChangeEmail}
            ></input>
            <br />
            <button
              type="button"
              className="inline-flex justify-center items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-red-200 hover:bg-zinc-700 transition ease-in-out duration-150"
              onClick={onSaveEmail}
            >
              submit
            </button>
            <a
              className="text-white mt-4 underline"
              href="https://www.redu.com/portfolio"
            >
              Go to Website
            </a>
          </motion.div>
        </div>
      )}
      <Slider curPage={curPage} showSlide={showSlide} />
      <PersonaClient
        shouldStartPersona={shouldStartPersona}
        onLimitReached={onLimitReached}
        onReady={onReady}
        stateMachineControls={stateMachineControls}
        setCurPage={setCurPage}
        onShowEmail={() => { setShowEmail(true) }}
        onHideEmail={() => { setShowEmail(false) }}
      />
      {curPage == 1 && showSlide && (
        <Popup
          wait={6}
          gap={true}
          text1={'To navigate the deck, simply chat with Jenn.'}
          text2={'Ask for the next slide or skip around.'}
        />
      )}
      {curPage !== 1 && showSlide && (
        <Popup
          wait={16}
          text1={'Feel free to ask Jenn to elaborate'}
          text2={'on the contents of any slide.'}
        />
      )}
      <div className="absolute top-4 left-4 z-20 text-white">
        <p className="text-white text-[18px] text-center">
          {curPage}/9
        </p>
      </div>
      {showEmail && (
        <div className="w-full h-full flex flex-col justify-center items-center z-20 absolute ">
          <motion.div
            className="w-[300px] bg-zinc-700 flex flex-col justify-center items-center rounded-lg p-2 text-center pt-4"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-white text-xl">
              Click to send an email to Inaa.eth@gmail.com
            </p>
            <br />
            <button
              type="button"
              className="inline-flex justify-center items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-red-200 hover:bg-zinc-700 transition ease-in-out duration-150"
              onClick={() => window.location.href = "mailto:brian@sindarinventures.com"}
            >
              Get in touch
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
}

export default App;
