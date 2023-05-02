export const Card = ({ title, subtitle, index, icon, description }) => {
  return (
    <div className="flex items-center justify-start">
      <p className="text-primary w-1/2 ">{index + 1}</p>
      <div className="flex flex-col my-6 ">
        <h4 className="text-xl">{title}</h4>
        <h6 className="text-md">{subtitle}</h6>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
};
