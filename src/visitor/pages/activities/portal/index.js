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
                <img src={Banner} className="lg:w-1/2 w-nine mx-auto" />
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-pink-500">PORTAL</h1>
                    <p className="font-medium">
                        My Lord! The portal has reopened! we have to fight the monsters comming out of it, or they will take over our world!
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">
                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                        <img src={campain01} className="w-full rounded-md" alt="" title="" />
                    </div>
                    <div className="flex flex-col lg:text-left text-center lg:ml-4 lg:mr-16">
                        <h1 className="text-3xl font-extrabold mt-12 mb-8">What is it?</h1>
                        <p>
                        Portal opens up once a week, Friday morning at 9am GMT, and runs until a set number of souls is cumulatively depleted by all participating players of the game. 
                        Portal typically lasts approximately 3 days. Having said that, if the legendary gear being offered hasn't been seen in many rotations, 
                        or if an event is running that offers prizes per level, souls may go faster than usual. 
                        <br /><br />
                        For Throne Rooms 6 - 10 portal consists of 80 separate levels of PvE (player vs environment) play, with the higher level getting unlocked by completing the level below. 
                        For completing a level, you earn "dark souls", and as you climb certain levels reward you with a chest containing various resources, and gear. 
                        The higher you go the better the chests contents.
                        <br /><br />
                        Throne Room 11 introduces portal levels 81-125 which reward you with "very dark souls" for different prizes in the portal shop.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <p>
                        We will be splitting this guide into two distinct sections. One will cover the regular "<span className="text-pink-500">dark souls</span>" 
                        portal, with levels 1-80, the second section will cover the TR11 exclusive "<span className="text-pink-500">very dark souls</span>" portal.
                    </p>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine lg:flex-row mb-24 mt-24">
                    <div className="flex flex-col text-left lg:mx-32">
                        <h1 className="text-3xl font-extrabold mt-12 mb-8 text-center">PORTAL: Dark Souls</h1>
                        <h2 className="text-xl font-bold mb-8 text-left">Why make use of Portal?</h2>
                        <p>
                            Portal has three major uses.  It is the easiest and quickest way to get legendary gear and diamonds, particularly at the lower Throne Room levels such as TR 6 & 7. 
                            The reason for this is because you can buy the Soul Stealer x3, and buy back more diamonds than you spent, in addition to as many legendaries as you can farm. 
                            It is also one of the few places you can earn Purple or Blue shards other than crafting and breaking items down which can be quite time consuming.
                            <br /><br />
                            Once you arrive at Throne Room 11 it also becomes the main source of farming for certain sets crafting materials.
                        </p>
                    </div>
                    <div className="lg:w-150 w-full lg:pr-12 py-5">
                        <img src={darkSoulGoblin} className="w-full" alt="" title="Test-02" />
                    </div>
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-24 lg:pl-24 lg:pr-56">
                    <h2 className="text-xl font-bold mb-2 text-left">Battles:</h2>
                    <p>
                        Portal battles are multi-stage, which means there are multiple waves of enemies ranging from 2 to 5 waves. 
                        Each wave has a short break in between (which counts for ability cooldowns such as resurrection and artifacts).
                        <br /><br />
                        Portal battles cost food to enter, so saving up Facebook friend gift chests and other food chests is recommended throughout the week. 
                        The cost ranges from 8,300 apples on lvl 1 to 55,000 apples on lvl 80.
                        <br /><br />
                        There are many different enemies that you will face during your Portal adventure, ranging from minions, sub bosses and bosses. 
                        The special enemies and their abilities can be found when clicking their icons on the portal level selection page. 
                        Some enemies summon minions, resurrect their allies, slow your ability cooldown, split into multiple enemies, attack certain fighter types like archers or mages, etc.
                        <br /><br />
                        Arena squads are typically not good Portal squads and vise-versa. This is because Arena is only one battle, whereas Portal has multiple enemy waves. 
                        Survivability and sustainability take priority over damage per second and kill speed.
                    </p>
                </div>

                <div className="mx-auto my-6">
                    <img src={portalImg} className="lg:w-1/2 w-nine mx-auto rounded-md" />
                </div>

                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-24">
                    <div className="lg:w-nine my-auto w-full lg:pr-24 lg:pl-24 py-5">
                        <img src={portalSouls} className="lg:w-nine" alt="" title="" />
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
                        As you work your way up, the levels fluctuate in difficulty, generally getting harder as you climb the ladder. 
                        To find a good farming level you'll want to go as high as you can, preferably finding a level that you can win with little to no spells. 
                        Sometimes you'll hit a very difficult level, (most notable is lvl 46 or lvl 53-54), there is an easier level past it, (e.g. 47 or 55). 
                        This level usually has similar difficulty to one a few levels below, but earns many more souls. Well worth trying to push through.
                        </p>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24 mt-24">
                    <div className="lg:w-nine w-full py-5">
                        <img src={veryDarkSoulGoblin} className="lg:w-nine lg:px-24" alt="" title="Test-02" />
                    </div>
                    <div className="flex flex-col lg:min-h-full text-left ">
                        <h1 className="text-3xl font-extrabold mt-12 mb-8 text-center">PORTAL: Dark Souls</h1>
                        <p>
                            "Very dark souls" are a secondary currency that was introduced exclusively to TR11, along with the addition of levels 81-125.
                            These are the only levels to offer this currency.
                        </p>
                    </div>

                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <h2 className="text-xl font-bold mb-2 text-left">Battles and Modifiers:</h2>
                    <p>
                        As with previous stages these battles are also multi-stage but include one major difference, level modifiers. 
                        The modifier for each weekend is triggered by the first player to beat level 81. 
                        These modifiers cause a variety of different conditions so it's important to check them when setting up your squad.
                    </p>
                </div>

                <div className="mx-auto my-6 w-nine">
                    <img src={portalmod0} className="lg:w-1/2 w-nine mx-auto rounded-md" />
                    <img src={portalmod1} className="lg:w-1/2 w-nine mx-auto rounded-md" />
                </div>

                <div className="flex flex-col w-nine justify-center mx-auto mb-8 lg:pl-24 lg:pr-56">
                    <h2 className="text-xl font-bold mb-2 text-left">Time is Money:</h2>
                    <p>
                        Another feature of the "very dark souls" portal is the speedrun feature. You compete with all of the other players to see who can beat levels 81-125 the fastest. 
                        You can see the current winner of each level, and their time, on the lower right of each level. 
                        At the end of portal the winners will receive "very dark souls" as their prize. Prizes start at 20k for level 81 and 2k per level above that.
                        <br /><br />
                        It's important to note that only 1 speed record can be held, beating a higher level record deletes your old one. 
                        Another thing to keep in mind, if you hold the record for level 120 you can't get a record in 81-119 until someone beats your 120 record.
                    </p>
                </div>
            </div>

        </div>
    )
}

export { Portal };