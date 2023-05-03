import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [issubmenuopen , setissubmenuopen] = useState(false);
    const [location , setloaction] = useState({top:'0',left:'0'});
    const [text , settext] = useState('')
    const [page, setPage] = useState({ title: '', links: [] });

    const opensub = ()=>{
        setissubmenuopen(true);
    }
    const closesub = ()=>{
        setissubmenuopen(false);
    }
    const showsubmenu = (text, postion)=>{
      const data = sublinks.find((e)=>e.page == text)
      setPage(data)
        setloaction(postion)
        setissubmenuopen(true);
    }
    return(
        <AppContext.Provider value={{issubmenuopen,opensub ,showsubmenu ,location ,text ,closesub ,page}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
};
export { AppContext, AppProvider};