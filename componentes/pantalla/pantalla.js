import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Pantalla = ({ numeroUno, numeroDos, operacion }) => {
  let stylesNum1 = styles.numero;

  if (!numeroDos) {
    stylesNum1 = {
      ...styles.numero,
      ...styles.grande,
    };
  }
  let stylesNum2 = styles.numero;

  if (numeroDos) {
    stylesNum2 = {
      ...styles.numero,
      ...styles.grande,
    };
  }

  return (
    <View style={styles.cont}>
      <View style={styles.pantalla}>
        <View>
          <Text style={stylesNum1}>
            {numeroUno} {operacion}
          </Text>
        </View>
        {!!numeroDos && (
          <View>
            <Text style={stylesNum2}>{numeroDos}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingHorizontal: 8,
    width: "100%",
    marginBottom: 10,
  },
  numero: {
    margin: 0,
    textAlign: "right",
    paddingRight: 20,
    fontSize: 32,
  },
  grande: {
    fontSize: 48,
    fontWeight: "bold",
  },
  pantalla: {
    width: "100%",
    height: 250,
    backgroundColor: "#ccc",
    borderRadius: 15,
    elevation: 5,
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: 16,
  },
});

export default Pantalla;
