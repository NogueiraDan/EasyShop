import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackRoutes from "./stackRoutes";
import Wishlist from "../pages/wishlist"
import {Ionicons} from "@expo/vector-icons"

// Rotas da barra de navegação inferior - Rotas estaticas;

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel:false,
            tabBarActiveTintColor: "black",
            tabBarStyle:{
                backgroundColor:"#2e0205",
                borderTopWidth:0,

            }
        }}>
            <Tab.Screen 
                name="HomeTab" 
                component={StackRoutes}
                options={{
                    tabBarIcon:({ size, focused })=>{
                        if(focused){
                            return <Ionicons name="home" color="#fff" size={size}/>
                        }

                        return <Ionicons name="home-outline" color="#fff" size={size}/>
                    }

                }} 
            />
            <Tab.Screen 
                name="Wishlist" 
                component={Wishlist}
                options={{
                    tabBarIcon:({ color, size, focused })=>{
                        if(focused){
                            return <Ionicons name="heart" color="#fff"  size={size}/>
                        }

                        return <Ionicons name="heart-outline" color="#fff" size={size}/>
                    }

                }}
            />
        </Tab.Navigator>
    )
}