import * as React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  imageUrl: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  date,
  description,
  imageUrl,
}) => {
  return (
    <article className="relative flex w-full flex-col max-md:max-w-full">
      <div className="z-0 w-[173px] max-w-full">
        <div className="w-full text-[#1A011E]">
          <h3 className="text-xl leading-[1.3] tracking-[-0.4px] font-bold">
            {title}
          </h3>
          <div className="text-base tracking-[-0.32px]">{company}</div>
        </div>
        <div className="text-[#808080] text-sm leading-[1.3] tracking-[-0.28px] mt-1">
          {date}
        </div>
      </div>
      <div className="self-stretch text-[#1A011E] text-base leading-6 tracking-[-0.32px] z-0 mt-4 max-md:max-w-full">
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
      <img
        src={imageUrl}
        alt=""
        className="aspect-[1] object-contain w-6 absolute z-0 h-6 left-[140px] top-0"
      />
    </article>
  );
};
