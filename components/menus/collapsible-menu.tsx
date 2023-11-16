import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAnimate } from 'framer-motion';
import React, { useEffect } from 'react';

type Props = {
  items: { heading: string; content: string }[];
  openItemIndex: number;
  onOpenOrCollapse: (index: number) => void;
};

const CollapsibleMenu = (props: Props) => {
  const { items, openItemIndex, onOpenOrCollapse } = props;
  const [scope, animate] = useAnimate();

  const openMenuItem = async (index: number) => {
    await animate(`#collapsible-menu-content-${index}`, { height: '100%' }, { duration: 0.3 });
    await animate(`#collapsible-menu-content-${index}`, { opacity: 1 }, { duration: 0.3 });
  };

  const closeMenuItem = async (index: number) => {
    await animate(`#collapsible-menu-content-${index}`, { opacity: 0 }, { duration: 0.3 });
    await animate(`#collapsible-menu-content-${index}`, { height: '0px' }, { duration: 0.3 });
  };

  const removeArrow = async (index: number) => {
    await animate(`#collapsible-menu-icon-${index}`, { rotate: '180deg' }, { duration: 0.3 });
    await animate(`#collapsible-menu-icon-${index}`, { opacity: 0 }, { duration: 0.3 });
  };

  const showArrow = async (index: number) => {
    await animate(`#collapsible-menu-icon-${index}`, { opacity: 1 }, { duration: 0.3 });
    await animate(`#collapsible-menu-icon-${index}`, { rotate: '0deg' }, { duration: 0.3 });
  };

  const changeMenuItemHandler = async (index: number) => {
    for (let i = 0; i < items.length; i++) {
      if (index !== i) {
        await showArrow(i);
        await closeMenuItem(i);
      }
    }
    removeArrow(index);
    openMenuItem(index);
  };

  useEffect(() => {
    changeMenuItemHandler(openItemIndex);
  }, [openItemIndex]);

  const menuItems = items.map((item, idx) => {
    let containerClassName = 'py-[15px] tablet:py-[20px] border-b-[1px] border-b-c-section-heading';
    if (idx === items.length - 1) {
      containerClassName = containerClassName.replace(
        'border-b-[1px] border-b-c-section-heading',
        ''
      );
    }

    let showContent = false;
    if (openItemIndex === idx) {
      showContent = true;
    }

    return (
      <li className={containerClassName} key={`collapsible-menu-item-${idx}`}>
        <div className="flex items-center justify-between gap-14">
          <h2 className="text-[16px] tablet:text-[20px]">{item.heading}</h2>
          <div id={`collapsible-menu-icon-${idx}`}>
            <FontAwesomeIcon
              icon={faChevronDown}
              color="grey"
              onClick={onOpenOrCollapse.bind(null, idx)}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
        <p
          id={`collapsible-menu-content-${idx}`}
          className="relative h-0 opacity-0 text-c-section-heading pt-[5px] tablet:pt-[10px] text-[12px] tablet:text-[16px]"
        >
          {item.content}
        </p>
      </li>
    );
  });

  return (
    <ul ref={scope} className="flex flex-col justify-center text-c-heading w-[80%] tablet:w-[35%]">
      {menuItems}
    </ul>
  );
};

export default CollapsibleMenu;
