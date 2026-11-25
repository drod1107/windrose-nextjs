import React from 'react';
import { Calendar } from 'lucide-react';
import { siteConfig } from '../siteConfig';

/**
 * Embeds the Google Calendar appointment scheduler. Falls back to a clear
 * button (the iframe + link both point at the same scheduling page).
 */
const CalendarEmbed: React.FC = () => (
  <div>
    <div className="rounded-xl2 overflow-hidden border border-ink/10 bg-white shadow-soft">
      <iframe
        src={siteConfig.bookingUrl}
        title="Book a discovery call with Windrose & Company"
        className="w-full h-[600px]"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-secondary mt-4 w-full sm:w-auto"
    >
      <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
      Open the scheduler in a new tab
    </a>
  </div>
);

export default CalendarEmbed;
