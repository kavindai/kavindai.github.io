import { Box, Button, Container, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { LuMail, LuMapPin } from 'react-icons/lu';
import { Reveal } from '@/components/common/Reveal';
import { profile } from '@/data/portfolio';

export function Contact() {
  return (
    <Box as='section' id='contact' py={{ base: 16, md: 24 }} scrollMarginTop='80px'>
      <Container maxW='4xl' px={{ base: 5, md: 8 }}>
        <Reveal>
          <Box
            borderWidth='1px'
            borderColor='border.subtle'
            bg='bg.surface'
            rounded='2xl'
            p={{ base: 8, md: 14 }}
            textAlign='center'
            position='relative'
            overflow='hidden'
          >
            <Box
              position='absolute'
              inset={0}
              bgImage='radial-gradient(80% 80% at 30% 0%, rgba(255,118,5,0.12) 0%, transparent 70%), radial-gradient(70% 70% at 85% 10%, rgba(56,238,255,0.08) 0%, transparent 70%)'
              pointerEvents='none'
              aria-hidden='true'
            />
            <Stack gap={5} align='center' position='relative'>
              <Text
                fontFamily='mono'
                fontSize='sm'
                fontWeight='600'
                color='brand.fg'
                textTransform='uppercase'
                letterSpacing='wide'
              >
                07 · Contact
              </Text>
              <Heading as='h2' size={{ base: '2xl', md: '3xl' }} letterSpacing='tight'>
                Let's build something together
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color='fg.muted' maxW='xl'>
                I'm always open to discussing new projects, opportunities, or collaborations. My inbox is open — feel
                free to reach out.
              </Text>

              <HStack gap={1.5} color='fg.muted' fontSize='sm'>
                <Icon as={LuMapPin} color='brand.fg' />
                <Text>{profile.location}</Text>
              </HStack>

              <Stack direction={{ base: 'column', sm: 'row' }} gap={3} pt={2} w={{ base: 'full', sm: 'auto' }}>
                <Button asChild colorPalette='brand' size='lg' rounded='lg' w={{ base: 'full', sm: 'auto' }}>
                  <a href={`mailto:${profile.email}`}>
                    <LuMail /> Say hello
                  </a>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  colorPalette='brand'
                  size='lg'
                  rounded='lg'
                  w={{ base: 'full', sm: 'auto' }}
                >
                  <a href={profile.linkedin} target='_blank' rel='noreferrer'>
                    <FaLinkedinIn /> LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant='ghost'
                  colorPalette='brand'
                  size='lg'
                  rounded='lg'
                  w={{ base: 'full', sm: 'auto' }}
                >
                  <a href={profile.github} target='_blank' rel='noreferrer'>
                    <FaGithub /> GitHub
                  </a>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
