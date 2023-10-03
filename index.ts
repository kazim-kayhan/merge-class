import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function mc(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}