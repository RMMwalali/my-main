"use client";

import { useState, useRef, useEffect } from "react";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import TextInput from "@/components/TextInput";
import RadioInput from "@/components/RadioInput";
import Button from "@/components/Button";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const CareersPage = () => {
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const formRef = useRef(null); // Create a ref for the form

  // Scroll to the form whenever selectedJobTitle changes
  useEffect(() => {
    if (selectedJobTitle && formRef.current) {
      scroll.scrollTo(formRef.current.offsetTop, {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
    }
  }, [selectedJobTitle]); // Effect runs when selectedJobTitle changes

  const careers = [
    "Interim Board Members",
    "Assistant Treasurer",
    "Accountant",
    "Auditor",
    "Chief Legal Officer",
    "Assistant Chief Legal Officer",
    "Head of Marketing",
    "Assistant Head of Marketing",
    "Videographer",
    "Photographer",
    "Editor",
    "Blogger",
    "YouTube Manager",
    "Instagram Manager",
    "Twitter Manager",
    "Facebook Manager",
    "TikTok Manager",
    "Projects and Events Manager",
    "Assistant Projects and Events Manager",
    "Planners",
    "Organizers",
    "Head of Human Resources",
    "Assistant Head of Human Resources",
    "Head of Communications",
    "Assistant Head of Communications",
    "Secretary",
    "Assistant Secretary",
    "Spokespersons",
    "Inquiries and Support",
  ];

   const handleJobClick = (title) => {
     setSelectedJobTitle(title); // Set the selected job title
   };
  return (
    <>
      <PageIntro
        eyebrow="Careers"
        title="Explore Exciting Career Opportunities"
      >
        <p>
          We’re looking for passionate individuals ready to make a difference.
          Browse our available positions and apply today!
        </p>
      </PageIntro>

      {/* Image with smooth scroll-in animation */}
      <motion.div
        className="place-content-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="https://res.cloudinary.com/dtnbwgpca/image/upload/t_n/v1726834349/GKO/dl.beatsnoop.com-high-b6f2fb70b73e777dd9_p6zzat.jpg"
          alt="Career Opportunities"
          className="p-20 w-full h-auto"
        />
      </motion.div>
      <div className="mt-10">
        <p className="text-center font-display text-neutral-600 font-semibold mt-4 mb-8">
          *Click on a position to apply for it.
        </p>
        <Container>
          <FadeInStagger faster>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {careers.map((career) => (
                <FadeIn key={career}>
                  <button
                    className="w-full px-6 py-4 text-center font-semibold text-white bg-black hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md transition-all duration-300"
                    onClick={() => handleJobClick(career)}
                  >
                    {career}
                  </button>
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </Container>

        {selectedJobTitle && (
          <div className="mt-10 center" ref={formRef}>
            {" "}
            {/* Ref for the form */}
            <h2 className="text-3xl font-display m-20 mb-0 font-bold text-center text-neutral-800">
              Applying for: {selectedJobTitle}
            </h2>
            <Container className="mt-4">
              <div className="grid grid-cols-1 gap-x-8 gap-y-24">
                <FadeIn>
                  <form className="w-full">
                    <div className="isolate mt-6 bg-white/50 rounded-2xl">
                      {/* Text Input fields, arranged in grid */}
                      <TextInput
                        label="Job Title"
                        name="jobTitle"
                        value={selectedJobTitle}
                        readOnly
                        className="col-span-1"
                      />
                      <TextInput
                        label="Full Name"
                        name="fullName"
                        autoComplete="name"
                        className="col-span-1"
                      />
                      <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="col-span-1"
                      />
                      <TextInput
                        label="Phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        className="col-span-1"
                      />
                      <TextInput
                        label="Location"
                        name="location"
                        autoComplete="address-level1"
                        className="col-span-2 lg:col-span-1"
                      />
                      <TextInput
                        label="LinkedIn Profile (Optional)"
                        name="linkedin"
                        type="url"
                        autoComplete="url"
                        className="col-span-2 lg:col-span-1"
                      />
                      <TextInput
                        label="Portfolio/Website (Optional)"
                        name="portfolio"
                        type="url"
                        autoComplete="url"
                        className="col-span-2 lg:col-span-1"
                      />
                      <TextInput
                        label="Current Position"
                        name="currentPosition"
                        autoComplete="organization-title"
                        className="col-span-1"
                      />
                      <TextInput
                        label="Years of Experience"
                        name="experience"
                        type="number"
                        min="0"
                        className="col-span-1"
                      />
                      <TextInput
                        label="Why do you want to work with us?"
                        name="interest"
                        type="textarea"
                        className="col-span-2 lg:col-span-3 h-24"
                      />
                      {/* Multi-column Radio Inputs */}
                      <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl col-span-2 lg:col-span-3">
                        <fieldset>
                          <legend className="text-base/6 text-neutral-500">
                            How did you hear about this position?
                          </legend>
                          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <RadioInput
                              label="Company Website"
                              name="source"
                              value="website"
                            />
                            <RadioInput
                              label="Social Media"
                              name="source"
                              value="social"
                            />
                            <RadioInput
                              label="Referral"
                              name="source"
                              value="referral"
                            />
                            <RadioInput
                              label="Other"
                              name="source"
                              value="other"
                            />
                          </div>
                        </fieldset>
                      </div>
                      {/* Upload Inputs */}
                      <TextInput
                        label="Upload Resume/CV"
                        name="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="col-span-2 lg:col-span-1"
                      />
                      <TextInput
                        label="Upload Cover Letter (Optional)"
                        name="coverLetter"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="col-span-2 lg:col-span-1"
                      />
                      <TextInput
                        label="Reference Name"
                        name="referenceName"
                        autoComplete="name"
                        className="col-span-1"
                      />
                      <TextInput
                        label="Reference Contact"
                        name="referenceContact"
                        type="email"
                        autoComplete="email"
                        className="col-span-1"
                      />
                      <TextInput
                        label="Relationship to Reference"
                        name="referenceRelation"
                        className="col-span-1"
                      />
                    </div>
                    <Button type="submit" className="mt-10">
                      Submit Application
                    </Button>
                  </form>
                </FadeIn>
              </div>
            </Container>
          </div>
        )}
      </div>
    </>
  );
};

export default CareersPage;
