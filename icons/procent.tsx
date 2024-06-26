import { Icon } from '@/components/common'
import { IconProps } from '@/components/common/icon/types'
import { IoReturnUpBack } from 'react-icons/io5'

export const ProcentIcon = (props: IconProps) => {
  return (
    <Icon viewBox='0 0 18 18' {...props}>
      <path
        d='M16 2L2 16'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M3.5 6C4.88071 6 6 4.88071 6 3.5C6 2.11929 4.88071 1 3.5 1C2.11929 1 1 2.11929 1 3.5C1 4.88071 2.11929 6 3.5 6Z'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M14.5 17C15.8807 17 17 15.8807 17 14.5C17 13.1193 15.8807 12 14.5 12C13.1193 12 12 13.1193 12 14.5C12 15.8807 13.1193 17 14.5 17Z'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Icon>
  )
}
