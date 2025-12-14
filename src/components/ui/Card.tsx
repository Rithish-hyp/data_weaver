import React from 'react';
import { cn } from "../../lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "bg-space-800/50 backdrop-blur-md border border-space-700 rounded-xl p-6 shadow-xl",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};
