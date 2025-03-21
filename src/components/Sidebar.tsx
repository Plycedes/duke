"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-10 h-10 mr-4">
                        <Image
                            fill
                            alt="Logo"
                            src="https://img.icons8.com/?size=100&id=bIKEtXJBjGxo&format=png&color=F25081"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>Duke</h1>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
