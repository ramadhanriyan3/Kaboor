import { BriefcaseBusiness, ShieldCheck } from "lucide-react";
import { IoAirplaneOutline } from "react-icons/io5";
import IconBadge from "./iconBade";

import { flights } from "@/lib/dummyData/fligntsData";
import Image from "next/image";
import {
  convertToWIB,
  formatPrice,
  timeDifference,
} from "@/lib/formatedFunction";

interface TicketCardProps {
  price: number;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  classSeat: string;
  airline: string;
  imageUrl: string;
  departureTime: Date | string;
  arrivalTime: Date | string;
}

const TicketCard = ({
  price,
  origin,
  originCode,
  destination,
  destinationCode,
  classSeat,
  arrivalTime,
  departureTime,
  airline,
  imageUrl,
}: TicketCardProps) => {
  return (
    <div className="flex  gap-x-2 md:gap-x-4 justify-between items-center xl:flex-row flex-col gap-y-2 border p-2 md-px-4 bg-white drop-shadow-sm">
      <div className="flex w-full xl:max-w-60 gap-x-4 items-center xl:justify-start justify-between">
        <Image src={imageUrl} alt="icon" width={80} height={60} />
        <div>
          <p className="select-none heading-6 lg:heading-5   ">{airline}</p>
          <p className="select-none body-3 md:body-2 lg:body-1 text-neutral-400 lg:text-start text-end">
            {classSeat}
          </p>
        </div>
      </div>
      <div className="flex  items-center gap-x-2 justify-between max-w-md w-full">
        <div className="flex flex-col w-20">
          <p className=" lg:heading-5 body-3 select-none text-neutral-400">
            {origin + `(${originCode})`}
          </p>
          <p className="select-none text-center body-3 lg:body-1">
            {convertToWIB(departureTime)}
          </p>
        </div>
        <div className="flex flex-col items-center w-56">
          <div className="w-full relative select-none px-4 ">
            <div className="border-b-2 border-b-primary-violet-bright border-dashed w-full" />
            <IoAirplaneOutline className="w-8 h-8 text-primary-violet-bright absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
          </div>
          <p className=" select-none -mb-4 pt-3 text-neutral-400">
            {timeDifference(departureTime, arrivalTime)}
          </p>
        </div>
        <div className="flex flex-col w-20 ">
          <p className=" lg:heading-5 body-3 select-none text-neutral-400">
            {destination + `(${destinationCode})`}
          </p>
          <p className="select-none text-center body-3 lg:body-1">
            {convertToWIB(arrivalTime)}
          </p>
        </div>
      </div>
      <div className="flex gap-x-5 w-full  items-center justify-between xl:max-w-60">
        <div className="flex gap-x-2 w-fit">
          <IconBadge size={"md"} icon={BriefcaseBusiness} />
          <IconBadge size={"md"} icon={ShieldCheck} />
        </div>
        <p className=" select-none lg:heading-5 heading-6  gradient-text">
          {formatPrice(price)}
        </p>
      </div>
    </div>
  );
};

export default TicketCard;
