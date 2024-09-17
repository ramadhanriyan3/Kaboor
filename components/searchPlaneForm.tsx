"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

import {
  Armchair,
  CalendarCheck,
  Calendar as CalendarIcon,
  PlaneLanding,
  PlaneTakeoff,
  UsersRound,
} from "lucide-react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RiSwapLine } from "react-icons/ri";
import { Switch } from "./ui/switch";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import PassengerForm from "./passengerForm";
import { useAppSelector } from "@/lib/hooks";
import { selectClassSeat, selectPassenger } from "@/lib/features/bookingScile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { airports } from "@/lib/dummyData/airport";
import IconBadge from "./iconBade";

const formSchema = z.object({
  origin: z.string({ required_error: "Please select your origin" }),
  destination: z.string({ required_error: "Please select your destination" }),
  departureDate: z.date({ required_error: "Please select you departure date" }),
  returnDate: z.date().optional(),
  //   passanger: z.object({
  //     childrend: z.number(),
  //     adult: z.number(),
  //   }),
  classSeat: z.string({ required_error: "Please select your class seat" }),
});

const SearchPlaneForm = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  const passenger = useAppSelector(selectPassenger);
  const classSeat = useAppSelector(selectClassSeat);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    router.push("/keberangkatan");
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-5 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex w-full items-center start gap-x-4 border border-slate-400 p-4 rounded-md">
          <div className="flex w-full flex-col gap-y-3 ">
            <FormField
              control={form.control}
              name="origin"
              render={({ field }) => (
                <>
                  <div className="flex gap-x-2 w-full items-center">
                    <IconBadge icon={PlaneTakeoff} size={"md"} />
                    <FormItem className="flex flex-col w-full">
                      <FormLabel className="text-neutral-400 title-2">
                        Dari
                      </FormLabel>
                      <Popover
                        open={isOpen === "origin"}
                        onOpenChange={(open) =>
                          setIsOpen(open ? "origin" : null)
                        }
                      >
                        <PopoverTrigger
                          asChild
                          onClick={() => setIsOpen("origin")}
                        >
                          <FormControl>
                            <Button
                              variant="ghost"
                              role="combobox"
                              className={cn(
                                "rounded-none tex pb-1 p-0 h-fit justify-between border-b border-slate-600 w-full",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? `${
                                    airports.find(
                                      (airport) => airport.code === field.value
                                    )?.kota
                                  }, ${field.value}`
                                : "Select airport"}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search airport..." />
                            <CommandList>
                              <CommandEmpty>No airport found.</CommandEmpty>
                              <CommandGroup>
                                {airports.map((airport) => (
                                  <CommandItem
                                    value={airport.kota}
                                    key={airport.kota}
                                    onSelect={() => {
                                      form.setValue("origin", airport.code, {
                                        shouldValidate: true,
                                      });
                                      setIsOpen(null);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        airport.code === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {airport.kota}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  </div>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <>
                  <div className="flex gap-x-2 w-full items-center">
                    <IconBadge icon={PlaneLanding} size={"md"} />
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-neutral-400 p-0 title-2">
                        Ke
                      </FormLabel>
                      <Popover
                        open={isOpen === "destination"}
                        onOpenChange={(open) =>
                          setIsOpen(open ? "destination" : null)
                        }
                      >
                        <PopoverTrigger
                          asChild
                          onClick={() => setIsOpen("destination")}
                        >
                          <FormControl>
                            <Button
                              variant="ghost"
                              role="combobox"
                              className={cn(
                                "rounded-none pb-1 p-0 h-fit justify-between border-b border-slate-600 w-full",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? `${
                                    airports.find(
                                      (airport) => airport.code === field.value
                                    )?.kota
                                  }, ${field.value}`
                                : "Select airport"}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search airport..." />
                            <CommandList>
                              <CommandEmpty>No airport found.</CommandEmpty>
                              <CommandGroup>
                                {airports.map((airport) => (
                                  <CommandItem
                                    value={airport.kota}
                                    key={airport.kota}
                                    onSelect={() => {
                                      form.setValue(
                                        "destination",
                                        airport.code,
                                        {
                                          shouldValidate: true,
                                        }
                                      );
                                      setIsOpen(null);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        airport.code === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {airport.kota}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  </div>
                </>
              )}
            />
          </div>
          <RiSwapLine className="w-10 h-10 text-primary-violet-bright" />
        </div>
        <div className="flex flex-col w-full items-center start gap-y-4 border border-slate-400 p-4 rounded-md">
          <FormField
            control={form.control}
            name="departureDate"
            render={({ field }) => (
              <>
                <div className="flex gap-x-2 w-full items-center">
                  <IconBadge icon={CalendarCheck} size={"md"} />
                  <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-neutral-400 title-2">
                      Keberangkatan
                    </FormLabel>
                    <Popover
                      open={isOpen === "departureDate"}
                      onOpenChange={(open) => {
                        setIsOpen(open ? "departureDate" : null);
                      }}
                    >
                      <PopoverTrigger
                        onClick={() => setIsOpen("departureDate")}
                      >
                        <FormControl>
                          <div
                            className={cn(
                              "rounded-none flex pb-1 p-0 h-fit items-center  leading-0 border-b border-slate-600 w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <p className="text-sm text-start">
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </p>
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </div>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0 align-start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            if (date) {
                              form.setValue("departureDate", date);
                              setIsOpen(null);
                            }
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                </div>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="returnDate"
            render={({ field }) => (
              <>
                <div
                  className={`flex gap-x-2 w-full items-center ${
                    !isChecked && "hidden"
                  }`}
                >
                  <IconBadge icon={CalendarCheck} size={"md"} />
                  <FormItem className={`flex flex-col w-full `}>
                    <FormLabel className="text-neutral-400 title-2">
                      Kepulangan
                    </FormLabel>
                    <Popover
                      open={isOpen === "returnDate"}
                      onOpenChange={(open) => {
                        setIsOpen(open ? "returnDate" : null);
                      }}
                    >
                      <PopoverTrigger onClick={() => setIsOpen("returnDate")}>
                        <FormControl>
                          <div
                            className={cn(
                              "rounded-none flex pb-1 p-0 h-fit items-center  leading-0 border-b border-slate-600 w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <p className="text-sm text-start">
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </p>
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </div>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0 align-start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            if (date) {
                              form.setValue("returnDate", date);
                              setIsOpen(null);
                            }
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                </div>
              </>
            )}
          />
          <div className="flex h-fit -mt-2 w-fit gap-x-2 self-start items-center justify-start ">
            <Switch
              id="roundTrip"
              checked={isChecked}
              onCheckedChange={(checked) => setIsChecked(checked)}
            />
            <label
              htmlFor="roundTrip"
              className="title-4 text-neutral-400  min-w-full"
            >
              Pulang pergi
            </label>
          </div>
        </div>
        <div className="flex w-full gap-x-5 justify-between">
          <div className="flex border border-slate-400 w-fit rounded-md p-4">
            <Dialog
              open={isOpen === "passenger"}
              onOpenChange={(open) => setIsOpen(open ? "passenger" : null)}
            >
              <DialogTrigger>
                <div className="flex w-full items-center flex-start gap-x-2">
                  <IconBadge icon={UsersRound} size={"md"} />
                  <div className="flex flex-col items-start  border-b pb-2 border-slate-500 w-full">
                    <p className="title-2 text-neutral-400 pb-2">Penumpang</p>
                    {passenger.adult + passenger.children}
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle />
                <PassengerForm
                  adult={passenger.adult}
                  child={passenger.children}
                  setOpen={setIsOpen}
                />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex border border-slate-400 w-full rounded-md p-4">
            <div className="w-full flex justify-start items-center gap-x-2">
              <IconBadge icon={Armchair} size="md" />
              <div className="flex flex-col items-start  w-full border-b border-slate-500 ">
                <p className="title-2 text-neutral-400">Kelas</p>
                <FormField
                  control={form.control}
                  name="classSeat"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full  border-none p-0 px-2 focus:outline-none focus:ring-0 rounded-none">
                            <SelectValue
                              placeholder="Pilih kelas"
                              className="w-full "
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="w-full">
                          <SelectItem value="ekonomi">Ekonomi</SelectItem>
                          <SelectItem value="bisnis">Bisnis</SelectItem>
                          <SelectItem value="other">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Button type="submit" className="btn-primary w-full">
          Cari pesawat
        </Button>
      </form>
    </Form>
  );
};

export default SearchPlaneForm;
