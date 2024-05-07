
const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("")
    }

    return (
    <div>
        <p className="text-red-600">{error}</p>
        <div className="grid gap-3 place-items-center grid-cols-2 md:flex md:gap-[20px]">
            {arrNumber.map((value,i) => (
                <div key={i} onClick={() => numberSelectorHandler(value)}  className={`${value === selectedNumber ? "bg-black text-white" : "bg-white text-black"} cursor-pointer w-[65px] h-[65px] border-[1px] grid place-items-center text-[24px] font-medium border-black text-center`}>
                    {value}
                </div>
            ))}
        </div>
        <p className="text-[24px] flex justify-center md:justify-end font-bold">Select Number</p>
    </div>
  )
}

export default NumberSelector
