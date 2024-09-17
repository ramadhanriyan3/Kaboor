import Image from "next/image";

interface ProductCardProps {
  label: string;
  classSeat: string;
  price: number;
  star: number;
  reviewer: number;
  imageUrl: string;
}

const ProductCard = ({
  label,
  imageUrl,
  classSeat,
  price,
  star,
  reviewer,
}: ProductCardProps) => {
  return (
    <div className="bg-white cursor-pointer border drop-shadow-lg rounded-lg gap-2 md:gap-4 lg:gap-y-4 flex pb-2 flex-col">
      <div className="relative rounded-t-md w-fit">
        <Image src={imageUrl} height={182} width={384} alt={label} />
        <div className="btn-primary px-2 rounded-full md:sub-3 sub-6 absolute right-[5%] text-white top-[10%] ">
          Promo Terbaik
        </div>
      </div>
      <div className="flex flex-col gap-y-5 md:gap-y-8 lg:gap-y-[60px] justify-between  md:px-2 px-1">
        <div className="flex justify-between gap-2 md:gap-4 items-center">
          <div className="flex flex-col">
            <h3 className="sub-6 md:sub-3 lg:sub-1">{label}</h3>
            <p className="md:title-4 lg:title-2 title-6 text-neutral-400">
              {classSeat}
            </p>
          </div>
          <div className="flex flex-col text-end">
            <div className="md:title-4 lg:title-2 title-6 text-neutral-400">
              {star}
            </div>
            <p className="md:title-4 lg:title-2 title-6 text-neutral-400">
              {star} review
            </p>
          </div>
        </div>
        <div className="flex flex-col md:gap-y-2 ">
          <p className="md:title-4 lg:title-2 title-6 text-neutral-400">
            Mulai dari
          </p>
          <p className="gradient-text sub-5 lg:heading-4 md:sub-2">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
