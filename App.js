import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';

import Button from './scr/components/Button';
import Display from './scr/components/Display';

const App = () => {
  const [displayValue, setDisplayValue] = useState(0);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Display value={displayValue} />
            <View style={styles.buttons}>
              <Button label="AC" />
              <Button label="/" />
              <Button label="7" />
              <Button label="8" />
              <Button label="9" />
              <Button label="*" />
              <Button label="4" />
              <Button label="5" />
              <Button label="6" />
              <Button label="-" />
              <Button label="1" />
              <Button label="2" />
              <Button label="3" />
              <Button label="+" />
              <Button label="0" />
              <Button label="." />
              <Button label="=" />
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
