import TabComponent from "./TabComponent";
import TabContent from "./TabContent";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { MdOutlineAssistant } from "react-icons/md";
import { MdOutlineDiversity1 } from "react-icons/md";
import { RiVipCrown2Line } from "react-icons/ri";
import { RiVipDiamondLine } from "react-icons/ri";
import "./../app/globals.css";

export default function Membership() {
  const tabs = [
    {
      title: "Basic Membership",
      id: "basicmembership",
      icon: <MdOutlineAssistant />,
      color: "#ff6f61",
      content: TabContent,
      destinations: [
      {
        name: "White Card",
        items: ["Partial medical NHIF support", "Partially paid event attendance", "Access to loans after one year of membership", "Business Support", "Emergency Support", "Job opportunities"],
        image: "https://res.cloudinary.com/dtnbwgpca/image/upload/v1722202863/Cooloors/liquid-purple-art-painting-abstract-colorful-background-with-color-splash-paints-modern-art_ufs8kt.jpg",
      },
    ],
    },
    {
      title: "Foundation Series X",
      id: "foundationseriesx",
      icon: <MdOutlineDiversity1 />,
      color: "#113BD4",
      content: TabContent,
      destinations: [
      {
        name: "Blue Card",
        items: ["Zero monthly membership fee from 2025", "Full/partial NHIF medical support for the member and immediate family", "Free/partially paid event attendance", "Access to loans after 6 months of membership", "10% incentive on savings annually","Legal support"],
        image: "https://res.cloudinary.com/dtnbwgpca/image/upload/v1722202863/Cooloors/liquid-purple-art-painting-abstract-colorful-background-with-color-splash-paints-modern-art_ufs8kt.jpg",
      },
    ],
    },
    {
      title: "Foundation Series",
      id: "foundation series",
      icon: <RiVipCrown2Line />,
      color: "#000000",
      content: TabContent,
      destinations: [
      {
        name: "Black Card",
        items: ["No monthly membership payment", "Full medical NHIF cover ", "Full/partial medical NHIF or direct cover for the member's direct family","Immediate access to loans", "20% incentive on savings annually" ,"Free event attendance"],
        image: "https://res.cloudinary.com/dtnbwgpca/image/upload/v1722202863/Cooloors/liquid-purple-art-painting-abstract-colorful-background-with-color-splash-paints-modern-art_ufs8kt.jpg",
      },
    ],
    },
    {
      title: "Exclusive Access",
      id: "exclusiveaccess",
      icon: <RiVipDiamondLine />,
      color: "#ffd700",
      content: TabContent,
      destinations: [
      {
        name: "Gold Card",
        items: ["The golden card is a special card only given to those fortunate enough to become employees at Greater Kenya. Working for the organization can be a very pleasant experience and a chance to enhance one's skills."],
        image: "https://res.cloudinary.com/dtnbwgpca/image/upload/v1722202863/Cooloors/liquid-purple-art-painting-abstract-colorful-background-with-color-splash-paints-modern-art_ufs8kt.jpg",
      },
    ],
    },
  ];

  return (
    <div id="root">
      <Container className="mt-16 sm:mt-24">
        <FadeIn className="w-full">
          <h1 className="font-display text-center text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            <span className="mb-6 block tracking-wider text-center font-display text-base font-semibold text-black">Our Membership Plans</span>
            Whatever you are passionate about is what our focus is on
          </h1>
          <p className="mt-6 mb-8 text-xl text-center text-neutral-600">
            We offer lucrative membership packages with our aim being that every member in the Organisation benefits.
The agenda is to create a safe zone where our members can feel free to express their potential and become the best version of themselves.
          </p>
        </FadeIn>
      </Container>
      <TabComponent tabs={tabs} />
    </div>
  );
}