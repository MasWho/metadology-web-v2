import React from 'react';

type Props = {
  text: string;
};

const SectionHeading = (props: Props) => {
  const { text } = props;
  return <h1 className="text-c-section-heading text-[16px]">{text}</h1>;
};

export default SectionHeading;
