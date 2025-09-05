import { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import InfoCard from "../components/InfoCard";

export const metadata: Metadata = {
  title: "Contact | Home Renovations in Niagara Region",
  description:
    "Contact Ozzy Renos for your renovation needs in the Niagara Region.",
  openGraph: {
    title: "Contact Ozzy Renos | Home Renovations in Niagara",
    description:
      "Reach out to Ozzy Renos for expert home, kitchen, and basement renovations in the Niagara Region. Get a quote today.",
    url: "https://www.ozzyrenos.ca/contact",
    type: "website",
    images: [
      {
        url: "/niagara-kitchen-renovations.png",
        width: 1170,
        height: 615,
        alt: "Niagara kitchen renovation by Ozzy Renos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ozzy Renos | Niagara Home Renovations",
    description:
      "Get in touch with Ozzy Renos to plan your next renovation. Serving Niagara Falls, St. Catharines, and beyond.",
    images: ["/niagara-kitchen-renovations.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};

const Contact = () => {
  const infoSectionStyles =
    "flex flex-col justify-center items-center w-[90%] md:w-[50%] h-[500px]";

  return (
    <main className="flex flex-col justify-start min-h-[100vh]">
      <section className="flex flex-col items-center w-full p-6 lg:p-8 my-10 bg-[var(--black)] text-white shadow-2xl">
        <article className="w-full max-w-[1200px] text-3xl md:text-4xl lg:text-6xl">
          <h1>Please Contact Us!</h1>
          <p className="my-8 text-sm md:text-base lg:text-xl">
            Ready to start your renovation journey? We&apos;re here to help
            bring your vision to life. Whether you have questions, need a quote,
            or want to discuss your ideas, our team is just a message away.
            Reach out to us by phone, email, or simply fill out the contact form
            below — whatever&apos;s most convenient for you. We&apos;re happy to
            chat, offer guidance, and schedule a consultation to get things
            rolling. Let&apos;s build something great together.
          </p>
        </article>
      </section>
      <section className="flex flex-col-reverse md:flex-row justify-center items-center w-full md:w-[90%] max-w-[1200px]">
        <aside className={infoSectionStyles}>
          <div className="flex w-full mb-4 justfy-start">
            <h2 className="mb-6 text-xl text-black md:text-3xl lg:text-5xl">
              Ozzy Renos
            </h2>
          </div>
          <InfoCard />
        </aside>
        <span className="hidden md:flex md:w-[0.5px] md:h-96 md:bg-gray-300" />
        <div className={infoSectionStyles}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
