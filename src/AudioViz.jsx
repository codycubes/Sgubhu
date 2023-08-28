import React, { useRef, useEffect } from 'react';
// import { useFrame } from 'react-three-fiber';
import { useFrame } from '@react-three/fiber';
import { SphereGeometry } from 'three';

const AudioVisualizer = ({ audioSrc }) => {
  const meshRef = useRef();
  const audioElement = useRef(null);
  const audioContext = useRef(null);
  const analyser = useRef(null);
  const dataArray = useRef(null);
  const bufferLength = useRef(0);

  useEffect(() => {
    const handleUserGesture = () => {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
      audioElement.current = new Audio(audioSrc);
      audioElement.current.crossOrigin = 'anonymous';

      audioElement.current.addEventListener('canplay', () => {
        analyser.current = audioContext.current.createAnalyser();
        analyser.current.fftSize = 256;
        bufferLength.current = analyser.current.frequencyBinCount;
        dataArray.current = new Uint8Array(bufferLength.current);

        const audioSource = audioContext.current.createMediaElementSource(audioElement.current);
        audioSource.connect(analyser.current);
        audioSource.connect(audioContext.current.destination);

        audioElement.current.play();
      });
    };

    window.addEventListener('mousedown', handleUserGesture);

    return () => {
      window.removeEventListener('mousedown', handleUserGesture);
    };
  }, [audioSrc]);

  useFrame(() => {
    if (analyser.current && dataArray.current) {
      analyser.current.getByteFrequencyData(dataArray.current);
      const average = dataArray.current.reduce((acc, val) => acc + val, 0) / bufferLength.current;
      const scale = average / 100;

      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef} position={[-1 ,0.2, 0]}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshBasicMaterial  color={'grey'} />
    </mesh>
  );
};

export default AudioVisualizer;
