import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';


import t from 'tcomb-form-native';

const Form = t.form.Form;

const Dog = t.struct({
	name: t.String,
  breed: t.String,
  weight: t.String,
  sex: t.String,
  bio: t.String
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

class DogSignUpForm extends Component{
	static navigationOptions = {
    title: 'Sign up your pup',
  };
  state = {
    image: null,
  };

	render (){
		let { image } = this.state;
		const {navigate} = this.props.navigation;


		return(
			<View style={style.container}>
				<Form
					style={style.form_style} 
					type={Dog} 
					ref={c => this._form = c}
				/>
				<Button
          title="Select Image"
          onPress={this._pickImage}
        />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
			</View>
		);
	}

	componentDidMount() {
    this.getPermissionAsync();
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}




export default DogSignUpForm;