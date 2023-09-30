import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children }: { color: any, children: React.ReactNode }) => {
    const animationDuration = 200;
    return (
        <RoughNotation
            type="highlight"
            multiline={true}
            padding={[0, 2]}
            iterations={1}
            animationDuration={animationDuration}
            color={color}
        >
            {children}
        </RoughNotation>
    );
}