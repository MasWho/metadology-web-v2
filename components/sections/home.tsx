// TODO: refine main section

import React from 'react'
import SectionLayout from '../layout/section-layout'

const Home = () => {
  return (
    <SectionLayout sectionName={'home'}>
        <div className='rounded-md w-full h-[80vh] bg-c-subtext flex justify-center items-center'>
            {'home'}
        </div>
    </SectionLayout>
  )
}

export default Home;