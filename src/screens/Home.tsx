import { FlatList, HStack, Heading, Text, VStack } from 'native-base'
import { HomeHeader } from '../Components/HomeHeader'
import { GroupComponent } from '../Components/Group'
import { useState } from 'react'
import { ExerciceCard } from '../Components/ExerciceCard'

export function Home() {
  const [groups, setGroups] = useState([
    'Backs',
    'Shoulders',
    'Triceps',
    'Biceps',
  ])
  const [groupSelected, setGroupSelected] = useState('Backs')

  return (
    <VStack>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupComponent
            name={item}
            onPress={() => setGroupSelected(item)}
            isActive={groupSelected === item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        maxH={10}
        my={10}
      />
      <VStack flex={1} px={8}>
        <HStack justifyContent={'space-between'}>
          <Heading color={'gray.200'} fontSize={'md'}>
            Exercices
          </Heading>
          <Text color={'gray.200'} fontSize={'sm'}>
            4
          </Text>
        </HStack>
        <ExerciceCard />
      </VStack>
    </VStack>
  )
}
