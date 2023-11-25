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
          `grid justify-center items-center gap-2 w-full grid-cols-${
            columns | 4
          }`
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CardRow;
