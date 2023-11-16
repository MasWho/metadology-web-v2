import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {
  items: { heading: string; content: string }[];
  openItemIndex: number | null;
  onOpenOrCollapse: (index: number) => void;
};

const CollapsibleMenu = (props: Props) => {
  const { items, openItemIndex, onOpenOrCollapse } = props;
  
  const menuItems = items.map((item, idx) => {
    let containerClassName = 'py-[20px] border-b-[1px] border-b-c-section-heading';
    if (idx === items.length - 1) {
        containerClassName = containerClassName.replace('border-b-[1px] border-b-c-section-heading', '');
    }

    let showContent = false;
    if(openItemIndex === idx) {
        showContent = true;
    }

    return (
      <li className={containerClassName}>
        <div className="flex items-center gap-14">
          <h2 className="text-[20px]">{item.heading}</h2>
          {!showContent ? (
            <FontAwesomeIcon
              icon={faChevronDown}
              color="grey"
              onClick={onOpenOrCollapse.bind(null, idx)}
              className='hover:cursor-pointer'
            />
          ) : null}
        </div>
        {showContent ? <p className="text-c-section-heading pt-[10px]">{item.content}</p> : null}
      </li>
    );
  });

  return <ul className="text-c-heading w-[35%]">{menuItems}</ul>;
};

export default CollapsibleMenu;
