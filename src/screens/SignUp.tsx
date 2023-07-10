import { Center, Heading, Image, Text, VStack, ScrollView } from 'native-base'
import BgImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { InputComponent } from '../Components/InputComponent'
import { ButtonComponent } from '../Components/ButtonComponent'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'

type FormDataProps = {
  name: string
  email: string
  password: string
  confirm_password: string
}

export function SignUp() {
  const { goBack } = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>()

  function handleGoBack() {
    goBack()
  }
  function handleSignUp(data: FormDataProps) {
    console.log(data)
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
          <Controller
            control={control}
            rules={{
              required: 'Please inform your name',
            }}
            name="name"
            render={({ field: { onChange, value } }) => (
              <InputComponent
                placeholder="Name"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                isRequired
              />
            )}
          />
          {errors.name && <Text color={'white'}>This is required.</Text>}
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Inform your email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputComponent
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <InputComponent
                placeholder="Password"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="confirm_password"
            render={({ field: { onChange, value } }) => (
              <InputComponent
                placeholder="Confirm your password"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <ButtonComponent
            title="Create and Acess"
            onPress={handleSubmit(handleSignUp)}
          />
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
