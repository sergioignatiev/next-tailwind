import {useState} from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 

{
  return (
    <html lang="en">
      <body >
      <div className="flex  justify-between py-[20px] px-6 bg-white items-center bg-opacity-95 sticky top-0 shadow-sm">
        <div className="flex">
          <div className="logo">
          <a href="/">
            <img className='h-[30px] shadow-lg' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt="alt" />
        </a>
        </div>
<div className="px-6">
<Link href="/"className='link '>Home</Link>
<Link href="/tailwind"className='link'>Tailwind</Link>
<Link href="/api"className='link'>Api</Link>
<Link href="#"className='link'>About</Link>
</div>
</div>

<div className="flex group">
<div className="flex relative items-center rounded-md group-hover:">
<input type="text" className='focus:outline-none focus:bg-slate-600 bg-slate-100 px-1  py-1 rounded-lg shadow-lg' placeholder='INPUT'/>

<div className="absolute right-1 bg-white px-2 rounded-sm transform group-hover:">CtrlK</div>
</div>
<button className="bg-white text-black mx-3 px-[10px] rounded-md  shadow-lg border-[1px] border-slate-200 ">WHITE</button>
<button className="bg-black  text-white mx-3 px-[10px] rounded-md shadow-lg">BLACK</button>
</div>
     </div>

    
     <div className="">{children}</div>
       </body>
    </html>
  )
}
