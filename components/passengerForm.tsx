import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { setPassenger } from "@/lib/features/bookingScile";

interface PassengerFormProps {
  adult: number;
  child: number;
  setOpen: (value: string | null) => void;
}

const PassengerForm = ({ adult, child, setOpen }: PassengerFormProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-y-5 px-2  pt-4">
      <div className="flex items-center justify-between">
        <p className="sub-1">Dewasa</p>
        <div className="flex items-center justify-between max-2-[150px] gap-x-2">
          <Button
            type="button"
            onClick={() =>
              dispatch(setPassenger({ adult: adult - 1, children: child }))
            }
            className="btn-primary rounded-full p-2"
            disabled={adult < 1}
          >
            <Minus />
          </Button>
          <input
            type="number"
            readOnly
            value={adult}
            className="text-center cursor-default border-b border-slate-500 focus:ring-0 focus:outline-none"
          />
          <Button
            type="button"
            onClick={() =>
              dispatch(setPassenger({ adult: adult + 1, children: child }))
            }
            className="btn-primary rounded-full p-2"
          >
            <Plus />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="sub-1">Anak-anak</p>
        <div className="flex items-center justify-between max-2-[150px] gap-x-2">
          <Button
            onClick={() =>
              dispatch(setPassenger({ adult: adult, children: child - 1 }))
            }
            className="btn-primary rounded-full p-2"
            disabled={child < 1}
          >
            <Minus />
          </Button>
          <input
            type="number"
            readOnly
            value={child}
            className="text-center cursor-default border-b border-slate-500 focus:ring-0 focus:outline-none"
          />
          <Button
            type="button"
            onClick={() =>
              dispatch(setPassenger({ adult: adult, children: child + 1 }))
            }
            className="btn-primary rounded-full p-2"
          >
            <Plus />
          </Button>
        </div>
      </div>
      <Button
        type="button"
        onClick={() => setOpen(null)}
        className="btn-primary w-full"
      >
        Selesai
      </Button>
    </div>
  );
};

export default PassengerForm;
