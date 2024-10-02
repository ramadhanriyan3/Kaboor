import ServiceCard from "@/components/serviceCard";
import React from "react";

import { Check } from "lucide-react";
import TicketCard from "@/components/ticketCard";

import { flights } from "@/lib/dummyData/fligntsData";
import { formatPrice } from "@/lib/formatedFunction";
import { Button } from "@/components/ui/button";

const AddServicePage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <p className="sub-4 md:sub-3">Layanan Tambahan</p>
      <div className="flex flex-col md:flex-row gap-5 w-full ">
        <div className="flex w-full flex-col gap-y-2 lg:gap-y-4">
          <ServiceCard title="Asuransi Pejalanan" price={50000}>
            <div className="flex flex-col">
              <div className="flex pl-1 gap-x-2 items-center body-3 text-neutral-600">
                <Check className="bg-emerald-500 p-[2px] w-3 h-3 rounded-full text-white" />
                Kompensasi hingga Rp 500 Juta untuk berbagai resiko tak terduga
              </div>
              <div className="flex pl-1 gap-x-2 items-center body-3 text-neutral-600">
                <Check className="bg-emerald-500 p-[2px] w-3 h-3 rounded-full text-white" />
                Kompensasi hingga Rp 600 Ribu untuk setiap tanggunan
              </div>
            </div>
          </ServiceCard>
          <ServiceCard title="Asuransi Bagasi" price={50000}>
            <div className="flex flex-col">
              <div className="flex pl-1 gap-x-2 items-center body-3 text-neutral-600">
                <Check className="bg-emerald-500 p-[2px] w-3 h-3 rounded-full text-white" />
                Kompensasi hingga Rp 500 Juta untuk berbagai resiko tak terduga
              </div>
              <div className="flex pl-1 gap-x-2 items-center body-3 text-neutral-600">
                <Check className="bg-emerald-500 p-[2px] w-3 h-3 rounded-full text-white" />
                Kompensasi hingga Rp 600 Ribu untuk setiap tanggunan
              </div>
            </div>
          </ServiceCard>
          <ServiceCard title="Proteksi Keterlambatan" price={50000}>
            <div className="flex flex-col">
              <div className="flex pl-1 gap-x-2 items-center body-3 text-neutral-600">
                <Check className="bg-emerald-500 p-[2px] w-3 h-3 rounded-full text-white" />
                Kompensasi hingga Rp 500 Juta untuk berbagai resiko tak terduga
              </div>
              <div className="flex pl-1 gap-x-2 items-center body-3 text-neutral-600">
                <Check className="bg-emerald-500 p-[2px] w-3 h-3 rounded-full text-white" />
                Kompensasi hingga Rp 600 Ribu untuk setiap tanggunan
              </div>
            </div>
          </ServiceCard>
        </div>
        <div className="w-full flex flex-col gap-y-5">
          <TicketCard
            isPrimary={false}
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
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <p className="sub-3 text-neutral-500">Total harga</p>
              <p className="sub-2 gradient-text">{formatPrice(1250000)}</p>
            </div>
            <Button className="btn-primary">Bayar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServicePage;
