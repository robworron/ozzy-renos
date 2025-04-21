"use client";

import { Button } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mdkgnpgb");
  if (state.succeeded) {
    return (
      <div className="flex flex-col text-center">
        <h3>Your submission has been received.</h3>
        <h3>We will contact you shortly!</h3>
      </div>
    );
  }

  const inputFieldStyles = "border border-gray-300 p-2 rounded-md";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-[90%] h-[600px] m-4 text-lg text-black"
    >
      <div className="flex flex-col gap-4 w-[80%] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

        <input
          type="text"
          name="name"
          placeholder="Name *"
          className={inputFieldStyles}
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <input
          type="email"
          name="email"
          placeholder="Email *"
          className={inputFieldStyles}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className={inputFieldStyles}
        />

        <textarea
          placeholder="Message *"
          name="message"
          className={`${inputFieldStyles} h-36`}
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--red)",
            "&:hover": {
              backgroundColor: "var(--black)",
              borderColor: "var(--black)",
            },
          }}
          type="submit"
          disabled={state.submitting}
          className="w-36"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
