import React, { useState, useEffect } from 'react';
import { ListOfBrackets } from './ListOfBrackets';
import { soupExceptions } from './soupExceptions';
import { v4 as uuidv4 } from 'uuid';

const BracketCalc = () => {

    const [Hero, setHero] = useState(true);
    const [NoHero, setNoHero] = useState(false);
    const [BarracksLevel, setBarracksLevel] = useState(1);
    const [BracketRange, setBracketRange] = useState("withHero");
    const [resultAverage, setResultAverage] = useState(Number);

    const [errorMessage, setErrorMessage] = useState("");
    const [infoMessage, setinfoMessage] = useState("");

    const [display, setDisplay] = useState(<><p>Fill in the fields above!</p></>);
    const [FtrLevel, setFtrLevel] = useState({ value: 16, name: 30 });
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
        setBracketRange("withHero");
        setHero(true);
        setNoHero(false);
    };
    const noHero = () => {
        setBracketRange("noHero");
        setHero(false);
        setNoHero(true);
    };

    useEffect(() => {

        setDisplay(
            <>
                { resultAverage ? <p className="h-12 mb-8" >Your bracket is <span className="w-12 h-12 ml-4 p-2 text-center font-extrabold text-2xl bg-blue-ocean rounded-md">{BarracksLevel}x{resultAverage}</span></p> : null }
                { errorMessage ? <p className="h-12 mb-8" ><span className="w-12 h-12 ml-4 p-2 text-center font-extrabold text-2xl text-black bg-red-400 rounded-md">{errorMessage}</span></p> : null }
                { infoMessage ? <p className="h-12 mb-8" ><span className="w-12 h-12 ml-4 p-2 text-center font-extrabold text-2xl text-gray-200 bg-blue-500 rounded-md">{infoMessage}</span></p> : null}
            </>
        )
    // eslint-disable-next-line
    }, [resultAverage, errorMessage, infoMessage]);


    useEffect(() => {
        FighterLevels.length = BarracksLevel;

        setLevelInputs(
            FighterLevels.map((item, index) =>
                <input type="number" key={item.name} id={"input-field" + item.name} name={"input_" + item.name} onChange={(e) => addLevel(item)} className="w-12 h-8 lg:ml-4 text-center font-extrabold bg-blue-ocean rounded-md" />
            )
        );
    // eslint-disable-next-line
    }, [BarracksLevel]);

    const updateFtrState = (values) => {

        const minLevel = values.split(',')[0]
        const maxLevel = values.split(',')[1]
        console.log(maxLevel);

        setFtrLevel({...FtrLevel, value: Number(minLevel), name: Number(maxLevel)});
    }

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

    const handleLevels = () => {
        
        FighterLevels.length = BarracksLevel;
        const levelArray = [];
        const ruleBreaking = [];
        console.log("1")
        console.log(levelArray)
        FighterLevels.forEach((fighterLevel, index) => {
            if(Number(fighterLevel.level) >= FtrLevel.value) {
                levelArray.push(Number(fighterLevel.level))
            } else {
                ruleBreaking.push(Number(fighterLevel.level))
            };
        })
        console.log("2")

        
        console.log("3")
        const getLevelAverage = (levels = levelArray, hero = BracketRange, barracks = BarracksLevel) => {
            console.log(barracks)
            console.log(hero)
            const ranges = soupExceptions[hero][barracks];
            console.log("3.1")
            if(!soupExceptions[hero] || !soupExceptions[hero][barracks]) {
                setResultAverage("ERR");
                setErrorMessage("Error: This bracket does not exist!");
                setinfoMessage(null);
            }
            console.log("3.2")
            levels = levels.sort((a,b) => b-a);

            const uniqueBands = new Set();
            const values = [];
            const levelExceptions = [45, 45, 40, 40];

            console.log("3.3")

            console.log("levels")
            console.log(levels)
            console.log(levelExceptions)

            if (JSON.stringify(levels) === JSON.stringify(levelExceptions) ) {
                console.log("this is a promo exception")

                setResultAverage(42)

                console.log("3.3.1")
                return;
                
            
            } else if (barracks >= 7) {
                console.log("this is an exception")

                setResultAverage(100);
                setinfoMessage("Bracket Status: Active!")

                console.log("3.3.2")
                return;
            
            } else if (levels.find(level => level > FtrLevel.name)) {
                console.log("impossible bracket")

                setResultAverage('ERR');
                setErrorMessage("Error: These levels are impossible! Please re-check your fighter levels!");
                setinfoMessage(null);

                console.log("3.3.3")
                return;
            
            } else {
                console.log("no exceptions")
                console.log(ranges)
                console.log("3.3.4")

                for(const level of levels){

                    uniqueBands.add(ranges.find(range => range.minAverage <= level && range.maxAverage >= level && level < FtrLevel.name));
    
                    if(uniqueBands.size > 2 ) break;
                    console.log("3.3.4.1")
                    values.push(level);
                }
                console.log("3.3.5")
                console.log(values)

                const averageResult = values.reduce((acc, cur) => acc + cur) / values.length
                console.log(averageResult)

                const bracketList = ListOfBrackets[BracketRange][BarracksLevel]
                
                bracketList.forEach((item, index) => {
    
                    if(item.bracket === BarracksLevel + "x39" && values.find(value => value > 40)) {
                        console.log("test")
                        setResultAverage(42);
                        setErrorMessage("ATTENTION: You have been pushed to x42 due to overleveling (max lvl 40)");
                        setinfoMessage(
                            "Bracket Status: " + item.status
                        );
                        console.log(resultAverage);
                        console.log(infoMessage);
                        console.log("3.3.5.1")
                        return;

                    } else if (item.minAverage <= averageResult && item.maxAverage > averageResult) {
                        setResultAverage(Math.floor(item.maxAverage));
                        setErrorMessage(null);
                        setinfoMessage(
                            "Bracket Status: " + item.status
                        );
                        console.log(resultAverage);
                        console.log(infoMessage);
                        console.log("3.3.5.1")
                        return;
                    }
                    console.log("3.3.5.2")
                })
                console.log("3.3.6")
            }
            console.log("3.4")
        }
        console.log("4")
        console.log("5")
        console.log(display)
        console.log(resultAverage);
        
        getLevelAverage(levelArray, BracketRange, BarracksLevel);
        return display;
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
                    <select id="ftr" className="lg:w-56 lg:ml-28 bg-blue-ocean rounded-md" onChange={(e) => {updateFtrState(e.target.value); console.log(e.target.value)}}>
                        {/* <option value="1" className="py-2 pl-10">1</option>
                        <option value="2" className="py-2 pl-10">2</option>
                        <option value="3" className="py-2 pl-10">3</option> */}
                        <option value="16,30" className="py-2 pl-10">4: trains lvl 21-30</option>
                        <option value="26,40" className="py-2 pl-10">5: trains lvl 31-40</option>
                        <option value="36,55" className="py-2 pl-10">6: trains lvl 41-55</option>
                        <option value="51,70" className="py-2 pl-10">7: trains lvl 56-70</option>
                        <option value="66,85" className="py-2 pl-10">8: trains lvl 71-85</option>
                        <option value="81,100" className="py-2 pl-10">9: trains lvl 86-100</option>
                    </select>
                </div>
            </div>
            <h1 className="text-xl font-extrabold mt-12 mb-8 text-center">3. <br/>Fill in your strongest fighters from your castle</h1>
            <div className="flex flex-col mx-auto w-nine">
                <div className="flex lg:flex-row flex-col h-12 justify-center my-8 lg:px-24">
                    
                    <div className="flex flex-col w-full h-full justify-center">
                        <div>
                            <label className="w-56">Strongest Fighters:</label>
                            {LevelInputs}
                        </div>
                        <button type="submit" value="submit" onClick={handleLevels} className="bg-gray-700 px-8 py-3 mx-auto mt-8 rounded-xl font-extrabold justify-center text-center hover:bg-gray-500 transition duration-200 ease-in-out"><p>Calculate . . .</p></ button>
                    </div>
                </div>
            </div>
            <h1 className="text-xl font-extrabold mt-12 mb-8 text-center">4. <br/>Your bracket is...</h1>
            <div className="flex flex-col mt-12 mx-auto w-nine">
                <div id="bracketDisplay" className="flex lg:flex-col flex-col h-12 justify-center my-8 lg:px-24">
                    { display }
                </div>
            </div>
        </div>

    )
}
export { BracketCalc }