
export default function SkyBidder() {
  return (
    <div className="w-full md:w-[40%] lg:w-[30%] md:absolute top-0 left-0 bg-[#002F53] h-full z-10">
    <img
      src={require("../../assets/circle.png")}
      alt="Triangle"
      className="absolute hidden md:block md:bottom-0  md:-left-10 w-[50%] h-auto z-20"
    />
    <img
      src={require("../../assets/triangle.png")}
      alt="Triangle"
      className="absolute top-[10%] md:top-[45%] md:left-0 w-[30%] md:w-[50%] h-auto z-20 right-0  md:right-[unset]"
    />
    <div className="p-10 z-40 relative">
      <h1>
<<<<<<< HEAD
        <span className="text-white text-[32px] font-[900]">ByThe</span>
        <span className="text-[#FFC107] text-[32px] font-[900]">
=======
        <span className="text-white text-[40px] font-[900]">By The</span>
        <span className="text-[#FFC107] text-[40px] font-[900]">
>>>>>>> aman
          Law
        </span>
      </h1>
      <p className="text-white font-[600] text-[20px] w-11/12 ">
        We are a team of experienced lawyers who are passionate about what we do
      </p>
    </div>
  </div>
  )
}
