"use client";

import { useState } from "react";
import Image from "next/image";
import CalculatorLayout from "../../../components/CalculatorLaout";
import Link from "next/link";
import bmi from "../../../assets/images/bmi.png";

export default function Page() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState<string | null>(null);
  const [bmiStatus, setBmiStatus] = useState<string | null>(null);

  const handleCalculate = () => {
    if (!weight || !height) {
      alert("กรุณากรอกน้ำหนักและส่วนสูงให้ครบก่อนคำนวณ");
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // แปลง cm → m

    if (isNaN(w) || isNaN(h) || h === 0) {
      alert("กรุณากรอกเฉพาะตัวเลขที่ถูกต้อง");
      return;
    }

    const bmiValue = w / (h * h);
    setBmiResult(bmiValue.toFixed(2));

    if (bmiValue < 18.5) setBmiStatus("น้ำหนักน้อย / ผอม");
    else if (bmiValue < 23) setBmiStatus("น้ำหนักปกติ");
    else if (bmiValue < 25) setBmiStatus("น้ำหนักเกิน / ท้วม");
    else if (bmiValue < 30) setBmiStatus("อ้วนระดับ 1");
    else setBmiStatus("อ้วนระดับ 2");
  };

  const handleClear = () => {
    setWeight("");
    setHeight("");
    setBmiResult(null);
    setBmiStatus(null);
  };

  return (
    <CalculatorLayout>
      <div className="w-full border border-gray-400 flex flex-col items-center p-5">
        <Image src={bmi} alt="BMI" width={80} className="mx-auto" />
        <h1 className="text-lg mb-5 mt-2 text-red-500">คำนวณค่า BMI</h1>

        <div className="w-full flex flex-col mb-3">
          <label>น้ำหนัก (กิโลกรัม)</label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>

        <div className="w-full flex flex-col mb-3">
          <label>ส่วนสูง (เซนติเมตร)</label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-green-500 hover:bg-yellow-400 text-white p-2 rounded mt-4 cursor-pointer"
        >
          คำนวณ
        </button>

        <button
          onClick={handleClear}
          className="w-full bg-orange-500 hover:bg-red-400 text-white p-2 rounded mt-3 cursor-pointer"
        >
          ยกเลิก
        </button>

        {bmiResult && (
          <div className="mt-6 text-center">
            <p className="text-xl">
              ค่าดัชนีมวลกาย (BMI):{" "}
              <span className="font-bold text-red-700">{bmiResult}</span>
            </p>
            <p className="text-lg mt-1">ผลลัพธ์: {bmiStatus}</p>
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
