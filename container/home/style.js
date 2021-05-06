import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
		resizeMode : 'cover', 
		height : 400
	},

	listContainer: {
		height : '100%'
	},

	contentContainerStyle: {
		flexGrow : 1
	},

	cardContainer: {
		backgroundColor : 'black',
		margin : 0, 
		padding : 0 
	},

	cardHeader: { 
		alignItems : 'center', 
		flexDirection : 'row', 
		justifyContent : 'flex-start', 
		marginLeft : 10,
		marginVertical : 5
	},

	username: {
		color : 'white',
		fontWeight : 'bold',
		paddingLeft : 10
	}

});

export default styles;