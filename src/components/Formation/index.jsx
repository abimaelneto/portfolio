import { formation } from "./formation";

export const Formation = () => {
  return (
    <>
      <div className="flex flex-col gap-4 h-full w-full">
        <h3 className="text-4xl font-alfa">Formation</h3>
        {formation.map((f) => (
          <div className="flex flex-col ">
            <h4 className="text-2xl  text-secondary">{f.title}</h4>
            <h6 className="text-xl">{f.where}</h6>
            <p className="">{f.when}</p>
          </div>
        ))}
      </div>
    </>
  );
};
