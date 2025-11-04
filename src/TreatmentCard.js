import { Button } from "@mui/material";
import React from "react";

export const TreatmentCard = ({
  image,
  title,
  description,
  buttonVariant = "contained",
  buttonEnabled = true,
  className = "",
  titleClassName = "text-wrapper-2",
}) => {
  return (
    <div className={`treatment-card ${className}`}>
      {image && (
        <div className="element-wrapper">
          <img className="element-9" alt="Element" src={image} />
        </div>
      )}
      <div className="overlap-group-wrapper">
        <div className="overlap-group-2">
          {buttonEnabled ? (
            <Button color="primary" size="medium" variant={buttonVariant}>
              {title}
            </Button>
          ) : (
            <div className="rectangle-2" />
          )}
          <div className={titleClassName}>{title}</div>
        </div>
      </div>
      <div className="text-wrapper-3">
        {description}
      </div>
    </div>
  );
};