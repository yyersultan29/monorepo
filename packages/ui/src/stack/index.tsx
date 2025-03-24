import { CSSProperties, FC, HTMLAttributes } from "react"

type FlexProps = Pick<
  CSSProperties,
  | "flex"
  | "flexDirection"
  | "flexWrap"
  | "justifyContent"
  | "alignItems"
  | "alignContent"
  | "order"
  | "flexGrow"
  | "flexShrink"
  | "flexBasis"
  | "gap"

>;


type StackProps  = HTMLAttributes<HTMLDivElement> & FlexProps

export const Stack:FC<StackProps> = (props) => {
    const {
        children,
        flex,
        flexDirection = 'column',
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        order,
        flexGrow,
        flexBasis,
        flexShrink,
        gap,
        ...rest} = props;

    return (
        <div 
            {...rest} 
            style={{
                display:"flex",
                flex,
                flexDirection,
                flexWrap,
                justifyContent,
                alignItems,
                alignContent,
                order,
                flexGrow,
                flexBasis,
                flexShrink,
                gap
            }}>
            {children}
        </div>
    )
}