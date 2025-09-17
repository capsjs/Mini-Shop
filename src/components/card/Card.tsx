import type { FC } from "react";

import type { TCard } from "./card.types";

const Card: FC<TCard> = (props: TCard) => {
  const { children } = props;
  return (
    <div className="w-[113rem] h-90 rounded-lg bg-[#faf8f6]">{children}</div>
  );
};

export default Card;
