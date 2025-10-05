"use client";

import Image from "next/image";
import calculator from "../../assets/images/calculator.png";
import money from "../../assets/images/money.png"; 
import { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page() {

  const [moneyInput, setMoneyInput] = useState("");
  const [person, setPerson] = useState("");
  const [moneyShare, setMoneyShere] = useState("0.00");

  const handleCalClick = () => {
    if(moneyInput == '' || person == '' || person == '0' ) {
      alert('กรุณาป้อนจํานวนเงินก่อนคํานวณ โดย จำนวณคนนั้นต้องไม่ใช่ 0');
      return;
    }

    if(isNaN(Number(moneyInput)) || isNaN(Number(person))) {
      alert('กรุณาป้อนจํานวนเงินและจํานวนคนเป็นตัวเลข เท่านั้น ไม่สามารถคำนวณค่าที่ไม่ใช่ตัวเลขได้!!!!');
      return;
    }

    const result = parseFloat(moneyInput) / parseFloat(person);
    setMoneyShere(result.toFixed(2));
  };
  const handleCancelClick = () => {
    setMoneyInput("");
    setPerson("");
    setMoneyShere("0.00");
  };

  return (
    <>
      <div className='w-2/6 border border-gray-500 mx-auto mb-10 mt-20 p-20
                    flex flex-col items-center rounded-2xl shadow-xl'>
                      <Image src={calculator} alt="Calculator" width={100}/>

      <h1 className='text-lg font-bold mt-3 text-red-700'>
        Varity Calculator V.1.0
      </h1>

      <h1 className='text-lg mb-5 mt-1 text-red-500'>
        โปรแกรมคำนวณ
      </h1>

      <div className="w-full border border-gray-500 flex flex-col items-center p-5">
         <Image src={money} alt="Calculator" width={80} className="mx-auto"></Image>

        <h1 className='text-lg mb-5 mt-1 text-red-500'>
          แชร์เงินกันเถอะ
        </h1>

        <div className="w-full flex flex-col mb-3 ">
          <label>ป้อนเงิน <span className="text-green-500">(บาท)</span></label>
          <input type="text" value={moneyInput} onChange={(e) => setMoneyInput(e.target.value)}
                     className="w-full border border-gray-500 p-2 rounded" />
        </div>

        <div className="w-full flex flex-col ">
          <label>ป้อนคน</label>
          <input type="text"  value={person} onChange={(e) => setPerson(e.target.value)}
                    className="w-full border border-gray-500 p-2 rounded" />
        </div>

        <button onClick={handleCalClick}
          className="w-full bg-green-500 hover:bg-yellow-400 text-white p-2 rounded mt-5 cursor-pointer">
          คํานวณ
        </button>

        <button onClick={handleCancelClick}
          className="w-full bg-orange-500 hover:bg-red-400 text-white p-2 rounded mt-5 cursor-pointer">
          ยกเลิก
        </button>

        <div className="w-full flex justify-center mt-5 text-center">
          <span>หารกันคนละ</span>
          <span className="font-bold text-3xl text-red-700 mx-10" >{moneyShare}</span>
          <span>บาท</span>
        </div>
      </div>
      <Link href="/menu" className="text-2xl text-blue-500 pt-5 py-2 rounded-xl text-center mx-2">กลับไปหน้าเมนู</Link>
      </div>

      <Footer/>
    </>
  );
}