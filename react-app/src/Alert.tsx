import { ReactNode, useState } from "react";
import Button from "./Button";

interface Props {
  children: ReactNode;
  alertActive: boolean;
  onClick: () => void;
}

const Alert = ({ children, alertActive, onClick }: Props) => {
  if (alertActive)
    return (
      <>
        <div className="alert alert-primary">
          {children}
          <div className="position-relative">
            <div className="position-absolute bottom-0 end-0">
              <Button onClick={onClick}>X</Button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Alert;
