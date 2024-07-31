import Initiatives from "@/components/Initiatives";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import Hero from "@/components/Hero/hero"
import Mission from "@/components/MissionSvg"
import Vision from "@/components/VisionSvg"
import Subsidiaries from "@/components/Subsidiaries";


export default function Home() {
  return (
    <main className="text-black">
      <Hero/>
      <FadeIn className="w-full mt-20 sm:mt-25">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* Mission Card */}
      <div className="bg-black text-gray-200 p-6 m-5 shadow-md rounded-lg flex flex-col text-left">
        <div className="mb-4">
          {/* Replace with your icon/graphic */}
          <Mission className="w-full h-full"/>
        </div>
        <h2 className="font-display text-left text-4xl font-medium tracking-tight text-red-200">Our Mission</h2>
        <p className="mt-4 text-xl text-justify text-gray-200">
          To empower young people to achieve their goals and become financially independent as well as create a sustainable future by using strategic approaches to find lasting solutions to problems facing Kenya and its inhabitants.
        </p>
      </div>
      {/* Vision Card */}
      <div className="bg-black text-gray-200 p-6 m-5 shadow-md rounded-lg flex flex-col text-left">
        <div className="mb-4">
          {/* Replace with your icon/graphic */}
          <Vision/>
        </div>
        <h2 className="font-display text-4xl font-medium tracking-tight text-green-200">Our Vision</h2>
        <p className="mt-4 text-xl text-justify text-gray-200">
          A future where Kenya moves up in ranks from a third world country and where young people are not burdened by challenges that hinder them from achieving success in life.
        </p>
      </div>
    </div>
      </FadeIn>
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="w-3/4">
          <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            Visionary Empowerment for Community Transformation
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a visionary NGO committed to enacting sustainable solutions and empowering young individuals to achieve financial stability. Our multifaceted projects address diverse challenges, ranging from education to entrepreneurship, aiming to create a positive and lasting impact on the community. Join Greater Kenya, and become an integral part of these initiatives, contributing to the transformation of lives and communities.
          </p>
        </FadeIn>
      </Container>
      <Initiatives />
      <Subsidiaries/>
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
