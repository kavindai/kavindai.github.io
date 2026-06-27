import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

/**
 * Thin gradient bar pinned to the top of the viewport that fills as the
 * user scrolls through the page.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box position='fixed' top={0} left={0} right={0} h='3px' zIndex={2000} pointerEvents='none'>
      <Box
        h='full'
        w={`${progress}%`}
        bgGradient='to-r'
        gradientFrom='brand.500'
        gradientTo='accent.400'
        transition='width 0.1s linear'
      />
    </Box>
  );
}
