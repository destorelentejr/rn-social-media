import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
	
	container: {
		paddingVertical : 15
	},

	emptyContainer: {
		alignItems : 'center',
		flex : 1, 
		justifyContent : 'center'
	},

	background: {
		backgroundColor: Colors.darker
	},

	image: {
		height : screenWidth/3,
		width : screenWidth/3,
		resizeMode : 'cover'
	},

	listContainer: {
		height : '100%'
	},

	contentContainerStyle: {
		flexGrow : 1
	},

	profileContainer: {
		alignItems : 'center', 
		justifyContent : 'center', 
		paddingVertical : 15
	},

	username: {
		color : 'white',
		fontWeight : 'bold',
		marginTop : 15
	}
});

export default styles;