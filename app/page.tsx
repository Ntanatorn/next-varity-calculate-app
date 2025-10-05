"use client";

import Page from '../.next/types/routes';
import Image from 'next/image';
import calculator from '../assets/images/calculator.png';
import { useState } from 'react';
import Footer from '@/components/Footer';


export default function HomePage() {

  const [ucode, setUcode] = useState('');

  const handleAccessWebClick = () => {
    if (ucode == '') {
      alert('กรุณาป้อนรหัสก่อนเข้าใช้งาน');
      return;
    }

    if(ucode.toLowerCase() == 'sau') {
      window.location.href = '/menu';
    } else {
      alert('รหัสไม่ถูกต้อง ลองไปหน้าข้อมูลใหม่นะ สังเกตุคำใบ้ดีๆ');
    }
  };

  return (
    <>
    <div className='w-8/12 border border-gray-500 mx-auto mb-10 mt-20 p-20
                    flex flex-col items-center rounded-2xl shadow-xl'>

      <Image src={calculator} alt="Calculator" width={200}/>

      <h1 className='text-3xl font-bold mt-5 text-red-700'>
        Varity Calculator V.1.0
      </h1>

      <h1 className='text-3xl mb-5 mt-2 text-red-500'>
        โปรแกรมคำนวณ
      </h1>

      <div className='flex flex-col w-full'>
        <label className='mb-2'>ป้อนรหัสเพื่อเข้าใช้งาน
          <span className='text-blue-700'> (ชื่อย่อ ม.เอเชีย)</span>
        </label> 
        <input value={ucode} onChange={(e) => setUcode(e.target.value)} className='border border-gray-500 rounded-lg p-2' type="text" />
      </div>

      <button type='button' onClick={ handleAccessWebClick}
      className='bg-green-500 hover:bg-yellow-400 text-gray-700 font-bold py-2 rounded mt-5 w-full'>
        เข้าใช้งานระบบ
      </button>

    </div>
      <Footer/>
    </>
  );
}