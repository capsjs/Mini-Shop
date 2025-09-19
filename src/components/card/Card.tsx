import type { FC } from "react";

import type { TCard } from "./card.types";

const Card: FC<TCard> = (props: TCard) => {
  const { children, className } = props;
  return (
    <div
      className={`flex flex-col justify-center ${
        className ?? "w-60 h-60"
      } rounded-lg bg-[#faf8f6]`}
    >
      {children}
    </div>
  );
};

export default Card;
