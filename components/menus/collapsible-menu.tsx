import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAnimate } from 'framer-motion';
import React, { useCallback, useEffect, useRef } from 'react';

type Props = {
  items: { heading: string; content: string }[];
  openItemIndex: number;
  onOpenOrCollapse: (index: number) => void;
};

const CollapsibleMenu = (props: Props) => {
  const { items, openItemIndex, onOpenOrCollapse } = props;
  const [scope, animate] = useAnimate();
  const prevIndexRef = useRef(openItemIndex);

  const openMenuItem = useCallback(async (index: number) => {
    await animate(`#collapsible-menu-content-${index}`, { height: '100%' }, { duration: 0.2 });
    await animate(`#collapsible-menu-content-${index}`, { opacity: 1 }, { duration: 0.2 });
  }, [animate]);

  const closeMenuItem = useCallback(async (index: number) => {
    await animate(`#collapsible-menu-content-${index}`, { opacity: 0 }, { duration: 0.2 });
    await animate(`#collapsible-menu-content-${index}`, { height: '0px' }, { duration: 0.2 });
  }, [animate]);

  const removeArrow = useCallback(async (index: number) => {
    await animate(`#collapsible-menu-icon-${index}`, { rotate: '180deg' }, { duration: 0.2 });
    await animate(`#collapsible-menu-icon-${index}`, { opacity: 0 }, { duration: 0.2 });
  }, [animate]);

  const showArrow = useCallback(async (index: number) => {
    await animate(`#collapsible-menu-icon-${index}`, { opacity: 1 }, { duration: 0.2 });
    await animate(`#collapsible-menu-icon-${index}`, { rotate: '0deg' }, { duration: 0.2 });
  }, [animate]);

  const changeMenuItemHandler = useCallback(async (index: number) => {
    showArrow(prevIndexRef.current);
    await closeMenuItem(prevIndexRef.current);
    removeArrow(index);
    await openMenuItem(index);
    prevIndexRef.current = openItemIndex;
  }, [showArrow, closeMenuItem, removeArrow, openMenuItem, prevIndexRef, openItemIndex]);

  useEffect(() => {
    changeMenuItemHandler(openItemIndex);
  }, [openItemIndex, changeMenuItemHandler]);

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
