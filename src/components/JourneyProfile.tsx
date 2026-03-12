import { createContext, useContext, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { JourneyProfileId } from '../types';

const STORAGE_KEY = 'abcai-journey-profile';

const isJourneyProfile = (value: string | null): value is JourneyProfileId =>
  value === 'beginner' || value === 'business' || value === 'builder';

interface JourneyProfileContextValue {
  profile: JourneyProfileId;
  setProfile: (profile: JourneyProfileId) => void;
}

const JourneyProfileContext = createContext<JourneyProfileContextValue | null>(null);

export const JourneyProfileProvider = ({ children }: PropsWithChildren) => {
  const [profile, setProfileState] = useState<JourneyProfileId>('beginner');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isJourneyProfile(stored)) {
      setProfileState(stored);
    }
  }, []);

  const setProfile = (nextProfile: JourneyProfileId) => {
    setProfileState(nextProfile);
    window.localStorage.setItem(STORAGE_KEY, nextProfile);
  };

  return <JourneyProfileContext.Provider value={{ profile, setProfile }}>{children}</JourneyProfileContext.Provider>;
};

export const useJourneyProfile = () => {
  const context = useContext(JourneyProfileContext);

  if (!context) {
    throw new Error('useJourneyProfile must be used within JourneyProfileProvider');
  }

  return context;
};
