// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xeqndzov");
  if (state.succeeded) {
    return <p className="text-gray-300">Thanks for joining!</p>;
  }
  return (
    <form className="" onSubmit={handleSubmit}>
      <label className="text-gray-300" htmlFor="name">
        Your Name :{" "}
      </label>
      <input
        id="name"
        type="name"
        name="name"
        placeholder="Your Name"
        className="py-3 px-3 rounded outline-purple-500  block my-2  w-full max-w-md"
      />
      <ValidationError prefix="Text" field="text" errors={state.errors} />
      <label className="text-gray-300" htmlFor="email">
        Your Email :{" "}
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        className="py-3 px-3 rounded outline-purple-500 block my-2  w-full max-w-md"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label className="text-gray-300" htmlFor="message">
        Your Message :{" "}
      </label>
      <textarea
        placeholder="Your Message"
        id="message"
        name="message"
        className="py-3 px-3  rounded outline-purple-500 h-36 my-2  block w-full max-w-md"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="py-5 w-full max-w-md block my-4 bg-indigo-500 text-xl font-bold"
        type="submit"
        disabled={state.submitting}
      >
        Send Email
      </button>
    </form>
  );
}
export default ContactForm;
