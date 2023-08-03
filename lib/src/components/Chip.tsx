import { ChipColorKey, ChipColorScheme } from "../types";
import { getColorSchemeForKey } from "../core/util/chip_utils";
import { cn } from "./util/cn";

export interface ChipProps {
    className?: string;
    children: React.ReactNode;
    size?: "small" | "medium";
    colorScheme?: ChipColorScheme | ChipColorKey;
    error?: boolean;
    outlined?: boolean;
    onClick?: () => void;
    icon?: React.ReactNode;
}

/**
 * @category Preview components
 */
export function Chip({
                         children,
                         colorScheme,
                         error,
                         outlined,
                         onClick,
                         icon,
                         size,
                         className
                     }: ChipProps) {

    const usedColorScheme = typeof colorScheme === "string" ? getColorSchemeForKey(colorScheme) : colorScheme;
    return (
        <div
            className={cn("rounded-lg w-fit h-fit font-regular inline-flex items-center gap-1",
                "truncate",
                // "font-medium",
                onClick ? "cursor-pointer hover:bg-gray-300 hover:dark:bg-gray-700" : "",
                // size === "small" ? "text-xs" :
                    "text-sm",
                size === "small" ? "px-3 py-1" : "px-4 py-1.5",
                error || !usedColorScheme ? "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200" : "",
                error ? "text-red-500 dark:text-red-400" : "",
                className)}
            onClick={onClick}
            style={{
                backgroundColor: error || !usedColorScheme ? undefined : usedColorScheme.color,
                color: error || !usedColorScheme ? undefined : usedColorScheme.text
            }}
        >
            {children}
            {icon}
        </div>
    );
}
