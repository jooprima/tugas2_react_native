import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

class Barang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBarang: '',
      inputJumlah: '',
    };
  }

  handleInputBarang = event => {
    this.setState({inputBarang: event});
  };

  handleInputJumlah = event => {
    this.setState({inputJumlah: event});
  };

  render() {
    return (
      <View>
        <TextInput
          onChangeText={this.handleInputBarang}
          placeholder="Masukan Nama Barang"
          value={this.state.inputBarang}
        />
        <TextInput
          onChangeText={this.handleInputJumlah}
          placeholder="Masukan Jumlah"
          value={this.state.inputJumlah}
          keyboardType="numeric"
        />
        <Text>{this.props.namaBelanja}</Text>
        <Text>Nama Barang : {this.state.inputBarang}</Text>
        <Text>Jumlah Barang : {this.state.inputJumlah}</Text>
      </View>
    );
  }
}

export default Barang;
