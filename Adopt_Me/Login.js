import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String,
});

const style = StyleSheet.create({
	container: {
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 39,
    padding: 20,
    width: 300,
    backgroundColor: '#ffffff',
  },
  form_style: {
  	width: 70,
  }

});

// handleSubmit = () => {
// 	const value = this._form.getValue();
//   console.log('value: ', value);
// }

class LoginForm extends Component{
	static navigationOptions = {
    title: 'Login',
  };
	render (){
		const {navigate} = this.props.navigation;
		return(
			<View style={style.container}>
				<Form
					style={style.form_style} 
					type={User} 
					ref={c => this._form = c}
				/>
				<Button
          title="Login"
          //TODO post information
          // onPress={() => navigate('Matches')}
          onPress={() => navigate('Adopt')}
        />
			</View>
		);
	}
}

export default LoginForm;