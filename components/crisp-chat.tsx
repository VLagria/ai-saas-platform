"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("546ed9ac-ab0e-40c5-bc0d-89394bac1220");
    }, []);

    return null;
}