import { Badge, Box, Heading, HStack, Stack, Text, Wrap } from '@chakra-ui/react';
import { Section } from '@/components/common/Section';
import { Reveal } from '@/components/common/Reveal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { experiences } from '@/data/portfolio';

export function Experience() {
  const { ref: railRef, visible: railVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section
      id='experience'
      eyebrow='02 · Experience'
      title="Where I've worked"
      subtitle='7+ years building products across startups and enterprise teams.'
      surface
    >
      <Box position='relative' ref={railRef}>
        {/* Vertical timeline rail (grows as it scrolls into view) */}
        <Box
          position='absolute'
          left={{ base: '11px', md: '15px' }}
          top={2}
          bottom={2}
          w='2px'
          bg='border.subtle'
          aria-hidden='true'
        />
        <Box
          position='absolute'
          left={{ base: '11px', md: '15px' }}
          top={2}
          bottom={2}
          w='2px'
          bgGradient='to-b'
          gradientFrom='brand.solid'
          gradientTo='accent.400'
          transformOrigin='top'
          transform={railVisible ? 'scaleY(1)' : 'scaleY(0)'}
          transition='transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)'
          aria-hidden='true'
        />

        <Stack gap={{ base: 8, md: 10 }}>
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.period}`} delay={i * 0.05} variant='right'>
              <HStack align='start' gap={{ base: 5, md: 8 }}>
                {/* Node */}
                <Box position='relative' flexShrink={0} mt={1.5}>
                  <Box
                    w={{ base: '24px', md: '32px' }}
                    h={{ base: '24px', md: '32px' }}
                    rounded='full'
                    bg='bg.canvas'
                    borderWidth='2px'
                    borderColor={exp.current ? 'brand.solid' : 'border.subtle'}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                    <Box w='10px' h='10px' rounded='full' bg={exp.current ? 'brand.solid' : 'fg.muted'} />
                  </Box>
                </Box>

                {/* Content card */}
                <Box
                  flex='1'
                  borderWidth='1px'
                  borderColor='border.subtle'
                  bg='bg.surface'
                  rounded='xl'
                  p={{ base: 5, md: 6 }}
                  transition='border-color 0.2s'
                  _hover={{ borderColor: 'brand.solid' }}
                >
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    justify='space-between'
                    align={{ base: 'start', sm: 'center' }}
                    gap={2}
                    mb={2}
                  >
                    <Heading as='h3' size='md' color='fg.default'>
                      {exp.role}
                    </Heading>
                    {exp.current && (
                      <Badge colorPalette='brand' variant='solid' rounded='full'>
                        Current
                      </Badge>
                    )}
                  </Stack>
                  <HStack gap={2} mb={3} color='brand.fg' fontWeight='600' fontSize='sm' flexWrap='wrap'>
                    <Text>{exp.company}</Text>
                    <Text color='fg.muted'>·</Text>
                    <Text color='fg.muted' fontFamily='mono' fontWeight='500'>
                      {exp.period}
                    </Text>
                  </HStack>
                  <Text color='fg.muted' mb={4} lineHeight='1.7'>
                    {exp.description}
                  </Text>
                  <Wrap gap={2}>
                    {exp.tech.map((t) => (
                      <Badge
                        key={t}
                        variant='surface'
                        colorPalette='gray'
                        rounded='md'
                        fontFamily='mono'
                        fontWeight='500'
                      >
                        {t}
                      </Badge>
                    ))}
                  </Wrap>
                </Box>
              </HStack>
            </Reveal>
          ))}
        </Stack>
      </Box>
    </Section>
  );
}
