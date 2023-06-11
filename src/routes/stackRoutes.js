import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Detail from "../pages/detail";
import Search from "../pages/search"

// STACK ROUTES - Rotas dinamicas, basicamente empilhando telas
const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Detail" 
                component={Detail} 
                options={{
                    title: "Detalhes do produto"
                }}
            />
            <Stack.Screen 
                name="Search" 
                component={Search} 
                options={{
                    title: "Veja o que encontramos"
                }}
            />
        </Stack.Navigator>
    )
}

