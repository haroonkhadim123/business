"use client";

import { useEffect, useState } from "react";

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
    const normalized = {
      essential: true,
      analytics: values.analytics,
      marketing: values.marketing,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    setPreferences(normalized);
    setOpen(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleEssentialOnly = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSave = () => {
    savePreferences(preferences);
  };

  const updatePreference = (key, value) => {
    if (key === "essential") return;
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
        aria-describedby="cookie-modal-description"
        className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg text-white shadow-sm">
              🍪
            </div>

            <div>
              <h2
                id="cookie-modal-title"
                className="text-xl font-semibold tracking-tight text-slate-900"
              >
                Cookie Preferences
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Manage how cookies are used to improve your experience.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleEssentialOnly}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close cookie preferences"
          >
            ×
          </button>
        </div>

        <div className="px-6 py-5">
          <p
            id="cookie-modal-description"
            className="text-sm leading-6 text-slate-700"
          >
            We use cookies to operate the site, analyze traffic, and personalize
            content. Essential cookies are always enabled because they are
            required for core functionality.
          </p>

          <a
            href="/privacy-policy"
            className="mt-3 inline-block text-sm font-medium text-blue-700 transition hover:text-blue-800 hover:underline"
          >
            Learn more →
          </a>

          <div className="mt-6 space-y-4">
            <PreferenceRow
              title="Essential Cookies"
              description="Required for security, accessibility, and core site functionality."
              checked={true}
              disabled={true}
              badge="Always active"
              onChange={() => {}}
            />

            <PreferenceRow
              title="Analytics Cookies"
              description="Help us understand usage and improve performance."
              checked={preferences.analytics}
              onChange={(checked) => updatePreference("analytics", checked)}
            />

            <PreferenceRow
              title="Marketing Cookies"
              description="Used to deliver relevant content and measure campaign effectiveness."
              checked={preferences.marketing}
              onChange={(checked) => updatePreference("marketing", checked)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Essential Only
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Preferences
          </button>

          <button
            type="button"
            onClick={handleAcceptAll}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

function PreferenceRow({
  title,
  description,
  checked,
  onChange,
  disabled = false,
  badge,
}) {
  return (
    <div className="flex items-start justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="pr-4">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          {badge ? (
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
              {badge}
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <div className="peer h-6 w-11 rounded-full bg-slate-300 transition after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-5 peer-focus:ring-2 peer-focus:ring-blue-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" />
      </label>
    </div>
  );
}