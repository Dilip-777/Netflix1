import React from "react";

import { Container, Inner, Item, Pane, Title, SubTitle, Image } from "./styles/jumbotron";
export default function Jumbotron({ children, direction ='row', ...restProps}) {
    return(
        <Item {...restProps}>
            <Inner direction={direction}>
            {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}
Jumbotron.Pane = function JumbotronPane({ children}){
    return <Pane >{children}</Pane>
}
Jumbotron.Title = function JumbotronTitle({ children}){
    return <Title >{children}</Title>
}
Jumbotron.SubTitle = function JumbotronSubTitle({ children,...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = function JumbotronImage({ children,...restProps}){
    return <Image {...restProps}/>
}