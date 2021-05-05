import React from 'react'
import Banner from '../../../../images/RuneEventBanner.png'
import RuneEvent from '../../../../images/RuneEvent.png'
import RuneIcons from '../../../../images/RuneIcons.png'
import RuneMenu from '../../../../images/RuneMenu.png'
import DragonRuneEvent from '../../../../images/DragonRuneEvent.png'

function Runes() {
    return (
        <div className="flex flex-col min-h-full h-auto mb-6">
            <div className="mx-auto my-6">
                <img src={Banner} className="lg:w-1/2 w-nine mx-auto rounded-xl" alt="oops" title="Runes - © Courtesy of MyGames" />
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-red-600">RUNES</h1>
                    <p className="font-medium">
                        A rune event is starting! grab your gear, coffee, snacks, powerbank, charger, and what not!
                        Here you will be finding a little bit of information on runes and how to get them!
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">

                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                        <img src={RuneIcons} className="lg:w-150 rounded-md" alt="oops" title="Icon - © Courtesy of MyGames" />
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

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">How to Get Runes:</h1>
                        <p>
                            Runes can be obtained from <span className="text-red-600">Rune events</span>.
                            These events usually come around every 3-4
                            months, and when that happens, the “Under
                            Construction!” island on the left side of the map
                            becomes available.
                            <br /><br />
                            The Runes are divided into <span className="text-red-600">3 major
                            categories</span> during these events: Confrontation,
                            Massacre, and Fun. Each of these 3 categories has 3
                            subcategories: <br />
                            <li>
                                <span className="text-red-600">Confrontation Runes</span>
                            </li>
                            <li>
                                <span className="text-red-600">Massacre Runes</span>
                            </li>
                            <li>
                                <span className="text-red-600">Fun Runes</span>
                            </li>
                        </p>
                    </div>
                    <div className="lg:w-nine my-auto w-full lg:pr-24 py-5">
                        <img src={DragonRuneEvent} className="lg:w-nine rounded-md" alt="oops" title="Image - © Courtesy of MyGames" />
                    </div>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col w-nine justify-center mx-auto lg:pl-24 lg:pr-56 mb-24 mt-24">
                    <h2 className="text-3xl font-bold mb-2 text-left">Rune Events:</h2>
                    <p>
                        Rune events are a type of events where you need to collect "Cards" in order to be able to complete a collection of cards.
                        <br /><br />
                        When having a full set of cards, you can collect it in exchange for an event chest. That chest will have a chance to drop one or more (or no) runes, depending on your luck.
                    </p>
                </div>

                <div className="mx-auto my-6">
                    <img src={RuneEvent} className="lg:w-1/2 w-nine mx-auto rounded-md" alt="oops" title="Image - © Courtesy of MyGames" />
                </div>

                
                <div className="flex flex-col w-nine justify-center mx-auto lg:pl-24 lg:pr-56 mb-12 mt-24">
                    <p>
                        Runes will be set based on your Throne Room level. This means top 3 levels of possible max training levels.
                        <br /><br />
                        Rune level ranges are listed below:
                        <li>
                            <span className="text-red-600">TR5</span> (25-34)
                        </li>
                        <li>
                            <span className="text-red-600">TR6</span> (35-44)
                        </li>
                        <li>
                            <span className="text-red-600">TR7</span> (45-59)
                        </li>
                        <li>
                            <span className="text-red-600">TR8</span> (60-74)
                        </li>
                        <li>
                            <span className="text-red-600">TR9</span> (75-89)
                        </li>
                        <li>
                            <span className="text-red-600">TR10</span> (75-89 or 90-100) <span className="text-sm italic">see below*</span>
                        </li>
                        <li>
                            <span className="text-red-600">TR11</span> (90-100)
                        </li>

                    </p>
                    <span className="text-sm italic ml-2 pt-8">* ONE exception of Runes at throne 10 is the requirement of at least one level 88 fighter to trigger 90-100 runes.</span>
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto lg:pl-24 lg:pr-56 mb-12">
                    <p>
                        NOTE:
                        One of the biggest advantages on rune events, is that it comes back with the same runes + new ones. If you can not collect all runes during one event, the next one will give you a change of getting the missing ones <br /> <br />
                        <span className="text-lg font-extrabold">IF YOU ALREADY HAVE A RUNE, the next event will not provide that same rune again within the same TR LEVEL !!!</span> <br/>
                        The only way to have A rune twice, will be to have it by doing rune events in different Throne Room levels. As you can not get the same rune twice withing the same Throne Room Level.
                    </p>
                </div>


                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="lg:w-nine my-auto w-full lg:pl-24 py-5">
                        <img src={RuneMenu} className="lg:w-nine rounded-lg" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Type of Runes:</h1>
                        <p>
                            As runes are attached to the items your fighter wears, you can probably guess that there are different types of runes: <span className="text-red-600">Weapon Runes</span> | <span className="text-red-600">Armor Runes</span> | <span className="text-red-600">Ring Runes</span> | <span className="text-red-600">Necklace Runes</span> | <span className="text-red-600">Artefact Runes</span>.
                            <br /><br />
                            But Within those classes, Runes ade again devided by types: <br/>
                            <span className="text-red-600">Class-specific runes</span> (where runes will only work on a certain fighter class) & 
                            <span className="text-red-600"> Universal runes</span> (where as long as you put it on the right type of item, it can be used on any type of fighter) 
                            <br /><br />
                            <span className="text-gray-400">You can see the type of those runes by clicking on them or by "trying" those on items, it will tell you if it is compatible or not.</span>
                        </p>
                    </div>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16 mb-12">
                    <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Our Discord:</h1>
                    <p>
                        In case you didn't find enough on this page, you can certainly check out our Discord and discuss all kinds of topics with other players!
                        <br /><br />
                        <li>Latest updates</li>
                        <li>A huge community</li>
                        <li>Guides for beginners and end-gamers alike</li>
                        <li>Direct contact with a official Community Manager</li>
                        <li>Discussion channels with other players for all subjects</li>
                        <br />
                        <span className="text-purple-600">You can find us on <a href="https://discord.gg/7vhfVRm" className=" font-extrabold hover:underline">Discord</a> !</span>
                    </p>
                </div>

            </div>

        </div>
    )
}

export { Runes };