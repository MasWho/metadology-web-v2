// TODO: refine main section

import React from 'react'
import SectionLayout from '../layout/section-layout'

const Portfolio = () => {
  return (
    <SectionLayout sectionName={'portfolio'} hasReadMore>
        <div className='rounded-md w-full h-[80vh] bg-c-subtext flex justify-center items-center'>
            {'portfolio'}
        </div>
    </SectionLayout>
  )
}

export default Portfolio;