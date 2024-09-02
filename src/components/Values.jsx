import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Termination of Membership"
        title="Several factors that may lead to termination of membership"
      ></SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Rule Violations">
            Any breach of established rules or guidelines that undermines the
            integrity of the organization will not be tolerated.
          </GridListItem>
          <GridListItem title="Ethical Misconduct">
            Actions that violate ethical standards or demonstrate a lack of
            moral integrity are grounds for serious repercussions.
          </GridListItem>
          <GridListItem title="Failure to Fulfill Obligations">
            Neglecting responsibilities or failing to meet agreed-upon
            commitments weakens the organization&#39;s foundation.
          </GridListItem>
          <GridListItem title="Inconsistent Actions with Mission/Values">
            Behaviors or decisions that do not align with the organization&#39;s
            core mission and values are unacceptable.
          </GridListItem>
          <GridListItem title="Non-Payment of Dues">
            Failure to pay membership dues disrupts the financial stability and
            collective effort of the organization.
          </GridListItem>
          <GridListItem title="Breach of Confidentiality">
            Unauthorized disclosure of sensitive information violates trust and
            compromises the organization’s security.
          </GridListItem>
          <GridListItem title="Criminal Activities">
            Engaging in illegal activities is strictly prohibited and will
            result in immediate disciplinary action.
          </GridListItem>
          <GridListItem title="Unethical Behavior">
            Conduct that lacks integrity or fairness is not tolerated and
            reflects poorly on the organization.
          </GridListItem>
          <GridListItem title="Misuse of Funds">
            Any inappropriate or unauthorized use of organizational funds is a
            serious violation of trust and responsibility.
          </GridListItem>
          <GridListItem title="Conflict of Interest">
            Participating in activities or decisions where personal interests
            conflict with the organization’s goals is prohibited.
          </GridListItem>
          <GridListItem title="Failure to Attend Meetings">
            Consistent absenteeism from required meetings hinders communication
            and the collective decision-making process.
          </GridListItem>
          <GridListItem title="Disruptive Behavior">
            Actions that disrupt the order, harmony, or functioning of the
            organization are unacceptable.
          </GridListItem>
          <GridListItem title="Lack of Commitment">
            A demonstrated lack of dedication or engagement with the
            organization&#39;s activities weakens the collective effort.
          </GridListItem>
          <GridListItem title="Discrimination or Harassment">
            Any form of discrimination or harassment is strictly prohibited and
            will result in severe consequences.
          </GridListItem>
          <GridListItem title="Defamation of the Organization">
            Spreading false or damaging statements about the organization harms
            its reputation and will not be tolerated.
          </GridListItem>
          <GridListItem title="Non-Compliance with Policies">
            Failing to adhere to established policies and procedures undermines
            the organization’s operations.
          </GridListItem>
          <GridListItem title="Insubordination">
            Refusing to follow directives or showing a lack of respect for
            authority within the organization is unacceptable.
          </GridListItem>
          <GridListItem title="Lack of Contribution or Participation">
            A consistent failure to contribute to or engage in organizational
            activities impacts the group&#39;s effectiveness.
          </GridListItem>
          <GridListItem title="False Representation of the Organization">
            Misrepresenting the organization or falsely speaking on its behalf
            damages its credibility and integrity.
          </GridListItem>
          <GridListItem title="Continuous Non-Engagement">
            Persistently avoiding participation or involvement in organizational
            matters weakens the collective mission.
          </GridListItem>
        </GridList>
        <p className="font-display leading-loose font-semibold text-black m-6 mt-12 text-lg pt-5">
          Greater Kenya hopes that it would never have to terminate a member but
          there are various factors that will be considered in order to maintain
          the brand&#39;s reputation. It&#39;s important that each member obliges to the
          policies of the Organization. Termination will also lead to the
          termination of the member&#39;s organisation ID number and card validity.
        </p>
      </Container>
    </div>
  );
};

export default Values;
