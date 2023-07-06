import { HStack, Heading, Text, VStack, Icon } from 'native-base'
import { UserAvatar } from './UserAvatar'
import { MaterialIcons } from '@expo/vector-icons'

export function HomeHeader() {
  return (
    <HStack bg={'gray.600'} pt={16} pb={5} px={8} alignItems={'center'}>
      <UserAvatar
        size={16}
        source={{ uri: 'https://github.com/gabriellmatias.png' }}
        alt="User Profile Photo"
        mr={4}
      />
      <VStack flex={1}>
        <Text fontSize={'md'} color={'gray.100'}>
          Hellou
        </Text>
        <Heading fontSize={'md'} color={'gray.100'}>
          Matiaz
        </Heading>
      </VStack>
      <Icon as={MaterialIcons} name="logout" color={'gray.200'} />
    </HStack>
  )
}
