import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const operaciones = ["+", "-", "*", "/"];
const borrar = ["←", "AC"];
const igual = ["="];

const boton = [
  ["7", "8", "9", "+"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "*"],
  ["0", ".", "AC", "/"],
  ["←", "="],
];

const Botones = ({
  onClickNumero,
  onClickOperacion,
  onClickBorrar,
  onClickIgual,
  numUno,
  numDos,
}) => {
  const onClick = (relleno) => {    
    if (numeros.includes(relleno)) {
      onClickNumero(relleno);
    } else if (operaciones.includes(relleno)) {
      onClickOperacion(relleno);
    } else if (borrar.includes(relleno)) {
      onClickBorrar(relleno);
    } else if (igual.includes(relleno)) {
      onClickIgual();
    }
  };

  const estaDesabilitado = (relleno) => {
    if (operaciones.includes(relleno)) {
      return !numUno || Number.isNaN(Number(numUno));
    } else if (igual.includes(relleno)) {
      return !numDos || Number.isNaN(Number(numDos));
    } else {
      return false;
    }
  };

  const classButton = (relleno) => {
    if (relleno === "←" || relleno === "=") {
      return {
        ...styles.col,
        ...styles.grande,
      };
    } else {
      return styles.col;
    }
  };

  const buttonColor = (text) => {
    if (numeros.includes(text) || text === "AC") {
      return "#eee";
    } else {
      return "#3c85cf";
    }
  };

  const buttonTextColor = (text) => {
    if (numeros.includes(text) || text === "AC") {
      return "#111";
    } else {
      return "#fff";
    }
  };

  const buttonUnderlayColor = (text) => {
    if (numeros.includes(text) || text === "AC") {
      return "#ddd";
    } else {
      return "##29639e";
    }
  };

  return (
    <View style={styles.content}>
      {boton.map((fila, i) => (
        <View key={`fila${i}`} style={styles.fila}>
          {fila.map((relleno) => (
            <View key={relleno} style={classButton(relleno)}>
              <TouchableHighlight
                disabled={estaDesabilitado(relleno)}
                style={{
                  ...styles.boton,
                  backgroundColor: buttonColor(relleno),
                }}
                underlayColor={buttonUnderlayColor(relleno)}
                onPress={() => onClick(relleno)}
              >
                <Text
                  style={{
                    ...styles.textBoton,
                    color: buttonTextColor(relleno),
                  }}
                >
                  {relleno}
                </Text>
              </TouchableHighlight>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grande: {
    width: "50%",
    height: 80,
  },
  fila: {
    paddingHorizontal: 4,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  col: {
    padding: 4,
    width: "25%",
    height: 100,
  },
  content: {
    textAlign: "center",
  },
  boton: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 5,
  },
  textBoton: {
    fontSize: 24,
  },
});

export default Botones;
