import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva("text-white", {
  variants: {
    size: {
      md: "h-5 w-5",
      default: "h-4 w-4",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type IconVariantsProps = VariantProps<typeof iconVariants>;

interface IconBadgeProps extends IconVariantsProps {
  icon: LucideIcon;
}
const IconBadge = ({ icon: Icon, size }: IconBadgeProps) => {
  return (
    <div className="bg-main p-2 aspect-square flex items-center justify-center rounded-full">
      <Icon className={cn(iconVariants({ size }))} />
    </div>
  );
};

export default IconBadge;
