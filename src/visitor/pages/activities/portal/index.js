import React from 'react'
import Banner from '../../../../images/Portal-Banner.png'
import campain01 from '../../../../images/Campain-Story01.jpg'
import darkSoulGoblin from '../../../../images/Portal-Dark-Soul-goblin.png'
import veryDarkSoulGoblin from '../../../../images/Portal-Very-Dark-Soul-goblin.png'
import portalSouls from '../../../../images/Portal-Souls.png'
import portalImg from '../../../../images/portal-image01.png'
import portalmod0 from '../../../../images/Portal-modifier01.jpg'
import portalmod1 from '../../../../images/Portal-modifier02.jpg'

const Portal = () => {
    return (
        <div className="flex flex-col min-h-full h-auto mb-6">
            <div className="mx-auto my-6">
                <img src={Banner} className="lg:w-1/2 w-nine mx-auto" alt="oops" title="Portal - © Courtesy of MyGames" />
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-pink-500">PORTAL</h1>
                    <p className="font-medium">
                        My Lord! The portal has reopened! We have to fight the monsters coming out of it, or they will take over our world!
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">
                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                        <img src={campain01} className="w-full rounded-md" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col lg:text-left text-center lg:ml-4 lg:mr-16">
                        <h1 className="text-3xl font-extrabold mt-12 mb-8">What is it?</h1>
                        <p>
                        For Throne Room 6 and above, portal opens once a week on Friday morning at 9am GMT. It runs until a set number of souls is cumulatively depleted by all participating players of the game. 
                        Portal typically lasts 3 days. Souls may go faster than usual, if the legendary gear being offered hasn't been seen in many rotations, 
                        or if an event is running that offers prizes per level. 
                        <br /><br />
                        For Throne Rooms 6 - 10 portal consists of 80 separate levels of PvE (player vs environment). The higher levels get unlocked by completing the level below.<br />
                        Each week a video/ad is available to return you to your previously highest completed level.
                        For completing a level you earn "<span className="text-pink-500">dark souls</span>". As you climb, certain levels reward you with a chest containing various resources and gear. 
                        The higher you go the better the chests contents.
                        <br /><br />
                        Throne Room 11 introduces portal levels 81-125 which reward you with "<span className="text-pink-500">very dark souls</span>" for different prizes in the portal shop.
                        </p>
                    </div>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col text-left lg:mx-32">
                        <h1 className="text-3xl font-extrabold mt-12 mb-8 text-center">PORTAL: Dark Souls</h1>
                        <h2 className="text-xl font-bold mb-8 text-left">Why make use of Portal?</h2>
                        <p>
                            Portal has three major uses. It is the easiest and quickest way to get legendary gear and diamonds, particularly at the lower Throne Room levels such as TR 6 & 7. 
                            At these low levels you can buy the Soul Stealer x3, and buy back more diamonds than you spent. In addition to diamonds, the legendary items are relatively cheap. 
                            You may also buy Purple or Blue shards instead of the crafting and breaking down items process.
                            {/* <br /><br />
                            Between Throne Rooms 8 and 10 ...  */}
                            <br /><br />
                            Once you arrive at Throne Room 11 it also becomes the main source of farming for certain set's crafting materials.
                        </p>
                    </div>
                    <div className="lg:w-150 w-full lg:pr-12 py-5">
                        <img src={darkSoulGoblin} className="w-full" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-24 lg:pl-24 lg:pr-56">
                    <h2 className="text-xl font-bold mb-2 text-left">Battles:</h2>
                    <p>
                        Portal battles are multi-stage, which means there are multiple waves of enemies ranging from 2 to 5 waves. 
                        Each wave has a short break in between (which counts for ability cooldowns such as resurrection and artifacts).
                        <br /><br />
                        Portal battles cost food to enter, so saving up Facebook friend gift chests and other food chests is recommended throughout the week. 
                        The cost ranges from 8,300 apples on lvl 1 to 55,000 apples on lvl 80. And goes even higher on the 80+ levels.
                        <br /><br />
                        There are many different enemies that you will face during your Portal adventure, ranging from minions to sub bosses and bosses. 
                        The special enemies and their abilities can be found when clicking their icons on the portal level selection page. 
                        Some enemies summon minions, resurrect their allies, slow your ability cooldown, split into multiple enemies, attack certain fighter types like archers or mages, etc.
                        <br /><br />
                        Arena squads are typically not good Portal squads and vice-versa. Because, Arena is only one battle, whereas Portal has multiple enemy waves. 
                        Survivability and sustainability tend to take priority over damage per second and kill speed.
                    </p>
                </div>

                <div className="mx-auto my-6">
                    <img src={portalImg} className="lg:w-1/2 w-nine mx-auto rounded-md" alt="oops" title="Image - © Courtesy of MyGames" />
                </div>

                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-nine my-auto w-full lg:pr-24 lg:pl-24 py-5">
                        <img src={portalSouls} className="lg:w-nine" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col lg:text-left text-center  lg:mr-16">
                        <h1 className="text-3xl font-extrabold mt-12 mb-24">Soul Stealers</h1>
                        <p>
                            Soul Stealers are a very handy item to purchase before hitting portal, particularly if you're making a big farming push. 
                            They can be bought as a x2 doubler and a x3 tripler.
                            <br /><br />
                            With a x2 soul stealer, you will get the same amount of souls in addition to the usual amount of souls.
                            <br />
                            3x soul stealers will, just like the double stealer, give you 2x the amount of souls in addition to the usual amount.
                            <br /><br />
                            And unlike portal chests, you can use it as many times as you want on any level. as long as there are still souls left!
                        </p>
                    </div>

                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <h2 className="text-xl font-bold mb-2 text-left">Farming Tips:</h2>
                    <p>
                        As you work your way up, the levels fluctuate in difficulty, generally getting harder as you climb the ladder but, it is not a hard and fast rule.  
                        To find a good farming level you'll want to go as high as you can, preferably finding a level that you can win with little to no spells. 
                        Sometimes you'll hit a very difficult level, (most notable is lvl 46 or lvl 53-54), there is an easier level past it, (e.g. 47 or 55). 
                        These levels usually have similar difficulties to the few levels below, but earns many more souls. Well worth trying to push through.
                    </p>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="lg:w-nine w-full py-5">
                        <img src={veryDarkSoulGoblin} className="lg:w-nine lg:px-24" alt="" title="Image - © Courtesy of MyGames" />
                    </div>
                    <div className="flex flex-col lg:min-h-full text-left ">
                        <h1 className="text-3xl font-extrabold mt-12 mb-8 text-center">PORTAL: Very Dark Souls</h1>
                        <p>
                            "Very dark souls" are a second currency that was introduced exclusively to TR11, along with the addition of levels 81-125.
                            These are the only levels to offer this currency.
                        </p>
                    </div>

                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <h2 className="text-xl font-bold mb-2 text-left">Battles and Modifiers:</h2>
                    <p>
                        As with previous stages these battles are also multi-stage but include one major difference, level modifiers. 
                        These modifiers cause a variety of different conditions so it's important to check them when setting up your squad.
                        It should be noted that the modifiers changes every week.
                    </p>
                </div>

                <div className="mx-auto my-6 w-nine">
                    <img src={portalmod0} className="lg:w-1/2 w-nine mx-auto rounded-md" alt="oops" title="Image - © Courtesy of MyGames" />
                    <img src={portalmod1} className="lg:w-1/2 w-nine mx-auto rounded-md" alt="oops" title="Image - © Courtesy of MyGames" />
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <h2 className="text-xl font-bold mb-2 text-left">Time is Money:</h2>
                    <p>
                        Another feature of the "very dark souls" portal is the speedrun. You compete with all participating players to see who can beat levels 81-125 the fastest. 
                        You can see the current winner of each level, and their time, on the lower right of each level. 
                        At the end of portal the winners will receive "very dark souls" as their prize. Prizes start at 20k for level 81 and +2k per level above that.
                        <br /><br />
                        It's important to note that only 1 speed record can be held. Beating a higher level record deletes your old one. 
                        Another thing to keep in mind, if you hold the record for level 120 you can't get a record in 81-119 until someone beats your 120 record.
                    </p>
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

export { Portal };