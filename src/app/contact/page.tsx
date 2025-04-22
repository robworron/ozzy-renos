import ContactForm from "../components/ContactForm";
import InfoCard from "../components/InfoCard";

const Contact = () => {
  const sectionStyles =
    "flex flex-col justify-center items-center w-[50%] h-[600px]";

  return (
    <main className="flex flex-col justify-start items-center min-h-[100vh]">
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
      <div className="flex flex-row justify-center items-center w-full max-w-[1200px] my-16">
        <section className={sectionStyles}>
          <InfoCard />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.217282568346!2d-79.13694380981116!3d43.0999484136181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d344954c6acaad%3A0x93749d96d753bfef!2s8065%20Post%20Rd%2C%20Niagara%20Falls%2C%20ON%20L2H%202L2!5e0!3m2!1sen!2sca!4v1745294524745!5m2!1sen!2sca"
            loading="lazy"
            className="w-[60%] h-[1200px] border-0 max-h-[250px] pt-8"
          ></iframe>
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
