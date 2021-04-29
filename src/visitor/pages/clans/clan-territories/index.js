import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../../../images/CT-banner.png'
import ClanCoin from '../../../../images/clanCoin.png'
import HuntersHood from '../../../../images/hunters-hood.png'
import Keanu from '../../../../images/Keanu.png'
import hunterBonusses from '../../../../images/hood-bonusses.jpg'
import CtBoard from '../../../../images/ct-board.png'
import CtLeaderBoard from '../../../../images/ct-leaderboard.png'
import BossChart from '../../../../images/boss-chart.png'
import TownHall from '../../../../images/CT-thLevels.png'

const ClanTerritories = () => {

    return (
        <div className="flex flex-col min-h-full h-auto mb-6">
            <div className="mx-auto my-6">
                <img src={Banner} className="w-nine mx-auto rounded-md" alt="oops" />
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-blue-600">Clan Territories</h1>
                    <p className="font-medium">
                    Clan Territory (Or CT) was released in November 2020 and was built to be the portion of Hustle Castle that involves the entire clan and requires the most cooperation, 
                    while other game modes require minimal or no other player involvement.  
                    It also provided an incentive for people to stick with a single clan and not jump around - your time and effort spent in CT will provide benefits to not only you, 
                    but the entire clan as well.
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">

                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                        <img src={ClanCoin} className="lg:w-150 rounded-md" alt="" title="" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:pl-20">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Clan Coins</h1>
                        <p>
                            The basic currency for CT is clan coins. Coins can be earned for doing various tasks, which will be covered later. 
                            They are used to upgrade CT buildings to higher levels (Investing) or can be spent in the Clan Store on a variety of items. 
                            As tempting as it is to spend coins on store items, it is also important to invest coins into the various CT buildings for increased clan 
                            bonuses and rewards.  Each clan's leadership should establish an upgrade plan that entails who invests in what buildings and when, 
                            and do so in a way that is fair and equitable.
                            <br /><br />
                            Every clan member can see the progress of CT, as well as the earnings and investments made by all members 
                            (over the past two weeks and all-time numbers) here:
                        </p>
                    </div>
                </div>

                <div className="mx-auto my-6">
                    <img src={CtBoard} className="lg:w-1/2 w-nine mx-auto" alt="oops" />
                </div>

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <p>
                            There's a lot of useful information in here. 
                            The buttons on the top right will list either earnings or investments. 
                            The other tabs will show which clan members are earning summoning scrolls, glory, or ingredients. 
                            The last tab is for "marauder cards" which has recently been released.
                        </p>
                    </div>
                    <div className="lg:w-150 my-auto w-full lg:pr-24 py-5">
                        <img src={CtLeaderBoard} className="lg:w-nine" alt="" title="" />
                    </div>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col w-nine justify-center mx-auto lg:pl-24 lg:pr-56 mb-24 mt-24">
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Buildings and Activities:</h2>
                    <p>
                        There are basically 2 types of options in CT. There are building that support you in all types of things. <br />
                        And there are buildings that are activities for the memebers of the clan. <br />
                        <br /><br />
                        SUPPORT: <br />
                        <ul className="ml-4 text-blue-400">
                            <li className="hover:underline"><Link to="#">Neightborhoods ( Hunters - Workers - Raiders - <i>Miners*</i> )</Link></li>
                            <li className="hover:underline"><Link to="#">Tavern</Link></li>
                            <li className="hover:underline"><Link to="#">Store</Link></li>
                        </ul>
                        <br />
                        ACTIVITIES: <br />
                        <ul className="ml-4 text-blue-400">
                            <li className="hover:underline"><Link to="#">Gate of the Abyss</Link></li>
                            <li className="hover:underline"><Link to="#">Message Board</Link></li>
                            <li className="hover:underline"><Link to="#">Expedition Marquee</Link></li>
                        </ul>
                    </p>
                    <span className="text-xs italic mt-6">*Miners is not released yet</span>
                </div>

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-4">
                    <div className="lg:w-150 my-auto w-full py-5">
                        <img src={TownHall} className="lg:w-nine" alt="" title="" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:w-nine lg:ml-8 lg:mr-8">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Town Hall</h1>
                        <p>
                        The Town Hall actually doesn't do anything. However, similar to the Throne Room in your castle, 
                        upgrading it enables you to upgrade other buildings to higher levels, unlocking better clanwide bonuses. 
                        The maximum Town Hall level as of January 7, 2021 is five.  Town Hall levels provide access to the following buildings, 
                        and their maximum levels.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-4 neighborhoods">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Neightborhoods</h1>
                        <p>
                            Each neightborhood is a "part of town" where you can move into. If you are deployed in a neightborhood
                            you will be able to reviece bonus rewards when doing specific activities. <br /><br />
                            For example, the Hunter's neightborhood will give you extra clan tokens when doing dungeon bosses or extra tickets during invasions.
                            <br /><br />
                            Only a Clan leader; Deputy leader; Warlord has the ability to move players into and out of the neighborhoods.
                            <br /><br />
                            And when you place a player in a neightborhood-spot, that spot will be in a cooldown for 1 hour, even if the player leaves the spot,
                            it will be on cooldown for the remaining time of that hour. <br />
                            This may sound absurd, but was implemented to make the CT more strategic.
                        </p>
                    </div>
                    <div className="lg:w-nine my-auto w-full lg:pr-24 py-5">
                        <img src={HuntersHood} className="lg:w-nine" alt="" title="" />
                    </div>
                </div>

                <div className="mx-auto my-6 pb-12">
                    <img src={hunterBonusses} className="lg:w-1/2 mx-auto rounded-md" alt="oops" />
                </div>

                
                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-8 mt-24">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Gate of the Abyss</h1>
                        <p>
                            The Gate of the Abyss is where clan bosses are summoned.  
                            The building does not have levels and only serves to house the clan bosses.
                            <br /><br />
                            As of January 7, 2021 there are three clan bosses that can be fought.  PUMBA 3000, Papa Troll, and Sporozilla. 
                            Each have varying strategies that can be used for success, these strategies will be covered elsewhere. 
                            The following is courtesy of <span className="text-yellow-500">San Transarm</span>:
                            <br /><br />
                        </p>
                    </div>
                </div>

                <div className="mx-auto my-6 pb-12">
                    <img src={BossChart} className="lg:w-nine mx-auto rounded-md" alt="oops" />
                </div>

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <p>
                            <h1 className="text-xl font-extrabold text-left">There are two distinct “phases” for clan bosses:</h1>
                            <br /><br />  
                            <li>
                                The <span className="font-bold">“Summoning”</span> phase, which occurs between midnight GMT on Saturday and 11:59 PM GMT on Sunday.
                            </li>
                            <br />
                            <li>
                                The <span className="font-bold">“Attack”</span> phase, which occurs between midnight GMT on Monday and 11:59 PM GMT on Friday.
                            </li>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-4">
                    <div className="lg:w-nine my-auto w-full lg:pl-24 py-5">
                        <img src={Keanu} className="lg:w-nine" alt="" title="" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Expedition Marquee</h1>
                        <p>
                            The latest feature of the game: Expedition marquee!
                            <br /><br />
                            A Raid activity where You can group up with 3 other players from your clan and fight agains another clan's group.
                            <br /><br />
                            You can create as many groups as you want for your members, as long as you have enough marauder cards.
                            <br /><br />
                            The activity takes place twice a day.
                            <br /><br />
                            For more info you can join our <a href="https://discord.gg/hustle-prime" className="text-purple-500 hover:underline">Discord</a> server.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ClanTerritories };