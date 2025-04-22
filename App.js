import	{	StatusBar	}	from	'expo-status-bar';
import	React	from	'react';
import	{	StyleSheet,	Text,	View	}	from	'react-native';
import	OlaMundo	from	'./componentes/OlaMundo';
import { Evento } from './componentes/Evento'

export	default function	App() {
		return	(
				<View style={styles.container}>
						<OlaMundo	nome='Leitor'/>
						<StatusBar style="auto"	/>
						<Evento />
				</View>
		);
}

const	styles	=	StyleSheet.create({
		container:	{
				flex:	1,
				backgroundColor:	'#fff',
				alignItems:	'center',
				justifyContent:	'center',
		},
});