import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";
import TextInput from "@/components/TextInput";
import RadioInput from "@/components/RadioInput";
import Button from "@/components/Button";

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Get in Touch">
        <p>We can not wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <FadeIn>
            <form>
              <h2 className="font-display text-base font-semibold text-neutral-950">
                Work inquiries
              </h2>
              <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                <TextInput label="Name" name="name" autoComplete="name" />
                <TextInput
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
                <TextInput
                  label="Company"
                  name="company"
                  autoComplete="organization"
                />
                <TextInput
                  label="Phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                />
                <TextInput label="Message" name="message" />
                <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                  <fieldset>
                    <legend className="text-base/6 text-neutral-500">
                      Budget
                    </legend>
                  </fieldset>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <RadioInput label="$25K – $50K" name="budget" value="25" />
                    <RadioInput label="$50K – $100K" name="budget" value="50" />
                    <RadioInput
                      label="$100K – $150K"
                      name="budget"
                      value="100"
                    />
                    <RadioInput
                      label="More than $150K"
                      name="budget"
                      value="150"
                    />
                  </div>
                </div>
              </div>
              <Button type="submit" className="mt-10">
                Let’s work together
              </Button>
            </form>
          </FadeIn>
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
