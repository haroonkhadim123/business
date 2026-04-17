"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-preferences";

export default function CookiePreferencesModal() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Small delay for smooth appearance on first visit
      const timer = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(timer);
    }

    try {
      const parsed = JSON.parse(saved);
      setPreferences({
        essential: true,
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
      });
    } catch {
      setOpen(true);
    }
  }, []);

  const savePreferences = (values) => {
    const normalized = {
      essential: true,
      analytics: values.analytics,
      marketing: values.marketing,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    setPreferences(normalized);
    setOpen(false);
  };

  const handleAcceptAll = () => savePreferences({ analytics: true, marketing: true });
  const handleEssentialOnly = () => savePreferences({ analytics: false, marketing: false });
  const handleSave = () => savePreferences(preferences);

  const updatePreference = (key, value) => {
    if (key === "essential") return;
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4">
      {/* Main Modal with Smooth Animation */}
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-[350px] bg-white rounded-3xl shadow-2xl overflow-hidden 
                   animate-in slide-in-from-bottom-8 duration-300 ease-out"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-slate-900">Cookie Settings</h2>
          <button
            onClick={handleEssentialOnly}
            className="text-3xl text-slate-400 hover:text-slate-500 transition-all active:scale-90"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-xs leading-relaxed text-slate-600">
            We use cookies to improve your browsing experience.
          </p>

          <div className="space-y-3">
            <PreferenceRow
              title="Essential"
              description="Always active"
              checked={true}
              disabled={true}
            />

            <PreferenceRow
              title="Analytics"
              description="Usage & performance"
              checked={preferences.analytics}
              onChange={(v) => updatePreference("analytics", v)}
            />

            <PreferenceRow
              title="Marketing"
              description="Personalized ads"
              checked={preferences.marketing}
              onChange={(v) => updatePreference("marketing", v)}
            />
          </div>

          <Link
            href="/privacy"
            className="text-blue-600 text-xs font-medium hover:underline block pt-1"
          >
            Privacy Policy →
          </Link>
        </div>

        {/* Buttons */}
        <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 flex flex-col gap-3">
          <button
            onClick={handleEssentialOnly}
            className="w-full py-3 text-sm font-medium rounded-2xl border border-slate-300 
                       text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-all active:scale-[0.985]"
          >
            Essential Only
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleSave}
              className="py-3 text-sm font-medium rounded-2xl border border-slate-300 
                         text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-all active:scale-[0.985]"
            >
              Save
            </button>

            <button
              onClick={handleAcceptAll}
              className="py-3 text-sm font-semibold rounded-2xl bg-blue-600 text-white 
                         hover:bg-blue-700 active:bg-blue-800 transition-all active:scale-[0.985] shadow-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Smooth Toggle Row
function PreferenceRow({ title, description, checked, onChange, disabled = false }) {
  return (
    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 transition-all hover:bg-slate-100">
      <div>
        <p className="font-medium text-slate-900 text-[15px]">{title}</p>
        <p className="text-[11.5px] text-slate-500 mt-0.5">{description}</p>
      </div>

      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
        />
        <div 
          className="h-6 w-11 rounded-full bg-slate-300 transition-all duration-300 
                     peer-checked:bg-blue-600
                     after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 
                     after:rounded-full after:bg-white after:shadow after:transition-all after:duration-300
                     peer-checked:after:translate-x-5 peer-disabled:opacity-60" 
        />
      </label>
    </div>
  );
}