import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../../../images/dungeon-banner.png'
import RuneEvent from '../../../../images/RuneEvent.png'
import RuneIcons from '../../../../images/RuneIcons.png'
import RuneMenu from '../../../../images/RuneMenu.png'
import DragonRuneEvent from '../../../../images/DragonRuneEvent.png'

function Team() {
    return (
        <div className="flex flex-col min-h-full h-auto mb-6">
            <div className="mx-auto my-6">
                <img src={Banner} className="lg:w-1/2 w-nine mx-auto" alt="oops" />
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-red-600">OUR TEAM</h1>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">

                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                        <img src={RuneIcons} className="lg:w-150 rounded-md" alt="oops" title="" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:pl-20">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">What is it?</h1>
                        <p>
                            Runes are attached to the items to either improve the current ability,
                            add a new ability beside the current one, or both. Runes can be attached to the
                            weapons, armors, rings, amulets, or artifacts. Each Rune works differently and
                            can be attached only to a specific item type/class. Runes have different abilities
                            based on fighter’s class, weapon type, and/or armor type. Runes are removable,
                            so you can attach and detach them whenever you want.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <p>
                            Runes can be obtained from <span className="text-red-600">Rune events</span>.
                            These events usually come around every 3-4
                            months, and when that happens, the “Under
                            Construction!” island on the left side of the map
                            becomes available.
                        </p>
                    </div>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

            </div>

        </div>
    )
}
export { Team };