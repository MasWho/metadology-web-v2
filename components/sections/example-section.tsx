import React from 'react'
import SectionLayout from '../layout/section-layout'

type Props = {
  sectionName: string;
}

const ExampleSection = (props: Props) => {
  const {sectionName} = props;
  return (
    <SectionLayout sectionName={sectionName} >
        <div className='rounded-md w-full h-[80vh] bg-c-subtext flex justify-center items-center'>
            Content
        </div>
    </SectionLayout>
  )
}

export default ExampleSection;