import React from "react";
import {useContent} from "../hooks";
import selectionFilter from "../utilis/selection-filter";

export default function Browse () {
    const series = useContent('series')
    const films = useContent('films')

    const slides = selectionFilter({series, films})
    console.log(slides);
    console.log(series)
    return (
        <p>Hello from browse</p>
    )
}