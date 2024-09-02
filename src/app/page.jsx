import Initiatives from "@/components/Initiatives";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import Hero from "@/components/Hero/hero";
import Mission from "@/components/MissionSvg";
import Vision from "@/components/VisionSvg";
import Subsidiaries from "@/components/Subsidiaries";
import Memberships from "@/components/Membership";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main className="text-black">
      <section id="hero">
        <Hero />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="mission">
        <Container className="mt-16 sm:mt-24">
          <FadeIn className="w-3/4">
            <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              <span className="mb-6 block tracking-wider font-display text-base font-semibold text-black">
                Our Mission & Vision
              </span>
              Visionary Empowerment for Community Transformation
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              In navigating the complex landscape of challenges facing Kenya, we
              aim to find sustainable solutions that stand the test of time.
            </p>
          </FadeIn>
        </Container>
      </section>

      <FadeIn className="w-full mt-10 sm:mt-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-black text-gray-200 p-6 m-5 shadow-md flex flex-col text-left">
            <div className="mb-4">
              {/* Replace with your icon/graphic */}
              <Mission className="w-full h-full" />
            </div>
            <h2 className="font-display text-left text-4xl font-medium tracking-tight text-fuchsia-400">
              Our Mission
            </h2>
            <p className="mt-4 text-xl text-justify text-gray-200">
              To empower young people to achieve their goals and become
              financially independent as well as create a sustainable future by
              using strategic approaches to find lasting solutions to problems
              facing Kenya and its inhabitants.
            </p>
          </div>
          {/* Vision Card */}
          <div className="bg-black text-gray-200 p-6 m-5 shadow-md flex flex-col text-left">
            <div className="mb-4">
              {/* Replace with your icon/graphic */}
              <Vision />
            </div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-green-400">
              Our Vision
            </h2>
            <p className="mt-4 text-xl text-justify text-gray-200">
              A future where Kenya moves up in ranks from a third world country
              and where young people are not burdened by challenges that hinder
              them from achieving success in life.
            </p>
          </div>
        </div>
      </FadeIn>
      <section id="initiatives">
        <Initiatives />
      </section>
      <section id="subsidiaries">
        <Container className="mb-10">
          <FadeIn className="w-3/4">
            <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              <span className="mb-6 block tracking-wider font-display text-base font-semibold text-black">
                Our Subsidiaries
              </span>
              Empowering Members Through Our Diverse Subsidiaries
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Greater Kenya offers diversification in its portfolio to cater for
              each and every member. Members may join these subsidiaries after
              obtaining membership and can therefore venture into what they are
              really passionate about within the framework of operation.
            </p>
          </FadeIn>
        </Container>
      </section>
      <Subsidiaries />
      <section id="memberships">
        <Memberships />
      </section>
      <section id="testimonials">
        <Testimonials
          className="mt-24 sm:mt-32 lg:mt-40"
          client={{ name: "Phobia", logo: logoPhobiaDark }}
        >
          Working with Greater Kenya Organisation has been a truly
          transformative experience. Their unwavering commitment to empowering
          young people and fostering sustainable solutions is evident in every
          project.
        </Testimonials>
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
