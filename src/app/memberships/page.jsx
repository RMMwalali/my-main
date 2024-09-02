import React from "react";
import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import Golden from "@/components/Golden";

const ProcessPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our Memberships"
        title="That impact you and your family directly or indirectly"
      >
        <p>
          We offer lucrative membership packages with our aim being that every
          member in the Organisation benefits. The agenda is to create a safe
          zone where our members can feel free to express their potential and
          become the best version of themselves.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
        <Golden />
      </div>
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
