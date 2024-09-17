import TicketCard from "@/components/ticketCard";
import { flights } from "@/lib/dummyData/fligntsData";
import { ArrowRight } from "lucide-react";

const DepartureSchedulePage = () => {
  return (
    <div className="py-2 flex flex-col gap-y-2 lg:gap-y-4 px-2 md:px-4">
      <div className="px-1 sm:p-2 my-4 py-1 md:py-2 select-none flex items-center justify-between gap-x-2 border rounded-sm drop-shadow-sm">
        <div className="w-full flex sm:gap-x-2 gap-x-1 items-center body-4 md:body-3 lg:body-2">
          SUB <ArrowRight className="w-4 h-4" /> CGK
        </div>
        <p className="w-full h-full text-center border-l body-4 md:body-3 lg:body-2 whitespace-nowrap">
          Senin, 24 Desemper 2024
        </p>
        <p className="w-full h-full text-center border-l body-4 md:body-3 lg:body-2">
          1 Orang
        </p>
        <p className="w-full h-full text-center border-l body-4 md:body-3 lg:body-2">
          Ekonomi
        </p>
      </div>
      <div className="heading-6 md:heading-5 lg:heading-4">
        Pilih Keberangkatan
      </div>
      {flights.map((flight, index) => (
        <TicketCard
          key={index}
          classSeat={"Ekonomi"}
          airline={flight.airline.name}
          price={flight.price.adult}
          origin={flight.origin.city}
          originCode={flight.origin.code}
          destination={flight.destination.city}
          destinationCode={flight.destination.code}
          departureTime={flight.departureTime}
          arrivalTime={flight.arrivalTime}
          imageUrl={flight.airline.imageUrl}
        />
      ))}
    </div>
  );
};

export default DepartureSchedulePage;
