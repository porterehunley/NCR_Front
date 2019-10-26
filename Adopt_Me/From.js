import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
	name: t.String,
  email: t.String,
  username: t.String,
  password: t.String,
});

const style = StyleSheet.create({
	container: {
    justifyContent: 'center',
    marginTop: 30,
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

class SignUpForm extends Component{
	static navigationOptions = {
    title: 'Sign Up Bitch',
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
          title="Sign Up!"
          onPress={() => navigate('DogSignUp', {user: this._form.getValue()})}
        />
			</View>
		);
	}
}

export default SignUpForm;

