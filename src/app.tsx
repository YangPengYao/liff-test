import { useState, useEffect } from 'react';
import liff, { initLIFF } from './liff';

import { TypographyH1, TypographyH4 } from '@/components/typography';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

function App() {
  const [isLoaggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<null | Awaited<
    ReturnType<typeof liff.getProfile>
  >>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const initializeLiff = async () => {
      try {
        setIsLoading(true);

        await initLIFF();

        if (liff.isLoggedIn()) {
          setIsLoggedIn(true);
          const userProfile = await liff.getProfile();
          setUserProfile(userProfile);
        }
      } catch (error) {
        setError('Failed to initialize LIFF');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeLiff();
  }, []);

  const handleLogin = () => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  };

  const handleLogout = () => {
    if (liff.isLoggedIn()) {
      liff.logout();
      setIsLoggedIn(false);
      setUserProfile(null);
    }
  };

  if (isLoading)
    return (
      <main className="flex min-h-screen w-screen items-center justify-center">
        <div className="h-20 w-20 animate-spin rounded-full border-b-6 border-b-emerald-500" />
      </main>
    );

  if (error !== null) return <div>Error: {error}</div>;

  return (
    <main className="flex min-h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-8">
        <TypographyH1>LIFF + React + TypeScript App</TypographyH1>
        {isLoaggedIn && (
          <div className="flex flex-col items-center justify-center gap-y-8">
            <TypographyH4>
              Logged in as: {userProfile?.displayName}
            </TypographyH4>
            <AspectRatio ratio={1}>
              <img
                src={userProfile?.pictureUrl}
                alt="user profile image"
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        )}
        {!isLoaggedIn && <Button onClick={handleLogin}>Login</Button>}
      </div>
    </main>
  );
}

export { App };
