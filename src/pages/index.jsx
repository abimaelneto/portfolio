import { ExperienceCard } from "@/components/ExperienceCard/index.jsx";
import { Education } from "@/sections/Home/Education/index.jsx";
import { Experience } from "@/sections/Home/Experience/index.jsx";
import { Skills } from "@/sections/Home/Skills/index.jsx";

// import Test from "../assets/animations/";
import Gradient1 from "@/assets/vectors/gradient1.jsx";
import { GradientSmall } from "@/assets/vectors/gradientSmall.jsx";
import { Test } from "@/assets/vectors/test.jsx";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex w-screen bg-gray-100 justify-center align-center">
        <h3>Habilities</h3>
      </section>
      {/* <Experience /> */}

      {/* <div className=" h-96 bg-red-800 relative">
        <div className="min-h-full min-w-full bg-blue-800 opacity-20 absolute"></div>
        <div className="flex flex-col justify-center items-center p-2 bg-blue-500 h-100 w-100">
          <h1>test</h1>
          <h6>estasd</h6>
        </div>
        <div className="bg-blue-800 absolute h-px-1000 w-100">
          <iframe
            src="https://giphy.com/embed/ITRemFlr5tS39AzQUL"
            className="giphy-embed"
            style={{ width: "100%", height: "100%" }}
            allowFullScreen
          />
        </div>
      </div> */}

      <Education />
      <div className=" flex flex-col w-100 relative overflow-hidden">
        {/* <Test className=" absolute" /> */}
        {/* <GradientSmall className="absolute left-0 w-100" /> */}
        <Skills className="flex flex-col justify-center items-center bg-gradient-to-br from-primary  from-50% to-[140%] to-secondary-light" />

        <Skills className="flex flex-col justify-center items-center  bg-cover bg-right-bottom bg-[url('/gradient-1.svg')]" />
      </div>
    </div>
  );
}
