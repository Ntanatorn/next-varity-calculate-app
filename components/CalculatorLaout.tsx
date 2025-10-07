"use client";
import Image from "next/image";
import calculator from "@/assets/images/calculator.png";
import Footer from "@/components/Footer";

interface Props {
  children: React.ReactNode;
}

export default function CalculatorLayout({ children }: Props) {
  return (
    <>
      <div
        className="w-full max-w-2xl mx-auto mb-10 mt-16 p-10 
                   flex flex-col items-center rounded-2xl 
                   border border-gray-400 shadow-2xl bg-white"
      >
        {/* โลโก้และชื่อเว็บ */}
        <Image
          src={calculator}
          alt="Calculator"
          width={100}
          className="drop-shadow-md"
        />

        <h1 className="text-2xl font-extrabold mt-4 text-red-700 text-center">
          Varity Calculator V.1.0
        </h1>

        <h2 className="text-lg mb-8 mt-1 text-red-500 text-center">
          โปรแกรมคำนวณหลากหลายรูปแบบ
        </h2>

        {/* พื้นที่เนื้อหาที่เปลี่ยนไปในแต่ละหน้า */}
        <div className="w-full">{children}</div>
      </div>

      <Footer />
    </>
  );
}
