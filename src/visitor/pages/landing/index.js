import React from 'react'

import Welcome from '../../../images/Welcome.jpg'
import test_image01 from '../../../images/test_image01.jpg'

const Landing = () => {
    return (
        <div className="flex flex-col min-h-full h-auto mb-6">
            <div className="mx-auto my-6">
                <img src={Welcome} className="w-nine mx-auto rounded-md" alt="oops" />
            </div>

            <div className="relative flex flex-col lg:flex-row mx-auto brown-white bg-opacity-20 cursor-not-allowed mb-28">
                <div className="bg-gray-700 w-60 h-20 mx-20 rounded-br-xl rounded-tl-xl text-2xl text-center text-black my-6">
                    <h3>Join as Visitor</h3>
                </div>
                <div className="bg-gray-700 w-60 h-20 mx-20 rounded-br-xl rounded-tl-xl text-2xl text-center text-black my-6">
                    <h3>Join as Member of Hustle Prime</h3>
                </div>
                <div className="hover:opacity-50 absolute top-0 bottom-0 left-0 right-0 bg-white opacity-0 border rounded-lg text-3xl text-center lg:pt-0 pt-20 text-black">
                    <h3>Comming soon!</h3>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">
                <div className="flex flex-col mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-150 w-full lg:pr-12 py-5">
                        <img src={test_image01} className="w-full rounded-md" alt="" title="Test-02" />
                    </div>
                    <div className="flex flex-col lg:ml-32">
                        <h2 className="text-3xl font-bold mb-12 text-center">Welcome to the HUSTLE PRIME website</h2>
                        <p className="text-center">
                            Hustle Castle was launched on November 3, 2017 and has had an incredible history. 
                            Whether you are a new player or a veteran, or returning after a long absence, 
                            we are proud to host some of that history here in this community.
                            Read up on player made discoveries and interact with players around the world. 
                            For more in-depth guides you can also visit our discord server. Enjoy !
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export { Landing };