import Link from "next/link";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type props = {
	href: string;
	label: string;
	isActive: boolean;
};

function NavButton({ href, label, isActive }: props) {
	return (
		<Button
			asChild
			size="sm"
			variant="link"
			className={cn(
				"w-full lg:w-auto text-lg text-black dark:text-white justify-between hover:bg-white/20 dark:hover:text-[#A6CFD5] border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/30 transition",
			)}
		>
			<Link href={href}>{label}</Link>
		</Button>
	);
}

export default NavButton;
