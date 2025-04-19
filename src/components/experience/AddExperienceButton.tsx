import * as React from "react";

export const AddExperienceButton: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded bg-[#6B047C] z-10 gap-2.5 text-sm text-white tracking-[-0.28px] leading-[1.3] px-2.5 py-2 max-md:mr-[3px] hover:bg-[#5a0368] transition-colors"
    >
      Add a new experience
    </button>
  );
};
