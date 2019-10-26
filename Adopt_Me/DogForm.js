import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ImagePicker from './Camera';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const Dog = t.struct({
	name: t.String,
  breed: t.String,
  weight: t.String,
  sex: t.String,
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

class DogSignUpForm extends Component{
	static navigationOptions = {
    title: 'Sign Up Bitch',
  };
	render (){
		const {navigate} = this.props.navigation;


		return(
			<View style={style.container}>
				<Form
					style={style.form_style} 
					type={Dog} 
					ref={c => this._form = c}
				/>
				<Button
          title="Sign Up!"
          onPress={() => navigate('CameraApp', {user: this._form.getValue()})}
        />
			</View>
		);
	}
}

export default DogSignUpForm;