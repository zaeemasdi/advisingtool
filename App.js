import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, View, Picker, CheckBox } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { render } from 'react-dom';



export default function App() {
  const [isSelected, setSelection] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Choose");


  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Student Advising Tool </Text>
      <StatusBar style="auto" />
      <Text style={styles.programinfo}>{'\n'}{'\n'}Choose Your Program</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Choose..." value="choose" />
        <Picker.Item label="MBA" value="mba" />
        <Picker.Item label="MEng" value="meng" />
        <Picker.Item label="MAsc" value="masc" />
      </Picker>
      <Button
      onPress={() => {
        alert('You tapped the button!');
      }}
      title="Press Me"
      />
        <Text style={styles.programinfo}>{"\n"}{"\n"}Master of Business Administration Marketing{"\n"}{"\n"}
         The two conditions for this program are:{"\n"}{"\n"}
         Fixed first course-RPS 6100{"\n"}{"\n"}
         Fixed last course-MBA 6700 {"\n"}{"\n"}
         Other three required courses: FIN 6550, MGT 6050 and MGT 6570{"\n"}{"\n"}
         Students can choose 5 out of 6 electives: {"\n"}{"\n"}
         MKT 7880, MKT 7900, MKT 7940, MKT 7960, ENT 7010 and ENT 7300{"\n"}{"\n"}
         Check all Completed Courses{"\n"}{"\n"}</Text>
         <View style={styles.checkboxContainer}>
           <Text style={styles.label}>RPS 6100</Text>
           <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           />
           <Text style={styles.label}>MBA 6700</Text>
           <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           />
           <Text style={styles.label}>FIN 6550</Text>
           <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           />
           <Text style={styles.label}>MGT 6050</Text>
           <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           />
           <Text style={styles.label}>MGT 6570</Text>
           <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           />
           <Text style={styles.label}>MKT 7880</Text>
           <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           />
           <Text style={styles.label}>MKT 7900</Text>
           <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           />
           <Text style={styles.label}>MKT 7940</Text>
           <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           />
           <Text style={styles.label}>MKT 7960</Text>
           <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           />
           <Text style={styles.label}>ENT 7010</Text>
           <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           />
           <Text style={styles.label}>ENT 7300</Text>
           <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           />
           </View>
         <StatusBar style="auto" />
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'right',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  programinfo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'right',
    justifyContent: 'right',
  },
  label: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: "row",
    flexWrap: 'wrap',
    marginBottom: 10,
    justifyContent: 'center',
  },
  checkbox: {
    flexDirection: "row",
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  label: {
    fontSize: 11,
    fontWeight: "bold",
    margin: 8,
  },
});
