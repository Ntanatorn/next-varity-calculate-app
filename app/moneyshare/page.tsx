"use client";

import Image from "next/image";
import money from "../../assets/images/money.png"; 
import { useState } from "react";
import CalculatorLayout from "../../components/CalculatorLaout";
import Link from "next/link";

export default function Page() {
  const [moneyInput, setMoneyInput] = useState("");
  const [person, setPerson] = useState("");
  const [moneyShare, setMoneyShere] = useState<string | null>(null); // แก้จาก "0.00" เป็น null

  const handleCalClick = () => {
    if (moneyInput === "" || person === "" || person === "0") {
      alert("กรุณาป้อนจำนวนเงินก่อนคำนวณ โดยจำนวนคนนั้นต้องไม่ใช่ 0");
      return;
    }

    if (isNaN(Number(moneyInput)) || isNaN(Number(person))) {
      alert("กรุณาป้อนจำนวนเงินและจำนวนคนเป็นตัวเลขเท่านั้น!");
      return;
    }

    const result = parseFloat(moneyInput) / parseFloat(person);
    setMoneyShere(result.toFixed(2));
  };

  const handleCancelClick = () => {
    setMoneyInput("");
    setPerson("");
    setMoneyShere(null); // reset เป็น null
  };

  return (
    <CalculatorLayout>
      <div className="w-full border border-gray-500 flex flex-col items-center p-5">
        <Image src={money} alt="Calculator" width={80} className="mx-auto" />

        <h1 className="text-lg mb-5 mt-1 text-red-500">แชร์เงินกันเถอะ</h1>

        <div className="w-full flex flex-col mb-3">
          <label>
            ป้อนเงิน <span className="text-green-500">(บาท)</span>
          </label>
          <input
            type="text"
            value={moneyInput}
            onChange={(e) => setMoneyInput(e.target.value)}
            className="w-full border border-gray-500 p-2 rounded"
          />
        </div>

        <div className="w-full flex flex-col">
          <label>ป้อนคน</label>
          <input
            type="text"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            className="w-full border border-gray-500 p-2 rounded"
          />
        </div>

        <button
          onClick={handleCalClick}
          className="w-full bg-green-500 hover:bg-yellow-400 text-white p-2 rounded mt-5 cursor-pointer"
        >
          คำนวณ
        </button>

        <button
          onClick={handleCancelClick}
          className="w-full bg-orange-500 hover:bg-red-400 text-white p-2 rounded mt-3 cursor-pointer"
        >
          ยกเลิก
        </button>

        {/* แสดงผลลัพธ์เฉพาะตอนกดคำนวณ */}
        {moneyShare !== null && (
          <div className="w-full flex justify-center mt-5 text-center">
            <span>หารกันคนละ</span>
            <span className="font-bold text-3xl text-red-700 mx-10">{moneyShare}</span>
            <span>บาท</span>
          </div>
        )}
      </div>

      <div className="w-full flex justify-center mt-6">
        <Link
          href="/menu"
          className="text-2xl text-blue-500 border border-blue-500 px-6 py-2 rounded-xl text-center hover:bg-blue-100 transition-all"
        >
          กลับไปหน้าเมนู
        </Link>
      </div>
    </CalculatorLayout>
  );
}
