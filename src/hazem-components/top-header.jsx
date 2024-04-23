
import React from "react";

function TopHeader() {
    return (
        <div className='top-header text-white text-center pt-20' >
            <div className="container mx-auto max-w-3xl	 ">
                <div className="text">
                    <h1 className=' text-5xl'>Just Sign Up & Get a Free
                        Demo of Zentro</h1>
                    <p className='mt-4 p-5'>Aliquam et tellus urna. Phasellus egetadipiscing elit. Mauris id nunc odio.
                        Aliquam et tellus urna. Phasellus egetl</p>
                </div>
                <form action="" className="form p-16 ">
                    <div className='holder flex justify-center items-center	relative '>
                        <input type="email"
                            placeholder="Email" className=' focus:outline-none p-2 w-96 px-4 py-3 rounded-3xl bg-background border border-borderColor ' />
                        <button className=' absolute bg-gradient-to-r from-white to-Graygradiant px-6 py-2 rounded-3xl text-black text-sm right-16'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
}
export default TopHeader;