import classNames from "classnames";
import React, { FC } from "react";

type Props = {
  columns: number;
  children: any;
};

const CardRow: FC<Props> = ({ columns, children }) => {
  return (
    <div className="w-full p-5">
      <div
        className={classNames(
          `grid justify-center items-center gap-5 w-full grid-cols-${
            columns ? columns : 2
          }`
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CardRow;
