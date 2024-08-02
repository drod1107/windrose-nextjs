import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  return (
    <div className="w-full bg-gunmetal py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className='text-center font-bold text-4xl mb-4 text-papaya-whip'>You love your craft.</h2> 
        <h3 className='text-center font-bold text-2xl mb-8 text-myrtle-green'>We love the rest of business.</h3>
        <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?si=Kdm9F_rY7TfgSXMJ&color=E1A95F`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbed;