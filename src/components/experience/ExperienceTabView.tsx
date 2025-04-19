import * as React from "react";
import { AddExperienceButton } from "./AddExperienceButton";
import { ExperienceCard } from "./ExperienceCard";
import { CertificateSection } from "./CertificateSection";

export const ExperienceTabView: React.FC = () => {
  const handleAddExperience = () => {
    // Implement add experience functionality
    console.log("Add new experience clicked");
  };

  return (
    <div className="flex max-w-[856px] flex-col overflow-hidden items-stretch font-medium">
      <AddExperienceButton onClick={handleAddExperience} />

      <ExperienceCard
        title="Legal Adviser"
        company="Emperor Legal services"
        date="26th Oct, 2023 - Present"
        description={`Provided strategic legal counsel to senior management on corporate governance, mergers and acquisitions, and commercial transactions.
Drafted, negotiated, and reviewed contracts with suppliers, partners, and clients.
Conducted due diligence on potential business partners and acquisitions.
Managed disputes and litigation, utilizing alternative dispute resolution methods.
Ensured regulatory compliance, implementing risk management strategies.`}
        imageUrl="https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/deb9a7a126d8796d62a51dffd9efe091da97136e?placeholderIfAbsent=true"
      />

      <div className="border bg-[#E6E6E6] w-full shrink-0 h-px mt-3.5 border-[rgba(230,230,230,1)] border-solid" />

      <ExperienceCard
        title="Legal Adviser"
        company="Emperor Legal services"
        date="26th Oct, 2023 - Present"
        description={`Provided strategic legal counsel to senior management on corporate governance, mergers and acquisitions, and commercial transactions.
Drafted, negotiated, and reviewed contracts with suppliers, partners, and clients.
Conducted due diligence on potential business partners and acquisitions.
Managed disputes and litigation, utilizing alternative dispute resolution methods.
Ensured regulatory compliance, implementing risk management strategies.`}
        imageUrl="https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/650f252e038572943c37801d62824c761e584cf0?placeholderIfAbsent=true"
      />

      <CertificateSection />
    </div>
  );
};

export default ExperienceTabView;
