import { twMerge } from "tailwind-merge"
import clsx, { ClassValue } from "clsx"

//Class Names
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}
