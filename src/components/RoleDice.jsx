import { useState } from "react"

const RoleDice = ({roleDice, currentDice}) => {

  return (
    <section className="flex flex-col justify-center items-center mt-[20px]">
      <div onClick={roleDice} className="w-[200px] cursor-pointer">
        <img src={`/images/Dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p className="text-[30px]">Click on Dice to roll</p>
    </section>
  )
}

export default RoleDice
