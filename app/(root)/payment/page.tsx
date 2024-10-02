import TicketCard from "@/components/ticketCard";
import { Button } from "@/components/ui/button";
import { flights } from "@/lib/dummyData/fligntsData";
import { formatPrice } from "@/lib/formatedFunction";
import { TicketPercent } from "lucide-react";
import Image from "next/image";

const PaymentPage = () => {
  return (
    <div className="w-full flex flex-col p-4 gap-5">
      <p className="sub-4 md:sub-3">Pilih Metode Pembayaran</p>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full gap-y-5">
          <div className="flex flex-col gap-y-2 w-full select-none">
            <div className="border-2 rounded-sm w-full py-2 flex justify-between items-center px-4 focus-within:border-primary-violet-bright/50 focus-within:border-2 ">
              <label
                className="w-full flex items-center gap-x-4 body-3 "
                htmlFor="atm-1"
              >
                <Image
                  src={"/bankIcon/bca.png"}
                  width={50}
                  height={30}
                  alt="bankIcon"
                />
                BCA
              </label>
              <input
                type="radio"
                name="atm"
                id="atm-1"
                value={"bca"}
                className="appearance-none"
              />
            </div>
            <div className="border-2 rounded-sm w-full py-2 flex justify-between items-center px-4 focus-within:border-primary-violet-bright/50 focus-within:border-2">
              <label
                className="w-full flex items-center gap-x-4 body-3"
                htmlFor="atm-2"
              >
                <Image
                  src={"/bankIcon/bni.png"}
                  width={50}
                  height={30}
                  alt="bankIcon"
                />
                BNI
              </label>
              <input
                type="radio"
                className="appearance-none"
                name="atm"
                id="atm-2"
                value={"bni"}
              />
            </div>
            <div className="border-2 rounded-sm w-full py-2 flex justify-between items-center px-4 focus-within:border-primary-violet-bright/50 focus-within:border-2">
              <label
                className="w-full flex items-center gap-x-4 body-3"
                htmlFor="atm-3"
              >
                <Image
                  src={"/bankIcon/bri.png"}
                  width={50}
                  height={30}
                  alt="bankIcon"
                />
                BRI
              </label>
              <input
                type="radio"
                className="appearance-none"
                name="atm"
                id="atm-3"
                value={"bri"}
              />
            </div>
            <div className="border-2 rounded-sm w-full py-2 flex justify-between items-center px-4 focus-within:border-primary-violet-bright/50 focus-within:border-2">
              <label
                className="w-full flex items-center gap-x-4 body-3"
                htmlFor="atm-4"
              >
                <Image
                  src={"/bankIcon/bsi.png"}
                  width={50}
                  height={30}
                  alt="bankIcon"
                />
                BSI
              </label>
              <input
                type="radio"
                className="appearance-none"
                name="atm"
                id="atm-4"
                value={"bsi"}
              />
            </div>
            <div className="border-2 rounded-sm w-full py-2 flex justify-between items-center px-4 focus-within:border-primary-violet-bright/50 focus-within:border-2">
              <label
                className="w-full flex items-center gap-x-4 body-3"
                htmlFor="atm-5"
              >
                <Image
                  src={"/bankIcon/mandiri.png"}
                  width={50}
                  height={30}
                  alt="bankIcon"
                />
                Mandiri
              </label>
              <input
                type="radio"
                className="appearance-none"
                name="atm"
                id="atm-5"
                value={"mandiri"}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="sub-4 md:sub-3 pb-2">Biaya lebih hemat!</p>
            <div className="select-none w-full flex justify-between items-center text-muted-foreground title-4 border border-slate-500 rounded-sm p-2">
              Pilih/Masukkan Voucher di sini
              <TicketPercent className="w-4 h-4 text-primary-violet-bright" />
            </div>
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

export default PaymentPage;
