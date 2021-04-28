import React from 'react'
import ErrorMsgBackground from '../../../images/ErrorMsgBackground.png'

function Error() {
    return (
        <div className="flex flex-row mx-auto">
            <div className="m-auto my-8 lg:my-4 relative bg-blue-100 lg:w-3/5 max-w-4xl w-nine text-gray-600 text-center font-extrabold text-4xl rounded-2xl">
                <div className="Error m-8">
                    <img src={ErrorMsgBackground} alt="woops" />
                <h1 className="absolute hidden lg:block top-8 left-96">Woops! ...</h1>
                <p className="absolute hidden lg:block top-40 text-2xl left-96">Looks like our dwellers fell asleep again.. This page is not available</p>
                <p className="absolute hidden lg:block bottom-4 text-lg right-4">Error Code: <span className="text-red-600"> 404</span> </p>

                <h1 className="lg:hidden">Woops! ...</h1>
                <p className="lg:hidden text-2xl">Looks like our dwellers fell asleep again.. This page is not available</p>
                <p className="lg:hidden text-lg">Error Code: <span className="text-red-600"> 404</span> </p>
                </div>
            </div>
            
        </div>
    )
}

export { Error };
