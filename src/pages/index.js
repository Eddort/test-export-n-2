import React from "react";
import theme from "theme";
import { Theme, Text, Button } from "@quarkly/widgets";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Components.Jhgjgjh />
			<Button font="--lead" margin="20px">
				Button
			</Button>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="125px 0"
			sm-padding="40px 0"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Second to none
			</Text>
			<Button>
				Button
			</Button>
			<Text as="h1" font="--headline3" md-font="--headline2" margin="10px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
	</Theme>;
});