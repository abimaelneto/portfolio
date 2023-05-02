export const ExperienceCard = ({ title, description, year, duration }) => {
  return (
    <div className="flex flex-col bg-gray-800 mx-4 justify-start">
      <h6>{title}</h6>
      <p>{description}</p>
      <p>{year}</p>
      <p>{duration}</p>
    </div>
  );
};
