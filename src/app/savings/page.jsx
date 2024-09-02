import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Savings"
        title="We want to foster a culture of saving within our members"
      >
        <p>
          There has been a rapid decline on savings among young people. This has
          been brought about majorly by easily accessible loans, peer pressure
          on spending and inflation.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Easy access to loans and a poor spending culture have made more
            people to be in debt than break even. It is important to note that
            lack of job opportunities and revenue generating activities have
            also played a key role in unstable finances among young people.
          </p>
          <p>
            It is not mandatory for a member to invest although it is
            recommended for a better financially stable future for each person.
            Savings will be done monthly and reviewed annually at the end of the
            year. Depending on a member's membership card, they may get
            incentives on their savings meaning the organization will boost
            their savings with an extra amount to encourage a healthy saving
            culture.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="3x" label="Faster Savings Growth" />
          <StatListItem value="$5 Million" label="in Total Member Savings" />
          <StatListItem
            value="85%"
            label="of Members Achieve Their Savings Goals"
          />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
