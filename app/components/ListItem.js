import React from 'react';

import {
    View,
    Text,
    Image
} from 'react-native';
import StarRating from 'react-native-star-rating';


import styles from '../style';

// Color json based on language 
import LanguageColor from '../LanguageColor.json';


export default class ListItem extends React.Component {

	shouldComponentUpdate(nextProps) {
		return this.props.data !== nextProps.data;
	}

	// Render Repo name with auther name 
	renderInfo(data) {
		if (data.owner) {
			return(
				<Text style={styles.autherName}>
					{data.owner.login}/
					<Text style={styles.fontBold}>{data.name}</Text>
				</Text>
			)
		}
	}

	// Get color based on language
	getLanguageColor(lang = '') {
		if (LanguageColor[lang]) {
			return LanguageColor[lang].color;
		}
		return '#000';
	}
	render() {
		const data = this.props.data || {};
		if (typeof data === 'object') {
			const circleColor = { 
				backgroundColor:  this.getLanguageColor(data.language),
			}
			return(
				<View style={styles.listItem}>
					{/* Image for showing branch */}
					<Image 
						source = { require('../assets/branch.png') } 
						style = { styles.image }
						resizeMode = { 'contain' }
					/>
					<View style={styles.repoInfo}>
						{this.renderInfo(data)}
						<Text style={styles.repoDescription}>{data.description}</Text>
						<View style={styles.moreInfo}>
							<StarRating
						        disabled = { true }
						        maxStars = { 1 }
						        rating = { 1 }
						        starSize = { 18 }
						        fullStarColor = { '#595f68' }
						    />
							<Text style={styles.startCount}>{data.stargazers_count}</Text>
							<View style={[styles.circle, circleColor]}/>
							<Text style={styles.repoLanguage}>{data.language}</Text>
						</View>
					</View>
				</View>
			)
		}
		return null;
	}
}