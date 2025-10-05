import Image from "next/image";
import calculator from "../../assets/images/calculator.png";
import money from "../../assets/images/money.png";
import bmi from "../../assets/images/bmi.png";
import bmr from "../../assets/images/bmr.png";
import shapes from "../../assets/images/shapes.png";
import Link from "next/link";
import Footer from "@/components/Footer";

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
        <Link href="/moneyshare" className="text-2xl text-white bg-red-500 px-5 py-2 rounded-xl text-center mx-2 w-150"  >
          <Image src={money} alt="Calculator" width={80} className="mx-auto"></Image>แชร์เงินกันเถอะ
        </Link>

        <Link href="/bmi" className="text-2xl text-white bg-red-500 px-5 py-2 rounded-xl text-center  mx-2 w-150"  >
          <Image src={bmi} alt="Calculator" width={80} className="mx-auto"></Image>BMI
        </Link>

        <Link href="/bmr" className="text-2xl text-white bg-red-500 px-5 py-2 rounded-xl text-center mx-2 w-150"  >
          <Image src={bmr} alt="Calculator" width={80} className="mx-auto"></Image>BMR
        </Link>

        <Link href="/shape" className="text-2xl text-white bg-red-500 px-5 py-2 rounded-xl text-center mx-2 w-150 "  >
          <Image src={shapes} alt="Calculator" width={80} className="mx-auto"></Image>พื้นที่รูปทรง
        </Link>

      </div>

      </div>

      <Footer/>
    </>
  );
}