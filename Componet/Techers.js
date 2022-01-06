import React ,{useState,useEffect}from 'react'
import { View, Text, ScrollView } from 'react-native'
import Country from './Country'

export default function Techers() {
    const [techers,setTechers] = useState([])
    useEffect( ()=>{
      fetch('https://fathomless-journey-41479.herokuapp.com/products')
      .then(res => res.json() )
      .then(data => setTechers(data))

    },[])
    return (
        <View>
            <Text>Electric Car: {techers.length}</Text>
          <ScrollView>
          {
                techers.map(country => <Country
                // key={country._id}
                country={country}
                ></Country>)
            }
          </ScrollView>
        </View>
    )
}
