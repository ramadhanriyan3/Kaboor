"use client";

import ServiceCard from "@/components/serviceCard";
import React from "react";
import { useState } from "react";

import { PhoneIcon, Mail, ChevronRight, Pencil } from "lucide-react";
import TicketCard from "@/components/ticketCard";

import { flights } from "@/lib/dummyData/fligntsData";
import { formatPrice } from "@/lib/formatedFunction";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const PassengerDaetailPage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full p-4 ">
      <p className="sub-3 md:sub-2">Detail Penumpang</p>
      <div className="flex flex-col md:flex-row gap-10 w-full ">
        <div className="flex w-full flex-col gap-y-4">
          <div className="p-2 border border-slate-400 rounded-sm">
            <div className="flex items-center justify-between">
              <p className="sub-3">John Doe</p>
              <ChevronRight className="w-3 h-3" />
            </div>
            <div className="flex items-center body-3 gap-x-1 text-muted-foreground">
              <PhoneIcon className="w-3 h-3" /> {`+62 85223221`}
            </div>
            <div className="flex items-center body-3 gap-x-1 text-muted-foreground">
              <Mail className="w-3 h-3" /> {`JohnDoe007@gmail.com`}
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <p className="sub-3">Penumpang</p>
            <div className="w-full flex flex-col py-2 border border-slate-400 rounded-sm">
              <div className="w-full flex justify-between body-3 px-2 py-1 text-muted-foreground items-center">
                Sama dengan pengguna <Switch />
              </div>
              <hr />
              <div className="flex px-2 py-1 items-center w-full justify-between text-muted-foreground body-3">
                John Doe <Pencil className="w-4 h-4 cursor-pointer " />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="sub-3">Fasilitas Extra</p>
            <ServiceCard title="Bagasi" price={50000}>
              <p className="body-3 text-muted-foreground">
                Yakin bagasi 20 kg cukup untuk semua barang bawaan kamu
                sekarang?
              </p>
            </ServiceCard>
          </div>
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

export default PassengerDaetailPage;
