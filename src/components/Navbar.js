import React from 'react';
import samespaceLogo from '../images-assets/samespaceLogo.svg';
import arrowLeft from '../images-assets/arrowLeft.svg';
import arrowRight from '../images-assets/arrowRight.svg';
import avatar from '../images-assets/avatar.svg';
import fourBox from '../images-assets/fourBox.svg';
import { Text, SearchBar } from 'samespace-zen';


const Navbar = () => {
    return (
        <>
            <div className="container max-w-full bg-gray-900 h-12 flex justify-between items-center">
                <div className="flex">
                <div className="flex items-center mr-16 ml-4 ">
                    <img src={samespaceLogo} alt="samespaceLogo" className="mr-2 " />
                    <Text label="Workspace" color="white" />
                </div>

                <div className="flex items-center space-x-2">
                    <img src={arrowLeft} alt="leftPointer" />
                    <img src={arrowRight} alt="rightPointer"  />
                     <SearchBar shape="default" placeholder="Team,Project or User" size="small"/>
                </div>
                </div>

                <div className="flex items-center mr-4">
                    <img src={fourBox} alt="boxes" className="mr-6" />
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </>
    )
}

export default Navbar;