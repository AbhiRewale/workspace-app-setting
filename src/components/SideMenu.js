import React from 'react';
import checkCircle from '../images-assets/checkCircle.svg'
import pieChart from "../images-assets/pieChart.svg"
import user from '../images-assets/user.svg'
import users from '../images-assets/users.svg'
import layer from '../images-assets/layer.svg'
import group from '../images-assets/group.svg'
import setting from '../images-assets/setting.svg'
import questionHelp from '../images-assets/questionHelp.svg';
import bell from '../images-assets/bell.svg'


const SideMenu = () => {

    const navData = [checkCircle, pieChart, user, users, layer, group , setting];

    return (
        <>
            <div className=" h-screen bg-white flex flex-col justify-between fixed left-0">
                <div>

                    {
                        navData.map((eachData, id) => {
                            return (
                                <img key={id} className=" hover:bg-gray-300 rounded-lg p-3.5 cursor-pointer" src={eachData} alt={eachData} />
                            )
                        })
                    }

                    

                </div>

                <div className="mb-16">
                    <img className="hover:bg-gray-300 rounded-lg p-3.5 cursor-pointer" src={questionHelp} alt="" />
                    <img className=" hover:bg-gray-300 rounded-lg p-3.5 cursor-pointer" src={bell} alt="" />
                </div>
            </div>

        </>
    )
}

export default SideMenu;