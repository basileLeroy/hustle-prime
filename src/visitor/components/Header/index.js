import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './nav'
import Logo from '../../../images/hustle-prime-logo.png'

const Header = () => {
    return (
        <div className="w-full flex flex-col">
            <header className="lg:h-20 h-20 w-full flex justify-center py-2" title="Header-image - © Courtesy of MyGames">
                
                <Link href="/"><img src={Logo} className="px-6" alt="#" title="Hustle Prime - home" /></Link>
            </header>
            <Nav />
        </div>
    )
}
export { Header };