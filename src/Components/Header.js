import React from 'react'
import PersonTracker from "./PersonTracker";
import {useContext} from "react";
//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout


//button names contained here


//back button


//reset button




const Header = () => {

    const {name, updateName} = useContext(PersonTracker)

    return <div>
Hello
    </div>
}

export default Header