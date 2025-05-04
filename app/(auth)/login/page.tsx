'use client';

import { redirect } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      redirect(`/`);
    } else {
      alert(`Login failed: ${data.error}`);
    }
  };

  return (
    <div className="relative mx-auto flex h-[1024px] w-[1440px] items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 flex w-full max-w-[1080px] items-center justify-between">
        <div className="w-1/2 px-12">
          <h1 className="mb-4 text-4xl font-bold text-[#3E3E3E]">Login</h1>
          <p className="mb-6 text-sm text-gray-500">
            Don&apos;t have an account?{' '}
            <a href="/register" className="font-medium text-[#FF8A00]">
              Sign up
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-[#FF8A00]">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#FF8A00] py-3 text-sm font-semibold text-white"
            >
              Log in
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-3"
            >
              <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
              Log in with Google
            </button>
          </form>
        </div>

        {/* Правая часть */}
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
