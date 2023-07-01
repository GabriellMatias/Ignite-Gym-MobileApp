import { Center, Heading, Image, Text, VStack } from 'native-base'
import BgImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { InputComponent } from 'src/Components/InputComponent'
import { ButtonComponent } from 'src/Components/ButtonComponent'
import React from 'react'

export function SignIn() {
  return (
    <VStack px={10} flex={1} bg={'gray.700'}>
      <Image
        alt="People Training"
        source={BgImg}
        position={'absolute'}
        resizeMode="contain"
      />
      <Center marginY={24}>
        <LogoSvg />
        <Text color={'gray.100'} fontSize={'sm'}>
          Train your mind and body 🏋️
        </Text>
      </Center>
      <Center>
        {' '}
        <Heading color={'gray.100'} fontSize={'xl'} mb={6}>
          Acess your account
        </Heading>
        <InputComponent
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <InputComponent placeholder="Password" secureTextEntry />
        <ButtonComponent title="Acess" />
      </Center>
    </VStack>
  )
}
