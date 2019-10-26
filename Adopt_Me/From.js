import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import t from 'tcomb-form-native';

<script src="http://localhost:8097"></script>
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

handleSubmit = () => {
	const value = this._form.getValue();
  console.log('value: ', value);
}

class SignUpForm extends Component{
	render (){
		return(
			<View style={style.container}>
				<Form
					style={style.form_style} 
					type={User} 
					ref={c => this._form = c}
				/>
				<Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
			</View>
		);
	}
}

export default SignUpForm;

