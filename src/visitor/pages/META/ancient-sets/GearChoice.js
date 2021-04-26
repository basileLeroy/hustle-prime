import React, { useState } from 'react'
import { ListOfSets } from './ListOfSets'
import setIcons from '../../../../images/set-choice.png'

function GearChoice() {
    const [displaySelectedSet, setDisplaySelectedSet] = useState('ash');

    const SelectedSet = ListOfSets[0][displaySelectedSet];
    // const Selectedweapons = SelectedSet[0].weapons;
    // const SelectedWeaponSouls = SelectedSet[0].weaponSoul;
    // const SelectedArmors = SelectedSet[0].armors;
    // const SelectedArmorSouls = SelectedSet[0].armorSoul;
    // const SelectedRings = SelectedSet[0].rings;
    // const SelectedNecklaces = SelectedSet[0].amulets;

    const openWeaponModal = () => {

    }
    const openWeaponSoulModal = () => {

    }
    const openArmorModal = () => {

    }
    const openArmorSoulModal = () => {

    }
    const openRingModal = () => {

    }
    const openNecklaceModal = () => {

    }

    return (
        <>
        <div className="flex flex-col w-nine justify-center mx-auto">
            <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mt-20 mb-12">
                <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                    <img src={setIcons} className="w-full rounded-md" alt="" title="" />
                </div>
                <div className="flex flex-col text-center lg:ml-4 lg:mr-8">
                    <div className="flex flex-col text-center lg:mx-12">
                        <h1 className="text-2xl font-extrabold mt-12 mb-8 text-center">Choosing your Gear:</h1>
                        <p>
                            Sets can be heavily influenced by the gear you forge into your sets. Some combinations work very well and others don't work together.
                            When choosing the right gear, not only do you have to take into account the gemslots it has, but also the effect it provides,
                            and if it will be compatible with the effects of your chosen set.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
            <p>
                To make it a little bit more easy for you, We have put together a compilation of best/most recommended sets and their top best gear choices.
                Keep in mind that this is a <span className="font-extrabold">PERSONAL SUGGESTION</span>, made by players of the community. 
                This is by no means a set-in-stone guide and will change regularly according to new gear beeing introduced in the game!
            </p>
        </div>

        <hr
            className="bg-gray-400 h-1 w-nine mx-auto"
        />

        <div className="flex flex-col w-nine justify-center mx-auto my-8 lg:pl-24 lg:pr-56">
            <div className="flex lg:flex-row flex-col my-6">
                <label for="sets">Select the set you want to look up * :</label>
                <select id="sets" className="lg:w-56 w-nine lg:ml-28 bg-blue-ocean rounded-md" onChange={(e) => {setDisplaySelectedSet(e.target.value)}}>
                    <option value="ash" className="py-2 pl-10">Incinerator</option>
                    <option value="pala" className="py-2 pl-10">Paladin</option>
                    <option value="oracle" className="py-2 pl-10">Oracle</option>
                    <option value="dark" className="py-2 pl-10">Darkula</option>
                    <option value="anni" className="py-2 pl-10">Annihilator</option>
                    <option value="legio" className="py-2 pl-10">Legionnaire</option>
                    <option value="necro" className="py-2 pl-10">Necromancer</option>
                    <option value="storm" className="py-2 pl-10">Storm</option>
                    <option value="shadow" className="py-2 pl-10">Shadow</option>
                    <option value="bane" className="py-2 pl-10">Bane</option>
                    <option value="ranger" className="py-2 pl-10">Ranger</option>
                    <option value="snake" className="py-2 pl-10">Snake Charmer</option>
                    <option value="illu" className="py-2 pl-10">Illusionist</option>
                    <option value="priest" className="py-2 pl-10">Priest</option>
                    <option value="demon" className="py-2 pl-10">Demon Hunter</option>
                    <option value="bastion" className="py-2 pl-10">Bastion</option>
                    <option value="inventor" className="py-2 pl-10">Inventor</option>
                </select>
            </div>
            <p className="text-xs italic">* Not all sets are added to our archives yet, if you can't find the set you are looking for, We recommend asking about it on our <a href="https://discord.gg/hustle-prime" alt="" className="text-purple-500 font-extrabold hover:underline">Discord</a> server!</p>
        </div>

        <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-24">
            <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-pink-500">{SelectedSet[0].title || "Select a Set"}</h1>
            <p className="text-center italic font-bold">Click on one of the gear slots to see the recommended gear!</p>
            <div className="mt-12 avatar m-auto relative">
                <div onClick={openWeaponSoulModal} className="absolute lg:w-32 lg:h-32 lg:top-8 rounded-3xl cursor-pointer"></div>
                <div onClick={openArmorSoulModal} className="absolute lg:w-32 lg:h-32 lg:top-44 rounded-3xl cursor-pointer"></div>
                <div onClick={openRingModal} className="absolute lg:w-28 lg:h-28 bottom-0 lg:left-12 rounded-3xl cursor-pointer"></div>
                <div onClick={openNecklaceModal} className="absolute lg:w-28 lg:h-28 bottom-0 lg:left-44 rounded-3xl cursor-pointer"></div>
                <div className="absolute bg-black bg-opacity-40 lg:w-28 lg:h-28 bottom-0 right-12 rounded-3xl cursor-not-allowed"></div>
                <div onClick={openWeaponModal} className="absolute lg:w-32 lg:h-32 top-8 right-0 rounded-3xl cursor-pointer"></div>
                <div onClick={openArmorModal} className="absolute lg:w-32 lg:h-32 top-44 right-0 rounded-3xl cursor-pointer"></div>

            </div>
        </div>

        <div className="bg-gray-700 flex flex-col lg:w-3/4 w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-24">
            <div className="mt-12 m-auto">
            </div>
        </div>

        </>
    )
}

export default GearChoice