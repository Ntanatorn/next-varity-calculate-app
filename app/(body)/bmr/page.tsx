"use client";

import { useState } from "react";
import CalculatorLayout from "../../../components/CalculatorLaout";
import Link from "next/link";
import Image from "next/image";
import bmrImg from "../../../assets/images/bmr.png";

export default function Page() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmrResult, setBmrResult] = useState<string | null>(null);

  const handleCalculate = () => {
    if (!weight || !height || !age) {
      alert("กรุณากรอกน้ำหนัก ส่วนสูง และอายุให้ครบ");
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);

    if (isNaN(w) || isNaN(h) || isNaN(a)) {
      alert("กรุณากรอกเฉพาะตัวเลขที่ถูกต้อง");
      return;
    }

    let bmrValue: number;
    if (gender === "male") {
      bmrValue = 66 + 13.7 * w + 5 * h - 6.8 * a;
    } else {
      bmrValue = 655 + 9.6 * w + 1.8 * h - 4.7 * a;
    }

    setBmrResult(bmrValue.toFixed(2));
  };

  const handleClear = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setBmrResult(null);
  };

  return (
    <CalculatorLayout>
      <div className="w-full border border-gray-400 flex flex-col items-center p-5">
        <Image src={bmrImg} alt="BMR" width={80} className="mx-auto" />
        <h1 className="text-lg mb-5 mt-2 text-red-500">คำนวณค่า BMR</h1>

        <div className="w-full flex flex-col mb-3">
          <label>น้ำหนัก (kg)</label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>

        <div className="w-full flex flex-col mb-3">
          <label>ส่วนสูง (cm)</label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>

        <div className="w-full flex flex-col mb-3">
          <label>อายุ (ปี)</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>

        <div className="w-full flex justify-around mb-3 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            ชาย
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            หญิง
          </label>
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

        {bmrResult && (
          <div className="mt-6 text-center">
            <p className="text-xl">
              ค่า BMR: <span className="font-bold text-red-700">{bmrResult}</span> kcal/วัน
            </p>
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
