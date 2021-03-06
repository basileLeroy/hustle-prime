import React from 'react'

import map from '../../../../images/WorldMap.jpg'
import campain01 from '../../../../images/Campaign_Story.png'
import pvp from '../../../../images/Pvp-Castle.jpg'

const Map = () => {
    return (
        <div className="flex flex-col min-h-full h-auto mb-6">
            <div className="mx-auto my-6">
                <img src={map} className="lg:w-1/2 w-nine mx-auto rounded-md" alt="oops" title="World-Map - © Courtesy of MyGames" />
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center">THE MAP</h1>
                    <p className="font-medium">What do you want to know about the map?<br /> On this page you will find almost anything there is to know about this game's world map!</p>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">
                <div className="flex flex-col mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-150 w-full lg:pr-12 py-5">
                        <img src={campain01} className="w-full rounded-md" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col text-center lg:mx-32">
                        <h1 className="text-3xl font-extrabold mt-12 mb-8 text-center">Campaign / Storyline</h1>
                        <p>
                            It is the legend of a brave Lord (you), that had to discover that his dearly loved Olivia had been captured by the infamous Abyss Lord! <br /><br />
                            As you go on with your army, you will need to march through multiple hostile territories. All the Abyss Lord's allies (or more likely those pressured to cooperate) 
                            will try to stop you in your quest for Olivia's freedom! <br /><br /> 
                            But.. Are those the only dangers you will have to face?
                        </p>
                    </div>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col text-center lg:mx-32">
                        <h1 className="text-3xl font-extrabold mt-12 mb-8 text-center">PVP</h1>
                        <p>
                            When you advance in the story-line, you will unlock new sections of the map. Those sections will give you the space to encounter PVP adversairies. <br /><br /> 
                            By attacking those players you will gain more resources to make upgrades to your castle!
                        </p>
                    </div>
                    <div className="lg:w-150 w-full lg:pr-12 py-5">
                        <img src={pvp} className="w-full rounded-md" alt="" title="Image - © Courtesy of MyGames" />
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

export { Map };