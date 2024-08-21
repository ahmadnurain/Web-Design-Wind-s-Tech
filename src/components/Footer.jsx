const Footer = () => {
  return (
    <footer className="bg-[#0D0C2D] text-white py-10">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo dan Deskripsi */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold">Wind&apos;s Tech</h2>
          <p className="text-lg mt-3">Kelas Online dengan ribuan materi</p>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col lg:flex-row lg:gap-20 gap-6 text-center lg:text-left ">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#kelas" className="hover:underline">
            Kelas
          </a>
          <a href="#testimoni" className="hover:underline">
            Testimoni
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-start pl-[4.7rem] text-base mt-6 lg:mt-56">© Copyright Wind&apos;s Tech Team.</div>
    </footer>
  );
};

export default Footer;
