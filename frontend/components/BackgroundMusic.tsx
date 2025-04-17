'use client';

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

export interface BackgroundMusicHandle {
    play: () => void;
    pause: () => void;
}

const BackgroundMusic = forwardRef<BackgroundMusicHandle>((_, ref) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useImperativeHandle(ref, () => ({
        play: () => audioRef.current?.play(),
        pause: () => audioRef.current?.pause(),
    }));

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            audio.volume = 0.2;
            audio.loop = true;

            // Try autoplay
            audio.play().catch((e) => {
                console.log('Autoplay prevented:', e);
            });
        }
    }, []);

    return <audio ref={audioRef} src="/bgm.m4a" autoPlay hidden />;
});

BackgroundMusic.displayName = 'BackgroundMusic';
export default BackgroundMusic;
