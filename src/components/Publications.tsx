import { Badge, Box, Button, Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { LuExternalLink, LuFileText } from 'react-icons/lu';
import { Section } from '@/components/common/Section';
import { Reveal } from '@/components/common/Reveal';
import { publications } from '@/data/portfolio';

export function Publications() {
  return (
    <Section
      id='research'
      eyebrow='05 · Research & Publications'
      title='Published research'
      subtitle='Peer-reviewed work contributing to the academic community.'
    >
      <Stack gap={5}>
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.08} variant='scale'>
            <Box
              borderWidth='1px'
              borderColor='border.subtle'
              bg='bg.surface'
              rounded='xl'
              p={{ base: 5, md: 7 }}
              transition='border-color 0.2s'
              _hover={{ borderColor: 'brand.solid' }}
            >
              <Flex gap={5} align='start' direction={{ base: 'column', md: 'row' }}>
                <Box
                  w={12}
                  h={12}
                  rounded='lg'
                  bg='brand.subtle'
                  color='brand.fg'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  flexShrink={0}
                >
                  <Icon as={LuFileText} boxSize={6} />
                </Box>

                <Box flex='1'>
                  <Badge colorPalette='brand' variant='subtle' rounded='full' mb={2} fontFamily='mono'>
                    IEEE · ICAC 2019
                  </Badge>
                  <Heading as='h3' size='md' color='fg.default' mb={2} lineHeight='1.4'>
                    {pub.title}
                  </Heading>
                  <Text fontSize='sm' color='fg.muted' mb={1}>
                    {pub.authors}
                  </Text>
                  <Text fontSize='sm' color='fg.muted' fontStyle='italic' mb={4}>
                    {pub.venue}
                  </Text>
                  <Button asChild size='sm' variant='outline' colorPalette='brand' rounded='lg'>
                    <a href={pub.link} target='_blank' rel='noreferrer'>
                      View on IEEE Xplore <LuExternalLink />
                    </a>
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Reveal>
        ))}
      </Stack>
    </Section>
  );
}
