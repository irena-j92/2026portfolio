import React from "react";
import { Collapse } from "react-collapse";
import { Minus, Plus } from "lucide-react";

const Accordion = ({ open, toggle, title, description }) => {
  return (
    <div className="overflow-x-hidden sm:mx-10">
      <div
        className="py-[25px] flex justify-start cursor-pointer border-t border-[#333333]"
        onClick={toggle}
      >
        <div className="flex justify-between w-full">
          <h2 className="text-3xl font-[400] text-[#c4c4c4] hover hover:text-[#fafafa]">{title}</h2>
          <div className="text-2xl">{open ? <Minus className="text-[#c4c4c4]" /> : <Plus className="text-[#fafafa]" />}</div>
          </div>
      </div>

      <Collapse isOpened={open}>
        <div className="mb-10 text-[#c4c4c4] leading-normal">{description}</div>
      </Collapse>
    </div>
  );
};

export default Accordion;
