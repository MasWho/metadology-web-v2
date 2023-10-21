import { generateClasses } from "@/utils/styling";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import GetStartedButton from "./ContactButton";
import styles from "./MobileNavActions.module.css";
import { AllPages } from "@/pages";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  currentPageId: AllPages;
};

const generateDrawerClasses = (isOpen: boolean) => {
  const classes = [styles.drawer];

  if (isOpen) {
    classes.push(styles.open);
  }

  return classes.join(" ");
};

const generateBackdropClasses = (isOpen: boolean) => {
  const classes = [styles.backdrop];

  if (isOpen) {
    classes.push(styles.backdropOpen);
  }

  return classes.join(" ");
};

const MobileNavActions = (props: Props) => {
  const { isOpen, onClose, currentPageId } = props;
  const portalRootRef = useRef<any>(null);
  const [mounted, setMounted] = useState(false);

  const updatePageScroll = useCallback(() => {
    if (isOpen) {
      portalRootRef.current!.style.overflow = "hidden";
      return;
    }

    portalRootRef.current!.style.overflow = "";
  }, [isOpen]);

  useEffect(() => {
    portalRootRef.current = document.getElementById("portal");
    setMounted(true);
  }, []);

  useEffect(() => {
    updatePageScroll();
  }, [updatePageScroll]);

  if (mounted && portalRootRef.current) {
    return createPortal(
      <div aria-hidden={isOpen ? "false" : "true"} className={styles.container}>
        <div
          role="dialog"
          className={
            generateDrawerClasses(isOpen) +
            " " +
            generateClasses({
              generic: [],
              mobile: [
                "flex",
                "flex-col",
                "justify-between",
                "items-center",
                "py-28",
                "h-full",
              ],
              web: [],
            })
          }
        >
          <Link
            href="/#home"
            onClick={onClose}
            className={currentPageId === "home" ? "text-c-accent-green" : ""}
          >
            Home
          </Link>
          <Link
            href="/#services"
            onClick={onClose}
            className={currentPageId === "product" ? "text-c-accent-green" : ""}
          >
            Product
          </Link>
          <Link
            href="/about/#about"
            onClick={onClose}
            className={currentPageId === "about" ? "text-c-accent-green" : ""}
          >
            About
          </Link>
          {/* <Link
            href="/pricing/#pricing"
            onClick={onClose}
            className={currentPageId === "pricing" ? "text-c-accent-green" : ""}
          >
            Pricing
          </Link> */}
          <GetStartedButton onClick={onClose} pageId={currentPageId} />
        </div>
        <div className={generateBackdropClasses(isOpen)} onClick={onClose} />
      </div>,
      portalRootRef.current
    );
  }

  return null;
};

export default MobileNavActions;
