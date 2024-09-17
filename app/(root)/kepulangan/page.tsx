import TicketCard from "@/components/ticketCard";
import { flights } from "@/lib/dummyData/fligntsData";
import { ArrowRight } from "lucide-react";

const DepartureSchedulePage = () => {
  return (
    <>
      <div className="flex flex-col gap-y-2 lg:gap-y-4 ">
        <div className="px-2 md:px-4">
          <div className=" px-1 sm:px-2 my-4 py-1 md:py-2 select-none flex items-center justify-between gap-x-2 border rounded-sm drop-shadow-sm">
            <div className="w-full flex gap-x-1 sm:gap-x-2 items-center body-4 md:body-3 lg:body-2">
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
          <div className="heading-6 md:heading-5 select-none lg:heading-4">
            Keberangkatan
          </div>
          <TicketCard
            classSeat={"Ekonomi"}
            airline={flights[0].airline.name}
            price={flights[0].price.adult}
            origin={flights[0].origin.city}
            originCode={flights[0].origin.code}
            destination={flights[0].destination.city}
            destinationCode={flights[0].destination.code}
            departureTime={flights[0].departureTime}
            arrivalTime={flights[0].arrivalTime}
            imageUrl={flights[0].airline.imageUrl}
          />
        </div>

        <hr className="my-3 border-black/30" />
        <div className="pl-2 md:pl-4 heading-6 md:heading-5 select-none lg:heading-4">
          Pilih Kepulangan
        </div>
      </div>
      <div className="py-2 flex flex-col gap-y-2 lg:gap-y-4 px-2 md:px-4">
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
    </>
  );
};

export default DepartureSchedulePage;
