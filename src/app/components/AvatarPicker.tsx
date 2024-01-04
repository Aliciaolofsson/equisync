'use client';
import React, { useState } from 'react';

export default function AvatarPicker() {
  const [open, setOpen] = useState();

  return (
    <div>
      <div
        onClick={open}
        className='bg-red-300 w-20 h-20 rounded-full flex justify-center items-center'
      >
        <label htmlFor='fileInput' className='cursor-pointer bg-slate-400 w-full rounded-full h-full '>
          <input className='invisible' type='file' id='fileInput' />
        </label>
      </div>
    </div>
  );
}
