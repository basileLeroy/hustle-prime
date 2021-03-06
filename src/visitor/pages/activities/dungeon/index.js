import React from 'react'
import Banner from '../../../../images/dungeon-banner.png'
import HeroAndMount from '../../../../images/hero+mount.png'
import DungeonWarrior from '../../../../images/dungeonWarrior.png'
import Vampire from '../../../../images/vampire-boss.png'


const Dungeon = () => {
    return (
        <div className="flex flex-col min-h-full h-auto mb-6">
            <div className="mx-auto my-6">
                <img src={Banner} className="lg:w-1/2 w-nine mx-auto" alt="oops" title="Dungeons - © Courtesy of MyGames" />
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-purple-600">DUNGEONS</h1>
                    <p className="font-medium">
                        Welcome to the Dungeon, the greatest challenge Hustle Castle has to offer. 
                        Team up with a friend to help face dastardly demons, badass bosses, and perhaps the most difficult opponent in the game: yourself! 
                        Defeat these opponents to earn various rewards, including ancient set materials, items to personalize your hero such as unique skins and mounts. 
                        Upgrade your hero to provide massive boosts and special abilities to your squad.
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">

                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                        <img src={HeroAndMount} className="lg:w-150 rounded-md" alt="oops" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:pl-20">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">What is it?</h1>
                        <p>
                            Dungeon is a place where you can team up with another player to defeat monsters.
                            <br /><br />
                            When starting a journey in the dungeon, you will have the choice to select a "friend" from the friend-list, 
                            a "clan-member" which will be an open invite posted in the clan chat for all members to see. 
                            There is also the "random" option, wich will pair you up with a random player based on your Throne level.
                        </p>
                    </div>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Squads:</h1>
                        <p>
                            As mentioned earlier, you are doing journeys with another player! 
                            Each one of you will be able to select up to 8 fighters to take with you on your journey.
                            <br /><br />
                            The emphasis is on selecting fighters that complement your partner's squad. 
                            E.g. when you don't have a good archer, let the other player take 2 archers, 
                            you on the other hand could be compensating with another tank
                            <br /><br />
                            The most basic combined composition would be as follows: <br />
                            <span className="text-purple-600">2 archers</span> | <span className="text-purple-600">4 Tanks</span> | <span className="text-purple-600">2 Damage Mages</span> | <span className="text-purple-600">4 Healers</span> | <span className="text-purple-600">4 Rez</span>
                        </p>
                    </div>
                    <div className="lg:w-nine my-auto w-full lg:pr-24 py-5">
                        <img src={DungeonWarrior} className="lg:w-nine rounded-md" alt="oops" title="Image - © Courtesy of MyGames" />
                    </div>
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <h2 className="text-xl font-bold mb-2 text-left text-purple-600">NOTE:</h2>
                    <p>
                        Every combined squad can vary depending on your own preferences, there is no right or wrong! <br />
                        i.e. "The Mungeon"
                    </p>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col w-nine justify-center mx-auto lg:pl-24 lg:pr-56 mb-24 mt-24">
                    <h2 className="text-3xl font-bold mb-2 text-left">Monster Powers:</h2>
                    <p>
                        The power of the monsters Is suggested to be the strongest squadpower of the 2 players. 
                        In general we advise you to find a dungeon partner with equal power as 
                        yourself to have the advantage against the monsters and bosses.
                        <br /><br />
                        There are also other options you can use, like going with a way stronger dungeon partner, 
                        having a partner with higher squadpower, by not being the strongest of the two, etc ...
                        <br /><br />
                        It really is <span className="text-purple-600">up to you</span> to find the combination that suits you best!
                    </p>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="lg:w-nine my-auto w-full lg:pl-24 py-5">
                        <img src={Vampire} className="lg:w-nine" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Dungeon Bosses:</h1>
                        <p>
                            Each dungeon has also a number of bosses to defeat. Some dungeon runs will have 2 bosses in it (basic runs). 
                            Others will have 4 Bosses, while there are also boss dungeons that only have bosses in it.
                            <br /><br />
                            Each dungeon boss has specific characteristics. This means there are certain tactics to employ in order to defeat them. <br />
                            Pay attention to the boss write-ups. The hints are there.
                            <br /><br />
                            <span className="text-purple-600">You can find our cheat sheet on <a href="https://discord.gg/7vhfVRm" className=" font-extrabold hover:underline" title="Hustle-Prime Discord server">Discord</a> !</span>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export { Dungeon };