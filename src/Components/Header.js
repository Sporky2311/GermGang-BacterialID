import React from 'react'
import PersonTracker from "./PersonTracker";
import {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Alert, Breadcrumb} from 'react-bootstrap';
//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button


const Header = (props) => {

    //button/node objects from the context that are being updated
    const {buttonNameArray, updateArray} = useContext(PersonTracker)  //this is the information needed. The array of buttons names and the update array function

    function goBack() {

        if(buttonNameArray.length > 1) {

            //create a copy
            let newArray = [...buttonNameArray]

            //remove the last thing from the copy
            newArray.pop()

            //update the global array with the copy
            updateArray(newArray)

            //test to make sure it fires
            console.log("sliced")
        }

    }

    function reset() {

        if(buttonNameArray.length > 1) {

            //create a copy
            let newArray = [...buttonNameArray]

            //remove the last thing from the copy
            newArray.splice(1)

            //update the global array with the copy
            updateArray(newArray)

            //test to make sure it fires
            console.log("sliced and reset")
        }

    }

    //use the getname function here to get a germ object.

    return <div>
            <Button variant="secondary" onClick={()=> {

                goBack();

            }}>Back</Button>


    </div>
}

export default Header