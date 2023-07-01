import { Button, IButtonProps, Text } from 'native-base'
import React from 'react'

interface ButtonProps extends IButtonProps {
  title: string
}

export function ButtonComponent({ title, ...rest }: ButtonProps) {
  return (
    <Button
      {...rest}
      w={'full'}
      h={14}
      bg={'green.700'}
      rounded={'sm'}
      _pressed={{
        bg: 'green.500',
      }}
    >
      <Text color={'white'} fontFamily="heading" fontSize={'sm'}>
        {title}
      </Text>
    </Button>
  )
}
