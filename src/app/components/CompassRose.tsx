import React from 'react';

interface CompassRoseProps {
  className?: string;
}

/**
 * Decorative compass-rose motif — the recurring "windrose" brand device.
 * Purely ornamental, so it's hidden from assistive tech.
 */
const CompassRose: React.FC<CompassRoseProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    aria-hidden="true"
    focusable="false"
    fill="none"
  >
    <circle cx="100" cy="100" r="92" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="66" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
    {/* Cardinal star */}
    <path d="M100 8 L114 86 L100 100 L86 86 Z" fill="currentColor" fillOpacity="0.85" />
    <path d="M100 192 L114 114 L100 100 L86 114 Z" fill="currentColor" fillOpacity="0.45" />
    <path d="M8 100 L86 86 L100 100 L86 114 Z" fill="currentColor" fillOpacity="0.55" />
    <path d="M192 100 L114 114 L100 100 L114 86 Z" fill="currentColor" fillOpacity="0.55" />
    {/* Intercardinal star */}
    <path d="M100 100 L150 50 L116 84 Z" fill="currentColor" fillOpacity="0.3" />
    <path d="M100 100 L150 150 L116 116 Z" fill="currentColor" fillOpacity="0.3" />
    <path d="M100 100 L50 150 L84 116 Z" fill="currentColor" fillOpacity="0.3" />
    <path d="M100 100 L50 50 L84 84 Z" fill="currentColor" fillOpacity="0.3" />
    <circle cx="100" cy="100" r="6" fill="currentColor" />
  </svg>
);

export default CompassRose;
