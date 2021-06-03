import React from 'react';
import { Container } from 'react-bootstrap';
import Slot from './Slot';

function SlotDetails({slots}) {
    if(slots != undefined && slots.length != 0) {
        return (
            <div className="container py-5">
                <h2 className="text-center">Available Slots</h2>
                {
                    slots && slots.map((slt, key) => {
                        return (
                            <Slot key={key} {...slt}/>
                        )
                    })
                }
            </div>
        ) 
    } else if(slots != undefined && slots.length == 0) {
        return (
            <h3 className="mt-4 text-center">No Slots Available</h3>
        )
    } else {
        return (
            null
        )
    }
}


export default SlotDetails