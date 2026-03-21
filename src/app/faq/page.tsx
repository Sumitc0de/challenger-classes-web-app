import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Challenger Classes, Nalasopara East — fees, admission, timings, subjects, and more.",
};

const faqItems = [
  {
    question: "What courses does Challenger Classes offer?",
    answer:
      "We offer coaching for Class 10 (SSC/CBSE), Class 12 Science & Commerce (HSC), and competitive exam preparation including MHT-CET, JEE Main, and NEET. Our programs are designed for students in Nalasopara East, Achole Road, and surrounding areas.",
  },
  {
    question: "What are the fees for coaching classes?",
    answer:
      "Our fees vary by course and batch. We offer competitive pricing to make quality education accessible. Please contact us directly or visit our Achole Road branch for detailed fee information and available installment plans.",
  },
  {
    question: "What are the class timings?",
    answer:
      "Classes run from 8:00 AM to 7:00 PM, Monday to Saturday. Multiple batch options are available — morning, afternoon, and evening — so students can choose based on their school schedule.",
  },
  {
    question: "What is the admission process?",
    answer:
      "Admissions are open year-round. Visit our Nalasopara East (Achole Road) branch with your previous mark sheet. We conduct a brief counselling session to understand the student's needs and recommend the right batch and program.",
  },
  {
    question: "Do you provide study materials?",
    answer:
      "Yes! All enrolled students receive comprehensive study notes, formula sheets, practice problems, and previous year question papers. We also provide access to our online test series platform.",
  },
  {
    question: "What subjects are covered in Class 10 coaching?",
    answer:
      "We cover all subjects — Mathematics, Science, Social Studies, English, and Hindi/Marathi. Our focus is on board exam preparation with regular tests and revision sessions.",
  },
  {
    question: "Do you offer demo classes?",
    answer:
      "Yes, we offer free demo classes so students and parents can experience our teaching methodology before enrolling. Contact us to book your free demo session.",
  },
  {
    question: "How do you track student progress?",
    answer:
      "We conduct regular tests (weekly and monthly), provide detailed performance reports, and have parent-teacher meetings to discuss student progress. Our analytics help identify areas that need improvement.",
  },
  {
    question: "Where is Challenger Classes located?",
    answer:
      "We are located on Achole Road, Nalasopara East, Palghar, Mumbai, Maharashtra 401209. Our location is easily accessible from Nalasopara railway station and surrounding localities.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, we have a fair refund policy. If a student wishes to discontinue within the first 15 days, a partial refund is provided. Please speak to our admin team for complete details.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 mb-4">
            Got Questions?
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Everything you need to know about Challenger Classes in Nalasopara East.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Common Questions"
            subtitle="Can't find what you're looking for? Contact us and we'll be happy to help."
          />
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABanner title="Still Have Questions?" subtitle="Our team is always ready to help. Reach out to us for any queries about courses, fees, or admissions." primaryLabel="Contact Us" />
    </>
  );
}
