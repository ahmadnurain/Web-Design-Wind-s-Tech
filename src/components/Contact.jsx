const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <h1 className="font-bold lg:text-5xl text-4xl text-background-button">Tanya Wind&apos;s Tech</h1>
        <p className="pb-14 pt-5 lg:text-2xl text-xl font-semibold text-label-text">Jika anda punya pertanyaan</p>
      </div>

      <div className="container mx-auto lg:px-14 px-3 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0">
        {/* Gambar */}
        <div className="hidden lg:block relative">
          <img src="/src/assets/Group 12 (1).png" alt="Contact Image" className="w-full h-auto rounded-l-[20px] object-cover" />
        </div>

        {/* Card Contact */}
        <div className="bg-white p-8 rounded-r-[20px] shadow-lg relative lg:-ml-[10px]">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">Have any questions or want to reach out? Fill out the form below and we’ll get back to you as soon as possible.</p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-[10px]  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-[10px]  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea id="message" rows="4" className="mt-1 block w-full p-2 border border-gray-300 rounded-[10px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <button type="submit" className="w-full bg-background-button text-white py-2 px-4 rounded-[10px]  hover:shadow-[0_0_0_4px_#3A3FAD] duration-500">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
