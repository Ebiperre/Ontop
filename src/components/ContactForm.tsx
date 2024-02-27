import ContactImg from "../assets/images/contact_us.svg";

const ContactForm = () => {
  return (
    <div className="">
      <div className="xl:max-w-7xl md:my-6 h-full w-full flex justify-between items-stretch px-5 xl:px-5 py-2.5">
        <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
          <img src={ContactImg} alt="login" className="h-[500px]" />
        </div>
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-black">
            Get In Touch!
          </h1>
          <div className="w-full mt-2 text-center">
            <p className="text-gray-600 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, vero atque asperiores culpa magni velit.
            </p>
          </div>

          <div className="w-full mt-5 sm:mt-8">
            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                  type="message"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <textarea
                  name="message"
                  id="message"
                  className="w-full px-5 py-3 rounded-lg font-medium border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none"
                  placeholder="Write your message here..."
                  cols={30}
                  rows={10}
                ></textarea>
                <button
                  onClick={() => {}}
                  className="md:mt-5 tracking-wide font-semibold bg-orange text-white md:w-fit py-4 md:px-6 rounded-lg hover:bg-orange3 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span>Sent Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative left-6 md:absolute md:bottom-14 md:left-6 flex items-center gap-4">
        <div className="w-8 h-8 border border-pink-300 rounded-md"></div>
        <div className="w-8 h-8 border border-blue-600 rounded-md"></div>
        <div className="w-8 h-8 border border-black rounded-md"></div>
        <div className="w-8 h-8 border border-green-400 rounded-md"></div>
      </div>
    </div>
  );
};

export default ContactForm;
