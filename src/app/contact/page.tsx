import ContactForm from "../components/ContactForm";
import InfoCard from "../components/InfoCard";

const Contact = () => {
  const sectionStyles =
    "flex justify-center items-center w-[50%] h-[600px] mt-4";

  return (
    <main className="flex flex-row justify-center items-center">
      <div className="flex flex-row justify-center items-center w-full h-[600px] max-w-[1200px]">
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
