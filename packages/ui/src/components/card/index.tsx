import React, { HTMLAttributes } from "react"

type CardProps = HTMLAttributes<HTMLDivElement>

export const Card: React.FC<CardProps> = (props) => {

    return (
        <div style={{
            padding:"10px",
            border:"1px solid #f3f3f3",
            borderRadius:"10px"
        }} {...props}>
            {props.children}
        </div>
    )
}