import React from 'react';
import icon1 from '../assets/icons/Vector (1).png';
import icon2 from '../assets/icons/Vector.png';
import gitIcon from '../assets/icons/git-icon.png'
const Header = () => {
    return (
        
        <div class="border-b border-[#E2E8F0] ">
            <div class="flex justify-start px-10 ml-20 mt-2 mb-2">

                <div >
                    <img src={icon1} alt="Logo" className="w-6 h-6 mt-2" />
                    <img src={icon2} alt="Logo" className="w-6 h-6 mt-2" />
                </div>

                <div class='ml-6 mr-[820px]'>
                    <h1 className="text-md  text-[#475569]">Awesome</h1>
                    <h1 className="text-md  text-[#475569]">Prometheus</h1>
                    <h1 className="text-md  text-[#475569]">Toolkit</h1>
                </div>
                <div >
                    <img src={gitIcon} alt="Logo" className="w-6 h-6 mt-10" />
                </div>
                <div className="mt-10">125 stars</div>
            </div>

        </div>
        

    );
};

export default Header;

