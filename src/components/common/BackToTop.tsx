import { IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { LuArrowUp } from 'react-icons/lu';

/**
 * Floating button that fades in after scrolling down and smooth-scrolls to top.
 */
export function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <IconButton
      aria-label='Back to top'
      colorPalette='brand'
      rounded='full'
      size='lg'
      position='fixed'
      bottom={6}
      right={6}
      zIndex={1500}
      boxShadow='lg'
      opacity={shown ? 1 : 0}
      transform={shown ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)'}
      pointerEvents={shown ? 'auto' : 'none'}
      transition='opacity 0.3s ease, transform 0.3s ease'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <LuArrowUp />
    </IconButton>
  );
}
