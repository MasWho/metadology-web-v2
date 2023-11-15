import React from 'react';

type Props = {
  text: string;
};

const SectionHeading = (props: Props) => {
  const { text } = props;
  return <h1 className="text-c-section-heading text-[20px] tablet:text-[26px]">{text}</h1>;
};

export default SectionHeading;
