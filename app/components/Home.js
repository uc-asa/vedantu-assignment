'use strict';

import React from 'react';
import {
    FlatList,
    View,
    Text,
    ActivityIndicator,
    TextInput
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import  actions

import ListItem from './ListItem'; // Single item with pure component to avoid re rendering
import styles from '../style'; //style

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.getData(); //call our action
    }

    // Filtering data based on search 
    getFilterData(data = {}) {
        let arr = [];
        for (let i in data) {
            const item = data[i]
            if (item.full_name.indexOf && item.full_name.toUpperCase().indexOf(this.state.text.toUpperCase()) > -1) {
                arr.push(item);
            }
        }
        return arr;
    }
    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            const data = this.getFilterData(this.props.data);
            return (
                <View style={styles.container}>
                    {/* Search bar*/}
                    <View style={styles.inputView}>
                        <TextInput 
                            style = { styles.textInput }
                            onChangeText = {(text) => this.setState({ text })}
                            placeholder = { 'Search here' }
                            placeholderTextColor = { '#777'}
                            selectionColor = { 'white'}
                        />
                    </View>
                    {
                        data.length> 1 ?
                            <FlatList
                            extraData = { this.state }
                            data = { data }
                            renderItem = { this.renderItem }
                            keyExtractor = {( item, index) =>  index.toString() }
                        />:
                        <View>
                        {/* Render when no search found*/}
                         <Text style={styles.notFoundAlert}>
                            No result found for
                            <Text style={styles.fontBold}> {this.state.text}</Text>
                        </Text>
                        <Text style={{paddingHorizontal: 10}}>Make sure that word(s) are spelled correctly.</Text>
                        </View>
                    }
                </View>
            );
        }
    }

    renderItem({item, index}) {
        return (
            <ListItem data={item}/>
        )
    }
};



// The function takes data from the app current state,
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

// Doing this merges our actions into the component’s props,
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);
