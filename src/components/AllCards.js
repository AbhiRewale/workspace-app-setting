import React from 'react';
import { useState } from 'react';
import { Text } from 'samespace-zen';
import SingleCard from './SingleCard';
import groupApps from '../images-assets/groupApps.svg'
import asana from '../images-assets/asana.svg';
import todoist from '../images-assets/todoist.svg';
import github from '../images-assets/github.svg';
import jira from '../images-assets/jira.svg';
import trello from '../images-assets/trello.svg';
import slack from '../images-assets/slack.svg';
import wrike from '../images-assets/wrike.svg';
import gitlab from '../images-assets/gitlab.svg'



const AllCards = () => {
    const [apps, setApps] = useState([
        { id: 1, appLogoSrc: asana, softwareName: 'Asana', isConnected: false },
        { id: 2, appLogoSrc: todoist, softwareName: 'Todoist', isConnected: false },
        { id: 3, appLogoSrc: github, softwareName: 'Github', isConnected: false },
        { id: 4, appLogoSrc: jira, softwareName: 'Jira', isConnected: false },
        { id: 5, appLogoSrc: trello, softwareName: 'Trello', isConnected: false },
        { id: 6, appLogoSrc: slack, softwareName: 'Slack', isConnected: false },
        { id: 7, appLogoSrc: wrike, softwareName: 'Wrike', isConnected: false },
        { id: 8, appLogoSrc: gitlab, softwareName: 'Gitlab', isConnected: false }
    ])
    return (
        <>
            <div className=" md:max-w-[1080px] w-full p-8  mx-auto  space-y-1.5">
                <div className="flex ml-12 xl:ml-0 mb-6 space-x-4">
                    <img src={groupApps} alt="" />
                    <Text weight="bold" case="capitalize" size="lg" label="Apps"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-8 justify-items-center">

                <SingleCard card={apps} />
                </div>
            </div>
            
        </>
    )
}
export default AllCards;

//max-w-[1080px]  p-8  mx-auto w-full space-y-1.5


//max-w-[1080px] p-8 mx-auto w-fulldiv className=' max-w-[1080px] p-8 mx-auto w-full'>
            
            // <span><img src={groupApps} alt="" /></span>
            // <Text className="bg-red-700" label="Apps"/>
            

            // <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8 justify-items-center">
            // <SingleCard card={apps} />
            // </div>
            // </div>



// max-w-full mx-40 my-24  gap-x-7 gap-y-6  lg:mx-40  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-2 xl:grid-cols-3   2xl:grid-cols-4




// mx-40 my-24 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-6




// gap-y-6 md:grid-cols-1 md:gap-y-6 lg:grid-cols-3 lg:gap-6 xl:grid-cols-3 xl:gap-6 2xl:grid-cols-4 2xl:gap-6