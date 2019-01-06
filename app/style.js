import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    activityIndicatorContainer:{ 
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    container: {
        flex: 1, 
        backgroundColor: '#FFFFFF',
        paddingTop: 20
    },
    row: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },
    listItem: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop:14,
        paddingBottom:17,
        borderColor: '#eaecef',
        borderBottomWidth:1,
    },
    fontBold: {
        fontWeight: 'bold'
    },
    autherName: {   
        color: '#1c6fcf',
        marginTop: 5,
        fontSize: 15
    },
    repoDescription: {
        fontSize: 14,
        marginTop: 8,
        color: '#596068'
    },
    repoInfo: {
        flex: 1,
        paddingHorizontal: 5
    },
    image: {
        height: 20,
        width: 30,
        marginTop: 8
    },
    moreInfo: {
        flexDirection: 'row',
        marginTop: 12
    },
    startCount: {
        color: '#595f68',
        marginTop: 2,
        marginLeft: 3,
        marginRight:15
    },
    textInput: {
        height: 36, 
        borderColor: 'gray',
        paddingHorizontal: 10,
        color: '#FFFFFF',
        backgroundColor:'#494c4f'
    },
    inputView: {
        paddingVertical:10,
        paddingHorizontal:7,
        backgroundColor:'#25292d'
    },
    repoLanguage: {
        marginTop: 3
    },
    circle: {
        height: 15,
        width: 15,
        borderRadius: 125,
        marginTop: 3,
        marginRight: 5
    },
    notFoundAlert: {
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        backgroundColor: '#f4db65', 
        marginHorizontal: 8, 
        marginVertical: 10, 
        borderWidth: 1, 
        borderColor: '#f1d75f', 
        overflow: 'hidden', 
        borderRadius: 3, 
        color: '#333'
    }
});

export default styles;