"use strict";
/* /* /* TypeScript

1. Spiegazione generica:
TypeScript è un linguaggio di programmazione open source sviluppato da Microsoft, progettato per migliorare la robustezza e la manutenibilità del codice JavaScript. Pur mantenendo le stesse funzionalità di Javascript, ne aggiunge nuove molto importanti, come la tipizzazione statica, che consente agli sviluppatori di definire i tipi delle variabili. Questa caratteristica risolve problemi comuni legati alla tipizzazione debole di JavaScript, come l’utilizzo di una variabile con un tipo errato o l’invocazione di una funzione con un numero errato di argomenti, fornendo un ambiente di sviluppo più solido.

2. Il compilatore TS:
Il compilatore di TypeScript è necessario per convertire il codice TypeScript in JavaScript, così da poter essere eseguito dai browser e dagli ambienti di esecuzione JavaScript in generale. Inoltre fornisce controllo statico dei tipi, aiutando lo sviluppatore a prevenire alcuni errori comuni. Può essere utilizzato da riga di comando o integrato in ambienti di sviluppo come Visual Studio Code, semplificando il processo di trasformazione del codice TypeScript in codice JavaScript.

3. La Type Inference:
La Type Inference in TypeScript è un processo in cui il compilatore deduce automaticamente il tipo di una variabile o di una funzione in base al valore assegnato o restituito. Questo significa che, in molti casi, non è necessario dichiarare esplicitamente i tipi, poiché il compilatore è in grado di capire quali siano in modo implicito. Consentirà quindi di scrivere codice TypeScript più conciso e leggibile, senza dover specificare esplicitamente i tipi delle variabili delle funzioni, con alcune eccezioni nell’ambito di situazioni più complesse.

4. Il tipo 'any':
Il tipo 'any' in TypeScript è un tipo dinamico, utilizzato per indicare una variabile senza un tipo specifico o quando la tipizzazione precisa non è nota o necessaria. In questo caso TypeScript non esegue alcun controllo sui tipi di valore assegnati alla variabile. Il suo utilizzo può essere quindi utile, ad esempio, quando si lavoro con codice JavaScript esistente che non ha tipi definiti. Tuttavia, l'uso eccessivo di 'any' può ridurre i benefici della tipizzazione statica, poiché si perde parte della sicurezza del tipo.

// Dichiarazione di una variabile con tipo any
let myVariable: any;

// Assegnazione di valori di diversi tipi
myVariable = "Hello, TypeScript!"; // string
console.log(myVariable);

myVariable = 42; // number
console.log(myVariable);

myVariable = true; // boolean
console.log(myVariable);

myVariable = [1, 2, 3]; // array
console.log(myVariable);

5. Il tipo Union:
Il tipo Union in TypeScript consente di specificare che una variabile può assumere uno tra diversi tipi. Questo offre flessibilità nel gestire dati con strutture diverse, consentendo agli sviluppatori di scrivere codice più adattabile e versatile. Tuttavia, è importante notare che l’utilizzo eccessivo del tipo Union può portare alla scrittura di codice complesso e difficile da mantenere.

// Dichiarazione di un tipo union
type StringOrNumber = string | number;

// Dichiarazione di una variabile con tipo union
let myVariable: StringOrNumber;

// Esempi di assegnazioni valide
myVariable = "Hello, TypeScript!";
myVariable = 42;

// Esempi di assegnazioni non valide
// myVariable = true; // Errore, booleano non consentito
// myVariable = [1, 2, 3]; // Errore, array non consentito

6. Il tipo Tuple:
Il tipo Tuple in TypeScript è una struttura dati che consente di rappresentare un insieme ordinato di elementi, ognuno dei quali può avere un tipo di dato diverso. A differenza degli array normali, il tipo ed il numero di elementi presenti in un Tuple sono fissi e non possono essere modificati. Per definire un Tuple è necessario specificare il tipo di ogni elemento nell’array tra parentesi quadre. L’utilizzo più comune riguarda funzioni che restituiscono più valori di tipi diversi.

// Dichiarazione di una variabile con tipo tuple
let myTuple: [string, number, boolean];

// Assegnazione di una tupla
myTuple = ["Hello", 123, true];

// Accesso ai singoli elementi della tupla
const firstElement: string = myTuple[0];
const secondElement: number = myTuple[1];
const thirdElement: boolean = myTuple[2];

console.log(firstElement);  // Output: Hello
console.log(secondElement); // Output: 123
console.log(thirdElement);  // Output: true

7. Le Interfaces:
Le interfacce in TypeScript consentono di definire contratti per la struttura degli oggetti, stabilendo in modo esplicito quali proprietà e quali metodi devono essere presenti. Questo promuove una migliore organizzazione e documentazione del codice.

// Dichiarazione di un'interfaccia per un oggetto 'Person'
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    sayHello: () => void;
}

// Implementazione di un oggetto che segue l'interfaccia 'Person'
const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello: function() {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
    }
};

// Utilizzo dell'oggetto
console.log(person.firstName); // Output: John
console.log(person.age);       // Output: 30
person.sayHello();             // Output: Hello, I'm John Doe.

8. Types vs Interfaces:
Entrambi i tipi e le interfacce in TypeScript possono essere utilizzati per definire forme di oggetti, ma hanno differenze significative. Le interfacce possono definire proprietà, metodi e tipi di dati che un oggetto deve avere e garantiscono che gli oggetti soddisfino questi requisiti. I tipi possono essere più flessibili, permettendo di unire, intersecare o modificare tipi esistenti. Tuttavia, in molti casi, le intefacce e i tipi possono essere utilizzati in modo intercambiabile.

9. I Generics:
I Generics in TypeScript consentono di creare componenti riutilizzabili e flessibili che possono lavorare con diversi tipi di dati senza perdere la tipizzazione statica. Sono particolarmente utili perché consentono di creare funzioni. Classi e interfacce che possono lavorare con diversi tipi di dati senza dover ripetere il codice per ogni tipo di dato.

// Funzione con generics
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

// Utilizzo della funzione con un array di stringhe
const stringArray: string[] = ["apple", "banana", "orange"];
const firstString: string | undefined = getFirstElement(stringArray);
console.log(firstString);  // Output: apple

// Utilizzo della funzione con un array di numeri
const numberArray: number[] = [1, 2, 3, 4, 5];
const firstNumber: number | undefined = getFirstElement(numberArray);
console.log(firstNumber);  // Output: 1

// Utilizzo della funzione con un array vuoto
const emptyArray: boolean[] = [];
const firstBoolean: boolean | undefined = getFirstElement(emptyArray);
console.log(firstBoolean);  // Output: undefined




 */ 
