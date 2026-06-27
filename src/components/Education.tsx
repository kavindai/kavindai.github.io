import { Box, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { LuGraduationCap } from 'react-icons/lu';
import { Section } from '@/components/common/Section';
import { Reveal } from '@/components/common/Reveal';
import { education } from '@/data/portfolio';

export function Education() {
  return (
    <Section
      id='education'
      eyebrow='06 · Education'
      title='Academic background'
      subtitle='Formal training in software engineering, IT, and mathematics.'
      surface
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.1} variant='up' display='flex'>
            <Box
              w='full'
              borderWidth='1px'
              borderColor='border.subtle'
              bg='bg.surface'
              rounded='xl'
              p={6}
              transition='border-color 0.2s, transform 0.2s'
              _hover={{ borderColor: 'brand.solid', transform: 'translateY(-3px)' }}
            >
              <Box
                w={11}
                h={11}
                rounded='lg'
                bg='brand.subtle'
                color='brand.fg'
                display='flex'
                alignItems='center'
                justifyContent='center'
                mb={4}
              >
                <Icon as={LuGraduationCap} boxSize={6} />
              </Box>
              <Text fontFamily='mono' fontSize='xs' color='brand.fg' fontWeight='600' mb={2}>
                {edu.period}
              </Text>
              <Heading as='h3' size='md' color='fg.default' mb={2} lineHeight='1.4'>
                {edu.degree}
              </Heading>
              <Text fontSize='sm' color='fg.muted'>
                {edu.institution}
              </Text>
              {edu.meta && (
                <Text fontSize='xs' color='fg.muted' mt={1}>
                  {edu.meta}
                </Text>
              )}
            </Box>
          </Reveal>
        ))}
      </SimpleGrid>
    </Section>
  );
}
