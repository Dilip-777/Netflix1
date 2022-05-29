import React, { useState ,useContext,createContext} from "react";
import { Container , Inner ,Title , Header , Body , Item , Frame } from './styles/accordion'
const ToggleContext = createContext()

export default function Accordion ({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({children,...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({children,...restProps}){
    const [ToggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={{ToggleShow , setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children,...restProps}){

    const {ToggleShow, setToggleShow} = useContext(ToggleContext)

    return (
    <Header 
       onClick = {()=>setToggleShow(!ToggleShow)} {...restProps}>
           {children}
            {ToggleShow ? 
              <img src="/images/icons/close-slim.png" alt="Close" /> :
              <img src="/images/icons/add.png" alt="Open"/>
            }
           </Header>
           )
}

Accordion.Body = function AccordionBody({children,...restProps}){
    const {ToggleShow} = useContext(ToggleContext)

    return (
        <Body className={ToggleShow ? 'open' : 'closed'} {...restProps}>
          <span>{children}</span>
        </Body>
    )
}