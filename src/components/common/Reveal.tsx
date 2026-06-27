import { Box, type BoxProps } from '@chakra-ui/react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps extends BoxProps {
  delay?: number;
  /** Direction / style of the entrance animation. Defaults to "up". */
  variant?: RevealVariant;
  /** Re-run the animation every time it enters the viewport. */
  repeat?: boolean;
  /** Disable the blur-in effect (e.g. for large text blocks). */
  blurIn?: boolean;
}

const hiddenTransform: Record<RevealVariant, string> = {
  up: 'translate3d(0, 40px, 0)',
  down: 'translate3d(0, -40px, 0)',
  left: 'translate3d(-44px, 0, 0)',
  right: 'translate3d(44px, 0, 0)',
  scale: 'scale(0.92)',
  fade: 'translate3d(0, 0, 0)',
};

// Snappy "settle" easing — fast out, gentle landing (modern, spring-like).
const EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';

/**
 * Modern scroll-triggered entrance: fades + slides + de-blurs into place.
 * Pure CSS transitions + IntersectionObserver — no animation library required.
 */
export function Reveal({ children, delay = 0, variant = 'up', repeat = false, blurIn = true, ...rest }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ repeat });

  return (
    <Box
      ref={ref}
      opacity={visible ? 1 : 0}
      transform={visible ? 'translate3d(0,0,0) scale(1)' : hiddenTransform[variant]}
      filter={blurIn ? (visible ? 'blur(0)' : 'blur(12px)') : undefined}
      transition={`opacity 0.8s ${EASING}, transform 0.8s ${EASING}, filter 0.8s ${EASING}`}
      transitionDelay={`${delay}s`}
      willChange='opacity, transform, filter'
      {...rest}
    >
      {children}
    </Box>
  );
}
