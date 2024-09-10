import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard';
import ElevatedCard from './components/ElevatedCard';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import Startpage from './Pages /Startpage';

const App = () => {
  return (
    <SafeAreaView>
    <ScrollView >
    <Startpage/>
    {/* <Flatcard/>
    <ElevatedCard/>
    <FancyCards/> */}
    </ScrollView>
    </SafeAreaView>
  )
};

export default App;