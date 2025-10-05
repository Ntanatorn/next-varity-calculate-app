import Image from "next/image";
import calculator from "../../assets/images/calculator.png";

export default function Page() {
  return (
    <>
       <div className='w-3/6 border border-gray-500 mx-auto mb-10 mt-20 p-20
                    flex flex-col items-center rounded-2xl shadow-xl'>
                      <Image src={calculator} alt="Calculator" width={150}/>

      <h1 className='text-xl font-bold mt-5 text-red-700'>
        Varity Calculator V.1.0
      </h1>

      <h1 className='text-xl mb-5 mt-2 text-red-500'>
        โปรแกรมคำนวณ
      </h1>
      
      <div className="w-full flex justify-center">

        
      </div>
      </div>

    </>
  );
}