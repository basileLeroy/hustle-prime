import React from 'react'
import Banner from '../../../../images/Arena-Banner.png'
import Warrior from '../../../../images/warrior-image.png'
import Bracket from '../../../../images/Bracket-List.jpg'
import BracketLegend from '../../../../images/Bracket-List-Legent.jpg'
import scarecrowIcon from '../../../../images/scarecrowIcon.png'
import Info from '../../../../images/info.png'

import { BracketCalc } from './BracketCalc'

const Arena = () => {


    return (
        <div className="flex flex-col min-h-full h-auto mb-6">
            <div className="mx-auto my-6">
                <img src={Banner} className="lg:w-1/2 w-nine mx-auto" alt="oops" title="Arena - © Courtesy of MyGames" />
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-blue-400">ARENA</h1>
                    <p className="font-medium">
                        How does it work? What are the rules? How can I use this to my advantage?<br />
                        Here you will find info on how to dominate the Arena and it's brackets!
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">
                <div className="flex flex-col mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-150 w-full lg:pr-12 lg:pl-36 py-5">
                        <img src={Warrior} className="w-full" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col text-center lg:mx-32">
                        <h1 className="text-3xl font-extrabold mt-12 mb-8 text-center">Arena Brackets</h1>
                        <p>
                            The tournaments are divided into many different brackets. The bracket system will make sure that players with similar squad sizes and powers are fighting against each other.<br /><br /> 
                            With that said, there is still a lot of room inside each bracket to avoid having only opponents of your own level. Which keeps the arena interesting!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-24">
                    <h1 className="lg:pl-36 text-3xl font-extrabold">List of Brackets:</h1>
                    <div className="w-nine lg:pr-12 lg:pl-36 py-5">
                        <img src={Bracket} className="w-full rounded-md" alt="" ttitle="Bracket-image" />
                        <img src={BracketLegend} className="lg:w-2/3 w-full mt-3 rounded-md" alt="" ttitle="Bracket-legend" />
                    </div>
                    
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col text-center lg:mx-32">
                        <h1 className="text-3xl font-extrabold mt-12 mb-8 text-center">The 3-Bracket Rules:</h1>
                        <p>
                            One of the most confusing rules might be the "3-Bracket rules"... <br /> 
                            The 3-Brackets rule basically tells you that you can not have fighters that span over more than 2 consecutive brackets. 
                            <br /><br /> Let's say we have a team with 6 players: 
                            <br /><br /> 85 - 85 - 85 - 85 - 85 - 85 
                            <br /><br /> Those six players are all inside one bracket (bracket 85). But if I should level one of them up to lvl 86: 
                            <br /><br /> <span className="text-blue-500">86</span> - 85 - 85 - 85 - 85 - 85
                            <br /><br /> We now have 1 fighter in the next bracket (<span className="text-blue-500">bracket 94</span>)
                            <br /><br /> This is still okay as long as we only have fighters in max 2 different brackets, and that there is not more than 1 empty bracket between those 2 AND your squad-average still is inside the bracket you want to be in!
                            <br /><br /> For example, this would not work:
                            <br /><br /> <span className="text-blue-500">100</span> - <span className="text-blue-500">86</span> - 85 - 85 - 85 - 85
                        </p>
                    </div>
                    <div className="lg:w-150 w-full lg:pr-12 py-5">
                        <img src={Info} className="w-full" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-24 lg:pr-56">
                    <p>
                        Because we now have one fighter in the <span className="text-blue-500">100 bracket</span>, one in the <span className="text-blue-500">94 bracket</span> and the others in the 85 bracket. This is spanning over more than 2 different brackets. 
                        The game will then calculate from highest bracket to lowest: calculating only the average of your lvl 100 and 94 fighters. Which will put you in the 6x100 bracket.
                    </p>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto h-auto justify-center w-nine lg:flex-row mb-24 mt-24">
                    <div className="lg:w-150 w-full my-auto lg:pr-12 lg:pl-36 py-5">
                        <img src={scarecrowIcon} className="w-full rounded-md" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col text-center lg:mx-32">
                        <h1 className="text-3xl font-extrabold mt-12 mb-8 text-center">Fighter Training Room (FTR)</h1>
                        <p>
                            If FTR training maximum level 31-40, minimum fighter level you can have is level 26 (minus 5 levels from 31)
                            <br /> This will be the minimum level that the game will take into account when calculating your bracket. Anything lower than that will not be included.
                            <br /><br /> Here's a list with all the minimum levels you can have for each FTR:
                            <br />
                            <br /> If trains 41-55, minimum fighter level 36
                            <br /> If trains 56-70, minimum fighter level 51
                            <br /> If trains 71-85, minimum fighter level 66
                            <br /> If trains 86-100, minimum fighter level 81
                            <br /><br />
                            NOTE:
                            If all fighter levels in castle are below the FTR minimum level, the highest level fighter will be used for bracket calculation. 
                            So if FTR trains 86-100 but highest fighter level is 70, will play in 70 bracket. If at 71, plays in the 77 bracket.
                        </p>
                    </div>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />
                
                <div className="flex flex-col w-nine justify-center mx-auto mb-24 lg:pr-56">
                    <h1 className="text-3xl font-extrabold mt-12">Calculate your own bracket!</h1>
                    <br />
                    <p>By following 3 easy steps:</p>

                </div>

                <BracketCalc />

                <div className="flex flex-col w-nine justify-center mx-auto mb-24 lg:pr-56">
                    <h1 className="text-3xl font-extrabold mt-12">Exceptions:</h1>
                    <h3 className="text-2xl">Overleveled fighter rule:</h3>
                    <p>In short, it means that you cannot exceed X number of fighters above your arena bracket level.<br />For more clarity or in case you think your squad breaks this rule, you can always reach out for advice on our Discord (see below).</p>
                    <br /><br />
                    <h3 className="text-2xl">Promo-Dwellers:</h3>
                    <p><span className="text-blue-500 font-bold">45, 45, 40, 40</span> is a squad composition that is possible when purchasing a dweller promo offer in game.</p>
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-24 lg:pr-56">
                    <h1 className="text-3xl font-extrabold mt-12">Extra: (how to calculate it yourself)</h1>
                    <h3 className="text-2xl">Your Barracks lvl:</h3>
                    <p>First you look at the level your Barracks is, this will be needed to calculate your bracket.</p>
                    <br /><br />
                    <h3 className="text-2xl">Get your fighter levels:</h3>
                    <p>When you know the level of your Barracks, you go trough your castle and look at your <span className="text-blue-500 font-bold">n</span> strongest fighters, <span className="text-blue-500 font-bold">n</span> being the number of fighters equal to the level of your Barracks</p><br />
                    <p>For example: <br /> you have a lvl 5 Barracks, wich means you have to look for your 5 strongest fighters in your castle.</p>
                    <br /><br />
                    <h3 className="text-2xl">Calculate your average fighter level:</h3>
                    <p>Sum up the n number of fighters and devide them by n. (classic formulla for averages)</p>
                    <br /><br />
                    <h3 className="text-2xl">Compare your average with the bracket list:</h3>
                    <p>Look at your average and see in wich bracket your average would fall.<br /> (Don't forget to check if you are not breaking any of the rules mentioned on this page!)</p>
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

export { Arena };