import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section
      title="Foundation Series"
      image={{ src: imageWhiteboard, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The{" "}
          <strong className="font-semibold text-neutral-950">
            Black Card{" "}
          </strong>
          is an exclusive card that is reserved for founding members who joined
          the organisation in
          <strong className="font-semibold text-neutral-950">
            {" "}
            April 2023{" "}
          </strong>
          when the organisation was at its infacy.
        </p>
        <p>
          These members have managed to maintain patience and dedication. They
          have been key players in helping shape the future of the organisation.
          The holders of this card get
          <strong className="font-semibold text-neutral-950">
            {" "}
            exclusive benefits{" "}
          </strong>
          in accordance to their commitment to the organisation.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this membership
      </h3>
      <TagList className="mt-4">
        <TagListItem>
          Full medical NHIF cover for emergencies or chronic illness
        </TagListItem>
        <TagListItem>
          Medical cover for family members in emergencies
        </TagListItem>
        <TagListItem>Immediate access to loans</TagListItem>
        <TagListItem>20% incentive on savings annually</TagListItem>
        <TagListItem>Free event attendance</TagListItem>
        <TagListItem>Legal support</TagListItem>
        <TagListItem>Business support</TagListItem>
        <TagListItem>Emergency support</TagListItem>
        <TagListItem>Job opportunities</TagListItem>
        <TagListItem>Paid volunteer activities</TagListItem>
        <TagListItem>Save to invest opportunities</TagListItem>
        <TagListItem>Skill development and support</TagListItem>
        <TagListItem>Education support</TagListItem>
        <TagListItem>Investment opportunities</TagListItem>
        <TagListItem>Leadership roles in the organization</TagListItem>
        <TagListItem>Networking opportunities</TagListItem>
        <TagListItem>Sponsorships</TagListItem>
        <TagListItem>Travel and tour opportunities</TagListItem>
        <TagListItem>Innovation support</TagListItem>
        <TagListItem>
          Access to charity and community growth activities
        </TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
