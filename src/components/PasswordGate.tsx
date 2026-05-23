import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { LockIcon } from 'lucide-react';
interface PasswordGateProps {
  password: string;
  title?: string;
  heading?: string;
  onUnlock: () => void;
}
export function PasswordGate({
  password,
  title,
  heading,
  onUnlock
}: PasswordGateProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus({
      preventScroll: true
    });
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === password.toLowerCase()) {
      setError(null);
      onUnlock();
    } else {
      setError('Incorrect password. Try again.');
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.3
      }}
      className="border-[2.5px] border-dashed border-ink/50 bg-ink/5 px-6 md:px-10 py-10 md:py-12">
      
      <div className="max-w-sm mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 border-[2.5px] border-ink bg-white mb-4">
          <LockIcon className="w-5 h-5" strokeWidth={2.5} />
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-5 text-ink">
          {heading ?? 'View Case Study'}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3 text-left">
          <label className="block">
            <span className="block text-[10px] font-medium tracking-wide uppercase text-ink/60 mb-1.5">
              Password
            </span>
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(null);
              }}
              autoComplete="off"
              className="w-full border-[2.5px] border-ink bg-white px-3 py-2 text-xs text-ink font-medium outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 placeholder-ink/40"
              placeholder="Enter password" />
            
          </label>

          {error &&
          <p className="text-xs text-red-700 font-medium" role="alert">
              {error}
            </p>
          }

          <button
            type="submit"
            className="relative w-full text-left group outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2">
            
            <span
              className="absolute inset-0 bg-ink top-1 left-1 w-full h-full"
              aria-hidden="true" />
            
            <span className="relative block border-[2.5px] border-ink bg-white px-3 py-2 text-center text-xs font-bold uppercase tracking-wide transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
              Unlock
            </span>
          </button>
        </form>
      </div>
    </motion.div>);

}