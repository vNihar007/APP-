import { View, Text, SafeAreaView } from 'react-native';
import { styled } from 'nativewind';

const SampleCSS = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-red-500 justify-center items-center">
        <Text className="text-sky-500 text-xl font-bold">sample_css</Text>
      </View>
    </SafeAreaView>
  );
};

export default SampleCSS;
