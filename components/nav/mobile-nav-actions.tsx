import { generateClasses } from '@/utils/styling';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './mobile-nav-actions.module.css';
import { AllSections } from '@/pages';
import { useNavContext } from '@/contexts/NavContext';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const generateDrawerClasses = (isOpen: boolean) => {
  const classes = [styles.drawer];

  if (isOpen) {
    classes.push(styles.open);
  }

  return classes.join(' ');
};

const generateBackdropClasses = (isOpen: boolean) => {
  const classes = [styles.backdrop];

  if (isOpen) {
    classes.push(styles.backdropOpen);
  }

  return classes.join(' ');
};

const MobileNavActions = (props: Props) => {
  const { isOpen, onClose } = props;
  const portalRootRef = useRef<any>(null);
  const [mounted, setMounted] = useState(false);
  const {currentPageId, setIsNavigating} = useNavContext();

  const updatePageScroll = useCallback(() => {
    if (isOpen) {
      portalRootRef.current!.style.overflow = 'hidden';
      return;
    }

    portalRootRef.current!.style.overflow = '';
  }, [isOpen]);

  const changePageScrollHandler = (pageId: AllSections) => {
    const element = document.getElementById(pageId!);
    setIsNavigating(true);
    setTimeout(() => {
      element?.scrollIntoView({
        behavior: 'instant',
        block: 'center',
      });
      setIsNavigating(false);
    }, 800);
    onClose();
  };

  useEffect(() => {
    portalRootRef.current = document.getElementById('portal');
    setMounted(true);
  }, []);

  useEffect(() => {
    updatePageScroll();
  }, [updatePageScroll]);

  if (mounted && portalRootRef.current) {
    return createPortal(
      <div aria-hidden={isOpen ? 'false' : 'true'} className={styles.container}>
        <div
          role="dialog"
          className={
            generateDrawerClasses(isOpen) +
            ' ' +
            generateClasses({
              generic: [],
              mobile: ['flex', 'flex-col', 'justify-center', 'items-center', 'gap-10', 'h-full'],
              web: [],
            })
          }
        >
          <Link
            href=""
            onClick={changePageScrollHandler.bind(null, 'home')}
            className={currentPageId === 'home' ? 'text-c-accent-green' : ''}
          >
            Home
          </Link>
          <Link
            href=""
            onClick={changePageScrollHandler.bind(null, 'highlights')}
            className={currentPageId === 'highlights' ? 'text-c-accent-green' : ''}
          >
            Highlights
          </Link>
          <Link
            href=""
            onClick={changePageScrollHandler.bind(null, 'closer-look')}
            className={currentPageId === 'closer-look' ? 'text-c-accent-green' : ''}
          >
            Closer look
          </Link>
          <Link
            href=""
            onClick={changePageScrollHandler.bind(null, 'explore')}
            className={currentPageId === 'explore' ? 'text-c-accent-green' : ''}
          >
            Explore
          </Link>
          <Link
            href=""
            onClick={changePageScrollHandler.bind(null, 'benefits')}
            className={currentPageId === 'benefits' ? 'text-c-accent-green' : ''}
          >
            Benefits
          </Link>
          <Link
            href=""
            onClick={changePageScrollHandler.bind(null, 'forefront')}
            className={currentPageId === 'forefront' ? 'text-c-accent-green' : ''}
          >
            Forefront
          </Link>
          <Link
            href=""
            onClick={changePageScrollHandler.bind(null, 'portfolio')}
            className={currentPageId === 'portfolio' ? 'text-c-accent-green' : ''}
          >
            Portfolio
          </Link>
          <Link
            href=""
            onClick={changePageScrollHandler.bind(null, 'contact')}
            className={currentPageId === 'contact' ? 'text-c-accent-green' : ''}
          >
            Contact
          </Link>
        </div>
        <div className={generateBackdropClasses(isOpen)} onClick={onClose} />
      </div>,
      portalRootRef.current
    );
  }

  return null;
};

export default MobileNavActions;
