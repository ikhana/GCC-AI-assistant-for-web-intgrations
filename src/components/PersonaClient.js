import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const pageDescriptions = {
  '1': `The landing screen displays the phrase "Content Marketing Agency for Impactful Brands" in a bold, eye-catching font, underscored by the tagline: "Genuine Conversations Cash" in an elegant, subtler type. The aesthetic of the page radiates both confidence and approachability.`,
  
  '2': `On the left side of the slide, the textual content unfolds a compelling narrative: "Your Narratives, Amplified." Subsequent text embarks on a journey from "A Subtle Whisper Can Echo Across the Digital Realm" to "GCC Bridges Your Stories to the World," concluding with "Amplifying Impact, Engaging Authentically." The right side portrays a vibrant image, symbolizing the transformative power of narratives in digital marketing, where brands morph into resonant stories under GCC's expertise.`,
  
  '3': `Boldly declared at the top is: "Engaging Conversations, Elevated Connections." The textual content below delineates: "From Memes to Engaging Narratives," "Tailored Messaging, Amplified Impact," "Approachable Conversations, Memorable Impressions," and "Converting Engagements into Genuine Connections," revealing the essence of GCC’s approach to establishing authentic digital dialogues. Visual aids symmetrically arranged below depict scenarios from whimsical meme interactions to insightful, impact-driven narratives, showcasing the transformative journey from engagement to genuine connections in the digital marketing realm.`,
  
  '4': `Topmost, a vibrant declaration announces: "We Unlock the Good in Your Brand." A cascade of insightful bullet points ensue: "Showcasing Your Authentic Self," "Identifying and Amplifying Your Values," and "Ensuring Your Target Market Sees, Relates, and Chooses You Repeatedly," explicating GCC's commitment to revealing and magnifying the intrinsic worth of brands. The visual representation below splits into two portions: the left unveils aspects of authenticity and values amplification, while the right eloquently brings forth visuals of relatable narratives and ensured choices through vibrant and thematic images (avatar1 to avatar4). A background gently illuminates the entirety, binding text and visuals into a harmonious tableau of brand revelation and connection.`,
  
  '5': `Emphasizing the commencement of a brand’s journey, the header boldly declares: "Begin Your Journey with a Free Consultation." Below, a succinct two-liner unfolds our methodology: "We Audit, Strategize, and Navigate Your Brand" and "To Peaks Yet Unseen," framing our commitment to elevate brands to their zenith. Adjacently, a visual on the right narrates a brand's journey through distinctive stages: Audit, Strategy, and Creation, each node illuminating the path toward unparalleled brand heights. The backdrop uniformly blankets the content, ensuring cohesiveness while not overpowering the critical messages conveyed through text and visual.`,
  
  '6': `Navigating through the stratified layers of our methodology, the header prompts the user to "Dive Deep into Our Process." Each bullet point then sequentially elucidates our approach: "Audit - Analyzing Your Current Digital Persona," "Strategy - Aligning Your Aspirations with Actionable Plans," "Creation - Crafting Content that Resonates," and "Optimization - Ensuring Maximum Impact and Reach." The visual background (to be added or adjusted) should metaphorically and visually translate the progressive, structured, and deep-dive nature of our methodology, offering a visual narrative that aligns with the depth and structured approach encapsulated in the textual content.`,
  
  '7': `Meet the Team behind Your Brand's Upliftment. The header introduces: "Meet the GCC Team, Your Allies in this Expedition." Below, a carousel of team members is showcased, with brief snapshots into their expertise, passion, and the zeal they bring into amplifying your brand's story.`,
  
  '8': `The header declares "Your Success is Our Story." Bullet points affirm our claim with facts: "Delivering Impact Across Various Niches,"\n"Transforming Brands into Community Pillars,"\n"Ensuring Your Narrative is Heard, Seen, and Felt." Accompanying visuals depict thriving brands and vibrant communities interwoven by authentic, compelling stories.`,
  
  '9': `On this page, "Schedule Now" is the clear, actionable header, followed by our CTA: "We've navigated the valleys and peaks of content marketing"\n"And are Here to Guide You to Your Summit."\n"Begin Your Journey Now - Let's Create, Converse, and Convert Together!" The visual ambiance is welcoming yet forward, inspiring action.`
}


const PersonaClient = (props) => {
  const [personaClient, setPersonaClient] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [didSetListeners, setDidSetListeners] = useState(false);
  const [didStartPersona, setDidStartPersona] = useState(false);

  useEffect(() => {
    console.log("loading persona client");
    const script = document.createElement("script");
    script.src =
      "https://api.sindarin.tech/PersonaClientPublic?apikey=4e032688-b83b-4322-abdc-1d146566023b";

    script.addEventListener("load", async () => {
      console.log("persona client loaded");
      const apiKey = "4e032688-b83b-4322-abdc-1d146566023b";
      const personaClient = new window.PersonaClient(apiKey);
      setPersonaClient(personaClient);
    });
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (personaClient && isReady && !didSetListeners) {
      personaClient.on("user_speech_started", () => {
        // console.log('user_speech_started')
        // handleEvent('Listening');
      });

      personaClient.on("user_speech_ended", () => {
        // console.log('user_speech_ended')
        // handleEvent('Thinking');
      });

      personaClient.on("ai_speech_started", () => {
        // console.log('ai_speech_started')
        // handleEvent('Speaking');
      });

      personaClient.on("ai_speech_stopped", () => {
        // console.log('ai_speech_stopped')
        // handleEvent('Idle');
      });

      personaClient.on("connect_error", (error) => {});
      personaClient.on("disconnected", () => {});
      personaClient.on("json", ({ detail }) => {
        if (detail.transcription) {
          return;
        }
        // console.log('json', detail);

        if (detail.gotoPage) {
          props.setCurPage([Number(detail.gotoPage)]);
          personaClient.updateState({
            pageDescription: pageDescriptions[detail.gotoPage] || '',
            currentPage: detail.gotoPage
          });
        }
        console.log('detail', detail)
        if (Object.keys(detail).includes("showEmail")) {
          if (detail.showEmail === 'true') {
            props.onShowEmail();
          } else {
            props.onHideEmail();
          }
        }

        if (detail.message_limit_reached) {
          props.onLimitReached();
        }
      });

      setDidSetListeners(true);
    }
  }, [personaClient, props.onLimitReached, isReady, didSetListeners]);

  // startPersona function
  useEffect(() => {
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

    if (personaClient && props.shouldStartPersona && !didStartPersona) {
      setDidStartPersona(true);
      console.log("starting persona client");
      const character = "Maggie";
      getUserID().then((userId) => {
        personaClient
          .init(userId, character)
          .then(() => {
            console.log("personaClient initialized");
            personaClient.on("ready", () => {
              props.onReady();
              setIsReady(true);
            });
          })
          .catch((err) => {
            console.log("personaClient init error", err);
            if (/You have/gi.test(err)) {
              props.onLimitReached();
            }
          });
      });
    }
  }, [
    personaClient,
    props.shouldStartPersona,
    props.onReady,
    didStartPersona,
    props.onLimitReached,
  ]);

  return null; // or return UI elements if needed
};

export default PersonaClient;
