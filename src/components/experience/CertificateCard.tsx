import * as React from "react";

interface CertificateCardProps {
  title: string;
  dateIssued: string;
  fileSize: string;
  imageUrl: string;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  dateIssued,
  fileSize,
  imageUrl,
}) => {
  return (
    <div className="self-stretch w-60 my-auto">
      <div className="w-[172px] max-w-full">
        <div className="text-[#1A011E] text-base tracking-[-0.32px]">
          {title}
        </div>
        <div className="text-[#808080] text-sm leading-[1.3] tracking-[-0.28px]">
          <span className="font-bold">Date Issued:</span> {dateIssued}
        </div>
      </div>
      <div className="justify-center items-stretch rounded bg-neutral-50 flex w-full flex-col text-[#808080] mt-2 p-2.5">
        <div className="flex w-full items-stretch gap-2">
          <img
            src={imageUrl}
            alt=""
            className="aspect-[1] object-contain w-8 shrink-0 my-auto"
          />
          <div>
            <div className="flex items-center gap-1 text-sm justify-center">
              <div className="text-[#1A011E] text-base tracking-[-0.32px] self-stretch my-auto">
                Certificate
              </div>
              <div className="font-normal leading-none self-stretch my-auto">
                •
              </div>
              <div className="leading-[1.3] tracking-[-0.28px] self-stretch my-auto">
                {fileSize}
              </div>
            </div>
            <div className="text-xs leading-[1.3] tracking-[-0.24px]">
              PDF FILE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
