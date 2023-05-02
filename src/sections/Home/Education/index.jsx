import { Card } from "./Card/index.jsx";

const education = [
  {
    title: "Tecnologist in Systems Analysys and Development ",
    subtitle: "Pontifícia Universidade Católica",
    description:
      "A undergraduate course that combines introductory courses on many topics such as, and also provides deep understanding of modern topics, such as Big Data and Cloud Computing",
    years: "2021-Current",
  },
  {
    title: "Tecnologist in Systems Analysys and Development ",
    subtitle: "Pontifícia Universidade Católica",
    description: "",
    years: "2020-",
  },
];

export const Education = () => {
  return (
    <section className="flex w-screen bg-grey-200 justify-between">
      <div className=" w-1/2">img</div>
      <div className="flex flex-col w-1/2 bg-brown-200 justify-center">
        <h3>Education</h3>

        <div className="flex flex-col">
          {education.map((e, index) => (
            <Card key={e.title} index={index} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
};
