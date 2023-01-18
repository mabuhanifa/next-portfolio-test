// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xeqndzov");
  if (state.succeeded) {
    return <p className="">Thanks for joining!</p>;
  }
  return (
    <form className="" onSubmit={handleSubmit}>
      <label className="" htmlFor="name">
        Your Name :{" "}
      </label>
      <input
        id="name"
        type="name"
        name="name"
        placeholder="Your Name"
        className="border border-gray-300 py-3 px-3 rounded outline-indigo-700 text-gray-700 block my-2  w-full max-w-md"
      />
      <ValidationError prefix="Text" field="text" errors={state.errors} />
      <label className="" htmlFor="email">
        Your Email :{" "}
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        className="border border-gray-300 py-3 px-3 rounded outline-indigo-700 text-gray-700 block my-2  w-full max-w-md"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label className="" htmlFor="message">
        Your Message :{" "}
      </label>
      <textarea
        placeholder="Your Message"
        id="message"
        name="message"
        className="border border-gray-300 py-3 px-3  rounded outline-indigo-700 text-gray-700 h-36 my-2  block w-full max-w-md"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="py-4 w-full max-w-md block my-4 bg-indigo-700 hover:bg-indigo-900 text-xl font-bold text-white rounded"
        type="submit"
        disabled={state.submitting}
      >
        Send Message
      </button>
    </form>
  );
}
export default ContactForm;
