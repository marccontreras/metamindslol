import React from 'react'
import { CDropdownToggle } from '@coreui/react'
import { CDropdownToggleProps } from '@coreui/react/dist/components/dropdown/CDropdownToggle'

interface CustomDropdownToggleProps extends CDropdownToggleProps {
  // Add any additional props specific to your custom implementation
  //visible: boolean
  //setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const CustomDropdownToggle: React.FC<CustomDropdownToggleProps> = ({
  //visible,
  //setVisible,
  ...rest
}) => {
  return <CDropdownToggle {...rest} />
}

export default CustomDropdownToggle
