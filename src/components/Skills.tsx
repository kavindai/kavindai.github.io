import { Badge, Box, Heading, SimpleGrid, Wrap } from '@chakra-ui/react';
import { Section } from '@/components/common/Section';
import { Reveal } from '@/components/common/Reveal';
import { skillGroups } from '@/data/portfolio';

export function Skills() {
  return (
    <Section
      id='skills'
      eyebrow='03 · Tech Stack'
      title='Skills & technologies'
      subtitle='The tools I reach for to design, build, and ship across the stack.'
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 0.08} variant='scale'>
            <Box
              h='full'
              borderWidth='1px'
              borderColor='border.subtle'
              bg='bg.surface'
              rounded='xl'
              p={6}
              transition='border-color 0.2s'
              _hover={{ borderColor: 'brand.solid' }}
            >
              <Heading as='h3' size='sm' mb={4} color='fg.default' fontFamily='mono' letterSpacing='tight'>
                <Box as='span' color='accent.fg' mr={1}>
                  #
                </Box>
                {group.category}
              </Heading>
              <Wrap gap={2}>
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    colorPalette='brand'
                    variant='subtle'
                    rounded='md'
                    px={2.5}
                    py={1}
                    fontWeight='500'
                  >
                    {skill}
                  </Badge>
                ))}
              </Wrap>
            </Box>
          </Reveal>
        ))}
      </SimpleGrid>
    </Section>
  );
}
