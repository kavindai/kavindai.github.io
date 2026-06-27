import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  surface?: boolean;
}

/**
 * Reusable page section with consistent spacing, an anchor target,
 * and a standard heading block.
 */
export function Section({ id, eyebrow, title, subtitle, children, surface = false }: SectionProps) {
  return (
    <Box
      as='section'
      id={id}
      scrollMarginTop='80px'
      py={{ base: 16, md: 24 }}
      bg={surface ? 'bg.subtle' : 'transparent'}
    >
      <Container maxW='6xl' px={{ base: 5, md: 8 }}>
        <Reveal>
          <Stack gap={3} mb={{ base: 8, md: 12 }} maxW='2xl'>
            {eyebrow && (
              <Text
                fontFamily='mono'
                fontSize='sm'
                fontWeight='600'
                color='brand.fg'
                letterSpacing='wide'
                textTransform='uppercase'
              >
                {eyebrow}
              </Text>
            )}
            <Heading as='h2' size={{ base: '2xl', md: '3xl' }} letterSpacing='tight' color='fg.default'>
              {title}
            </Heading>
            {subtitle && (
              <Text fontSize={{ base: 'md', md: 'lg' }} color='fg.muted'>
                {subtitle}
              </Text>
            )}
          </Stack>
        </Reveal>
        {children}
      </Container>
    </Box>
  );
}
