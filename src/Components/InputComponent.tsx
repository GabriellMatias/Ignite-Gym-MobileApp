import { IInputProps, Input, FormControl } from 'native-base'

type InputComponentProps = IInputProps & {
  errorMessage?: string | null
}

export function InputComponent({
  errorMessage = null,
  isInvalid,
  ...rest
}: InputComponentProps) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <Input
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize={'md'}
        color={'white'}
        fontFamily={'body'}
        mb={4}
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        placeholderTextColor={'gray.300'}
        _focus={{
          bg: 'gray.700',
          borderWidth: 1,
          borderColor: 'green.500',
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  )
}
