import AsyncStorage from "@react-native-async-storage/async-storage"

// BUSCAR, ADICIONAR, e REMOVER

export async function getFavorites (key){
    const favorites = await AsyncStorage.getItem(key);
    return JSON.parse(favorites) || [];
    
}
export async function saveFavorites (key, newItem){
    let myFavorites = await getFavorites(key);
    let hasItem = myFavorites.some(item=>item.id === newItem.id)

    if(hasItem){
        console.log("Item já favoritado")
        return;
    }

    myFavorites.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    alert('Favoritado!')


}
export async function removeFavorites (id){
    let products = await getFavorites("@firstapp")
    let myFavorites = products.filter((item)=>{
        return(item.id !== id)
    })

    await AsyncStorage.setItem("@firstapp", JSON.stringify(myFavorites))
    alert("Removido")
    return myFavorites

}

export async function isFavorite (product){

    let myProducts = await getFavorites("@firstapp")

    const favorite = myProducts.find(item=>item.id === product.id)

    if(favorite){
        return true
    }
    else return false

}
