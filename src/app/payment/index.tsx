import { Text, TouchableOpacity, View } from "react-native";
import { CreditCard, CARD_SIDE } from '@/components/credit-card'
import {styles} from "./styles"
import { useSharedValue } from "react-native-reanimated";
import { Input } from "@/components/input";
import { useState } from "react";

export function Payment(){
    const [nome, setNome] = useState("")   
    const [numero, setNumero] = useState("")   
    const [data, setData] = useState("")   
    const [cvv, setCvv] = useState("")   


    const cardSide = useSharedValue(CARD_SIDE.front)

    function showFrontCard(){
        cardSide.value = CARD_SIDE.front
    }

    function showbackCard(){
        cardSide.value = CARD_SIDE.back
    }

    function handleFlipCard(){
        console.log(cardSide.value)
        if(cardSide.value === CARD_SIDE.front){
            showbackCard()
        }else{
            showFrontCard()
        }
    }


    return (
      <View style={styles.container}>
        <CreditCard cardSide={cardSide} data ={{
            nome, 
            numero: numero.replace(/(\d{4})(?=\d)/g, "$1 "), 
            data, 
            cvv
            }}/>

        <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
          <Text style={styles.textButton}>Inverter</Text>
        </TouchableOpacity>

        <View style={styles.form}>
          <Input placeholder="Nome do titular" onChangeText={setNome} onFocus={showFrontCard} />
          <Input
            placeholder="Numero do cartao"
            keyboardType="numeric"
            maxLength={16}
            onChangeText={setNumero}
            onFocus={showbackCard}
          />

          <View style={styles.inputAdicional}>
            <Input placeholder="01/02" style={styles.smallInput} onChangeText={setData} onFocus={showbackCard}/>
            <Input
              placeholder="123"
              style={styles.smallInput}
              keyboardType="numeric"
              onChangeText={setCvv}
              onFocus={showbackCard}
            />
          </View>
        </View>
      </View>
    );
}