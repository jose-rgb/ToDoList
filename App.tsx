import { StatusBar,ActivityIndicator } from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter"
import Home from "./src/screens/Home";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_700Bold,
	})

  return (
    <>{fontsLoaded ? <Home /> : <Loading />}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
    </>
  );
}