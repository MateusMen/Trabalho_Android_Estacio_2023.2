import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {flex: 1,
    backgroundColor: '#white',
    alignItems: 'center',
    justifyContent: 'center',},

  inputView:{width:"80%",
    backgroundColor:"#3AB4BA",
    borderRadius:25,
    height:50,
    margin: 16,
    marginBottom:20,
    justifyContent:"center",
    padding:20},

  inputText:{height:50,
    color:"white"},

  button:{backgroundColor: '#007bff',
    margin: 10,
    borderRadius: 5,
    padding: 10,},

  paragraph: {
    margin: 24,
    fontSize: 18,
    color: "#003f5c",
    fontWeight: 'bold',
    textAlign: 'center',
  },

  paragraphList: {
    margin: 24,
    fontSize: 12,
    color: "#003f5c",
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default Styles