import React, { Component } from 'react';
import {
  Alert,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../styles';


class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.showAlert.bind(this)}>
        <View style={styles.li}>
          <Text style={styles.liText}>
            {this.props.item.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
  showAlert() {
    Alert.alert(
      'Complete',
      'It is complete?',
      [
        { text: 'Cancel', },
        {
          text: 'Complete',
          onPress: () => {
            const item = this.props.item.title;
            this.props.handleComplete(item);
          }
        },
      ],
      'default'
    );
  }
  handleComplete() {
    console.log(this.props.item.title);
  }
}

module.exports = ListItem;
