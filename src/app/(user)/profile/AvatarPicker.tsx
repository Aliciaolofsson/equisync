'use client';
import { Upload } from 'lucide-react';
import React, { useState } from 'react';

export default function AvatarPicker() {
  const [open, setOpen] = useState();

  return (
    <div className='flex flex-col'>
      
      <div
        className='bg-red-300 w-20 h-20 avatar rounded-full flex justify-center items-center'
      ></div>
      <input className='my-6' type='file' id='fileInput' />
    </div>
  );
}
