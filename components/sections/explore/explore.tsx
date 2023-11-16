// TODO: refine main section
// TODO: implement sub sections

import React from 'react'
import SectionLayout from '../../layout/section-layout'

const Explore = () => {
  return (
    <SectionLayout sectionName={'explore'} hasReadMore >
        <div className='rounded-md w-full h-[80vh] bg-c-subtext flex justify-center items-center'>
            {'explore'}
        </div>
    </SectionLayout>
  )
}

export default Explore;