import React from 'react'
import Banner from '../../../../images/GemsBanner.png'
import GemOffer from '../../../../images/GemOffer.png'
import GemLevelUp from '../../../../images/GemLevelUp.png'
import GemMerging from '../../../../images/GemMerging.png'
import ScrollsOfSuccess from '../../../../images/ScrollsOfSuccess.png'

function Gems() {
    return (
        <div className="flex flex-col min-h-full h-auto mb-6">
            <div className="mx-auto my-6">
                <img src={Banner} className="lg:w-1/2 w-nine mx-auto rounded-xl" alt="oops" title="Gems - © Courtesy of MyGames" />
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-purple-600">GEMS</h1>
                    <p className="font-medium">
                    Gems play an important role in improving your team’s power.  
                    While equipment abilities largely determine your squad’s effectiveness, 
                    socketing the right gems can put your team over the top by providing substantial boosts to your basic statistics: 
                    damage, magic damage, armor, magic armor, spell power, health, and critical hits.  
                    Plan your gem inlays carefully, as the wrong placement can cost you diamonds and unnecessarily inflate your squad power.
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">

                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-8">
                    <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                        <img src={GemOffer} className="lg:w-nine rounded-2xl" alt="oops" title="Reward - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:pl-20">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">What is it?</h1>
                        <p>
                            Gems are stones you can insert into your items, Each item over TR6 has slots for certain gems. 
                            Those slots are predetermined and can not be changed on that item. Those items will be boosted by the type of gems you can inlay in it. 
                            <br /><br />
                            For example If your armor has <span className="text-green-vrt">health slot</span>, You will be able to instert a Health gem in that slot. and depending on the level of that gem, your armor will revieve <span className="text-green-vrt">+ gem-health</span> .

                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-nine justify-center mx-auto lg:pl-24 lg:pr-56 mb-24 mt-8">
                    <div className="flex flex-col lg:text-left lg:pl-20">
                        <h2 className="text-3xl font-bold mb-2 text-left">Leveling up gems:</h2>
                        <p>
                            Gems can be won, purchased and recieved in chests and have different ranges of value: <br/>
                            <li>
                                <span className="text-red-600 font-extrabold text-xl">Red Gems</span>
                            </li>
                            <li>
                                <span className="text-yellow-600 font-extrabold text-xl">Organge Gems</span>
                            </li>
                            <li>
                                <span className="text-purple-600 font-extrabold text-xl">Purple Gems</span>
                            </li>
                            <li>
                                <span className="text-blue-500 font-extrabold text-xl">Blue Gems</span>
                            </li>
                            <li>
                                <span className="text-green-vrt font-extrabold text-xl">Green Gems</span>
                            </li>
                            <li>
                                <span className="text-gray-400 font-extrabold text-xl">Gray Gems</span>
                            </li>
                            <br /><br />
                            You can level up gems by using dust (can be attained by destroying items, bought in gembay or by opening chests). You can select a gem and add the amount of dust needed to level up your gem.
                        </p>
                    </div>
                    <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                        <img src={GemLevelUp} className="lg:w-nine rounded-2xl" alt="oops" title="Image - © Courtesy of MyGames" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-nine justify-center mx-auto lg:pl-24 lg:pr-56 mb-8 mt-8">
                    <div className="flex flex-col lg:text-left lg:pl-20">
                        <p>
                            When you have a pair of maxed out gems, you can merge those together to create a new higher tier gem. <br/>
                            Chances of failure can be minimalised by using merging scrolls of success.
                        </p>
                    </div>
                </div>

                <div className="mx-auto my-6">
                    <img src={ScrollsOfSuccess} className="lg:w-1/2 w-nine mx-auto rounded-2xl" alt="oops" title="Image - © Courtesy of MyGames" />
                </div>
                <div className="mx-auto my-6">
                    <img src={GemMerging} className="lg:w-1/2 w-nine mx-auto rounded-2xl" alt="oops" title="Image - © Courtesy of MyGames" />
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

export { Gems };