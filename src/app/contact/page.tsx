import ContactForm from "../components/ContactForm";
import InfoCard from "../components/InfoCard";

const Contact = () => {
  const sectionStyles = "flex justify-center items-center w-[50%] h-[600px]";

  return (
    <main className="flex flex-col justify-start items-center">
      <section className="flex flex-col items-center w-full bg-[var(--black)] text-white p-8 my-10 shadow-2xl">
        <div className="flex w-full max-w-[1200px]">
          <h2 className="text-3xl max-w-[1200px]">Reach Out to Us!</h2>
        </div>
        <p className="text-xl max-w-[1200px] my-8">
          Ready to start your renovation journey? We’re here to help bring your
          vision to life. Whether you have questions, need a quote, or want to
          discuss your ideas, our team is just a message away. Reach out to us
          by phone, email, or simply fill out the contact form below—whatever’s
          most convenient for you. We’re happy to chat, offer guidance, and
          schedule a consultation to get things rolling. Let’s build something
          great together.
        </p>
      </section>
      <div className="flex flex-row justify-center items-center w-full max-w-[1200px]">
        <section className={sectionStyles}>
          <InfoCard />
        </section>
        <span className="w-[0.5px] h-96 bg-gray-300" />
        <section className={sectionStyles}>
          <ContactForm />
        </section>
      </div>
    </main>
  );
};

export default Contact;
