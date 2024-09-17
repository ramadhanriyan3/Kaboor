import SearchPlaneForm from "@/components/searchPlaneForm";

const FindSchedulePage = () => {
  return (
    <div className="bg-[url('/airport.png')] relative h-screen  overflow-y-hidden w-full bg-cover flex items-center justify-center">
      <div className="w-full h-full bg-gradient-to-r from-primary-violet-bright/30 to bg-primary-blue-bright/30  flex items-center px-5 md:px-20">
        <div className="flex items-center md:justify-between justify-center  w-full">
          <div className="hidden md:block ">
            <h1 className="md:heading-3 lg:heading-1 text-white">
              Pergi kemanapun jadi lebih mudah
            </h1>
            <p className="lg:heading-3 md:heading-4 text-white">
              Tiket Pesawat Murah & Promo Hari Ini
            </p>
          </div>
          <div className="bg-white max-w-md w-full min-w-[300px] rounded-lg md:p-5 p-3">
            <SearchPlaneForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindSchedulePage;
