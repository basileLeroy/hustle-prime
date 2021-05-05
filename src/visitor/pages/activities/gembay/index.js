import React from 'react'
import Banner from '../../../../images/GemBay-Banner.png'
import Pirate from '../../../../images/gembay-pirate.png'
import Octopus from '../../../../images/octopus.png'
import gemBayMenu from '../../../../images/GemBay-Menu.jpg'
import gemBayFighter from '../../../../images/gembay-fighter-menu.jpg'
import gemBaySpells from '../../../../images/Gembay-diamond-spells.jpg'
import OldMage from '../../../../images/oldMage.png'

const Gembay = () => {
    return (
        <div className="flex flex-col min-h-full h-auto mb-6">
            <div className="mx-auto my-6">
                <img src={Banner} className="lg:w-1/2 w-nine mx-auto" alt="oops" title="GemBay - © Courtesy of MyGames" />
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-yellow-500">GEM-BAY</h1>
                    <p className="font-medium">
                        Ahoy there, me hearties, and welcome to the Gem Bay! 
                        Set sail in Hustle Castle’s most dangerous waters, where a series of 15 opponents awaits. 
                        Plan your strategy carefully, as each opponent is more difficult to defeat than the last. Once your fighters die, they stay dead until you return home. 
                        The more opponents you defeat, the greater your reward, which includes powerful gems to enhance your equipment, and ancient set materials. 
                        Yo ho ho!
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">

                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-nine my-auto w-full  lg:pl-24 py-5">
                        <img src={Pirate} className="lg:w-nine" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:ml-4 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">What is it?</h1>
                        <p>
                            Gem Bay is an activity that unlocks upon reaching Throne Room lvl 8.
                            It is a place to collect certain items that come into play at TR8 and above.
                            <br /><br /><br /><br />
                            <span className="text-yellow-500">GEMS</span>: Used to enhance fighter equipment
                            <br />
                            <span className="text-yellow-500">DUST</span>: Used to enhance gems
                            <br />
                            <span className="text-yellow-500">SCROLLS</span>: Used in merging gems
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <h2 className="text-xl font-bold mb-2 text-left text-yellow-500">NOTE:</h2>
                    <p>
                        Don’t confuse gems with diamonds. For a long time, the community has used those two words interchangeably. 
                        Diamonds are the game’s currency. They can be used to purchase just about anything that you want in the game.
                    </p>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Fighting in Gem Bay</h1>
                        <p>
                            Every day you can enter Gem Bay once for free, (twice if you have Premium). 
                            After your free journey has been used up, you will need to spend food to go on additional journeys. 
                            You may purchase up to 2 additional food runs, any after that cost diamonds.
                            <br /><br />
                            It is strongly recommended that you take full advantage of the free journey(s). 
                            The only potential drawback to entering the bay for free is that you could end up expending spells.
                        </p>
                    </div>
                    <div className="lg:w-nine my-auto w-full lg:pr-24 py-5">
                        <img src={Octopus} className="lg:w-nine" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <p>
                        When you enter Gem Bay, you are prompted to select up to 12 fighters to bring with you on your journey, and up to 12 spells.
                    </p>
                    <br /><br />
                    <p>
                        <span className="text-xl font-bold mb-2 text-left text-yellow-500">Beware:</span> The Strength of your oponents in Gem Bay is directly connected with your <span className="font-extrabold">Historical Power</span>.
                    </p>
                </div>

                <div className="mx-auto my-6">
                    <img src={gemBayMenu} className="lg:w-1/2 w-nine mx-auto rounded-md" alt="oops" title="Image - © Courtesy of MyGames" />
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <h2 className="text-xl font-bold mb-2 text-left text-yellow-500">NOTE:</h2>
                    <p>
                        All Throne Rooms share the same price for additional (diamond) runs, as follows: <br />
                        <li>
                            <span className="text-blue-500">100</span> Diamonds
                        </li>
                        <li>
                            <span className="text-blue-500">150</span> Diamonds
                        </li>
                        <li>
                            <span className="text-blue-500">200</span> Diamonds
                        </li>
                        <li>
                            <span className="text-blue-500">250</span> Diamonds
                        </li>
                        <li>
                            <span className="text-blue-500">300</span> Diamonds
                        </li>
                        <li>
                            <span className="text-blue-500">350</span> Diamonds
                        </li>
                        <li>
                            <span className="text-blue-500">400</span> Diamonds
                        </li>
                        After that it jumps to <span className="text-blue-500">500</span> and then goes to <span className="text-blue-500">300</span> diamonds (which becomes the fixed cost).
                    </p>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col w-nine justify-center text-left mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <h2 className="text-3xl font-extrabold text-center mt-12 mb-8">Fighters:</h2>
                    <p>
                        The advantages to bringing a full complement of 12 fighters on your journey with you, outweigh the disadvantages. 
                        If any fighter dies, you have a replacement or substitute to counter your oponent.
                        You will have the option to use between 5 and 8 fighters, depending on your barracks size.
                    </p>
                </div>

                <div className="mx-auto my-6">
                    <img src={gemBayFighter} className="lg:w-1/2 w-nine mx-auto rounded-md" alt="oops" title="Image - © Courtesy of MyGames" />
                </div>

                <div className="flex flex-col w-nine justify-center text-left mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <p>
                        You can pull fighters from any part of the castle. There is a handy “Deploy the best ones” 
                        button that you can click to select the 12 best fighters. The game seems to select the best based on the dweller’s fighting power. 
                        This is usually a good idea, and can save you some time, but be aware that it selects dwellers based on their current equipment, 
                        and so it might not necessarily select the highest-leveled fighters.
                        <br /><br />
                        You will need to equip your fighters (and Hero) as desired before you click the Confirm button. 
                        Once you confirm your journey's squad, you will not be able to adjust their equipment.
                    </p>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="lg:w-150 my-auto w-full lg:pl-4">
                        <img src={OldMage} className="lg:w-nine" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:ml-8 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Spells:</h1>
                        <p>
                            The introduction of Gem Bay makes spells much more important. 
                            Previously they were only useful in PvP, PvE, and Portal. 
                            But now you can bring up to 12 spells with you on your journey. 
                            These spells can be selected from both your Combat Spells (equipped) and from your 
                            Prepared Spells (inventory).
                            <br /><br />
                            Any spells that you don’t use will be returned to you once your journey is over.
                            <br /><br />
                            <span className="font-bold text-yellow-500">TIP:</span><br />
                            After selecting your fighters and spells, go back to your castle to craft new spells! 
                            During the run, you castle doesn't know that your spells will return and when you are finished and all the left-over spells come back, 
                            you will have more spells in your arsenal!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-nine justify-center text-left mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <p>
                        There are also 3 special spells that can be purchased in Gem Bay. 
                        They are similar to Portal spells in that they are unique to Gem Bay, 
                        and they can only be used in that setting. You can purchase them for diamonds after you start fighting, 
                        or you can purchase them before the fights with kraken tokens in the Gem Bay Shop.
                    </p>
                </div>

                <div className="mx-auto my-6">
                    <img src={gemBaySpells} className="lg:w-3/5 w-nine mx-auto rounded-md" alt="oops" title="Image - © Courtesy of MyGames" />
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />


                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Build Your Squad:</h1>
                        <p>
                            For each battle, you can select between 5 to 8 fighters (out of the 12 brought into Gem Bay) to form your squad. 
                            You can also select up to 6 spells. You will be given the opportunity to both hire Mercenaries 
                            and buy Spells in between each battle.
                            <br /><br />
                            If any of your fighters is dead at the conclusion of a battle, regardless of win or loss, 
                            then that fighter can’t be used again in any subsequent battles. 
                            Whatever health your fighters have left at the end of a successful battle will be carried 
                            over to the start of the next battle.
                            <br /><br />
                            On the other hand, if you lose a battle, then your opponent’s fighters will start the next 
                            battle with whatever health they had left at the end of the previous one.
                        </p>
                    </div>
                    <div className="lg:w-150 my-auto w-full lg:pr-24 py-5">
                        <img src={gemBayFighter} className="lg:w-nine rounded-md" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                </div>

                <div className="bg-yellow-900 flex flex-col lg:w-3/5 w-nine justify-center p-6 text-left mx-auto mb-8 lg:ml-24 lg:mr-56 rounded-md">
                    <ul>
                        <li>
                            <p>One strategy is to use your weaker fighters early on in the easier battles so that your stronger fighters are fresh when things get tough.</p>
                        </li>
                        <br />
                        <li>
                            <p>Make sure your squad is strong enough. If you get wiped out on one of the early levels, then you will some of your fighters. This may seriously limit how far your journey will go.</p>
                        </li>
                        <br />
                        <li>
                            <p>Don’t pad your squad with production dwellers. They will die quickly, and your mages will waste precious resurrect and heal spells on them.</p>
                        </li>
                        <br />
                        <li>
                            <p>On the other side of the spectrum, don't pad your squad with with so many tanks as to alter your historical might.</p>
                        </li>
                    </ul>
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
                        <li>Direct contact with an official Community Manager</li>
                        <li>Discussion channels with other players for all subjects</li>
                        <br />
                        <span className="text-purple-600">You can find us on <a href="https://discord.gg/7vhfVRm" className=" font-extrabold hover:underline">Discord</a> !</span>
                    </p>
                </div>

            </div>

        </div>
    )
}

export { Gembay };