import { HStack, Heading, Image, Text, VStack } from 'native-base'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ExerciceProps = TouchableOpacityProps & {}

export function ExerciceCard({ ...rest }: ExerciceProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvY166D7fsOlbs2lDVFFmcGymIcXHpYQ8kfG3j5FkG8Ks8CE7GOgjAoghRRI83j32to_M&usqp=CAU',
          }}
          alt="Img Queimada Unilateral"
          w={16}
          h={16}
          rounded={'md'}
        />
        <VStack>
          <Heading fontSize={'lg'} color={'white'}>
            Queimada Unilateral
          </Heading>
          <Text fontSize={'sm'} color={'gray.200'}>
            3 series of 12 repetitions
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  )
}
