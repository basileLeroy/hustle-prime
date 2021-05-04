import React from 'react'
import setCombo from '../../../../images/setCombos.jpg'
import setIcons from '../../../../images/set-choice.png'
import Annihilator from '../../../../images/Annihilator.png'
import Ashbringer from '../../../../images/Ashbringer.png'
import Bane from '../../../../images/Bane.png'
import Darkula from '../../../../images/Darkula.png'
import Legionnaire from '../../../../images/Legionnaire.png'
import Paladin from '../../../../images/Paladin.png'
import Storm from '../../../../images/Storm.png'



function SetChoice() {
    return (
        <>
        <div className="flex flex-col w-nine justify-center mx-auto">
            <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mt-20 mb-12">
                <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                    <img src={setIcons} className="w-full rounded-md" alt="" title="Icon - © Hustle Castle" />
                </div>
                <div className="flex flex-col text-center lg:ml-4 lg:mr-8">
                    <div className="flex flex-col text-center lg:mx-12">
                        <h1 className="text-2xl font-extrabold mt-12 mb-8 text-center">Choosing Your Set:</h1>
                        <p>
                            When choosing a set, it's important to keep in mind how many materials you can farm. 
                            Ashbringer is a very strong set and one of the 2 must-haves for any high end player, the other being Paladin. 
                            However, Ashbringer's legendary materials come from Portal which is the most expensive and limited source of materials.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
            <p>
                <span className="font-extrabold">After the top 2</span>, the order is going to be different for everyone. 
                Preferences play a big part in this but also material farming and the gear choices of each player are going to be different. 
                I can't stress this enough, <span className="font-extrabold">use this list as a general guideline only</span>, double check in #gear-comparisons on the 
                <a href="https://discord.gg/7vhfVRm" alt="" className="text-purple-500 font-extrabold hover:underline">Hustle Prime Discord</a> server to make sure.
            </p>
        </div>

        <div className="mx-auto my-6 pb-12">
            <img src={setCombo} className="lg:w-nine mx-auto rounded-md" alt="oops" title="Set-table - © Seditiar" />
        </div>

        <hr
            className="bg-gray-400 h-1 w-nine mx-auto"
        />

        <div className="flex flex-col justify-center w-nine mx-auto">
            <div className="flex flex-col lg:text-left text-center lg:ml-4 lg:mr-8">
                <div className="flex flex-col text-left lg:mx-12">
                    <h1 className="text-3xl font-extrabold mt-12 mb-8">Most recommended:</h1>
                </div>
            </div>

            <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-12">
                <div className=" lg:w-1/5 my-auto w-full  lg:pl-24 py-5">
                    <img src={Ashbringer} className="w-full rounded-md" alt="" title="Icon - © Hustle Castle" />
                </div>
                <div className="flex lg:w-4/5 flex-col text-center">
                    <div className="flex flex-col text-center lg:mx-12">
                        <h1 className="text-2xl font-extrabold mb-8 text-center">Incinerator (AKA Ashbringer):</h1>
                        <p>
                            Mandatory because of fire blocking resurrects on the enemy team. Also deals significant damage. 
                            This set was renamed to Incinerator (it was named Ashbringer in the past). 
                            This set might become less popular if the new Executioner set is strong enough (that set also blocks Resurrections) 
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-12">
                <div className=" lg:w-1/5 my-auto w-full lg:pl-24 py-5">
                    <img src={Paladin} className="w-full rounded-md" alt="" title="Icon - © Hustle Castle" />
                </div>
                <div className="flex lg:w-4/5 flex-col text-center">
                    <div className="flex flex-col text-center lg:mx-12">
                        <h1 className="text-2xl font-extrabold mb-8 text-center">Paladin:</h1>
                        <p>
                            Mandatory because of the stun removal + (Once in a while) immunity it provides to your whole squad. 
                            Not to mention being immune to Angel Wand's mind control (only the Paladin itself). 
                            Build your Paladin 4-set and stop. Make Paladin ring, necklace, armor and armor soul. 
                            6-set Paladin isn't that big of an upgrade and wastes a lot of your time building it for a minimal increase in performance. 
                            More info in the "Gear choices" tab. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-12">
                <div className=" lg:w-1/5 my-auto w-full  lg:pl-24 py-5">
                    <img src={Darkula} className="w-full rounded-md" alt="" title="Icon - © Hustle Castle" />
                </div>
                <div className="flex flex-col text-center  lg:w-4/5">
                    <div className="flex flex-col text-center lg:mx-12">
                        <h1 className="text-2xl font-extrabold mb-8 text-center">Darkula:</h1>
                        <p>
                            The king of mage sets, although it doesn't block resurrects it blows any other mage's damage out of the water with both hands tied behind its back. 
                            Also helps your other fighters stay alive by healing often and a lot. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-12">
                <div className=" lg:w-1/5 my-auto w-full  lg:pl-24 py-5">
                    <img src={Annihilator} className="w-full rounded-md" alt="" title="Icon - © Hustle Castle" />
                </div>
                <div className="flex flex-col text-center  lg:w-4/5">
                    <div className="flex flex-col text-center lg:mx-12">
                        <h1 className="text-2xl font-extrabold mb-8 text-center">Annihilator:</h1>
                        <p>
                            Bad in the early days, now badass. Relies heavily on good gear though so this one might be hard for some to finish. 
                            Deals the most damage out of any tank wearing set without breaking a sweat. Can be very easy to kill if missing certain items.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-12">
                <div className=" lg:w-1/5 my-auto w-full  lg:pl-24 py-5">
                    <img src={Legionnaire} className="w-full rounded-md" alt="" title="Icon - © Hustle Castle" />
                </div>
                <div className="flex flex-col text-center  lg:w-4/5">
                    <div className="flex flex-col text-center lg:mx-12">
                        <h1 className="text-2xl font-extrabold mb-8 text-center">Legionnaire:</h1>
                        <p>
                            Great set, close to a perfect mix of tankiness and damage output. 
                            Reduces any damage (except pure damage) that's higher than 30k (30.000), 
                            making it very sturdy against almost any opponent. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-12">
                <div className=" lg:w-1/5 my-auto w-full  lg:pl-24 py-5">
                    <img src={Bane} className="w-full rounded-md" alt="" title="Icon - © Hustle Castle" />
                </div>
                <div className="flex flex-col text-center  lg:w-4/5">
                    <div className="flex flex-col text-center lg:mx-12">
                        <h1 className="text-2xl font-extrabold mb-8 text-center">Doom (AKA Bane):</h1>
                        <p>
                            Back in style. Easily deals more damage than anything out there, if you can keep it alive and have the right event gear. 
                            Lately often used as 4-set Paladin with 2-set Bane weapons to maximize chances of staying alive. 
                            6-set Bane is also very strong still. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-12">
                <div className=" lg:w-1/5 my-auto w-full  lg:pl-24 py-5">
                    <img src={Storm} className="w-full rounded-md" alt="" title="Icon - © Hustle Castle" />
                </div>
                <div className="flex flex-col text-center  lg:w-4/5">
                    <div className="flex flex-col text-center lg:mx-12">
                        <h1 className="text-2xl font-extrabold mb-8 text-center">Storm:</h1>
                        <p>
                            Low/Medium damage output. High (but delayed) damage reduction, 
                            requires specific gear to survive until set damage reduction starts working. 
                            Deals a decent amount of damage with the right event gear. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-12">
                <div className=" lg:w-1/5 my-auto w-full  lg:pl-24 py-5">
                    <img src={setIcons} className="w-full rounded-md" alt="" title="Icon - © Hustle Castle" />
                </div>
                <div className="flex flex-col text-center  lg:w-4/5">
                    <div className="flex flex-col text-center lg:mx-12">
                        <h1 className="text-2xl font-extrabold mb-8 text-center">Executioner of Light (AKA EoL):</h1>
                        <p>
                            Solid tanking set. If running with Legio + Bane, the damage bonus will easily make up for its own damage being low. 
                            Boosts squad survival rate too. If you haven't built Annihilator nor EoL yet, I would go with EoL.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default SetChoice
