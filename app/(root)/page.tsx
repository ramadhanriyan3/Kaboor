import ProductCard from "@/components/productCard";
import Image from "next/image";
import { destinationtList, bestMaskapai, bankIcon } from "@/lib/constant";
import { Button } from "@/components/ui/button";
import {
  RiInstagramLine,
  RiYoutubeLine,
  RiFacebookBoxLine,
  RiTwitterXLine,
} from "react-icons/ri";

export default function Home() {
  return (
    <main className="w-full ">
      <div className="bg-[url('/plane.png')] bg-center h-[480px] w-full bg-cover flex items-center justify-center">
        <div>logo logo</div>
      </div>
      <div className="bg-white flex flex-col gap-y-5 md:gap-y-10 md:p-10 p-5 cursor-pointer  ">
        <div>
          <Image
            src={"/voucher.png"}
            width={1334}
            height={425}
            alt="voucher"
            priority
          />
        </div>
        <div>
          <h3 className="md:md:heading-3 heading-5 mb-2 heading-5">
            Terakhir dilihat
          </h3>
          <div className="flex items-center md:gap-x-10 gap-x-4  justify-normal">
            <div className="relative rounded-xl w-full aspect-video">
              <Image alt="stasiun image" src={"/manggarai.png"} fill />
              <p className="absolute text-white md:sub-3 lg:sub-2 xl:sub-1 sub-5 left-[5%] bottom-[10%]">
                Stasiun Maggarai
              </p>
            </div>
            <div className="relative rounded-xl w-full aspect-video">
              <Image alt="stasiun image" src={"/soekarno.png"} fill />
              <p className="absolute text-white md:sub-3 lg:sub-2 sub-5 left-[5%] bottom-[10%]">
                Bandara Soekarno Hatta
              </p>
            </div>
            <div className="relative rounded-xl w-full aspect-video">
              <Image alt="stasiun image" src={"/igusti.png"} fill />
              <p className="absolute text-white md:sub-3 lg:sub-2 xl:sub-1 sub-5 left-[5%] bottom-[10%]">
                Bandara I Gusti Nurah Rai
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="md:md:heading-3 heading-5 mb-1 heading-5">
            Destinasi Favorit
          </h3>
          <p className="max-w-md text-neutral-400 sub-3 md:sub-2 mb-2">
            Terbang ke destinasi di Indonesia dan Internasional makin murah
            dengan promo akhir tahun
          </p>
          <div className="flex w-full gap-y-4 justify-between gap-2">
            {destinationtList.map((destination) => (
              <ProductCard
                key={destination.label}
                classSeat={destination.classSeat}
                label={destination.label}
                imageUrl="/ntt.png"
                price={destination.price}
                reviewer={destination.reviewer}
                star={destination.star}
              />
            ))}
          </div>
          <Button
            type="button"
            className="btn-primary self-center md:mt-5 mt-3"
          >
            Lihat Semua
          </Button>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="md:md:heading-3 heading-5 mb-1 heading-5">
            Rekomendasi Maskapai Terbaik
          </h3>
          <p className="max-w-md text-neutral-400 sub-3 md:sub-2 mb-2">
            Nikmati perjalanan Anda dengan rekomendasi maskapai terbaik kami.
            Pilih maskapai ideal untuk pengalaman terbang tak terlupakan!
          </p>
          <div className="flex w-full gap-y-4 justify-between gap-2">
            {bestMaskapai.map((maskapai) => (
              <ProductCard
                key={maskapai.label}
                classSeat={maskapai.classSeat}
                label={maskapai.label}
                imageUrl="/ntt.png"
                price={maskapai.price}
                reviewer={maskapai.reviewer}
                star={maskapai.star}
              />
            ))}
          </div>
          <Button
            type="button"
            className="btn-primary self-center md:mt-5 mt-3"
          >
            Lihat Semua
          </Button>
        </div>
      </div>
      <div className="bg-primary-violet-bright py-5 px-2 md:items-start justify-between md:px-5 w-full flex flex-col gap-x-5 md:flex-row gap-y-4  ">
        <div className="flex  w-fit max-w-xs flex-col mx-auto md:mx-0">
          <Image
            src={"/kaboor-logo-white.svg"}
            alt="kaboor-icon"
            width={260}
            height={60}
          />
          <h4 className="text-white md:heading-3 heading-5">
            Payment Partners
          </h4>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {bankIcon.map((icon, index) => (
              <div
                key={index}
                className="bg-white rounded-md relative
               w-[85px] h-12 box-border"
              >
                <Image
                  alt="iconBank"
                  src={icon}
                  fill
                  className="p-2 object-contain"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-around w-full md:max-w-md lg:max-w-lg gap-x-4">
          <div className="w-fit flex flex-col text-white">
            <h3 className="md:heading-3 heading-5">Dukungan</h3>
            <p className="md:sub-2 sub-4 cursor-pointer hover:underline">
              Pusat bantuan
            </p>
            <p className="md:sub-2 sub-4 cursor-pointer hover:underline">
              Kebijakan privasi
            </p>
            <p className="md:sub-2 sub-4 cursor-pointer hover:underline">
              Syarat & Ketentuan
            </p>
          </div>
          <div className="w-fit flex flex-col text-white">
            <h3 className="md:heading-3 heading-5">Tentang Kaboor</h3>
            <p className="md:sub-2 sub-4 cursor-pointer hover:underline">
              Kontak kami
            </p>
            <p className="md:sub-2 sub-4 cursor-pointer hover:underline">
              Pusat Bantuan
            </p>
            <p className="md:sub-2 sub-4 cursor-pointer hover:underline">
              Tentang kami
            </p>
            <div className="flex gap-x-2 mt-4">
              <RiInstagramLine className="text-white w-5 cursor-pointer  aspect-square " />
              <RiFacebookBoxLine className="text-white w-5 cursor-pointer aspect-square " />
              <RiTwitterXLine className="text-white w-5 cursor-pointer aspect-square " />
              <RiYoutubeLine className="text-white w-5 cursor-pointer aspect-square " />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
