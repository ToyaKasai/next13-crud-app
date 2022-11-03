import { FC, ReactNode } from "react";
import classNames from "classnames";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={classNames("mx-auto w-full max-w-3xl px-6", className)}>
      {children}
    </div>
  );
};

export default Container;
