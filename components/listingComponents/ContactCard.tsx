import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Resource } from "../../model/Resources/Resource";
import { Card } from "@rneui/base";

interface Props {
	resource: Resource;
}
const ContactCard = (props: Props) => {
	const windowWidth = Dimensions.get("window").width;

	return (
		<Card containerStyle={{ width: 0.7 * windowWidth }}>
			<Card.FeaturedTitle style={styles.text}>Contact Info</Card.FeaturedTitle>
			<Card.Divider />
			{props.resource.email && (
				<React.Fragment>
					<Card.FeaturedSubtitle style={styles.text}>
						Email:
					</Card.FeaturedSubtitle>
					<Text style={styles.text}>{props.resource.email.display()}</Text>
					<Card.Divider />
				</React.Fragment>
			)}
			{props.resource.phone && (
				<React.Fragment>
					<Card.FeaturedSubtitle style={styles.text}>
						Phone:
					</Card.FeaturedSubtitle>
					<Text style={styles.text}>{props.resource.phone.display()}</Text>
					<Card.Divider />
				</React.Fragment>
			)}
			{props.resource.address && (
				<React.Fragment>
					<Card.FeaturedSubtitle style={styles.text}>
						Address:
					</Card.FeaturedSubtitle>
					<Text style={styles.text}>{props.resource.address.display()}</Text>
					<Card.Divider />
				</React.Fragment>
			)}
			{props.resource.link && (
				<React.Fragment>
					<Card.FeaturedSubtitle style={styles.text}>
						Website:
					</Card.FeaturedSubtitle>
					<Text style={styles.text}>{props.resource.link.display()}</Text>
					<Card.Divider />
				</React.Fragment>
			)}
		</Card>
	);
};

export default ContactCard;

const styles = StyleSheet.create({
	text: {
		color: "black",
	},
});
