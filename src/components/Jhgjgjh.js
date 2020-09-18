import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"as": "p",
	"font": "--lead",
	"margin": "20px 0 0 0",
	"position": "absolute",
	"top": "247px",
	"right": "auto",
	"bottom": "auto",
	"left": "-283px",
	"height": "90px",
	"width": "1280px",
	"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are."
};
const overrides = {};

const Jhgjgjh = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(Jhgjgjh, { ...Text,
	defaultProps,
	overrides
});
export default Jhgjgjh;