import { Badge, Box, Card, Flex, Heading, Icon, SimpleGrid, Text, Wrap } from '@chakra-ui/react';
import { LuFolderGit2 } from 'react-icons/lu';
import { Section } from '@/components/common/Section';
import { Reveal } from '@/components/common/Reveal';
import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <Section
      id='projects'
      eyebrow='04 · Featured Projects'
      title="Things I've built"
      subtitle='A selection of professional, academic, and personal projects.'
      surface
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.08} variant='scale' display='flex'>
            <Card.Root
              w='full'
              bg='bg.surface'
              borderColor='border.subtle'
              overflow='hidden'
              position='relative'
              transition='border-color 0.2s, transform 0.2s, box-shadow 0.2s'
              _hover={{
                borderColor: 'brand.solid',
                transform: 'translateY(-4px)',
                boxShadow: 'lg',
              }}
            >
              {/* top accent bar */}
              <Box h='3px' bg='brand.solid' opacity={project.featured ? 1 : 0.35} />
              <Card.Body p={6}>
                <Flex justify='space-between' align='start' mb={3}>
                  <Box
                    w={10}
                    h={10}
                    rounded='lg'
                    bg='brand.subtle'
                    color='brand.fg'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                    <Icon as={LuFolderGit2} boxSize={5} />
                  </Box>
                  {project.tag && (
                    <Badge colorPalette='brand' variant='surface' rounded='full' fontFamily='mono' fontSize='2xs'>
                      {project.tag}
                    </Badge>
                  )}
                </Flex>

                <Heading as='h3' size='md' color='fg.default' mb={2}>
                  {project.title}
                </Heading>
                <Text fontSize='sm' color='fg.muted' lineHeight='1.7' mb={4}>
                  {project.description}
                </Text>

                <Wrap gap={1.5}>
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant='surface'
                      colorPalette='gray'
                      rounded='md'
                      fontFamily='mono'
                      fontSize='2xs'
                      fontWeight='500'
                    >
                      {t}
                    </Badge>
                  ))}
                </Wrap>
              </Card.Body>
            </Card.Root>
          </Reveal>
        ))}
      </SimpleGrid>
    </Section>
  );
}
