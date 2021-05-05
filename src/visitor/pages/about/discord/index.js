import React from 'react'
import JoinDiscord from '../../../../images/JoinDiscord.jpg'

const Discord = () => {
    return (
        <div className="flex flex-col w-nine justify-center mx-auto text-center mb-36">
            <div className="flex flex-col lg:text-left lg:ml-16 lg:mr-16 mb-12">
                <h1 className="text-3xl font-extrabold text-center mt-12 mb-8">Our Discord:</h1>
                <p>
                    In case you didn't find enough on this page, you can certainly check out our Discord and discuss all kinds of topics with other players!
                    <br /><br />
                    <div className="lg:ml-12 ml-4">
                        <li>Latest updates</li>
                        <li>A huge community</li>
                        <li>Guides for beginners and end-gamers alike</li>
                        <li>Direct contact with a official Community Manager</li>
                        <li>Discussion channels with other players for all subjects</li>
                    </div>
                    <br />
                    <span className="text-purple-600">You can find us on <a href="https://discord.gg/7vhfVRm" className=" font-extrabold hover:underline">Discord</a> !</span>
                </p>
            </div>

            <div className="flex flex-col min-h-full h-auto mb-6">
                <div className="mx-auto my-6">
                    <a href="https://discord.gg/7vhfVRm" className="">
                        <img src={JoinDiscord} className="lg:w-full w-nine mx-auto rounded-3xl hover:shadow-discord transition duration-300 ease-in-out" alt="oops" title="Banner - © Courtesy of MyGames" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export { Discord }
