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
      setOpen(true);
      return;
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      essential: true,
      analytics: values.analytics,
      marketing: values.marketing,
    }));
    setPreferences({ essential: true, analytics: values.analytics, marketing: values.marketing });
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
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-[340px] bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        {/* Header - Very Compact */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-base font-semibold text-slate-900">Cookie Settings</h2>
          
          <button
            onClick={handleEssentialOnly}
            className="text-2xl text-slate-400 hover:text-slate-600"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Content - Much Smaller */}
        <div className="p-5 space-y-4 text-sm">
          <p className="text-xs text-slate-600 leading-snug">
            We use cookies to improve your experience.
          </p>

          <div className="space-y-3.5">
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
            className="text-blue-600 text-xs block hover:underline mt-1"
          >
            Privacy Policy →
          </Link>
        </div>

        {/* Buttons - Compact */}
        <div className="p-4 pt-2 flex flex-col gap-2.5 border-t bg-slate-50">
          <button
            onClick={handleEssentialOnly}
            className="w-full py-2.5 text-xs font-medium rounded-2xl border border-slate-300 text-slate-700 active:bg-slate-100"
          >
            Essential Only
          </button>

          <div className="flex gap-2.5">
            <button
              onClick={handleSave}
              className="flex-1 py-2.5 text-xs font-medium rounded-2xl border border-slate-300 text-slate-700 active:bg-slate-100"
            >
              Save
            </button>

            <button
              onClick={handleAcceptAll}
              className="flex-1 py-2.5 text-xs font-semibold rounded-2xl bg-blue-600 text-white active:bg-blue-700"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Super Compact Preference Row
function PreferenceRow({ title, description, checked, onChange, disabled = false }) {
  return (
    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3">
      <div>
        <p className="font-medium text-slate-900 text-[14.5px]">{title}</p>
        <p className="text-[11px] text-slate-500 mt-0.5">{description}</p>
      </div>

      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
        />
        <div className="h-5 w-9 rounded-full bg-slate-300 peer-checked:bg-blue-600 transition-all 
                        after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 
                        after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-4" />
      </label>
    </div>
  );
}