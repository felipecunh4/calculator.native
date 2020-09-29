import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';

import Button from './scr/components/Button';
import Display from './scr/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

const App = () => {
  const [displayValue, setDisplayValue] = useState(initialState.displayValue);
  const [operationValue, setOperationValue] = useState('');
  const [clearDisplay, setClearDisplay] = useState(initialState.clearDisplay);
  const [values, setValues] = useState(initialState.values);
  const [current, setCurrent] = useState(initialState.current);

  const addDigit = (n) => {
    if (n === '.' && displayValue.includes('.')) return;

    const clear = displayValue == '0' || clearDisplay;
    const currentValue = clear ? '' : displayValue;
    const newDisplayValue = currentValue + n;
    setDisplayValue(newDisplayValue);
    setClearDisplay(false);

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const valuesInArray = [...values];
      valuesInArray[current] = newValue;
      setValues(valuesInArray);
    }
  };

  const clearMemory = () => {
    setDisplayValue(initialState.displayValue);
    setOperationValue(initialState.operation);
    setClearDisplay(initialState.clearDisplay);
    setValues(initialState.values);
    setCurrent(initialState.current);
  };

  const setOperation = (operation) => {
    setDisplayValue(0);
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Display value={displayValue} />
            <View style={styles.buttons}>
              <Button label="AC" triple={true} onClick={clearMemory} />
              <Button label="/" operation={true} onClick={setOperation} />
              <Button label="7" onClick={addDigit} />
              <Button label="8" onClick={addDigit} />
              <Button label="9" onClick={addDigit} />
              <Button label="*" operation={true} onClick={setOperation} />
              <Button label="4" onClick={addDigit} />
              <Button label="5" onClick={addDigit} />
              <Button label="6" onClick={addDigit} />
              <Button label="-" operation={true} onClick={setOperation} />
              <Button label="1" onClick={addDigit} />
              <Button label="2" onClick={addDigit} />
              <Button label="3" onClick={addDigit} />
              <Button label="+" operation={true} onClick={setOperation} />
              <Button label="0" double={true} onClick={addDigit} />
              <Button label="." onClick={addDigit} />
              <Button label="=" operation={true} onClick={setOperation} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
