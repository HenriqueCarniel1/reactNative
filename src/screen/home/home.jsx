import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { useState } from "react";
import styles from "./styles";
import Participant from "../../components/participant/participant";

function Home() {
  const [saveParticipants, setParticipants] = useState([]);
  const [saveParticipantName, setParticipantName] = useState([]);

  const handleParticipantAdd = () => {
    console.log("Você clicou no botão de adicionar! ");

    if (saveParticipants.includes(saveParticipantName)) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com esse nome "
      );
    }

    setParticipants((prevState) => [...prevState, saveParticipantName]);
    setParticipantName("");
  };

  const handleParticipantRemove = (name) => {
    Alert.alert("Remover", `Remover o participante ${name} ?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);

    console.log(`Você clicou em remover o participante! ${name}`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={saveParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={saveParticipants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
            key={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}

export default Home;
