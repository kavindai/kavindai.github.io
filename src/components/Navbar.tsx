import { Box, Button, Container, Flex, HStack, IconButton, Link, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { LuDownload, LuMenu, LuX } from 'react-icons/lu';
import { ColorModeButton, useColorModeValue } from '@/components/ui/color-mode';
import { useActiveSection } from '@/hooks/useActiveSection';
import { navLinks, profile } from '@/data/portfolio';

export function Navbar() {
  const { open, onToggle, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(() => navLinks.map((l) => l.href.replace('#', '')), []);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const glass = useColorModeValue('rgba(245,245,255,0.72)', 'rgba(15,15,26,0.72)');

  return (
    <Box
      as='header'
      position='fixed'
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      pt={scrolled ? { base: 2, md: 3 } : 0}
      transition='padding 0.4s cubic-bezier(0.16,1,0.3,1)'
    >
      <Container
        maxW={scrolled ? '5xl' : '6xl'}
        px={{ base: 3, md: scrolled ? 3 : 8 }}
        transition='max-width 0.4s cubic-bezier(0.16,1,0.3,1), padding 0.4s ease'
      >
        <Flex
          align='center'
          justify='space-between'
          h={scrolled ? { base: 14, md: 16 } : 16}
          px={{ base: 4, md: scrolled ? 5 : 2 }}
          bg={scrolled ? glass : 'transparent'}
          backdropFilter={scrolled ? 'saturate(180%) blur(16px)' : 'none'}
          borderWidth='1px'
          borderColor={scrolled ? 'border.subtle' : 'transparent'}
          rounded={scrolled ? '2xl' : 'none'}
          boxShadow={scrolled ? '0 8px 32px -12px rgba(0,0,0,0.35)' : 'none'}
          transition='all 0.4s cubic-bezier(0.16,1,0.3,1)'
        >
          <Link
            href='#hero'
            fontFamily='mono'
            fontWeight='700'
            fontSize='lg'
            color='fg.default'
            _hover={{ color: 'brand.fg', textDecoration: 'none' }}
          >
            <Text as='span' color='accent.fg'>
              {'<'}
            </Text>
            kavinda
            <Text as='span' color='accent.fg'>
              {' />'}
            </Text>
          </Link>

          {/* Desktop nav with animated active pill */}
          <HStack
            gap={1}
            display={{ base: 'none', md: 'flex' }}
            bg={scrolled ? 'transparent' : 'bg.surface/60'}
            backdropFilter={scrolled ? 'none' : 'blur(8px)'}
            borderWidth={scrolled ? 0 : '1px'}
            borderColor='border.subtle'
            rounded='full'
            p={1}
            transition='all 0.4s ease'
          >
            {navLinks.map((item) => {
              const isActive = active === item.href.replace('#', '');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  position='relative'
                  px={3.5}
                  py={1.5}
                  rounded='full'
                  fontSize='sm'
                  fontWeight={isActive ? '600' : '500'}
                  color={isActive ? 'brand.contrast' : 'fg.muted'}
                  bg={isActive ? 'brand.solid' : 'transparent'}
                  boxShadow={isActive ? '0 4px 14px -4px rgba(255,118,5,0.55)' : 'none'}
                  transition='color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease'
                  _hover={isActive ? {} : { color: 'fg.default', bg: 'bg.subtle', textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              );
            })}
          </HStack>

          <HStack gap={2}>
            <Button asChild size='sm' colorPalette='brand' rounded='full' display={{ base: 'none', lg: 'inline-flex' }}>
              <a href={profile.resumeUrl} download={profile.resumeFileName}>
                <LuDownload /> CV
              </a>
            </Button>
            <ColorModeButton />
            <IconButton
              aria-label='Toggle navigation menu'
              variant='ghost'
              rounded='full'
              display={{ base: 'inline-flex', md: 'none' }}
              onClick={onToggle}
            >
              {open ? <LuX /> : <LuMenu />}
            </IconButton>
          </HStack>
        </Flex>

        {/* Mobile nav */}
        <Box
          display={{ base: 'block', md: 'none' }}
          overflow='hidden'
          maxH={open ? '420px' : '0'}
          opacity={open ? 1 : 0}
          transition='max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease'
        >
          <Stack
            gap={1}
            mt={2}
            p={3}
            bg={glass}
            backdropFilter='saturate(180%) blur(16px)'
            borderWidth='1px'
            borderColor='border.subtle'
            rounded='2xl'
            boxShadow='0 8px 32px -12px rgba(0,0,0,0.35)'
          >
            {navLinks.map((item) => {
              const isActive = active === item.href.replace('#', '');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  px={4}
                  py={2.5}
                  rounded='xl'
                  fontWeight={isActive ? '600' : '500'}
                  color={isActive ? 'brand.fg' : 'fg.muted'}
                  bg={isActive ? 'brand.subtle' : 'transparent'}
                  _hover={{ color: 'fg.default', bg: 'bg.subtle', textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild colorPalette='brand' rounded='xl' mt={1} onClick={onClose}>
              <a href={profile.resumeUrl} download={profile.resumeFileName}>
                <LuDownload /> Download CV
              </a>
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
