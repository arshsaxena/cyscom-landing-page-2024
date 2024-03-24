import React, { useState } from 'react'
import pictures from './Pictures.jsx'
import '../Global.css'

//The menu items
const MenuItems = ["All", "HackOverflow 2022", "Cyber Defenders 2022", "2020HACK", "ICRTAC 2018", "ICRTAC 2019", "Inauguration", "OPENGOV", "Tetraflip", "WASPCON"];

const PictureCard = () => {


    const [activeMenu, setActiveMenu] = useState("All");




    //Creates the Menu above the gallery
    function createPictureMenu(text) {

        function handleClick(e) {
            setActiveMenu(e.target.innerText);
        }

        return (
            <div onClick={handleClick} className={activeMenu == text ? "bg-[#122a80] text-white rounded-[50px] hover:duration-300 hover:ease-in-out hover:cursor-pointer px-4 py-2" : "hover:duration-300 hover:ease-in-out hover:cursor-pointer hover:bg-[#88b7fd] hover:text-white hover:rounded-[50px] text-[#6C6C6C] px-4 py-2"} key={text}>
                <p>{text}</p>
            </div>
        )
    }





    //Creates each picture card in the gallery
    function createPictureCard(image) {

        const [moused, setMoused] = useState(false)

        function mousedOver() {
            setMoused(!moused)
        }

        return (
            <div key={image.id} className={activeMenu == image.text || activeMenu == "All" ? "flex justify-center items-center text-center p-3 hover:z-50 relative" : "hidden"}>
                <img
                    className="md:w-[80vw] w-[20vw] hover:scale-110 hover:brightness-50 hover:duration-500 duration-500 rounded-2xl border border-solid border-[#e7e7e7] hover:border-[#e7e7e7]"
                    onMouseOver={mousedOver}
                    onMouseOut={mousedOver}
                    src={activeMenu == image.text || activeMenu == "All" ? image.imgURL : null}
                    alt={activeMenu == image.text || activeMenu == "All" ? image.text : null}
                />
                {moused && (
                    <p className="pointer-events-none text-center text-white text-2xl font-bold transform-150 absolute">
                        {activeMenu == image.text || activeMenu == "All" ? image.text : null}
                    </p>
                )}
            </div>
        )
    }




    //Rendering both the menu and the gallery
    return (
        <div className="m-auto max-w-[1250px] w-[100%] md:w-[90%] flex flex-col justify-center items-center">
            <div className="flex justify-center text-center flex-wrap w-5/6 md:w-[100%] md:mb-5">
                {MenuItems.map(createPictureMenu)}
            </div>
            <div className="flex flex-wrap text-center justify-center ">
                {pictures.map(createPictureCard)}
            </div>
        </div>
    )

}

export default PictureCard
export { pictures }
