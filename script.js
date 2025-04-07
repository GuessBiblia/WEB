const levels = [
    // Nivel 1: Génesis (Fácil)
    {
        book: "Génesis",
        riddles: [
            { text: "Soy el primer hombre creado por Dios. ¿Quién soy?", answer: "Adán" },
            { text: "Fui la primera mujer y madre de todos. ¿Quién soy?", answer: "Eva" },
            { text: "Maté a mi hermano Abel por envidia. ¿Quién soy?", answer: "Caín" },
            { text: "Fui el hijo de Adán y Eva que reemplazó a Abel. ¿Quién soy?", answer: "Set" },
            { text: "Construí un arca para salvar a mi familia del diluvio. ¿Quién soy?", answer: "Noé" },
            { text: "Soy el padre de la fe, obedecí a Dios dejando mi tierra. ¿Quién soy?", answer: "Abraham" },
            { text: "Fui la esposa de Abraham y madre de Isaac. ¿Quién soy?", answer: "Sara" },
            { text: "Soy el hijo de Abraham ofrecido como sacrificio. ¿Quién soy?", answer: "Isaac" },
            { text: "Fui la esposa de Isaac y madre de Jacob. ¿Quién soy?", answer: "Rebeca" },
            { text: "Fui vendido por mis hermanos y goberné en Egipto. ¿Quién soy?", answer: "José" }
        ],
        exam: [
            { text: "¿Quién creó el mundo según Génesis?", answer: "Dios" },
            { text: "¿Qué comieron Adán y Eva que estaba prohibido?", answer: "Fruto" },
            { text: "Fui el hijo de Adán y Eva que reemplazó a Abel. ¿Quién soy?", answer: "Set" },
            { text: "¿Qué prometió Dios a Abraham?", answer: "Descendencia" }
        ]
    },
    // Nivel 2: Éxodo (Fácil-Medio)
    {
        book: "Éxodo",
        riddles: [
            { text: "Llevé las tablas de los Diez Mandamientos. ¿Quién soy?", answer: "Moisés" },
            { text: "Fui el hermano de Moisés que habló por él. ¿Quién soy?", answer: "Aarón" },
            { text: "Soy la hermana de Moisés que lo vigiló en el río. ¿Quién soy?", answer: "Miriam" },
            { text: "Fui el faraón que esclavizó a los israelitas. ¿Quién soy?", answer: "Faraón" },
            { text: "Guié a los israelitas con una columna de fuego. ¿Quién soy?", answer: "Dios" },
            { text: "Soy el mar que se partió para los israelitas. ¿Qué soy?", answer: "Mar Rojo" },
            { text: "Fui el pueblo liberado de Egipto. ¿Quiénes somos?", answer: "Israelitas" },
            { text: "Recibí las leyes de Dios en una montaña. ¿Quién soy?", answer: "Moisés" },
            { text: "Soy la montaña de los mandamientos. ¿Qué soy?", answer: "Sinaí" },
            { text: "Fui el becerro de oro adorado por el pueblo. ¿Qué soy?", answer: "Ídolo" }
        ],
        exam: [
            { text: "¿Quién encontró a Moisés en el río?", answer: "Hija del Faraón" },
            { text: "¿Qué plaga convirtió el agua en sangre?", answer: "Primera" },
            { text: "¿Qué celebran los judíos por la liberación?", answer: "Pascua" },
            { text: "¿Cuántos mandamientos dio Dios a Moisés?", answer: "Diez" }
        ]
    },
    // Nivel 3: Josué (Medio)
    {
        book: "Josué",
        riddles: [
            { text: "Fui el sucesor de Moisés y conquisté Canaán. ¿Quién soy?", answer: "Josué" },
            { text: "Soy la ciudad cuyas murallas cayeron con trompetas. ¿Qué soy?", answer: "Jericó" },
            { text: "Fui una prostituta que ayudó a los espías. ¿Quién soy?", answer: "Rahab" },
            { text: "Soy el río cruzado para entrar a Canaán. ¿Qué soy?", answer: "Jordán" },
            { text: "Ordené al sol detenerse en Gabaón. ¿Quién soy?", answer: "Josué" },
            { text: "Fui uno de los espías fieles con Caleb. ¿Quién soy?", answer: "Josué" },
            { text: "Soy la tierra prometida a Abraham. ¿Qué soy?", answer: "Canaán" },
            { text: "Fui el compañero de Josué que creyó en Dios. ¿Quién soy?", answer: "Caleb" },
            { text: "Derroté a los reyes de Canaán. ¿Quién soy?", answer: "Josué" },
            { text: "Repartí la tierra entre las tribus. ¿Quién soy?", answer: "Josué" }
        ],
        exam: [
            { text: "¿Qué hizo caer las murallas de Jericó?", answer: "Trompetas" },
            { text: "¿Quién escondió a los espías de Josué?", answer: "Rahab" },
            { text: "¿Qué río cruzaron los israelitas?", answer: "Jordán" },
            { text: "¿Cuántos días rodearon Jericó?", answer: "Siete" }
        ]
    },
    // Nivel 4: Jueces (Medio)
    {
        book: "Jueces",
        riddles: [
            { text: "Fui una jueza y profetisa de Israel. ¿Quién soy?", answer: "Débora" },
            { text: "Derroté a Sísara con una estaca. ¿Quién soy?", answer: "Jael" },
            { text: "Luché con vellones para probar a Dios. ¿Quién soy?", answer: "Gedeón" },
            { text: "Derribé un templo filisteo al morir. ¿Quién soy?", answer: "Sansón" },
            { text: "Fui traicionado por Dalila. ¿Quién soy?", answer: "Sansón" },
            { text: "Maté a mil hombres con una quijada. ¿Quién soy?", answer: "Sansón" },
            { text: "Hice un voto y ofrecí a mi hija. ¿Quién soy?", answer: "Jefté" },
            { text: "Fui el general derrotado por Débora. ¿Quién soy?", answer: "Sísara" },
            { text: "Reduje mi ejército a 300 hombres. ¿Quién soy?", answer: "Gedeón" },
            { text: "Soy la mujer que cortó el cabello de Sansón. ¿Quién soy?", answer: "Dalila" }
        ],
        exam: [
            { text: "¿Quién lideró a Israel contra Sísara?", answer: "Débora" },
            { text: "¿Qué usó Jael para matar a Sísara?", answer: "Estaca" },
            { text: "¿Qué prueba pidió Gedeón a Dios?", answer: "Vellón" },
            { text: "¿Qué perdió Sansón al ser traicionado?", answer: "Fuerza" }
        ]
    },
    // Nivel 5: Rut (Medio)
    {
        book: "Rut",
        riddles: [
            { text: "Fui una moabita que siguió a mi suegra. ¿Quién soy?", answer: "Rut" },
            { text: "Soy la suegra de Rut que perdió a sus hijos. ¿Quién soy?", answer: "Noemí" },
            { text: "Fui el esposo de Rut y redentor. ¿Quién soy?", answer: "Boaz" },
            { text: "Soy el hijo de Rut y Boaz. ¿Quién soy?", answer: "Obed" },
            { text: "Volví a Belén con Rut. ¿Quién soy?", answer: "Noemí" },
            { text: "Recogí espigas en el campo de Boaz. ¿Quién soy?", answer: "Rut" },
            { text: "Soy el abuelo de David por Rut. ¿Quién soy?", answer: "Obed" },
            { text: "Fui una moabita leal a Israel. ¿Quién soy?", answer: "Rut" },
            { text: "Redimí a Rut según la ley. ¿Quién soy?", answer: "Boaz" },
            { text: "Soy la ciudad donde Rut llegó con Noemí. ¿Qué soy?", answer: "Belén" }
        ],
        exam: [
            { text: "¿De dónde era Rut originalmente?", answer: "Moab" },
            { text: "¿Quién era la suegra de Rut?", answer: "Noemí" },
            { text: "¿Qué relación tenía Obed con David?", answer: "Abuelo" },
            { text: "¿Qué hizo Rut en los campos de Boaz?", answer: "Espigar" }
        ]
    },
    // Nivel 6: 1 Samuel (Medio-Difícil)
    {
        book: "1 Samuel",
        riddles: [
            { text: "Fui el primer rey de Israel. ¿Quién soy?", answer: "Saúl" },
            { text: "Derroté a Goliat con una honda. ¿Quién soy?", answer: "David" },
            { text: "Fui la madre de Samuel y oré por él. ¿Quién soy?", answer: "Ana" },
            { text: "Soy el sacerdote que crió a Samuel. ¿Quién soy?", answer: "Elí" },
            { text: "Fui amigo de David y hijo de Saúl. ¿Quién soy?", answer: "Jonatán" },
            { text: "Soy el gigante filisteo vencido por David. ¿Quién soy?", answer: "Goliat" },
            { text: "Ungí a Saúl y David como reyes. ¿Quién soy?", answer: "Samuel" },
            { text: "Fui rechazado por Dios como rey. ¿Quién soy?", answer: "Saúl" },
            { text: "Toqué el arpa para calmar a Saúl. ¿Quién soy?", answer: "David" },
            { text: "Soy el profeta que llamó a David rey. ¿Quién soy?", answer: "Samuel" }
        ],
        exam: [
            { text: "¿Quién ungió a Saúl como rey?", answer: "Samuel" },
            { text: "¿Qué usó David contra Goliat?", answer: "Honda" },
            { text: "¿Quién era el padre de Jonatán?", answer: "Saúl" },
            { text: "¿Qué pidió Ana a Dios?", answer: "Hijo" }
        ]
    },
    // Nivel 7: 1 Reyes (Difícil)
    {
        book: "1 Reyes",
        riddles: [
            { text: "Fui el rey más sabio de Israel. ¿Quién soy?", answer: "Salomón" },
            { text: "Construí el templo en Jerusalén. ¿Quién soy?", answer: "Salomón" },
            { text: "Fui una reina que visitó a Salomón. ¿Quién soy?", answer: "Reina de Sabá" },
            { text: "Soy el profeta llevado en un carro de fuego. ¿Quién soy?", answer: "Elías" },
            { text: "Sucedí a Elías como profeta. ¿Quién soy?", answer: "Eliseo" },
            { text: "Fui rey de Israel y esposo de Jezabel. ¿Quién soy?", answer: "Acab" },
            { text: "Soy la reina que persiguió a Elías. ¿Quién soy?", answer: "Jezabel" },
            { text: "Fui un leproso curado por Eliseo. ¿Quién soy?", answer: "Naamán" },
            { text: "Confronté a los profetas de Baal. ¿Quién soy?", answer: "Elías" },
            { text: "Soy el monte donde Elías desafió a Baal. ¿Qué soy?", answer: "Carmelo" }
        ],
        exam: [
            { text: "¿Qué pidió Salomón a Dios?", answer: "Sabiduría" },
            { text: "¿Dónde desafió Elías a los profetas de Baal?", answer: "Carmelo" },
            { text: "¿Quién curó a Naamán de la lepra?", answer: "Eliseo" },
            { text: "¿Qué trajo la Reina de Sabá a Salomón?", answer: "Regalos" }
        ]
    },
    // Nivel 8: Daniel (Difícil)
    {
        book: "Daniel",
        riddles: [
            { text: "Fui arrojado a los leones y sobreviví. ¿Quién soy?", answer: "Daniel" },
            { text: "Interpreté los sueños de Nabucodonosor. ¿Quién soy?", answer: "Daniel" },
            { text: "Fui al horno de fuego con mis amigos. ¿Quién soy?", answer: "Daniel" },
            { text: "Soy amigo de Daniel en el horno. ¿Quién soy?", answer: "Sadrac" },
            { text: "Soy otro amigo de Daniel en el horno. ¿Quién soy?", answer: "Mesac" },
            { text: "Soy el tercer amigo en el horno. ¿Quién soy?", answer: "Abed-nego" },
            { text: "Fui rey de Babilonia y vi una mano escribir. ¿Quién soy?", answer: "Belsasar" },
            { text: "Soy el rey que arrojó a Daniel a los leones. ¿Quién soy?", answer: "Darío" },
            { text: "Vi visiones de bestias y reinos. ¿Quién soy?", answer: "Daniel" },
            { text: "Fui el rey que soñó con una estatua. ¿Quién soy?", answer: "Nabucodonosor" }
        ],
        exam: [
            { text: "¿Qué protegió a Daniel en los leones?", answer: "Ángel" },
            { text: "¿Quién arrojó a Daniel a los leones?", answer: "Darío" },
            { text: "¿Qué vieron en el horno además de los tres?", answer: "Cuarto hombre" },
            { text: "¿Qué interpretó Daniel en la pared?", answer: "Escritura" }
        ]
    },
    // Nivel 9: Ester (Difícil)
    {
        book: "Ester",
        riddles: [
            { text: "Fui reina y salvé a mi pueblo en Persia. ¿Quién soy?", answer: "Ester" },
            { text: "Fui el rey que se casó con Ester. ¿Quién soy?", answer: "Asuero" },
            { text: "Planeé destruir a los judíos en Persia. ¿Quién soy?", answer: "Amán" },
            { text: "Fui el tío de Ester que la crió. ¿Quién soy?", answer: "Mardoqueo" },
            { text: "Fui colgado en la horca que hice para otro. ¿Quién soy?", answer: "Amán" },
            { text: "Intercedí por mi pueblo ante el rey. ¿Quién soy?", answer: "Ester" },
            { text: "Fui honrado por el rey en lugar de Amán. ¿Quién soy?", answer: "Mardoqueo" },
            { text: "Soy la fiesta que celebra la salvación de los judíos. ¿Qué soy?", answer: "Purim" },
            { text: "Reemplacé a Vasti como reina. ¿Quién soy?", answer: "Ester" },
            { text: "Fui la reina destronada antes de Ester. ¿Quién soy?", answer: "Vasti" }
        ],
        exam: [
            { text: "¿Quién planeó matar a los judíos?", answer: "Amán" },
            { text: "¿Qué celebran los judíos por Ester?", answer: "Purim" },
            { text: "¿Quién era el tío de Ester?", answer: "Mardoqueo" },
            { text: "¿Qué arriesgó Ester al ver al rey?", answer: "Vida" }
        ]
    },
    // Nivel 10: Evangelio de Juan (Muy Difícil)
    {
        book: "Juan",
        riddles: [
            { text: "Fui el discípulo amado de Jesús. ¿Quién soy?", answer: "Juan" },
            { text: "Dudé de la resurrección hasta ver las heridas. ¿Quién soy?", answer: "Tomás" },
            { text: "Fui el Bautista que preparó el camino. ¿Quién soy?", answer: "Juan el Bautista" },
            { text: "Hablé con una samaritana en el pozo. ¿Quién soy?", answer: "Jesús" },
            { text: "Fui un ciego curado con lodo. ¿Quién soy?", answer: "Bartimeo" },
            { text: "Subí a un árbol para ver a Jesús. ¿Quién soy?", answer: "Zaqueo" },
            { text: "Negé a Jesús tres veces antes del gallo. ¿Quién soy?", answer: "Pedro" },
            { text: "Fui resucitado por Jesús tras cuatro días. ¿Quién soy?", answer: "Lázaro" },
            { text: "Soy la hermana de Lázaro que escuchó a Jesús. ¿Quién soy?", answer: "María" },
            { text: "Soy la ciudad donde Jesús murió. ¿Qué soy?", answer: "Jerusalén" }
        ],
        exam: [
            { text: "¿Quién escribió el Evangelio de Juan?", answer: "Juan" },
            { text: "¿Qué dijo Tomás al dudar?", answer: "Ver para creer" },
            { text: "¿Quién resucitó a Lázaro?", answer: "Jesús" },
            { text: "¿Dónde habló Jesús con la samaritana?", answer: "Pozo" }
        ]
    }
];

let currentLevel = 0;
let currentRiddle = 0;
let score = 0; // Solo para adivinanzas
let failsInLevel = 0;
let riddleInLevel = 0;
let isExamMode = false; // Aseguramos que inicie en false

function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function displayRiddle() {
    const riddleDisplay = document.getElementById('riddle-display');
    const levelDisplay = document.getElementById('level');
    const bookDisplay = document.getElementById('book');
    const progressDisplay = document.getElementById('progress');
    const modeDisplay = document.getElementById('mode');
    const userAnswer = document.getElementById('user-answer');
    const gameArea = document.getElementById('game-area');
    const examArea = document.getElementById('exam-area');
    const examQuestions = document.getElementById('exam-questions');

    console.log("Estado al mostrar: isExamMode =", isExamMode, "currentLevel =", currentLevel, "riddleInLevel =", riddleInLevel);
    console.log("gameArea:", gameArea, "examArea:", examArea);

    if (isExamMode) {
        console.log("Mostrando examen");
        gameArea.classList.add('hidden');
        examArea.classList.remove('hidden');
        examQuestions.innerHTML = '';
        levels[currentLevel].exam.forEach((q, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${q.text}<br><input type="text" id="exam-answer-${index}" placeholder="Escribe tu respuesta">`;
            examQuestions.appendChild(li);
        });
        document.getElementById('exam-result').textContent = '';
    } else {
        console.log("Mostrando adivinanzas");
        gameArea.classList.remove('hidden');
        examArea.classList.add('hidden');
        if (!userAnswer) {
            console.error("Error: No se encontró el elemento con id='user-answer'. Verifica el HTML.");
            return; // Detenemos la ejecución si no encontramos el elemento
        }
        userAnswer.value = ''; // Limpiar el campo de entrada
        riddleDisplay.textContent = levels[currentLevel].riddles[currentRiddle].text;
        modeDisplay.textContent = "Adivinanzas";
        progressDisplay.textContent = `${riddleInLevel + 1}/10`;
        document.getElementById('result').textContent = '';
        levelDisplay.textContent = currentLevel + 1;
        bookDisplay.textContent = levels[currentLevel].book;
    }

    // Depuración adicional para verificar visibilidad
    console.log("Visibilidad después de actualizar: gameArea.classList =", gameArea.classList.toString(), "examArea.classList =", examArea.classList.toString());
}

function checkAnswer() {
    const userAnswer = document.getElementById('user-answer');
    if (!userAnswer) {
        console.error("Error: No se encontró el elemento con id='user-answer' al verificar la respuesta.");
        return;
    }
    const userAnswerText = normalizeText(userAnswer.value.trim());
    const result = document.getElementById('result');
    const correctAnswer = normalizeText(levels[currentLevel].riddles[currentRiddle].answer);

    if (userAnswerText === correctAnswer) {
        result.textContent = "¡Correcto! Bien hecho.";
        result.style.color = "green";
        score += 1;
        document.getElementById('score').textContent = score;
    } else {
        result.textContent = `Incorrecto. La respuesta correcta era: ${levels[currentLevel].riddles[currentRiddle].answer}`;
        result.style.color = "red";
        failsInLevel++;
    }

    if (failsInLevel >= 2) {
        document.getElementById('result').textContent = "DEBES ESTUDIAR MÁS";
        document.getElementById('result').style.color = "red";
        currentRiddle = 0;
        riddleInLevel = 0;
        failsInLevel = 0;
        displayRiddle();
        return;
    }

    riddleInLevel++;
    if (riddleInLevel >= 10) {
        isExamMode = true;
        console.log("Cambiando a modo examen: isExamMode =", isExamMode);
    } else {
        currentRiddle++;
    }
    displayRiddle();
}

function submitExam() {
    const examResult = document.getElementById('exam-result');
    let examScore = 0;

    levels[currentLevel].exam.forEach((q, index) => {
        const userAnswer = normalizeText(document.getElementById(`exam-answer-${index}`).value.trim());
        const correctAnswer = normalizeText(q.answer);
        if (userAnswer === correctAnswer) {
            examScore++;
        }
    });

    examResult.textContent = `Puntuación del examen: ${examScore}/4. ${examScore >= 3 ? '¡Aprobado! Avanzando al siguiente nivel.' : 'Necesitas al menos 3 correctas para avanzar.'}`;
    examResult.style.color = examScore >= 3 ? "green" : "red";

    if (examScore >= 3) {
        currentLevel++;
        currentRiddle = 0;
        riddleInLevel = 0;
        failsInLevel = 0;
        isExamMode = false;
        console.log("Examen aprobado, volviendo a adivinanzas: isExamMode =", isExamMode);
        if (currentLevel >= levels.length) {
            examResult.textContent = "¡FELICIDADES! HAS COMPLETADO TODOS LOS NIVELES";
            document.getElementById('next-button').disabled = true;
            document.getElementById('game-area').classList.add('hidden');
            return;
        }
        displayRiddle();
    }
}

function nextRiddle() {
    const userAnswer = document.getElementById('user-answer');
    if (!userAnswer) {
        console.error("Error: No se encontró el elemento con id='user-answer' al intentar avanzar.");
        return;
    }
    if (userAnswer.value.trim() === '') {
        document.getElementById('result').textContent = "Por favor, escribe una respuesta antes de avanzar.";
        document.getElementById('result').style.color = "orange";
        return;
    }
    checkAnswer();
}

// Iniciar el juego
function initializeGame() {
    console.log("Iniciando juego. isExamMode =", isExamMode);
    isExamMode = false; // Forzar inicio en modo adivinanzas
    displayRiddle();
}

// Aseguramos que el DOM esté completamente cargado antes de iniciar
document.addEventListener('DOMContentLoaded', initializeGame);