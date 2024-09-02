import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Savings Plan"
        title="The save to invest system"
        invert
      >
        <p>
          Through Greater Kenya members will be able to save and not just save,
          but save to invest. Save to invest is a system that allows people to
          gather their savings and decide on a lucrative prospect to save in.
          Through the organization and its partners members will have access to
          better investment opportunities that would help with income
          generation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Empowerment through Financial Growth" invert>
            We believe in empowering our members by providing the tools and
            opportunities needed to grow their savings and invest in their
            future.
          </GridListItem>
          <GridListItem title="Community-Driven Success" invert>
            Our success is built on the collective strength of our members. We
            foster a supportive community where everyone works together toward
            shared financial goals.
          </GridListItem>
          <GridListItem title="Transparency and Trust" invert>
            We prioritize transparency in all our dealings, ensuring that our
            members trust us with their savings and investments every step of
            the way.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
