import { Center, Heading, Image, Text, VStack, ScrollView } from 'native-base'
import BgImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { InputComponent } from '../Components/InputComponent'
import { ButtonComponent } from '../Components/ButtonComponent'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export function SignIn() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>()

  function handleSignIn() {}

  function handleNewAccount() {
    // TODO -> nao ta pegando a tipagem
    navigate('signUp')
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack px={10} flex={1} pb={16}>
        <Image
          alt="People Training"
          defaultSource={BgImg}
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
          <ButtonComponent title="Acess" onPress={handleSignIn} />
        </Center>

        <Center mt={24}>
          <Text color={'gray.100'} fontSize={'sm'} mb={3} fontFamily={'body'}>
            {' '}
            Dont have access yet?
          </Text>
          <ButtonComponent
            title="Create an account"
            variant={'outline'}
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
