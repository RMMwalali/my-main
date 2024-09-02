import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import { TagList, TagListItem } from "./TagList";

const Build = () => {
  return (
    <Section title="Foundation Series X" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 mb-4 text-base text-neutral-600">
        <p>
          The{" "}
          <strong className="font-semibold text-neutral-950">Blue Card </strong>
          is an exclusive card for members who join in the phase two stage of
          Greater Kenya which is in{" "}
          <strong className="font-semibold text-neutral-950">
            January 2024{" "}
          </strong>
          . These members play a key role in shaping the structure and presence
          of the organisation. They are a key part of the foundation of the
          organization and are privileged to be called founding members X.
          Holders of these card get the last exclusive benefits.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this membership
      </h3>
      <TagList className="mt-4">
        <TagListItem>Zero membership fee from 2025</TagListItem>
        <TagListItem>
          NHIF medical support for members and immediate family
        </TagListItem>
        <TagListItem>Free/partially paid event attendance</TagListItem>
        <TagListItem>Access to loans after 6 months of membership</TagListItem>
        <TagListItem>10% incentive on savings annually</TagListItem>
        <TagListItem>Legal support</TagListItem>
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

export default Build;
