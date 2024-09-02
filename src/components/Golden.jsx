import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import { TagList, TagListItem } from "./TagList";

const Build = () => {
  return (
    <Section title="Foundation Series X" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 mb-4 text-base text-neutral-600">
        <p>
          The{" "}
          <strong className="font-semibold text-neutral-950">
            Golden Card{" "}
          </strong>{" "}
          is a special card only given to those fortunate enough to become
          <strong className="font-semibold text-neutral-950">
            {" "}
            employees{" "}
          </strong>
          at Greater Kenya. Working for the organization can be a very pleasant
          experience and a chance to enhance one&#39;s skills.
        </p>
      </div>
    </Section>
  );
};

export default Build;
