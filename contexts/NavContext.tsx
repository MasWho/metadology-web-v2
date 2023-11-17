import { AllSections } from "@/pages";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

const navContext = createContext<{
    currentPageId: AllSections,
    setCurrentPageId: (id: AllSections) => void,
    setIsNavigating: Dispatch<SetStateAction<boolean>>,
}>({
    currentPageId: 'home',
    setCurrentPageId: () => {},
    setIsNavigating: () => {},
});

const NavContextProvider = (props: PropsWithChildren) => {
    const {children} = props;
    const [currentPageId, setCurrentPageId] = useState<AllSections>('home');
    const [isNavigating, setIsNavigating] = useState(false);

    return <navContext.Provider value={{
        currentPageId,
        setCurrentPageId,
        setIsNavigating
    }} >
        <div className="h-[100vh] bg-c-primary">
            <motion.div initial={{opacity: 1}} animate={{opacity: isNavigating ? 0 : 1}} transition={{duration: 0.3}}>
                {children}
            </motion.div>
        </div>
    </navContext.Provider>
};

export default NavContextProvider;

export const useNavContext = () => {
    return useContext(navContext);
};