import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Projects",
    links: [
      { title: "A Seamless Education Payment System", href: "/work/amazonclone" },
      { title: "Developing Tree Conservation Zones", href: "/work/bazar" },
      { title: "A Digital Waste Management System", href: "/work/blog101" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Home", href: "/about" },
      { title: "Memberships", href: "/process" },
      { title: "Projects", href: "/blog" },
      { title: "Loans, Savings & Subsidiaries", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
