import { Center, Heading, Image, Text, VStack, ScrollView } from 'native-base'
import BgImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { InputComponent } from '../Components/InputComponent'
import { ButtonComponent } from '../Components/ButtonComponent'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type FormDataProps = {
  name: string
  email: string
  password: string
  confirm_password: string
}

const signUpSchema = yup.object({
  name: yup.string().required('Inform the name'),
  email: yup.string().required('Informa an email').email('E-mail inválido'),
  password: yup
    .string()
    .required('Inform password')
    .min(6, 'Password must be at least 6 digits'),
  confirm_password: yup
    .string()
    .required('confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  })
  const { goBack } = useNavigation()

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
          <Heading
            color={'gray.100'}
            fontSize={'xl'}
            mb={6}
            fontFamily={'heading'}
          >
            Create your account
          </Heading>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <InputComponent
                placeholder="Name"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <InputComponent
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
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
                errorMessage={errors.password?.message}
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
                errorMessage={errors.confirm_password?.message}
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
