import { ExperienceCard } from "@/components/ExperienceCard/index.jsx";

const projects = [
  {
    title: "U-Get",
    img: "",
    description: "A company",
    year: "2020-2021",
    duration: "6 months",
  },
  {
    title: "Kidos",
    img: "",
    description: "",
    year: "2021",
    duration: "4 months",
  },
];

export const Experience = () => {
  return (
    <section className="flex flex-col w-screen bg-gray-700 justify-center items-center py-6">
      <h3>Experience</h3>
      <div className="flex w-9/12 items-center justify-center text-blue-200 bg-blue-800">
        {projects.map((p) => (
          <ExperienceCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};
