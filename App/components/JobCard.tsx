import React from "react";
import Button from "./Button";

const JobCard = ({name, price, description, company, city}) => {
  return (
    <div className="rounded-md border border-gray-300 p-4 drop-shadow-sm flex flex-col gap-2 items-start">
      <div>
        <h1 className="font-semibold">{name}</h1>
        <h1>до {price} руб.</h1>
      </div>
      <p>{description}
      </p>
      <div>
        <div className="font-bold">КА &quot;{company}&quot;</div>
        <div>{city}</div>
      </div>
      <Button>Откликнуться</Button>
    </div>
  );
};

export default JobCard;
