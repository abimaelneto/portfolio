const skills = [
  {
    title: "React",
    description:
      "Created by Facebook, my top-choice for the front end is definetely React, which is a library for writing components and reusing both UI and logic",
    icon: "",
  },
  {
    title: "Next.JS",
    description:
      "Either building a complete Typescript REST API or writing serverless functions, Node.JS is my top-choice by to productivity and performance reasons",
    icon: "",
  },
  {
    title: "Redux",
    description:
      "Either building a complete Typescript REST API or writing serverless functions, Node.JS is my top-choice by to productivity and performance reasons",
    icon: "",
  },
  {
    title: "Vue",
    description:
      "Created by Facebook, my top-choice for the front end is definetely React, which is a library for writing components and reusing both UI and logic",
    icon: "",
  },
  {
    title: "Nuxt",
    description:
      "Created by Facebook, my top-choice for the front end is definetely React, which is a library for writing components and reusing both UI and logic",
    icon: "",
  },
  {
    title: "Node.js",
    description:
      "Either building a complete Typescript REST API or writing serverless functions, Node.JS is my top-choice by to productivity and performance reasons",
    icon: "",
  },
  {
    title: "Firebase",
    description:
      "Either building a complete Typescript REST API or writing serverless functions, Node.JS is my top-choice by to productivity and performance reasons",
    icon: "",
  },
  {
    title: "Docker",
    description:
      "Either building a complete Typescript REST API or writing serverless functions, Node.JS is my top-choice by to productivity and performance reasons",
    icon: "",
  },
  {
    title: "Nest.JS",
    description:
      "Either building a complete Typescript REST API or writing serverless functions, Node.JS is my top-choice by to productivity and performance reasons",
    icon: "",
  },
  {
    title: "GraphQL",
    description: "The Graph Query Language is ",
    icon: "",
  },
];
export const Skills = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col justify-center items-center my-4">
        <h4 className="font-gruppo text-6xl my-4  text-secondary">Skills</h4>
        <h6 className="font-quatro w-3/4 text-2xl text-secondary-light text-center">
          Languages, frameworks, tools I've been using to build the best web
          apps for my clients.
        </h6>
      </div>
      <div className="grid grid-cols-3 mx-4">
        {skills.map((skill) => (
          <div className="flex flex-col p-2  mx-10 my-2  text-white hover:text-secondary transition duration-500 ">
            <div className="font-days text-secondary-light">{skill.title}</div>
            <div className="text-inherit">{skill.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
