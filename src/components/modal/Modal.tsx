import type { FC } from "react";
import type { TModal } from "./modal.types";

export const Modal: FC<TModal> = (props) => {
  const { children, isOpen, onClose, width = "w-3/4" } = props;

  return (
    isOpen && (
      <div className="h-screen w-screen bg-black/50 absolute left-0 top-0 bottom-0 z-50 flex justify-center items-center">
        <div className={`${width} bg-[#faf8f6] rounded-lg`}>
          <section onClick={onClose}>{children}</section>
        </div>
      </div>
    )
  );
};
