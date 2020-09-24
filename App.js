import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';

import Button from './scr/components/Button';
import Display from './scr/components/Display';

const App = () => {
  const [displayValue, setDisplayValue] = useState(0);
  // const [operation, setOperation] = useState('');

  const addDigit = (n) => {
    setDisplayValue(n);
  };

  const clearMemory = () => {
    setDisplayValue(0);
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
