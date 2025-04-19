import * as React from "react";
import { CertificateCard } from "./CertificateCard";

export const CertificateSection: React.FC = () => {
  return (
    <section>
      <div className="flex items-stretch gap-[15px] text-xl text-[#1A011E] tracking-[-0.4px] leading-[1.3] mt-[45px] max-md:mt-10">
        <h2 className="grow font-bold">Certificate and license</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/e3ebdb78a99200607e0aa3ba8481fb70b23e7021?placeholderIfAbsent=true"
          alt=""
          className="aspect-[1] object-contain w-6 shrink-0"
        />
      </div>
      <div className="flex items-center gap-[40px_56px] flex-wrap mt-[7px] max-md:max-w-full">
        <CertificateCard
          title="Legal practice"
          dateIssued="12 May, 2024"
          fileSize="720 KB"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4bc4a9654ed6675761c451986fa5eeb71e2a0e94?placeholderIfAbsent=true"
        />
        <CertificateCard
          title="Legal practice"
          dateIssued="12 May, 2024"
          fileSize="720 KB"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/ef8a6764d6c3535df8bebb85ef7822fd8d0c8705?placeholderIfAbsent=true"
        />
        <CertificateCard
          title="Legal practice"
          dateIssued="12 May, 2024"
          fileSize="720 KB"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/86edd7b416353910ba2639801f72c1d3da93dc53?placeholderIfAbsent=true"
        />
      </div>
    </section>
  );
};
