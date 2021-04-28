import React, { useState, useEffect } from 'react'

const Footer = () => {
    const [currentYear, setCurrentYear] = useState();

    useEffect(() => {

        const year = new Date();
        const result = year.getFullYear();

        setCurrentYear(result);

    });

    return (
        <div>
            <footer>
                <div className="flex flex-row w-full">
                    <div className="mx-auto mt-4">
                        <p>© {currentYear} Hustle-Prime</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export { Footer } ;