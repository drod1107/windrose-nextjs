import React from 'react';
import type { Block } from '../insightsData';

/** Renders the typed Insight blocks into readable, GEO-friendly markup. */
const InsightBody: React.FC<{ blocks: Block[] }> = ({ blocks }) => (
  <div className="space-y-5">
    {blocks.map((block, i) => {
      if (block.type === 'h2') {
        return (
          <h2 key={i} className="font-display text-2xl md:text-3xl text-gunmetal pt-4">
            {block.text}
          </h2>
        );
      }
      if (block.type === 'ul') {
        return (
          <ul key={i} className="space-y-2.5">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 font-body text-lg text-ink/75">
                <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="font-body text-lg text-ink/75 leading-relaxed">
          {block.text}
        </p>
      );
    })}
  </div>
);

export default InsightBody;
