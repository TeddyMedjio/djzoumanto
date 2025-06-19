import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const navigation = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export function NavMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon size={30} className="md:hidden" />
      </SheetTrigger>
      <SheetContent
        side="top"
        className={`${cn("pb-10 border-secondary bg-background")}`}
      >
        <SheetHeader className={`${cn("border-b border-white/5")}`}>
          <SheetTitle>
            <Link href="/" className="font-clash flex-1/3 text-2xl">
              <span className="text-secondary">DJ</span>ZOUMANTO
            </Link>
          </SheetTitle>
        </SheetHeader>
        <ul className="px-5 flex flex-col gap-5 text-white/75  ">
          {navigation.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.link}
                className="hover:text-secondary text-lg transition duration-300 ease-in-out"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
