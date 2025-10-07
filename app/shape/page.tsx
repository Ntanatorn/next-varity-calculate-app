"use client";

import Image from "next/image";
import Link from "next/link";
import CalculatorLayout from "../../components/CalculatorLaout";

import shapes from "../../assets/images/shapes.png";
import triangleImg from "../../assets/images/triangle.png";
import squareImg from "../../assets/images/square.png";
import circleImg from "../../assets/images/circle.png";

export default function Page() {
  return (
    <CalculatorLayout>
      <Image src={shapes} alt="Calculator" width={80} className="mx-auto" />
      <h1 className="text-2xl font-bold text-green-700 mb-5 text-center mt-5">
        เลือกรูปทรงที่ต้องการคำนวณ
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <Link
          href="/shape/triangle"
          className="flex flex-col items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-2xl p-4 transition-all"
        >
          <Image src={triangleImg} alt="Triangle" width={80} />
          <span className="mt-2 text-lg font-semibold">สามเหลี่ยม</span>
        </Link>

        <Link
          href="/shape/square"
          className="flex flex-col items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-2xl p-4 transition-all"
        >
          <Image src={squareImg} alt="Square" width={80} />
          <span className="mt-2 text-lg font-semibold">สี่เหลี่ยม</span>
        </Link>

        <Link
          href="/shape/circle"
          className="flex flex-col items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-2xl p-4 transition-all"
        >
          <Image src={circleImg} alt="Circle" width={80} />
          <span className="mt-2 text-lg font-semibold">วงกลม</span>
        </Link>
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
