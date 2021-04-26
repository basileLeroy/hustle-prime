import React, { useState } from 'react'
import SetChoice from './SetChoice'
import GearChoice from './GearChoice'
import Banner from '../../../../images/sets.png'
import campain01 from '../../../../images/Campain-Story01.jpg'

const AncientSets = () => {

    const [choiceDisplay, setChoiceDisplay] = useState(false);
    const [gearDisplay, setGearDisplay] = useState(true);
    const [displaySetComponent, setDisplaySetComponent] = useState(<SetChoice />);

    const ChangeChoiceDisplay = () => {

        setChoiceDisplay(true);
        setGearDisplay(false);
        setDisplaySetComponent(<SetChoice />);

    };
    const ChangeGearDisplay = () => {

        setChoiceDisplay(false);
        setGearDisplay(true);
        setDisplaySetComponent(<GearChoice />);
    };

    return (
        <div className="flex flex-col min-h-full h-auto mb-6">
            <div className="mx-auto my-6">
                <img src={Banner} className="lg:w-1/2 w-nine mx-auto" alt="oops" />
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-pink-500">Ancient Sets</h1>
                    <p className="font-medium">
                        If you're looking for an in-depth guide of what sets to go for and which items to use for these sets, look no further. I'll try to be as <span className="font-bold">clear and simple</span> as possible while still giving an explanation of why I chose a certain item.
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">
                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="flex flex-col lg:text-left text-center lg:ml-4 lg:mr-16">
                        <div className="bg-gray-700 flex flex-col w-nine justify-center text-center p-6 mx-auto mb-8 lg:ml-24 lg:mr-56 rounded-md border-4 border-double border-yellow-500">
                            <h1 className="text-3xl font-extrabold mt-4 mb-8">Disclaimer:</h1>
                            <p>
                                This game evolves very often, this should be used as a GUIDELINE ONLY, 
                                always ask questions to actual players don't just follow any guide, including this one. 
                                It's always good to know *why* something is working so well, that way you can start learning 
                                patterns and meta changes yourself too.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                        <img src={campain01} className="w-full rounded-md" alt="" title="" />
                    </div>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex lg:flex-row flex-col w-nine h-12 justify-around mx-auto my-8 lg:px-24">
                    <button onClick={ChangeChoiceDisplay} className={choiceDisplay ? 'bg-gray-500 lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto' : 'bg-gray-700 lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto hover:bg-gray-500'}><p className="my-auto">Set Choices</p></ button>
                    <button onClick={ChangeGearDisplay} className={gearDisplay ? 'bg-gray-500 lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto' : 'bg-gray-700 lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto hover:bg-gray-500'}><p>Gear Choices</p></ button>
                </div>

                
                    {displaySetComponent}
                
            </div>
        </div>
    )
}

export { AncientSets };