const logos = [
  { name: "Tokopedia", src: "/src/assets/logo-mitra/1691990916tokopedia-logo-png.png" },
  { name: "Bukalapak", src: "/src/assets/logo-mitra/bukalapak-jogjakartaonline-jogjakartaonline-14.png" },
  { name: "Gojek", src: "/src/assets/logo-mitra/Gojek-logo-2018-2048x1152.png" },
  { name: "Traveloka", src: "/src/assets/logo-mitra/Traveloka.png" },
  { name: "OVO", src: "/src/assets/logo-mitra/ovo-logo-png-png-file-download-73189-2048x638.png" },
  { name: "Shopee", src: "/src/assets/logo-mitra/1601363392174-shopee-LOGO.png" },
  { name: "Telkom Indonesia", src: "/src/assets/logo-mitra/1594108255409_compress_logo telkom indonesia.png" },
  { name: "XL Axiata", src: "/src/assets/logo-mitra/XL_Axiata-Logo.wine.png" },
  { name: "Indosat Ooredoo", src: "/src/assets/logo-mitra/Logo Indosat_Ooredoo.png" },
  { name: "BCA", src: "/src/assets/logo-mitra/BCA_logo_Bank_Central_Asia_2.png" },
  { name: "DANA", src: "/src/assets/logo-mitra/Dana.png" },
  { name: "Jenius", src: "/src/assets/logo-mitra/Jenius.png" },
  { name: "Blibli", src: "/src/assets/logo-mitra/blibli-logo-brandlogo.net_.png" },
  { name: "Biznet", src: "/src/assets/logo-mitra/Biznet.png" },
  { name: "LinkAja", src: "/src/assets/logo-mitra/LinkAja.png" },
  { name: "Kredivo", src: "/src/assets/logo-mitra/Logo Kredivo.png" },
  { name: "Zenius", src: "/src/assets/logo-mitra/3180e7c88a2d84bb337c734a4ee09c23.png" },
  { name: "Ruangguru", src: "/src/assets/logo-mitra/logo ruangguru.png" },
  { name: "Qlue", src: "/src/assets/logo-mitra/Qlue.png" },
];

const Marquee = () => {
  return (
    <div className="overflow-hidden pt-2">
      <div className="text-center my-5">
        <h1 className="font-bold lg:text-4xl text-2xl text-background-button">100+ Perusahaan Besar</h1>
        <p className=" lg:text-lg text-base mt-3 font-medium text-label-text">Big Companies For Your Future Career</p>
      </div>
      <div className="flex animate-marquee-logo whitespace-nowrap">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.name} className="mx-4 h-12 lg:w-[5rem] w-[3rem]  object-contain filter grayscale hover:grayscale-0 cursor-pointer" />
        ))}
        {logos.map((logo, index) => (
          <img key={index + logos.length} src={logo.src} alt={logo.name} className="mx-4 h-12 lg:w-[5rem] w-[3rem] object-contain filter grayscale hover:grayscale-0 cursor-pointer " />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
