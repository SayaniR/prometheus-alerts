import React, { useState } from 'react';
import icon from '../assets/icons/icon.png'
import AlertModal from './AlertModal';
const AlertContainer = ({ alerts }) => {
    
    const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
    return (
        <>
            <div class="ml-6 mr-10">

                {alerts['groups'].map((alert) => (
                    <div >
                        <div className='text-[#94A3B8] text-2xs bold ml-20 mt-10 p-4'>
                            {alert['name'].toUpperCase()}
                        </div>
                        <div class="grid grid-cols-3 gap-4 w-[67rem] p-4 h-auto mt-6 mx-20">
                            {alert['services'].map((obj) => (

                                <div class="bg-white border border-gray-200 rounded-lg w-auto h-[12rem] shadow-md p-4">
                                    <div>
                                        <div className='flex '>
                                            <img className='w-6 h-6' src={icon} />
                                            <h3 class="text-sm font-bold text-[#475569] ml-2">{obj['name']}</h3>
                                        </div>
                                        <p class="text-sm text-[#94A3B8] text-500 mt-2 p-2x h-[4rem] overflow-hidden text-ellipsis">

                                            <span class="flex items-center flex-wrap ">
                                                <p class='text-[#94A3B8] font-bold bg-[#F1F5F9] w-[70px] mr-2 '>
                                                    {obj['exporters'][0]['rules']?.length} RULES
                                                </p>
                                                {/* <span class="inline"> */}
                                                {
                                                    obj['exporters'][0]['rules']?.map((rule,index) => (
                                                        <span class="inline">
                                                            {rule['name']}{index !== obj['exporters'][0]['rules'].length - 1 && ','}&nbsp;
                                                            </span>
                                                    ))
                                                }
                                                {/* </span> */}
                                            </span>
                                        </p>
                                    </div>
                                    <button onClick={toggleModal} className="mt-4 px-6 py-2 mx-2 w-[18rem] rounded-md border-[#E2E8F0] text-[#475569] border-[1px]">
                                        View Alert Rules
                                    </button>
                                    {/* <AlertModal isOpen={isOpen} toggleModal={toggleModal}/> */}
                                </div>

                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}

export default AlertContainer;
