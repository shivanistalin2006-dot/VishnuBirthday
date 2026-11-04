export interface ReasonItem {
  id: number;
  filename: string;
  title: string;
  tagline: string;
  description: string;
  rotation: string;
  tapeColor: string;
}

export interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  currentTime: number;
  duration: number;
  volume: number;
  setVolume: (val: number) => void;
  seek: (time: number) => void;
}
