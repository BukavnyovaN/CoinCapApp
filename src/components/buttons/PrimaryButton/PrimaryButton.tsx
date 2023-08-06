import React, { FC } from "react";
import { IPrimaryButton } from "./PrimaryButton.interface";
import "./PrimaryButton.scss";

const PrimaryButton: FC<IPrimaryButton> = ({ description, onClick }) => {
  return (
    <button className="button-primary" onClick={onClick}>
      {description}
    </button>
  );
};

export { PrimaryButton };
