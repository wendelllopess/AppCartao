import { Text, View } from "react-native";
import { styles } from "./styles";
import Animated, {SharedValue, interpolate, useAnimatedStyle, withTiming} from "react-native-reanimated";

type CreditCardProps = {
    cardSide: SharedValue<number>
    data: {
      nome: string
      numero: string
      data: string
      cvv: string
    }
}

export enum CARD_SIDE{
    front = 0, 
    back = 1,
}

export function CreditCard({cardSide, data}: CreditCardProps){
    const frontAnimetedStyles = useAnimatedStyle(() => {
      const rotateValue = interpolate(
        cardSide.value,
        [CARD_SIDE.front, CARD_SIDE.back],
        [0, 180]
      );
      return {
        transform: [
          { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) },
        ],
      };
    });

    const backAnimetedStyles = useAnimatedStyle(() => {
        const rotateValue = interpolate(
          cardSide.value,
          [CARD_SIDE.front, CARD_SIDE.back],
          [180, 360]
        );
        return {
          transform: [
            { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) },
          ],
        };
      });

  return (
    <View>
      <Animated.View style={[styles.card, styles.front, frontAnimetedStyles]}>
        <View style={styles.header}>
          <View style={[styles.circle, styles.logo]} />
          <Text>Meu cartao</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.name}>{data.nome}</Text>

          <View style={styles.flag}>
            <View style={[styles.circle, styles.red]} />
            <View style={[styles.circle, styles.orange]} />
          </View>
        </View>
      </Animated.View>

      <Animated.View style = {[styles.card, styles.back, backAnimetedStyles]}>
        <View>
           <Text style={styles.label}>Numero do cartao</Text>
           <Text style={styles.value}>{data.numero}</Text>
        </View>

        <View style ={styles.footer}>
            <View>
                <Text style={styles.label}>validade</Text>
                <Text style={styles.value}>{data.data.substring(0, 2) / data.data.substring(numero.length - 2)}</Text>
            </View>

            <View>
                <Text style={styles.label}>CVV</Text>
                <Text style={styles.value}>{data.cvv}</Text>
            </View>
        </View>
      </Animated.View>
    </View>
  );
}
