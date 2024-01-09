'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Upload } from 'lucide-react';
import React, { useState } from 'react';

export default function AvatarPicker() {
  const [open, setOpen] = useState();

  return (
    <div className='flex flex-col'>
      
      <Avatar>
          <AvatarImage src='' />
          <AvatarFallback>AO</AvatarFallback>
        </Avatar>      <input className='my-6' type='file' id='fileInput' />
    </div>
  );
}
