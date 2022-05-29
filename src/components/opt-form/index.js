
import React from "react";
import {Container , Input , Text , Button ,Break } from './styles/opt-form'

export default function optForm ({children, ...restProps}) {
    return(
        <Container {...restProps}>{children}</Container>
    )
}

optForm.Input  = function optFormInput({...restProps}){
    return(
        <Input {...restProps}/>
    )
}

optForm.Button  = function optFormButton({children,...restProps}){
    return(
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}

optForm.Text = function optFormText ({children , ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

optForm.Break = function optFormBreak ({...restProps}) {
    return <Break {...restProps} />
}