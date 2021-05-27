import React, { useState, useEffect } from 'react';
import { ListOfBrackets } from './ListOfBrackets';
import { soupExceptions } from './soupExceptions';
import { v4 as uuidv4 } from 'uuid';

const BracketCalc = () => {

    const [Hero, setHero] = useState(true);
    const [NoHero, setNoHero] = useState(false);
    const [BarracksLevel, setBarracksLevel] = useState(1);
    const [BracketRange, setBracketRange] = useState("withHero");
    const [average, setAverage] = useState(Number);
    const [display, setDisplay] = useState(<><p>Fill in the fields above!</p></>);
    const [FtrLevel, setFtrLevel] = useState(16);
    const [Fighter1, setFighter1] = useState(Number);
    const [Fighter2, setFighter2] = useState(Number);
    const [Fighter3, setFighter3] = useState(Number);
    const [Fighter4, setFighter4] = useState(Number);
    const [Fighter5, setFighter5] = useState(Number);
    const [Fighter6, setFighter6] = useState(Number);
    const [Fighter7, setFighter7] = useState(Number);
    const [Fighter8, setFighter8] = useState(Number);
    const FighterLevels = ([
        {
            id: uuidv4(),
            name: 1,
            level: Fighter1
        },
        {
            id: uuidv4(),
            name: 2,
            level: Fighter2
        },
        {
            id: uuidv4(),
            name: 3,
            level: Fighter3
        },
        {
            id: uuidv4(),
            name: 4,
            level: Fighter4
        },
        {
            id: uuidv4(),
            name: 5,
            level: Fighter5
        },
        {
            id: uuidv4(),
            name: 6,
            level: Fighter6
        },
        {
            id: uuidv4(),
            name: 7,
            level: Fighter7
        },
        {
            id: uuidv4(),
            name: 8,
            level: Fighter8
        },
    ]);

    const [LevelInputs, setLevelInputs] = useState([<input/>]);
    
    const hasHero = () => {
        
        setHero(true);
        setNoHero(false);
    };
    const noHero = () => {
        
        setHero(false);
        setNoHero(true);
    };

    useEffect(() => {
        FighterLevels.length = BarracksLevel;

        setLevelInputs(
            FighterLevels.map((item, index) =>
                <input type="number" key={item.name} id={"input-field" + item.name} name={"input_" + item.name} onChange={(e) => addLevel(item)} className="w-12 h-8 lg:ml-4 text-center font-extrabold bg-blue-ocean rounded-md" />
            )
        );
    // eslint-disable-next-line
    }, [BarracksLevel]);

    const addLevel = (item) => {
        const e = document.querySelector("#input-field" + item.name).value;

        switch (item.name) {
            case 1:
                setFighter1(e);
                break;
            case 2:
                setFighter2(e);
                break;
            case 3:
                setFighter3(e);
                break;
            case 4:
                setFighter4(e);
                break;
            case 5:
                setFighter5(e);
                break;
            case 6:
                setFighter6(e);
                break;
            case 7:
                setFighter7(e);
                break;
            case 8:
                setFighter8(e);
                break;
            default:
                setFighter1(null);
        }
        console.log(item.name);
    }

    const handleLevels = (e) => {
        e.preventDefault();
        FighterLevels.length = BarracksLevel;
        const levelArray = [];
        const ruleBreaking = [];
        
        // eslint-disable-next-line
        FighterLevels.map((fighterLevel) => {
            if(Number(fighterLevel.level) > FtrLevel) {
                levelArray.push(Number(fighterLevel.level))
            } else {
                ruleBreaking.push(Number(fighterLevel.level))
            };
        });

        console.log(FtrLevel);
        console.log(levelArray);
        
        if (Hero === false) {
            setBracketRange("noHero")
        } else {
            setBracketRange("withHero")
        };

        const getLevelAverage = (levels, hero = BracketRange, barracks = BarracksLevel) => {
            const ranges = soupExceptions[hero][barracks];
            
            levels = levels.sort((a,b) => b-a);

            const uniqueBands = new Set();
            const values = [];

            for(const level of levels){

                uniqueBands.add(ranges.find(range => range.minAverage <= level && range.maxAverage >= level));

                if(uniqueBands.size > 2 ) break;

                values.push(level);
            }

            return {values, average: values.reduce((acc, cur) => acc + cur) / values.length};
        }

        const result = getLevelAverage(levelArray, BracketRange, BarracksLevel);
        const bracketList = ListOfBrackets[BracketRange][BarracksLevel]

        // eslint-disable-next-line
        bracketList.map((item, index) => {
            if(result.average >= item.minAverage && result.average < item.maxAverage) {
                setAverage(Math.floor(item.maxAverage));
            }
        })

        console.log("--------------------------------resuilts--------------------------------")
        console.log(result.values)
        console.log(result.average);
        console.log(average);
        console.log("--------------------------------resuilts--------------------------------")

        setDisplay(
            <>
                <p>Your bracket is {BarracksLevel}X{average}</p>
            </>
        )
    }

    return (
        <div className="flex flex-col text-center">
            <h1 className="text-xl font-extrabold mt-12 mb-8 text-center">1. <br/>Is your Throne Room level 9 or higher?</h1>
            <div className="flex lg:flex-row flex-col w-nine h-12 justify-around mx-auto my-8 lg:px-24">
                <button onClick={hasHero} className={Hero ? 'bg-gray-500 lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto' : 'bg-gray-700 lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto hover:bg-gray-500 transition duration-200 ease-in-out'}><p className="my-auto">YES</p></ button>
                <button onClick={noHero} className={NoHero ? 'bg-gray-500 lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto' : 'bg-gray-700 lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto hover:bg-gray-500 transition duration-200 ease-in-out'}><p>NO</p></ button>
            </div>
            <h1 className="text-xl font-extrabold mt-12 mb-8 text-center">2. <br/>What are your Barracks and Fighter Training Room levels?</h1>
            <div className="flex flex-col mx-auto w-nine">
                <div className="flex lg:flex-row flex-col h-12 justify-center my-8 lg:px-24">
                    <label for="barracks" className="w-56">Your Barracks LVL:</label>
                    <select id="barracks" className="lg:w-56 lg:ml-28 bg-blue-ocean rounded-md" onChange={(e) => {setBarracksLevel(e.target.value)}}>
                        <option value="1" className="py-2 pl-10">1</option>
                        <option value="2" className="py-2 pl-10">2</option>
                        <option value="3" className="py-2 pl-10">3</option>
                        <option value="4" className="py-2 pl-10">4</option>
                        <option value="5" className="py-2 pl-10">5</option>
                        <option value="6" className="py-2 pl-10">6</option>
                        <option value="7" className="py-2 pl-10">7</option>
                        <option value="8" className="py-2 pl-10">8</option>
                    </select>
                </div>
                <div className="flex lg:flex-row flex-col h-12 justify-center my-8 lg:px-24">
                    <label for="ftr" className="w-56">Your FTR LVL:</label>
                    <select id="ftr" className="lg:w-56 lg:ml-28 bg-blue-ocean rounded-md" onChange={(e) => {setFtrLevel(e.target.value)}}>
                        {/* <option value="1" className="py-2 pl-10">1</option>
                        <option value="2" className="py-2 pl-10">2</option>
                        <option value="3" className="py-2 pl-10">3</option> */}
                        <option value="16" className="py-2 pl-10">4: trains lvl 21-30</option>
                        <option value="26" className="py-2 pl-10">5: trains lvl 31-40</option>
                        <option value="36" className="py-2 pl-10">6: trains lvl 41-55</option>
                        <option value="51" className="py-2 pl-10">7: trains lvl 56-70</option>
                        <option value="66" className="py-2 pl-10">8: trains lvl 71-85</option>
                        <option value="81" className="py-2 pl-10">9: trains lvl 86-100</option>
                    </select>
                </div>
            </div>
            <h1 className="text-xl font-extrabold mt-12 mb-8 text-center">3. <br/>Fill in your strongest fighters from your castle</h1>
            <div className="flex flex-col mx-auto w-nine">
                <div className="flex lg:flex-row flex-col h-12 justify-center my-8 lg:px-24">
                    
                    <form action="/activities/arena" method="post" className="flex flex-col w-full h-full justify-center">
                        <div>
                            <label className="w-56">Strongest Fighters:</label>
                            {LevelInputs}
                        </div>
                        <button type="submit" value="submit" onClick={handleLevels} className="bg-gray-700 px-8 py-3 mx-auto mt-8 rounded-xl font-extrabold justify-center text-center hover:bg-gray-500 transition duration-200 ease-in-out"><p>Calculate . . .</p></ button>
                    </form>
                </div>
            </div>
            <h1 className="text-xl font-extrabold mt-12 mb-8 text-center">4. <br/>Your bracket is...</h1>
            <div className="flex flex-col mx-auto w-nine">
                <div className="flex lg:flex-row flex-col h-12 justify-center my-8 lg:px-24">
                    { display }
                </div>
            </div>
        </div>

    )
}
export { BracketCalc }