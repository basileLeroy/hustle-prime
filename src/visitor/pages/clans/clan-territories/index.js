import React from 'react'
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
                <img src={Banner} className="w-nine mx-auto rounded-md" alt="oops" title="CT-Banner - © Courtesy of MyGames" />
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
                        <img src={ClanCoin} className="lg:w-150 rounded-md" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:pl-20">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Clan Coins</h1>
                        <p>
                            The basic currency for CT is clan coins. Coins can be earned for doing various tasks, which will be covered below. 
                            They are used to upgrade CT buildings to higher levels or can be spent in the Clan Store on a variety of items. 
                            As tempting as it is to spend coins on store items, it is also important to invest coins into the various CT buildings for increased clan 
                            bonuses and rewards. Each clan will have it's own upgrade plan that entails who can invests in what buildings and when, 
                            and do so in a way that is fair and equitable to them.
                            <br /><br />
                            Every clan member can see the progress of CT, as well as the earnings and investments made by all members 
                            (over the past two weeks and all-time numbers) here:
                        </p>
                    </div>
                </div>

                <div className="mx-auto my-6">
                    <img src={CtBoard} className="lg:w-1/2 w-nine mx-auto" alt="oops" title="Image - © Courtesy of MyGames" />
                </div>

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <p>
                            The first tab shows details about clan coins. 
                            The buttons below "all time" will list either earnings or investments. 
                            The other tabs will show which clan members are earning summoning scrolls, glory, ingredients, or Marauder-maps. 
                        </p>
                    </div>
                    <div className="lg:w-150 my-auto w-full lg:pr-24 py-5">
                        <img src={CtLeaderBoard} className="lg:w-nine" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col w-nine justify-center mx-auto lg:pl-24 lg:pr-56 mb-24 mt-24">
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Buildings and Activities:</h2>
                    <p>
                        There are basically 2 types of options in CT. There are building that support you in all types of things. <br />
                        And there are buildings that are activities for the members of the clan. <br />
                        <br /><br />
                        SUPPORT: <br />
                        <ul className="ml-4 text-blue-400">
                            <li className=""><span to="#">Neighbourhoods ( Hunters - Workers - Raiders - <i>Miners*</i> )</span></li>
                            <li className=""><span to="#">Tavern</span></li>
                            <li className=""><span to="#">Store</span></li>
                        </ul>
                        <br />
                        ACTIVITIES: <br />
                        <ul className="ml-4 text-blue-400">
                            <li className=""><span to="#">Gate of the Abyss</span></li>
                            <li className=""><span to="#">Message Board</span></li>
                            <li className=""><span to="#">Expedition Marquee</span></li>
                        </ul>
                    </p>
                    <span className="text-xs italic mt-6">*Miners is not released yet</span>
                </div>

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-4">
                    <div className="lg:w-150 my-auto w-full py-5">
                        <img src={TownHall} className="lg:w-nine" alt="" title="Town-Hall table - © Hustle Prime" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:w-nine lg:ml-8 lg:mr-8">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Town Hall</h1>
                        <p>
                        The Town Hall actually doesn't do anything. However, similar to the Throne Room in your castle, 
                        upgrading it enables you to upgrade other buildings to higher levels, unlocking better clanwide bonuses. 
                        Town Hall levels provide access to the following buildings, 
                        and their maximum levels.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-4 neighbourhoods">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Neighbourhoods</h1>
                        <p>
                            Each neighbourhood is a "part of town" where you can move into. If you are deployed in a neighbourhood
                            you will recieve bonus rewards when doing specific activities. <br /><br />
                            For example, the Hunter's neighbourhood will give you extra ether when doing dungeons and scrolls for doing invasions and dungeon bosses.
                            <br /><br />
                            Only a Clan leader; Deputy leader; Warlord have the ability to move players in and out of the neighbourhoods.
                            <br /><br />
                            And when you place a player in a neighbourhood-spot, that spot will be in a cooldown for 1 hour, even if the player leaves the spot,
                            it will be on cooldown for the remainder of that hour. <br />
                            This may sound absurd, but was implemented to make the CT more strategic.
                        </p>
                    </div>
                    <div className="lg:w-nine my-auto w-full lg:pr-24 py-5">
                        <img src={HuntersHood} className="lg:w-nine" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                </div>

                <div className="mx-auto my-6 pb-12">
                    <img src={hunterBonusses} className="lg:w-1/2 mx-auto rounded-md" alt="oops" title="Image - © Courtesy of MyGames" />
                </div>

                
                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-8 mt-8">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Gate of the Abyss</h1>
                        <p>
                            The Gate of the Abyss is where clan bosses are summoned.  
                            The building does not have levels and only serves to house the clan bosses.
                            <br /><br />
                            There are three clan bosses that can be fought.  PUMBA 3000, Papa Troll, and Sporozilla. 
                            Each have varying strategies that can be used for success, these strategies will be covered elsewhere. 
                            The following table is courtesy of our <span className="text-yellow-500">Hustle Prime community</span>:
                            <br /><br />
                        </p>
                    </div>
                </div>

                <div className="mx-auto my-6 pb-12">
                    <img src={BossChart} className="lg:w-nine mx-auto rounded-md" alt="oops" title="Boss-chart" />
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
                        <img src={Keanu} className="lg:w-nine" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Expedition Marquee</h1>
                        <p>
                            A Raid activity where You can group up with 3 other players from your clan and fight agains another clan's group.
                            <br /><br />
                            You can create as many groups as you want for your members, as long as you have enough marauder maps.
                            <br /><br />
                            The activity currently takes place twice a day.
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

export { ClanTerritories };