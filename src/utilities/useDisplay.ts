import { useState } from "react";



const useDisplay = () => {
    const [show, setShow] = useState(true);


 return [show, setShow];
}

export default useDisplay