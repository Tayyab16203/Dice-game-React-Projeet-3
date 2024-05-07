
const TotalScore = ({score}) => {
  return (
    <div className="leading-none w-[200px] text-center">
        <h1 className="text-[80px] font-medium">{score}</h1>
        <p className="text-[24px] font-bold">Total Score</p>
    </div>
  )
}

export default TotalScore
