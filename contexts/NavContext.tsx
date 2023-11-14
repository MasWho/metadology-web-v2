import { AllSections } from "@/pages";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const navContext = createContext<{
    currentPageId: AllSections,
    setCurrentPageId: (id: AllSections) => void
}>({
    currentPageId: 'home',
    setCurrentPageId: () => {}
});

const NavContextProvider = (props: PropsWithChildren) => {
    const {children} = props;
    const [currentPageId, setCurrentPageId] = useState<AllSections>('home');
    return <navContext.Provider value={{
        currentPageId,
        setCurrentPageId
    }} >
        {children}
    </navContext.Provider>
};

export default NavContextProvider;

export const useNavContext = () => {
    return useContext(navContext);
};