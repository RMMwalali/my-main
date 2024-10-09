import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Projects",
    links: [
      { title: "A Seamless Education Payment System", href: "/projects" },
      { title: "Developing Tree Conservation Zones", href: "/projects" },
      { title: "A Digital Waste Management System", href: "/projects" },
      {
        title: (
          <>
            Learn More <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/projects",
      },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
  {
    title: "Company",
    links: [
      { title: "Loans", href: "/loans" },
      { title: "Careers", href: "/careers" },
      { title: "Savings", href: "/savings" },
      { title: "Memberships", href: "/memberships" },
    ],
  },
];
