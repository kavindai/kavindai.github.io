import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { LuArrowDown, LuDownload, LuMail, LuMapPin } from 'react-icons/lu';
import { useColorModeValue } from '@/components/ui/color-mode';
import { Reveal } from '@/components/common/Reveal';
import { highlights, profile } from '@/data/portfolio';

export function Hero() {
  const glow = useColorModeValue(
    'radial-gradient(55% 55% at 18% 0%, rgba(255,118,5,0.14) 0%, transparent 60%), radial-gradient(50% 50% at 90% 10%, rgba(56,238,255,0.10) 0%, transparent 60%)',
    'radial-gradient(55% 55% at 18% 0%, rgba(255,118,5,0.22) 0%, transparent 60%), radial-gradient(50% 50% at 90% 10%, rgba(56,238,255,0.14) 0%, transparent 60%)'
  );

  return (
    <Box as='section' id='hero' position='relative' overflow='hidden'>
      <Box position='absolute' inset={0} bgImage={glow} pointerEvents='none' aria-hidden='true' />
      <Container
        maxW='6xl'
        px={{ base: 5, md: 8 }}
        position='relative'
        pt={{ base: 20, md: 32 }}
        pb={{ base: 16, md: 24 }}
      >
        <Stack gap={6} maxW='3xl'>
          <Reveal variant='up'>
            <Badge colorPalette='brand' variant='subtle' rounded='full' px={3} py={1} w='fit-content' fontFamily='mono'>
              <Box
                as='span'
                w='8px'
                h='8px'
                rounded='full'
                bg='green.400'
                mr={2}
                display='inline-block'
                css={{ animation: 'pulseDot 2s ease-in-out infinite' }}
              />
              Available for new opportunities
            </Badge>
          </Reveal>

          <Reveal variant='up' delay={0.08}>
            <Stack gap={3}>
              <Text fontFamily='mono' color='brand.fg' fontWeight='600' fontSize={{ base: 'md', md: 'lg' }}>
                Hi, my name is
              </Text>
              <Heading
                as='h1'
                size={{ base: '4xl', md: '6xl' }}
                letterSpacing='tighter'
                lineHeight='1.05'
                color='fg.default'
              >
                {profile.name}
              </Heading>
              <Heading as='p' size={{ base: '2xl', md: '4xl' }} letterSpacing='tight' color='fg.muted' fontWeight='600'>
                {profile.role} · {profile.experienceYears} years
              </Heading>
            </Stack>
          </Reveal>

          <Reveal variant='up' delay={0.16}>
            <Text fontSize={{ base: 'md', md: 'xl' }} color='fg.muted' maxW='2xl'>
              {profile.tagline} I work across frontend, backend, and cloud — turning complex problems into clean,
              performant products.
            </Text>
          </Reveal>

          <Reveal variant='up' delay={0.24}>
            <HStack gap={4} color='fg.muted' fontSize='sm'>
              <HStack gap={1.5}>
                <Icon as={LuMapPin} color='brand.fg' />
                <Text>{profile.location}</Text>
              </HStack>
              <HStack gap={1.5}>
                <Icon as={LuMail} color='brand.fg' />
                <Link href={`mailto:${profile.email}`} _hover={{ color: 'fg.default' }}>
                  {profile.email}
                </Link>
              </HStack>
            </HStack>
          </Reveal>

          <Reveal variant='up' delay={0.32}>
            <Flex gap={3} wrap='wrap' align='center' pt={2}>
              <Button asChild colorPalette='brand' size='lg' rounded='lg'>
                <a href='#projects'>
                  View my work <LuArrowDown />
                </a>
              </Button>
              <Button asChild variant='outline' size='lg' rounded='lg' colorPalette='brand'>
                <a href={profile.resumeUrl} download={profile.resumeFileName}>
                  <LuDownload /> Download CV
                </a>
              </Button>

              <HStack gap={2} ml={{ base: 0, sm: 2 }}>
                <IconButton asChild aria-label='GitHub profile' variant='ghost' rounded='full'>
                  <Link href={profile.github} target='_blank' rel='noreferrer'>
                    <FaGithub />
                  </Link>
                </IconButton>
                <IconButton asChild aria-label='LinkedIn profile' variant='ghost' rounded='full'>
                  <Link href={profile.linkedin} target='_blank' rel='noreferrer'>
                    <FaLinkedinIn />
                  </Link>
                </IconButton>
              </HStack>
            </Flex>
          </Reveal>
        </Stack>

        {/* Highlight stats */}
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 4, md: 6 }} mt={{ base: 14, md: 20 }}>
          {highlights.map((item, i) => (
            <Reveal key={item.label} variant='scale' delay={0.4 + i * 0.1}>
              <Box
                borderWidth='1px'
                borderColor='border.subtle'
                bg='bg.surface'
                rounded='xl'
                p={{ base: 4, md: 6 }}
                h='full'
                transition='border-color 0.2s, transform 0.2s'
                _hover={{ borderColor: 'brand.solid', transform: 'translateY(-3px)' }}
              >
                <Heading size={{ base: '2xl', md: '3xl' }} color='brand.fg' fontFamily='mono'>
                  {item.value}
                </Heading>
                <Text fontSize='sm' color='fg.muted' mt={1}>
                  {item.label}
                </Text>
              </Box>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
