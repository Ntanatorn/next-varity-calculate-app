"use client";
import { useState } from "react";
import CalculatorLayout from "../components/CalculatorLaout";

export default function HomePage() {
  const [ucode, setUcode] = useState("");

  const handleAccessWebClick = () => {
    if (ucode.trim() === "") {
      alert("กรุณาป้อนรหัสก่อนเข้าใช้งาน");
      return;
    }
    if (ucode.toLowerCase() === "sau") {
      window.location.href = "/menu";
    } else {
      alert("รหัสไม่ถูกต้อง ลองไปหน้าข้อมูลใหม่นะ สังเกตคำใบ้ดีๆ");
    }
  };

  return (
    <CalculatorLayout>
      <div className="flex flex-col items-center">
        <label className="mb-2 text-lg text-gray-700">
          ป้อนรหัสเพื่อเข้าใช้งาน
          <span className="text-blue-700"> (ชื่อย่อ ม.เอเชีย)</span>
        </label>

        <input
          value={ucode}
          onChange={(e) => setUcode(e.target.value)}
          className="border border-gray-500 rounded-lg p-2 w-full"
          type="text"
        />

        <button
          type="button"
          onClick={handleAccessWebClick}
          className="bg-green-500 hover:bg-yellow-400 text-gray-700 font-bold py-2 rounded mt-5 w-full"
        >
          เข้าใช้งานระบบ
        </button>
      </div>
    </CalculatorLayout>
  );
}
