'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, fullName }),
    });
  
    const data = await res.json();
    console.log('Server response:', data);
  
    if (res.ok) {
      alert('Registration successful!'); 
    } else {
      alert(`Error: ${data.error}`);
    }
  };
  

  return (
    <div className="relative mx-auto flex h-[1024px] w-[1440px] items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 flex w-full max-w-[1080px] items-center justify-between">
        <div className="w-1/2 px-12">
          <h1 className="mb-4 text-4xl font-bold text-[#3E3E3E]">Sign up</h1>
          <p className="mb-6 text-sm text-gray-500">
            Don&apos;t have an account?{' '}
            <a href="/login" className="font-medium text-[#FF8A00]">
              Log in
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
          <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-md bg-[#F6F6F6] px-4 py-3 text-sm outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-[#F6F6F6] px-4 py-3 text-sm outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md bg-[#F6F6F6] px-4 py-3 text-sm outline-none"
              required
            />

            <button
              type="submit"
              className="w-full rounded-md bg-[#FF8A00] py-3 text-sm font-semibold text-white"
            >
              Sign Up
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-3"
            >
              <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
              Sign up with Google
            </button>
          </form>
        </div>
 
        <div className="relative flex h-[500px] w-1/2 items-center justify-center">
          <div className="absolute z-0 h-[500px] w-[500px] rounded-full"></div>
          <Image
            src="/images/login.png"
            alt="login"
            width={800}
            height={800}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
