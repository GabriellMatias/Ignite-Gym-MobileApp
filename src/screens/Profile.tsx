import { TouchableOpacity } from 'react-native'
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
} from 'native-base'
import { ScreenHeader } from '../Components/ScreenHeader'
import { UserAvatar } from '../Components/UserAvatar'
import React, { useState } from 'react'
import { InputComponent } from '../Components/InputComponent'
import { ButtonComponent } from '../Components/ButtonComponent'

const PHOTO_SIZE = 33
export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  return (
    <VStack flex={1}>
      <ScreenHeader title="Profile" />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserAvatar
              source={{ uri: 'https://github.com/gabriellmatias.png' }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}
          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <InputComponent bg="gray.600" placeholder="Nome" />

          <InputComponent bg="gray.600" placeholder="E-mail" isDisabled />
        </Center>
        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2}>
            Alterar senha
          </Heading>

          <InputComponent
            bg="gray.600"
            placeholder="Senha antiga"
            secureTextEntry
          />

          <InputComponent
            bg="gray.600"
            placeholder="Nova senha"
            secureTextEntry
          />

          <InputComponent
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <ButtonComponent title="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
