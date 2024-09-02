import React from "react";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import StylizedImage from "@/components/StylizedImage";
import imageLaptop from "../../images/laptop.jpg";
import List, { ListItem } from "@/components/List";
import LoansForm from "@/components/LoansForms"


const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our Loans"
        title="We offer loans with favourable terms"
      ></PageIntro>
      <Container className="mt-16">
        <div className="text-lg text-black">
          <p className="mb-3 mt-0">
            Loans can be a burden when offered with unfavourable terms. Greater
            Kenya understands that its members may be going through financial
            difficulties and may need assistance. The organization will be there
            to help its members get a good credit rating and become financially
            stable through sustainable loans that are taken only when in need
            and paid back on time.
          </p>
          <p className="mb-3">
            The strategy involves collaborating and partnering with third party
            financial institutions to offer the members easily accessible loans
            with low interest rates and good repayment duration with the
            organisation being the guarantor.
          </p>
          <p className="mb-5">
            Alternatively the organization will offer direct loans to its
            members at zero interest rate and a repayment duration of one year.
            This will help struggling members have time to get back on a stable
            financial track and have a smooth experience in debt.
          </p>
        </div>
        <div className="lg:flex lg:items-center mt-20 lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <h3 className="text-2xl font-display font-semibold text-black">Loan Eligibility & Issuance Guidelines</h3>
            <ListItem title="Loan Issuance Criteria">
              Loans will be issued based on the nature of the request, the
              amount required, and the member's specific membership card.
            </ListItem>
            <ListItem title="Savings Plan Requirement">
              Only members enrolled in the savings plan are eligible to apply
              for loans, ensuring financial responsibility.
            </ListItem>
            <ListItem title="Right to Deny Loan Applications">
              The organization reserves the right to deny any loan application
              if deemed necessary, ensuring fairness and risk management.
            </ListItem>
            <ListItem title="Track Record Requirement">
              A member must have a good track record within the organization
              before applying for a loan, highlighting the importance of
              reliability.
            </ListItem>
            <ListItem title="Loan Limit Determination">
              The loan limit is set by the organization, based on various
              factors, to maintain financial stability and member equity.
            </ListItem>
          </List>
        </div>
      </Container>
      <LoansForm />
    </>
  );
};

export default WorkPage;
