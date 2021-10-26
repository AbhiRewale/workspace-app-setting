import React from 'react';
import {useState} from 'react'
import { Text, Button } from 'samespace-zen'

const SingleCard = ({ card }) => {
    const [uniqueId, setUniqueId] = useState()
    // console.log(typeof(uniqueId));

    return (
        <>
            {
                card.map((data) => (
                    <>
                        <div className="max-w-xs w-full  rounded bg-white-400 shadow-cardShadow p-8 space-y-4 flex flex-col items-center ">
                            <div className="h-[80px]"><img className="w-full h-full object-cover" src={data.appLogoSrc} alt="app-logo" /></div>
                            <Text label={data.softwareName} weight="bold" case="capitalize" size="sm" />
                            <Button onClick={()=> setUniqueId(data.id)}   title={(uniqueId === data.id) ? 'Connected' : 'Connect' } accent={(uniqueId === data.id) ? 'primary' : 'contrast' } shape="rounded" type="lined" size="small" />
                        </div>
                    </>
                ))
            }


        </>
    )
}
export default SingleCard;



// w-64 h-56 shadow-xl bg-white rounded-lg flex flex-col items-center justify-evenly max-w-sm/