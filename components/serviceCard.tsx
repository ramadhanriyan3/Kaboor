import { formatPrice } from "@/lib/formatedFunction";
import { ShieldPlus, PlusCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  price: number;
  children?: React.ReactNode;
}

const ServiceCard = ({ title, children, price }: ServiceCardProps) => {
  return (
    <div>
      <div className="w-full rounded-t-md border-t border-x border-slate-400 select-none">
        <div className="px-2 py-1 border-b border-slate-400 flex items-center sub-3 gap-x-2 ">
          <ShieldPlus className="text-primary-violet-bright w-5 h-5  " />
          {title}
        </div>
        <div className="px-2 py-1">{children}</div>
      </div>
      <div className="select-none bg-main rounded-b-md text-white px-2 py-1 flex items-center justify-between heading-6">
        {formatPrice(price)}
        {"/pax"}
        <PlusCircle className={"text-white w-4 h-4 cursor-pointer"} />
      </div>
    </div>
  );
};

export default ServiceCard;
