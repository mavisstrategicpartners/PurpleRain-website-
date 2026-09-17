import { useRef, useState } from "react";

function silence(video) {
  if (!video) return;
  if (!video.muted) video.muted = true;
  if (!video.defaultMuted) video.defaultMuted = true;
  if (video.volume !== 0) video.volume = 0;
}

export default function SilentVideo({ src }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    silence(video);
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function toggleFullscreen() {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    if (wrap?.requestFullscreen) {
      wrap.requestFullscreen();
      return;
    }
    video?.webkitEnterFullscreen?.();
  }

  return (
    <div className="silent-video" ref={wrapRef}>
      <video
        ref={videoRef}
        src={src}
        muted
        defaultMuted
        playsInline
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        onLoadedMetadata={(event) => silence(event.currentTarget)}
        onPlay={(event) => {
          silence(event.currentTarget);
          setPlaying(true);
        }}
        onPause={() => setPlaying(false)}
        onVolumeChange={(event) => silence(event.currentTarget)}
        onClick={togglePlay}
      />
      <div className="silent-video-bar">
        <button type="button" aria-label={playing ? "Pause" : "Play"} onClick={togglePlay}>
          {playing ? "Pause" : "Play"}
        </button>
        <button type="button" aria-label="Fullscreen" onClick={toggleFullscreen}>
          Fullscreen
        </button>
      </div>
    </div>
  );
}
