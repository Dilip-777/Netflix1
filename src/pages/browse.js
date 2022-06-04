import React from "react";
import {useContent} from "../hooks";
 import selectionFilter from "../utilis/selection-filter";
 import BrowserContainer from "../containers/browseContainer";

export default function Browse () {
    const {series} = useContent('series')
    const {films} = useContent('films')

    const slides = selectionFilter({series, films})
    
    return (
        <BrowserContainer slides={slides} />
    )
}