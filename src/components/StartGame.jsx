import dices from '/images/dices.png'
const StartGame = ({toggle}) => {
  return (
    <section className="container max-w-[1180px] mx-auto h-[100vh] flex md:flex-row flex-col justify-center items-center">
        <div className=''>
            <img src={dices} alt="" />
        </div>
        <div className='max-w-[500px] p-3'>
            <h1 className='text-[50px] sm:text-[70px] whitespace-nowrap font-bold'>Dice Game</h1>
            <button onClick={toggle} className='text-[16px] bg-black border-2 border-transparent hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 text-white min-w-[180px] px-[18px] py-[10px] rounded-md'>Play Now</button>
        </div>
    </section>
  )
}   

export default StartGame

