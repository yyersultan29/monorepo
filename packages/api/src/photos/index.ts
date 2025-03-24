import axios from "axios";
import { useEffect, useState } from "react"
import { PhotoResponse } from "./response";


export const usePhotos = () => {

    const [photos,setPhotos] = useState<PhotoResponse[]>([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState<unknown>(null);

    useEffect(() => {
        const getPhotos = async() => {
            try{
                const resp  = await axios.get("https://picsum.photos/v2/list")
                setPhotos(resp.data as Array<PhotoResponse>);
            }catch(e) {
                setError(e as unknown);
            }finally {
                setIsLoading(false);
            }   
        }
        getPhotos();
    },[]);

    return {
        photos,
        isLoading,
        error
    }
}