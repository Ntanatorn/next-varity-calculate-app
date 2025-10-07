"use client";

import Image from "next/image";
import square from "../../../assets/images/square.png"
import { useState } from "react";
import CalculatorLayout from "../../../components/CalculatorLaout";
import Link from "next/link";

export default function SquarePage() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState<string | null>(null);

  const handleCalculate = () => {
    if (!width || !height) {
      alert("กรุณากรอกความกว้างและความสูงก่อนคำนวณ");
      return;
    }
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h)) {
      alert("กรุณากรอกตัวเลขที่ถูกต้อง");
      return;
    }
    setArea((w * h).toFixed(2));
  };

  const handleClear = () => {
    setWidth("");
    setHeight("");
    setArea(null);
  };

  return (
    <CalculatorLayout>
      <div className="w-full border border-gray-400 flex flex-col items-center p-5">
        <Image src={square} alt="Calculator" width={80} className="mx-auto" />
        <h1 className="text-lg mb-5 mt-2 text-green-500">คำนวณพื้นที่สี่เหลี่ยม</h1>

        <div className="w-full flex flex-col mb-3">
          <label>ความกว้าง (width)</label>
          <input
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>

        <div className="w-full flex flex-col mb-3">
          <label>ความสูง (height)</label>
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

        {area !== null && (
          <div className="mt-6 text-center">
            <p className="text-xl">
              พื้นที่สี่เหลี่ยม:{" "}
              <span className="font-bold text-red-700">{area}</span>
            </p>
          </div>
        )}
      </div>

      <div className="w-full flex justify-center gap-4 mt-6">
        <Link
          href="/shape"
          className="text-xl text-blue-500 border border-blue-500 px-4 py-2 rounded-xl hover:bg-blue-100 transition-all"
        >
          กลับหน้าเลือกรูปทรง
        </Link>
        <Link
          href="/menu"
          className="text-xl text-blue-500 border border-blue-500 px-4 py-2 rounded-xl hover:bg-blue-100 transition-all"
        >
          กลับหน้าเมนู
        </Link>
      </div>
    </CalculatorLayout>
  );
}
