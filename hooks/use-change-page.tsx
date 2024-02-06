import { useNavContext } from '@/contexts/NavContext';
import { AllSections } from '@/pages';

type Props = {
  onPageChange?: (pageId: AllSections) => void;
};

const useChangePage = (props: Props = {}) => {
  const { onPageChange } = props;
  const { currentPageId, setIsNavigating } = useNavContext();
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

    if (onPageChange) {
      onPageChange(pageId);
    }
  };
  return {
    currentPageId,
    changePageScrollHandler,
  };
};

export default useChangePage;
