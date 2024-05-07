import { useState } from "react";
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import Rules from "./Rules";

const GamePlay = () => {
  const [ score, setScore ] = useState(0)
  const [ error, setError] = useState("")
  const [ selectedNumber, setSelectedNumber ] = useState(); 
  const [ currentDice, setCurrentDice ] = useState(1)
  const [ showRules, setShowRules ] = useState(false)



  const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
  }

  const roleDice = () => {
      if(!selectedNumber){
        return setError("You have not selected any number")
      }

      setError("");
      const randomNumber = generateRandomNumber(1, 7);
      setCurrentDice((prev) => randomNumber);

      if(selectedNumber === randomNumber){
        setScore((prev) => prev + randomNumber)
      }else {
        setScore((prev) => prev - 2)
      }

      setSelectedNumber(undefined)
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
    <main>
        <div className="grid place-items-center md:flex justify-around items-end pt-[20px]">
          <TotalScore score={score}/>
          <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className="flex flex-col gap-[8px] my-[32px] items-center">
          <button onClick={resetScore} className='text-[16px] bg-white border-2 border-black hover:bg-black hover:text-white hover:border-2 hover:border-transparent transition-all duration-300 text-black min-w-[180px] px-[18px] py-[10px] rounded-md'>Reset Score</button>
          <button onClick={()=> setShowRules(!showRules)} className=" text-[16px] bg-black border-2 border-transparent hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 text-white min-w-[180px] px-[18px] py-[10px] rounded-md">{showRules ? "Hide" : "Show"} rules</button>
        </div>
        {showRules && <Rules/>}
    </main>
  )
}

export default GamePlay
