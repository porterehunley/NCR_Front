import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import t from 'tcomb-form-native';
const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
});

const style = StyleSheet.create({
	container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

class SignUpForm extends Component{
	render (){
		return(
			<View style={style.container}>
				<Form type={User} />
			</View>
		);
	}
}

export default SignUpForm;

