import Image from "next/image";
import logoLeaders from "../images/subsidiaries/leaderboard.svg";
import logoEntrepreneur from "../images/subsidiaries/money-bag-outline.svg";
import logoEnvironmentalists from "../images/subsidiaries/crop-growth.svg"
import logoHealthMentalWellbeing from "../images/subsidiaries/mental-health-line.svg"
import logoCharity from "../images/subsidiaries/pay-money.svg"
import logoAdventures from "../images/subsidiaries/location-search.svg"
import logoEducation from "../images/subsidiaries/book-reader.svg"
import logoTalents from "../images/subsidiaries/profile-search.svg"
import logoAgriculture from "../images/subsidiaries/agriculture-outline-rounded.svg"
import logoInnovation from "../images/subsidiaries/data-enrichment-add.svg"
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const subsidiaries = [
  ["GK Entrepreneurs", logoEntrepreneur, "Focuses on people with a business mindset, ideas and skills. Members in this group can share ideas and strategies in entrepreneurship and get support from the organization to make their ideas a reality."],
  ["GK Leaders", logoLeaders, "Focuses on members with the ambition and skills to lead. This brings together great minds to shape the future of leadership both within and outside the organization."],
  ["GK Environmentalists", logoEnvironmentalists, "Brings together great minds that wish to combat climate crisis and offer sustainable solutions. Fighting a key issue in the world by coming up with solutions and the organization creating a support system to help."],
  ["GK Health and Mental Well-being", logoHealthMentalWellbeing, "Focusing on health issues and factors to create a more healthy lifestyle. Tackling mental health issues and helping affected individuals to feel relieved from stress."],
  ["GK Charity", logoCharity, "Specialized for members passionate in giving back to the community and helping people undergoing difficulties in life. Members can come up with charity activities and request financial backup from the organization."],
  ["GK Adventures", logoAdventures, "Embracing the natural beauty of Kenya by travelling to various destinations.The organization will subsidize tours and events to make them more affordable and accessible to many members."],
  ["GK Education", logoEducation, "Creating a productive education programme that can help make learing more fun and interactive. Aiming to help learners choose the right career path."],
  ["GK Talents", logoTalents, "Focusing on naturing great talents and helping members monetize their skills and abilities. Helping members realize their talents and hobbies."],
  ["GK Agriculture", logoAgriculture, "Bringing back a productive farming culture with sustainable, technological and lucrative systems."],
  ["GK Innovation", logoInnovation, "Support innovative ideas and passions. Accessing funding for promising ideas and encouraging critical thinking to help solve problems."],
];



const Subsidiaries = () => {
  return (
    <div className="mt-8 bg-black py-10 sm:mt-6 sm:py-12 lg:mt-0">
      <Container>
        <FadeIn className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Heading Section */}
          <div className="w-full md:w-1/2">
            <h1 className="font-display text-4xl font-medium tracking-tight text-white sm:text-6xl">
              Our Subsidiaries
            </h1>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 text-left md:text-right">
            <p className="text-xl text-justify text-gray-200">
              Greater Kenya Organisation offers diversification in its portfolio to cater for each and every member. Members may join these subsidiaries after obtaining membership and can therefore venture into what they are really passionate about within the framework of operation.
            </p>
          </div>
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            {subsidiaries.map(([client, logo, description]) => (
              <li key={client} className="flex flex-col items-center space-y-2">
                <FadeIn className="">
                  <div className="flex flex-col items-left justify-between">
                    {/* Responsive Image */}
                    <Image src={logo} alt={`${client} logo`} className="w-20 h-20" />
                    {/* Responsive Title */}
                    <span className="text-lg font-semibold underline text-gray-200 underline-offset-8 decoration-2">{client}</span>
                    {/* Description */}
                    <p className="mt-4 text-sm leading-loose text-white text-justify text-center">{description}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Subsidiaries;
