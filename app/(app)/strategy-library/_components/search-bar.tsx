"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function SearchBar() {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log("submitted");
    // };

    return (
        <div className="max-w-[18rem] w-full">
            <div className="relative">
                <Input
                    onChange={handleChange}
                    className="rounded-xl h-8 bg-muted pl-8 border-2 border-muted-foreground"
                    placeholder="Search Strategies.."
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    <SearchIcon size={14} strokeWidth={3} />
                </span>
            </div>
        </div>
    );
}
