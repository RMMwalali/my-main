import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import { TagList, TagListItem } from "./TagList";

const Deliver = () => {
  return (
    <Section title="Basic Membership" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The{" "}
          <strong className="font-semibold text-neutral-950">
            White Card{" "}
          </strong>{" "}
          is a universal card offered to members who join the organisation{" "}
          <strong className="font-semibold text-neutral-950">
            after stage two{" "}
          </strong>
          . Holders of this card still get membership benefits although not to
          the same degree as the other cards. Members with this card are a key
          resource to the organisation as they challenge the organisation to
          achieve more and gain higher grounds as compared to other
          organisations.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this membership
      </h3>
      <TagList className="mt-4">
        <TagListItem>Partial NHIF medical support</TagListItem>
        <TagListItem>Partially paid event attendance</TagListItem>
        <TagListItem>Access to loans after one year of membership</TagListItem>
        <TagListItem>Business support</TagListItem>
        <TagListItem>Emergency support</TagListItem>
        <TagListItem>Job opportunities</TagListItem>
        <TagListItem>Paid volunteer activities</TagListItem>
        <TagListItem>Save to invest access</TagListItem>
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

export default Deliver;
