"use client"
import { useEffect, useState } from "react";

type Stream = {
  id: string;
  extractedId: string;
  title: string;
  url: string;
  smallImg: string;
  bigImg: string;
  upvotes: number;
  haveUpvoted: boolean;
};

export default function StreamList() {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0); // to get one-by-one

  useEffect(() => {
    async function fetchStreams() {
      try {
        const res = await fetch("http://localhost:3000/api/streams/my");
        const data = await res.json();
        setStreams(data.streams);
      } catch (error) {
        console.error("Failed to fetch streams", error);
      }
    }

    fetchStreams();
  }, []);

  const currentStream = streams[currentIndex];

  return (
    <div>
      {currentStream ? (
        <div>
          <img src={currentStream.smallImg} alt={currentStream.title} />
          <h2>{currentStream.title}</h2>
          <p>Upvotes: {currentStream.upvotes}</p>
          <p>Have upvoted: {currentStream.haveUpvoted ? "Yes" : "No"}</p>

          <button className='bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-fuchsia-500/25' 
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((i) => i - 1)}
          >
            Previous
          </button>
          <button
            disabled={currentIndex === streams.length - 1}
            onClick={() => setCurrentIndex((i) => i + 1)}
          >
            Next
          </button>
        </div>
      ) : (
        <p>Loading stream...</p>
      )}
    </div>
  );
}
