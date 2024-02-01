import { StyleSheet } from "react-native";

export const colores = {

   primary:'#5856d6'

}

export const styles = StyleSheet.create({

   globalMargin: {
      marginHorizontal: 20
   },
   title: {
      fontSize: 30,
      marginBottom: 10
   },
   bigBtn: {

      width: 100,
      height: 100,
      backgroundColor: 'black',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center'
   },
   bigBtnText: {
      color: 'white',
      fontSize: 25
   },
   avatarContainer: {
      alignItems:'center',
      marginTop:20
   },
   avatar: {
      width: 200,
      height: 200,
      borderRadius: 100
   },
   menuContainer:{
      marginVertical:30,
      marginHorizontal:30,
      alignItems:'center'
   },
   drawerItem:{
      flexDirection:'row',
   },
   menuBtn:{
      marginVertical:10,
      flexDirection:'row',
      alignSelf:'flex-start'
   },
   menuTxt:{
      fontSize:20
   }

});

// flex:1,
// flexDirection:'column',
// alignItems:'stretch',
// justifyContent:'flex-start'
// position:'relative',
// Hola soy joita,
