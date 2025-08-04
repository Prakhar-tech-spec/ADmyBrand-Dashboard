
"use client";

import { ToasterRef } from "@/components/ui/toast";
import React, { createContext, useContext } from "react";

interface ToasterContextProps {
    toasterRef: React.RefObject<ToasterRef>;
}

export const ToasterContext = createContext<ToasterContextProps | undefined>(undefined);

export const useAppToast = () => {
    const context = useContext(ToasterContext);
    if (!context) {
        throw new Error("useAppToast must be used within a ToasterProvider");
    }
    return context;
}
