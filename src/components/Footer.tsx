import { Box, Container, HStack, IconButton, Link, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { LuMail } from 'react-icons/lu';
import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <Box as='footer' borderTopWidth='1px' borderColor='border.subtle' bg='bg.surface' py={8}>
      <Container maxW='6xl' px={{ base: 5, md: 8 }}>
        <Stack direction={{ base: 'column', sm: 'row' }} justify='space-between' align='center' gap={4}>
          <Box textAlign={{ base: 'center', sm: 'left' }}>
            <Text fontFamily='mono' fontWeight='700' color='fg.default'>
              {profile.name}
            </Text>
            <Text fontSize='sm' color='fg.muted'>
              Designed & built with React + Chakra UI.
            </Text>
          </Box>

          <HStack gap={2}>
            <IconButton asChild aria-label='GitHub' variant='ghost' rounded='full'>
              <Link href={profile.github} target='_blank' rel='noreferrer'>
                <FaGithub />
              </Link>
            </IconButton>
            <IconButton asChild aria-label='LinkedIn' variant='ghost' rounded='full'>
              <Link href={profile.linkedin} target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
              </Link>
            </IconButton>
            <IconButton asChild aria-label='Email' variant='ghost' rounded='full'>
              <Link href={`mailto:${profile.email}`}>
                <LuMail />
              </Link>
            </IconButton>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
