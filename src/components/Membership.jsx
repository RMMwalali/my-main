import Image from "next/image";
import logoBasic from "../images/subsidiaries/pay-money.svg";
import logoPremium from "../images/subsidiaries/pay-money.svg";
import logoVIP from "../images/subsidiaries/pay-money.svg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const memberships = [
  ["Basic Membership", logoBasic, "Access to basic features and content. Ideal for those who are just starting and want to explore the essentials."],
  ["Premium Membership", logoPremium, "Includes all the benefits of Basic plus premium features, exclusive content, and priority support."],
  ["VIP Membership", logoVIP, "All-inclusive access to features, priority support, exclusive events, and more. Tailored for those who want the best experience."],
];

const Memberships = () => {
  return (
    <div className="mt-8 bg-black py-10 sm:mt-6 sm:py-12 lg:mt-0">
      <Container>
        <FadeIn className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Heading Section */}
          <div className="w-full md:w-1/2">
            <h1 className="font-display text-4xl font-medium tracking-tight text-white sm:text-6xl">
              Our Memberships
            </h1>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 text-left md:text-right">
            <p className="text-xl text-justify text-gray-200">
              Discover the perfect membership plan for you. Each level offers unique benefits and access to exclusive content. Join now and unlock your potential!
            </p>
          </div>
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            {memberships.map(([name, logo, description]) => (
              <li key={name} className="flex flex-col items-center space-y-2">
                <FadeIn className="">
                  <div className="flex flex-col items-left justify-between">
                    {/* Responsive Image */}
                    <Image src={logo} alt={`${name} logo`} className="w-20 h-20" />
                    {/* Responsive Title */}
                    <span className="text-lg font-semibold underline text-gray-200 underline-offset-8 decoration-2">{name}</span>
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

export default Memberships;
