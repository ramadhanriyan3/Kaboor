import { BriefcaseBusiness, ShieldCheck } from "lucide-react";
import { IoAirplaneOutline } from "react-icons/io5";
import IconBadge from "./iconBade";
import Image from "next/image";
import {
  convertToWIB,
  formatPrice,
  timeDifference,
} from "@/lib/formatedFunction";

import { cn } from "@/lib/utils";

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
  isPrimary: boolean;
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
  isPrimary,
}: TicketCardProps) => {
  return (
    <div
      className={cn(
        `flex  gap-x-2 justify-between items-center  flex-col gap-y-2 border p-2 bg-white drop-shadow-sm`,
        isPrimary && "md:gap-x-4 xl:flex-row"
      )}
    >
      <div
        className={cn(
          "flex w-full  gap-x-4 items-center  justify-between",
          isPrimary && "xl:max-w-60 xl:justify-start"
        )}
      >
        <Image src={imageUrl} alt="icon" width={80} height={60} />
        <div>
          <p
            className={cn(
              "select-none heading-6 ",
              isPrimary && "lg:heading-5"
            )}
          >
            {airline}
          </p>
          <p
            className={cn(
              "select-none body-3  text-neutral-400  text-end",
              isPrimary && "md:body-2 lg:body-1 lg:text-start"
            )}
          >
            {classSeat}
          </p>
        </div>
      </div>
      <div className="flex  items-center gap-x-2 justify-between max-w-md w-full">
        <div className="flex flex-col w-20">
          <p
            className={cn(
              "body-3 select-none text-neutral-400",
              isPrimary && "lg:heading-5"
            )}
          >
            {origin + `(${originCode})`}
          </p>
          <p
            className={cn(
              "select-none text-center body-3 ",
              isPrimary && "lg:body-1"
            )}
          >
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
          <p
            className={cn(
              "body-3 select-none text-neutral-400",
              isPrimary && "lg:heading-5 "
            )}
          >
            {destination + `(${destinationCode})`}
          </p>
          <p
            className={cn(
              "select-none text-center body-3",
              isPrimary && "lg:body-1"
            )}
          >
            {convertToWIB(arrivalTime)}
          </p>
        </div>
      </div>
      <div
        className={cn(
          "flex gap-x-5 w-full items-center justify-between",
          isPrimary && "xl:max-w-60"
        )}
      >
        <div className="flex gap-x-2 w-fit">
          <IconBadge
            size={isPrimary ? "md" : "default"}
            icon={BriefcaseBusiness}
          />
          <IconBadge size={isPrimary ? "md" : "default"} icon={ShieldCheck} />
        </div>
        <p
          className={cn(
            "select-none heading-6 gradient-text",
            isPrimary && "lg:heading-5"
          )}
        >
          {formatPrice(price)}
        </p>
      </div>
    </div>
  );
};

export default TicketCard;
