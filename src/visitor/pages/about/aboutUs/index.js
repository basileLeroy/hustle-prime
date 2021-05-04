import React from 'react'
import SleepyPrime from '../../../../images/SleepyPrime.png'


function About() {
    return (
        <div className="flex flex-col min-h-full h-auto mb-6">

            <div className="flex flex-col w-nine justify-center mx-auto text-center mb-12">
                <div className="flex flex-col lg:mx-32">
                    <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-blue-600">ABOUT US</h1>
                </div>
            </div>

            <div className="flex flex-col w-nine justify-center mx-auto">

                <div className="flex flex-col h-auto mx-auto justify-center w-nine lg:flex-row mb-8">
                    <div className="lg:w-150 my-auto w-full  lg:pl-24 py-5">
                        <img src={SleepyPrime} className="lg:w-150 rounded-full" alt="oops" title="Image - © Hustle Castle" />
                    </div>
                    <div className="flex flex-col lg:text-left lg:pl-20">
                        <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">A Little Story ...</h1>
                        <p>
                        The <span className="text-blue-500 font-extrabold">Hustle Prime</span> brand has been long recognized as one of the most influential and informative english speaking communities for Hustle Castle .. but how did it start ?
                        <br/><br/>
                        In April of 2018, when the war activity was introduced to the expanding gameplay, a few players turned their clan server into a little bit of a help desk/ information server. 
                        With new players joining the game daily, the same questions were being asked often. 
                        Wouldn’t it be swell if there was a place to get the basic game stuff answered .. that’s what they thought too ... and <span className="text-blue-500 font-extrabold">Hustle Prime</span> was born. 
                        </p>
                    </div>
                </div>

                <div className="flex flex-col mx-auto justify-center w-nine h-auto lg:flex-row mb-24">
                    <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16">
                        <p>
                        The name <span className="text-blue-500 font-extrabold">Hustle Prime</span> did not actually exist until later that year in September after the owners had made an 
                        attempt to collaborate with another group that started a ‘global’ community. 
                        That collaboration was a failure as the other group was disinterested and inactive. 
                        <br/><br/>
                        <span className="italic">“We can do this on our own,” </span> we said. A post on reddit later and some rapid expansion with eager new players seeking answers and the dream was a reality.
                        Constant updating of content and server tools has kept the influx of players coming aboard. 
                        <br/><br/>
                        
                        September 2018 saw a server of 400 members grow into over 1000 by December that same year. The following summer saw a very unexpected surprise. 
                        The Development team for the game reached out and asked to participate and offer support. 
                        We would retain an unofficial status so as to maintain creative control over the player made and player run community. 
                        With the developer represented community manager on board, we could create <span className="text-gray-200 text-2xl font-extrabold">contests with in game rewards</span>. 
                        This option grew the server even more,  to over 4000 members that Christmas. A year later in 2020 we broke the 10’000 player mark. 
                        An impressive feat if I do say so myself.
                        <br/><br/>
                        Currently the <span className="text-blue-500 font-extrabold">Hustle Prime</span> Community strives to keep the same quality of life interactions for all players in the game. 
                        <span className="text-xl text-blue-300 italic">We offer a safe learning environment with a knowledgable moderation team and thousands of other players that love the game.</span>
                        </p>
                    </div>
                </div>

                <hr
                    className="bg-gray-400 h-1 w-nine mx-auto"
                />

            </div>

        </div>
    )
}
export { About };