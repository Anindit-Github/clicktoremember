import React from 'react'
import { Caption,SetUpModal } from '../../../features'

export const SetUpHomePage = () => {
  return (
    <div className='bg-[#22313F] w-screen h-screen flex flex-col justify-center'>
      <Caption style={{color:"white"}}/>
      <SetUpModal />
    </div>
  )
}
