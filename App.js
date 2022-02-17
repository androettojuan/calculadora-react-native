import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Botones from "./componentes/botones/botones";
import Pantalla from "./componentes/pantalla/pantalla";

const round = (numero, decimales) =>
  Math.round((numero + Number.EPSILON) * Math.pow(10, decimales)) /
  Math.pow(10, decimales);

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operacion, setOperacion] = useState("");

  const onClickNumero = (numero) => {
    if (!operacion) {
      setNum1(num1 + numero);
    } else {
      setNum2(num2 + numero);
    }
  };

  const onClickOperacion = (operacion) => {
    if (num2) {
      onClickIgual();
    }
    setOperacion(operacion);
  };

  const onClickIgual = () => {
    let resultado = 0;
    if (operacion === "+") {
      resultado = Number(num1) + Number(num2);
    } else if (operacion === "-") {
      resultado = Number(num1) - Number(num2);
    } else if (operacion === "*") {
      resultado = Number(num1) * Number(num2);
    } else if (operacion === "/") {
      resultado = Number(num1) / Number(num2);
    }
    setNum1(`${round(resultado, 6)}`);
    setNum2("");
    setOperacion("");
  };

  const onClickBorrar = (simbolo) => {
    if (simbolo === "AC") {
      setNum1("");
      setNum2("");
      setOperacion("");
    } else if (simbolo === "←") {
      if (num1 && !operacion && !num2) {
        console.log("borrando num 1");
        setNum1(num1.substring(0, num1.length - 1));
      } else if (num2) {
        console.log("borrando num 2");
        setNum2(num2.substring(0, num2.length - 1));
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pantalla
        numeroUno={num1}
        numeroDos={num2}
        operacion={operacion}
      ></Pantalla>
      <Botones
        onClickBorrar={onClickBorrar}
        onClickIgual={onClickIgual}
        onClickNumero={onClickNumero}
        onClickOperacion={onClickOperacion}
        numUno={num1}
        numDos={num2}
      ></Botones>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
});
