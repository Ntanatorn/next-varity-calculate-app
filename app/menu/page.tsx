import Image from "next/image";
import Link from "next/link";
import CalculatorLayout from "../../components/CalculatorLaout";

import money from "../../assets/images/money.png";
import bmi from "../../assets/images/bmi.png";
import bmr from "../../assets/images/bmr.png";
import shapes from "../../assets/images/shapes.png";

export default function Page() {
  return (
    <>
      <CalculatorLayout>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
          <Link
            href="/moneyshare"
            className="flex flex-col items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-2xl p-4 transition-all"
          >
            <Image src={money} alt="Money" width={80} />
            <span className="mt-2 text-lg font-semibold">แชร์เงินกันเถอะ</span>
          </Link>

          <Link
            href="/bmi"
            className="flex flex-col items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-2xl p-4 transition-all"
          >
            <Image src={bmi} alt="BMI" width={80} />
            <span className="mt-2 text-lg font-semibold">BMI</span>
          </Link>

          <Link
            href="/bmr"
            className="flex flex-col items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-2xl p-4 transition-all"
          >
            <Image src={bmr} alt="BMR" width={80} />
            <span className="mt-2 text-lg font-semibold">BMR</span>
          </Link>

          <Link
            href="/shape"
            className="flex flex-col items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-2xl p-4 transition-all"
          >
            <Image src={shapes} alt="Shapes" width={80} />
            <span className="mt-2 text-lg font-semibold">พื้นที่รูปทรง</span>
          </Link>
        </div>
      </CalculatorLayout>
    </>
  );
}
