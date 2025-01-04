import React from "react";

export const Image = (props: any) => {
    return (
        <img src={props.src} />
    )
}

Image.metadata = {
    options: {
        src: 'String'
    }
}