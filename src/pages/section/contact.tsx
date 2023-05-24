import Textarea from "../../components/Textarea";

const Contact = () => {
  return (
    <div className="w-full p-4 text-center bg-gray-100 border border-gray-200 sm:p-8 sm:my-16">
      <h5 className="mb-2 text-3xl font-bold text-gray-900">
       Let's Work Together ⚡ 
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg">
        Have interesting project? can my skillset help you? don't hesitate to contact me.
      </p>
      <div className="w-full items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <Textarea />
      </div>
    </div>
  );
};

export default Contact;
