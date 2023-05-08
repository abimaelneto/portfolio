import Image from "next/image";
import { skills } from "./skills";

export const Skills = () => {
  return (
    <div className="flex space-between w-full">
      {skills.map((skill) => (
        <div
          key={skill.title}
          className="flex flex-col justify-center items-center p-2 border-blue-300 border-4 border-solid"
        >
          <Image src={skill?.img} alt="" />
          <h6 className="text-2xl">{skill?.title}</h6>
          <p>{skill?.description}</p>
        </div>
      ))}
    </div>
  );
};
