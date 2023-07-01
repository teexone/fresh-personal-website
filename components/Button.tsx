import { ComponentChildren } from "preact";

export default function Button(props: { gradient: string[], children: ComponentChildren, onClick: () => any}) {
    const gradient = "bg-gradient-to-r from-" + props.gradient.at(0) + (props.gradient.length > 2 ? "via-" + props.gradient.slice(1, -1).join(" via-") : "") + " to-" + props.gradient.at(-1)

}