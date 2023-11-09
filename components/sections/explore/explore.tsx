// TODO: refine main section
// TODO: implement sub sections

import React from 'react'
import SectionLayout from '../../layout/section-layout'

type Props = {
  sectionName: string;
}

const Explore = (props: Props) => {
  const {sectionName} = props;
  return (
    <SectionLayout sectionName={sectionName} >
        <div className='rounded-md w-full h-[80vh] bg-c-subtext flex justify-center items-center'>
            {sectionName}
        </div>
    </SectionLayout>
  )
}

export default Explore;