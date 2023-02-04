'use client'

import { Button } from '@fluentui/react-components'
// import { useStyles } from './styles'
import { useCommonStyles } from '@/styles/common.styles'

export default function TestPage() {
  const commonStyles = useCommonStyles()

  return (
    <div>
      Test Page
      <Button 
        className={commonStyles.textBlack} 
        appearance="primary"
      >
        Get started
      </Button>  
    </div>
  )
}
