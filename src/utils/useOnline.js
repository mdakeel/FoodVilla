import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    
    useEffect(() => {

        // code 1 for child developers
        // window.addEventListener("online", () => {
        //     setIsOnline(true)
        // })

        // window.addEventListener("offline", () => {
        //     setIsOnline(false)
        // })

        // code 2 for senior developers

        const handleOnline = () => {
            setIsOnline(true);
        }

        const handleOffline = () => {
            setIsOnline(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    })

    return isOnline;
}

export default useOnline;