"use client"
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const NetworkListener = () => {
    useEffect(() => {
        const handleOffline = () => {
            toast.error("You are Offline.check your internet connection.");
        };

        const handleOnline = () => {
            toast.success("Back online!");
        };

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        }
    }, []);
    return <Toaster/>
}

export default NetworkListener;