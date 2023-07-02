import { Center, Heading, Image, Text, VStack, ScrollView } from 'native-base'
import BgImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { InputComponent } from '../Components/InputComponent'
import { ButtonComponent } from '../Components/ButtonComponent'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export function SignUp() {
  const { goBack } = useNavigation()

  function handleGoBack() {
    goBack()
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
            Create your account
          </Heading>
          <InputComponent placeholder="Name" autoCapitalize="none" />
          <InputComponent
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <InputComponent placeholder="Password" secureTextEntry />
          <ButtonComponent title="Create and Acess" />
        </Center>

        <ButtonComponent
          mt={24}
          title="Back to login"
          variant={'outline'}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  )
}
