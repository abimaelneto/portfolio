import Image from "next/image";
import { skills } from "./skills";

export const Skills = () => {
  return (
    <>
      <h2 className="text-4xl text-center">Skills</h2>
      <div className="flex space-between w-full overflow-y-scroll overflow-x-hidden flex-wrap h-full">
        {skills.map((skill) => (
          <div key={skill.title} className="p-4  w-1/3  ">
            <a href={skill.link}>
              <div className="p-4 bg-[rgba(0,0,0,0.1)] rounded-2xl flex flex-col justify-center items-center w-full h-full duration-300 hover:bg-[rgba(0,0,0,0.3)]">
                <Image src={skill?.img} alt="" width="auto" height="100" />
                <h6 className="text-2xl">{skill?.title}</h6>
                <p>{skill?.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
