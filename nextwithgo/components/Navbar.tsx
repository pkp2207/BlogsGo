"use client"
import { useState } from 'react';
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS module for styling
import ThemeToggle from './ThemeToggle';
import NavButton from './NavButton';
import { usePathname, useRouter } from "next/navigation";
import { Button } from './ui/button';

const routes = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/blogs",
		label: "Blogs",
	},
	{
		href: "/blogs/compose",
		label: "Create New Blog",
	},
	{
		href: "/about",
		label: "About",
	},
];

const Navbar: React.FC = () => {
	const [isopen, setIsOpen] = useState(false);

	const router = useRouter();
	const pathname = usePathname();
	const isMobile = useMedia("(max-width: 1024px)", false);

	const onClick = (href: string) => {
		router.push(href);
		setIsOpen(false);
	};

	if (isMobile) {
		return (
			<Sheet open={isopen} onOpenChange={setIsOpen}>
				<SheetTrigger>
					<Button
						variant="outline"
						size="sm"
						className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
					>
						<Menu className="size-4" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="px-2">
					<nav className="flex flex-col gap-y-2 pt-6">
						{routes.map(route => (
							<Button
								variant={route.href === pathname ? "secondary" : "ghost"}
								key={route.href}
								onClick={() => onClick(route.href)}
								className="w-full justify-start"
							>
								{route.label}
							</Button>
						))}
					</nav>
				</SheetContent>
			</Sheet>
		);
	}

  return (
	<nav className="md:flex items-center gap-2 overflow-x-auto">
		{routes.map(route => (
			<NavButton
				key={route.href}
				href={route.href}
				label={route.label}
				isActive={pathname === route.href}
			/>
		))}
	</nav>
);
};

export default Navbar;