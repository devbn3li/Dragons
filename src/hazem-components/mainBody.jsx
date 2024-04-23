import React from "react";

function MainBody() {
    return (
        <>
            <div className='header bg-black'>
                <div className='container mx-auto flex justify-between items-center	'>
                    <div className="colored flex">
                        <div className="red w-4 h-4 bg-red-500 rounded-full mr-1 "></div>
                        <div className="yellow w-4 h-4 bg-yellow-500 rounded-full mr-1 "></div>
                        <div className="blue w-4 h-4 bg-green-500 rounded-full mr-1"></div>
                    </div>
                    <div className="text text-white text-center bg-background rounded-3xl w-3/5">
                        <p className='text-xl'> zentero.com </p>
                    </div>
                    <div className="boxs flex">
                        <div className="box bg-gray-500 w-4 h-4 rounded-lg mr-1 "></div>
                        <div className="box bg-gray-500 w-4 h-4 rounded-lg mr-1 "></div>
                    </div>
                </div>
            </div>
            <div className="body bg-black mt-9">
                <div className="container flex mx-auto gap-4 ">
                    <div className="side-bar text-white w-3/12">
                        <div className="head border-b border-gray p-3">
                            <h1 className=" text-3xl italic text-white ">Zentro</h1>
                            <p className=" text-blue-700 text-sm ">12members</p>
                        </div>
                        <div className="general pb-4">
                            <p className=" text-background uppercase p-2">GENRAL</p>
                            <ul>
                                <li className=" p-2">Search</li>
                                <li className=" p-2"> Billing</li>
                            </ul>
                        </div>
                        <div className="projects">
                            <p className=" text-background uppercase p-2">PROJECTS</p>
                            <ul>
                                <li className=" p-2 bg-background rounded-lg "> Oribital oddysey</li>
                                <li className=" p-2"> Digital Product launch</li>
                                <li className=" p-2">Brand Fresh</li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-content flex-1 text-white">
                        <div className="sub-head flex justify-between items-center ">
                            <div className="text">
                                <h1 className="  text-3xl ">Jappanese Pottery</h1>
                                <p className=" text-borderColor pt-3">Marketing Campaign for a new TV series Launch</p>
                            </div>
                            <div className="left flex justify-between items-center w-3/12">
                                <div className="images flex">
                                    <div className="image">
                                        <img src="/public/photos/download2.jpeg" alt="" className=" w-12 h-12 rounded-full -mr-2" />
                                    </div>
                                    <div className="image">
                                        <img src="/public/photos/download3.jpeg" alt="" className=" w-12 h-12 rounded-full -mr-2" />
                                    </div>
                                    <div className="image">
                                        <img src="/public/photos/download4.jpeg" alt="" className=" w-12 h-12 rounded-full -mr-2" />
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="button bg-background border-none text-borderColor p-2 rounded-lg">share</div>
                                </div>
                            </div>
                        </div>
                        <div className="nav mt-5">
                            <ul className=" flex">
                                <li className=" text-TextColor p-4   border-b border-TextColor  ">Tool</li>
                                <li className=" text-borderColor p-4 ">chat</li>
                                <li className=" text-borderColor p-4 ">Library</li>
                            </ul>
                        </div>
                        <div className="content">
                            <div className="text max-w-4xl text-center">
                                <h1 className=' text-2xl'>Just Sign Up & Get a Free
                                    Demo of Zentro</h1>
                                <p className='mt-4 p-5 text-sm text-borderColor'>Aliquam et tellus urna. Phasellus egetadipiscing elit. Mauris id nunc odio.
                                    Aliquam et tellus urna. Phasellus egetl</p>
                            </div>
                            <div className="boxes flex justify-evenly items-center ">
                                <div className="box text-center ">
                                    <p className="p-2">Chat bot Creation </p>
                                    <p className=" bg-borderColor border-none  p-2 rounded-lg">bot type </p>
                                </div>
                                <div className="box text-center ">
                                    <p className="p-2">Chat bot Creation </p>
                                    <p className=" bg-borderColor border-none  p-2 rounded-lg">bot type </p>
                                </div>
                                <div className="box text-center ">
                                    <p className="p-2">Chat bot Creation </p>
                                    <p className=" bg-borderColor border-none  p-2 rounded-lg">bot type </p>
                                </div>
                                <div className="box text-center ">
                                    <p className="p-2">Chat bot Creation </p>
                                    <p className=" bg-borderColor border-none  p-2 rounded-lg">bot type </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default MainBody;