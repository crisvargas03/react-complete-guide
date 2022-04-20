import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useIsMounted = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]);

  return loaded;
};
