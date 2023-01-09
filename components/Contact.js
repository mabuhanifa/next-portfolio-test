import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className=" flex flex-col sm:flex-row my-20 ">
      <div className="w-full text-gray-300">
        <div className="mx-auto text-center sm:text-left w-96 sm:float-right p-10">
          <h1 className="text-3xl mt-20 font-bold">Contact Me</h1>
          <p className="py-5">
            Send me an email if you have any questions or want to work together.
            I am always open to discussing new projects.
          </p>
        </div>
      </div>
      <div className="w-96 m-10 mx-auto sm:w-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
