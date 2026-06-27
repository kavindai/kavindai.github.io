import { Box, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { LuCloud, LuCode, LuServer, LuSparkles } from 'react-icons/lu';
import { Section } from '@/components/common/Section';
import { Reveal } from '@/components/common/Reveal';
import { profile } from '@/data/portfolio';

const focusAreas = [
  {
    icon: LuCode,
    title: 'Frontend Development',
    text: 'Clean, accessible, responsive UIs with React, Next.js, and TypeScript.',
  },
  {
    icon: LuServer,
    title: 'Backend Systems',
    text: 'Robust APIs and services with Go, Node.js, Spring Boot, and .NET.',
  },
  {
    icon: LuCloud,
    title: 'Cloud & DevOps',
    text: 'Scalable, cost-aware deployments on AWS with Docker and CI/CD.',
  },
  {
    icon: LuSparkles,
    title: 'Engineering Practices',
    text: 'Performance tuning, testing, and maintainable architecture at scale.',
  },
];

export function About() {
  return (
    <Section id='about' eyebrow='01 · About' title='A bit about me'>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 8, lg: 12 }}>
        <Reveal variant='left'>
          <Stack gap={4}>
            <Text fontSize={{ base: 'md', md: 'lg' }} color='fg.muted' lineHeight='1.8'>
              {profile.summary}
            </Text>
            <Text fontSize={{ base: 'md', md: 'lg' }} color='fg.muted' lineHeight='1.8'>
              Based in {profile.location}, I care about shipping software that is both delightful to use and a pleasure
              to maintain.
            </Text>
          </Stack>
        </Reveal>

        <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.08} variant='scale'>
              <Box
                h='full'
                borderWidth='1px'
                borderColor='border.subtle'
                bg='bg.surface'
                rounded='xl'
                p={5}
                transition='border-color 0.2s, transform 0.2s'
                _hover={{ borderColor: 'brand.solid', transform: 'translateY(-3px)' }}
              >
                <Box
                  w={10}
                  h={10}
                  rounded='lg'
                  bg='brand.subtle'
                  color='brand.fg'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  mb={3}
                >
                  <Icon as={area.icon} boxSize={5} />
                </Box>
                <Text fontWeight='700' color='fg.default' mb={1}>
                  {area.title}
                </Text>
                <Text fontSize='sm' color='fg.muted'>
                  {area.text}
                </Text>
              </Box>
            </Reveal>
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </Section>
  );
}
