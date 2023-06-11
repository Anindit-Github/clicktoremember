import React from 'react'
import { SetUpButtons } from '../SetUpButtons'



export const SetUpModal = () => {
  return (
      <main className='m-12 bg-white rounded-lg w-[320px] lg:w-[640px]  mx-auto p-5'>
          <SetUpButtons>
              {{
                  themes: ['Numbers', 'Icons'],
                  players: [1, 2, 3, 4],
                  gridSizes: ['4x4','6x6']
               }}
          </SetUpButtons>
      </main>
  )
}
