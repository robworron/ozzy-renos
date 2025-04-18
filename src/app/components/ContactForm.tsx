import { Button } from "@mui/material";

const ContactForm = () => {
  const inputFieldStyles = "border border-gray-300 p-2 rounded-md";

  return (
    <form className="flex flex-col justify-center items-center w-[90%] h-[600px] m-4 text-lg text-black">
      <div className="flex flex-col gap-4 w-[80%] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <input type="text" placeholder="Name*" className={inputFieldStyles} />
        <input type="email" placeholder="Email*" className={inputFieldStyles} />
        <input type="tel" placeholder="Phone" className={inputFieldStyles} />
        {/** Add a Dropdown for Type of Service?? */}
        <textarea
          placeholder="Message*"
          className={`${inputFieldStyles} h-36`}
        ></textarea>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--red)",
            "&:hover": {
              backgroundColor: "var(--black)",
              borderColor: "var(--black)",
            },
          }}
          className="w-36"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
