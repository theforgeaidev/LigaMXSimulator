// #region atlante
const atlante = {
    "Director Técnico": [{ name: "Miguel Herrera", dorsal: 90 }],
    Arqueros: [
        { name: "David Ospina", dorsal: 91, titular: true },
        { name: "Oscar Jimenez", dorsal: 1 },
        { name: "Roberto Barragán", dorsal: 22 }
    ],
    Defensores: [
        { name: "Luis Sanchez", pos: "DC", dorsal: 3, titular: true },
        { name: "Eduardo Tercero", pos: "DC", dorsal: 4, titular: true },
        { name: "Nico Carrera", pos: "DC", dorsal: 6, titular: true },
        { name: "Christopher Alfaro", pos: "DC", dorsal: 14 },
        { name: "Axl Padilla", pos: "LI", dorsal: 23 },
        { name: "Armando Escobar", pos: "LI", dorsal: 27, titular: true },
        { name: "Walter Portales", pos: "LI", dorsal: 29, titular: true },
        { name: "Diogo Bagui", pos: "DC", dorsal: 32 },
        { name: "Walter Clar", pos: "LI", dorsal: 37 }
    ],
    Mediocampistas: [
        { name: "Martin Fernandez", pos: "MCD", dorsal: 92, titular: true },
        { name: "Alejandro Urzua", pos: "MC", dorsal: 93 },
        { name: "Hardy Meza", pos: "MCD", dorsal: 5, titular: false },
        { name: "Jhojan Julio", pos: "MCO", dorsal: 7, titular: true },
        { name: "Octavio Vázquez", pos: "MCO", dorsal: 10 },
        { name: "Maximiliano García", pos: "MCO", dorsal: 13, titular: false },
        { name: "Leonardo Mejía", pos: "MC", dorsal: 17 },
        { name: "Christian Bermúdez", pos: "MCO", dorsal: 18 },
        { name: "Javier Ibarra", pos: "MCO", dorsal: 21 },
        { name: "Eugenio Pizzuto", pos: "MCD", dorsal: 24, titular: true },
        { name: "Diego Pérez", pos: "MC", dorsal: 29 }
    ],
    Delanteros: [
        { name: "Luis Puente", pos: "DC", dorsal: 9, titular: true },
        { name: "Joaquín Moxica", pos: "DC", dorsal: 11 },
        { name: "Jairón Charcopa", pos: "DC", dorsal: 15 },
        { name: "José González", pos: "ED", dorsal: 16 },
        { name: "Gilberto Adame", pos: "ED", dorsal: 20 },
        { name: "Luis Calzadilla", pos: "EI", dorsal: 22, titular: true },
        { name: "Edgar Jimenez", pos: "ED", dorsal: 34 },
        { name: "Rubén Coubert", pos: "DC", dorsal: 184 }
    ]
};
// #endregion

// #region atleticoSanLuis
const atleticoSanLuis = {
    "Director Técnico": [{ name: "Diego Mejía", dorsal: 90 }],
    Arqueros: [
        { name: "Diego Urtiaga", dorsal: 91 },
        { name: "Andrés Sánchez", dorsal: 1, titular: true },
        { name: "César López", dorsal: 23, titular: false },
        { name: "Gibrán Lajud", dorsal: 25 }
    ],
    Defensores: [
        { name: "Luis Carrillo", pos: "DC", dorsal: 92 },
        { name: "Román Torres", pos: "LD", dorsal: 2, titular: true },
        { name: "Robson Bambu", pos: "DC", dorsal: 3 },
        { name: "Julio César Domínguez", pos: "DC", dorsal: 4 },
        { name: "Juanpe", pos: "DC", dorsal: 6 },
        { name: "Lucas Esteves", pos: "LI", dorsal: 16, titular: false },
        { name: "Aldo Cruz", pos: "LI", dorsal: 18, titular: true },
        { name: "Benjamín Galindo", pos: "DC", dorsal: 30 },
        { name: "Eduardo Águila", pos: "DC", dorsal: 31, titular: true }
    ],
    Mediocampistas: [
        { name: "Johan Caicedo", pos: "MCD", dorsal: 93 },
        { name: "Roberto Meraz", pos: "MCD", dorsal: 5, titular: false },
        { name: "Sebastien Salles-Lamonge", pos: "MC", dorsal: 10, titular: true },
        { name: "David Rodriguez", pos: "MCO", dorsal: 11, titular: true },
        { name: "Miguel Garcia", pos: "MC", dorsal: 14, titular: false },
        { name: "Óscar Macías", pos: "MCO", dorsal: 21, titular: true },
        { name: "Sebastián Pérez-Bouquet", pos: "MCO", dorsal: 26, titular: true },
        { name: "Kevin Ortega", pos: "MCD", dorsal: 35 }
    ],
    Delanteros: [
        { name: "Benjamin Galdames", pos: "ED", dorsal: 7 },
        { name: "Ronaldo Nájera", pos: "EI", dorsal: 8 },
        { name: "João Pedro", pos: "DC", dorsal: 9 },
        { name: "Anderson Duarte", pos: "ED", dorsal: 17, titular: false },
        { name: "Santiago Muñóz", pos: "DC", dorsal: 19, titular: false },
        { name: "Leonardo Flores", pos: "DC", dorsal: 20, titular: true },
        { name: "Rafael Llorente", pos: "ED", dorsal: 22, titular: true },
        { name: "Jesús Medina", pos: "ED", dorsal: 28 }
    ]
};
// #endregion

// #region chivas
const chivas = {
    "Director Técnico": [{ name: "Gabriel Milito", dorsal: 90 }],
    Arqueros: [
        { name: "Raúl Rangel", dorsal: 1, titular: true },
        { name: "Óscar Whalley", dorsal: 13, titular: false },
        { name: "Sebastián Liceaga", dorsal: 31 }
    ],
    Defensores: [
        { name: "José Castillo", pos: "LD", dorsal: 2, titular: true },
        { name: "Diego Campillo", pos: "DC", dorsal: 3, titular: true },
        { name: "Miguel Tapias", pos: "DC", dorsal: 4, titular: true },
        { name: "Bryan González", pos: "LI", dorsal: 5, titular: true },
        { name: "Luis Rey", pos: "DC", dorsal: 16, titular: false },
        { name: "Daniel Aguirre", pos: "DC", dorsal: 23, titular: false },
        { name: "Miguel Gómez", pos: "LD", dorsal: 24, titular: false },
        { name: "Leonardo Sepúlveda", pos: "LI", dorsal: 27, titular: false },
        { name: "Richard Ledezma", pos: "LD", dorsal: 37, titular: true }
    ],
    Mediocampistas: [
        { name: "Omar Govea", pos: "MCD", dorsal: 6, titular: false },
        { name: "Luis Romo", pos: "MC", dorsal: 7, titular: true },
        { name: "Efraín Álvarez", pos: "MCO", dorsal: 10 },
        { name: "Brian Gutiérrez", pos: "MCO", dorsal: 11, titular: true },
        { name: "Kevin Castañeda", pos: "MCO", dorsal: 19, titular: false },
        { name: "Fernando González", pos: "MCD", dorsal: 28 },
        { name: "Santiago Sandoval", pos: "MCO", dorsal: 30 }
    ],
    Delanteros: [
        { name: "Ángel Sepúlveda", pos: "DC", dorsal: 9, titular: false },
        { name: "Hugo Camberos", pos: "ED", dorsal: 14 },
        { name: "Ricardo Marín", pos: "DC", dorsal: 17, titular: false },
        { name: "Jonathan Pérez", pos: "EI", dorsal: 18 },
        { name: "Roberto Alvarado", pos: "ED", dorsal: 25, titular: true },
        { name: "Jordán Carrillo", pos: "EI", dorsal: 33, titular: false },
        { name: "Armando González", pos: "DC", dorsal: 34, titular: true }
    ]
};
// #endregion

// #region clubAmerica
const clubAmerica = {
    "Director Técnico": [{ name: "Guillermo Almada", dorsal: 90 }],
    Arqueros: [
        { name: "Luis Malagon", dorsal: 1, titular: false },
        { name: "Fernando Tapia", dorsal: 21 },
        { name: "Rodolfo Cota", dorsal: 30, titular: true },
        { name: "Cesar Lugo", dorsal: 31 }
    ],
    Defensores: [
        { name: "Emilio Lara", pos: "LD", dorsal: 2 },
        { name: "Israel Reyes", pos: "LD", dorsal: 3, titular: true },
        { name: "Sebastian Caceres", pos: "DC", dorsal: 4, titular: true },
        { name: "Kevin Alvarez", pos: "LD", dorsal: 5, titular: true },
        { name: "Ralph Orquin", pos: "LD", dorsal: 15 },
        { name: "Aaron Mejia", pos: "LD", dorsal: 18 },
        { name: "Franco Rossano", pos: "LI", dorsal: 24 },
        { name: "Cristian Borja", pos: "LI", dorsal: 26, titular: true },
        { name: "Ramon Juarez", pos: "DC", dorsal: 29, titular: false },
        { name: "Miguel Vazquez", pos: "DC", dorsal: 32, titular: false },
        { name: "Dagoberto Espinoza", pos: "LD", dorsal: 34, titular: false }
    ],
    Mediocampistas: [
        { name: "Alan Cervantes", pos: "MCD", dorsal: 13, titular: false },
        { name: "Rodrigo Dourado", pos: "MCD", dorsal: 17 },
        { name: "Alexis Gutiérrez", pos: "MCO", dorsal: 20, titular: false },
        { name: "Raphael Veiga", pos: "MCO", dorsal: 23, titular: true },
        { name: "Érick Sánchez", pos: "MC", dorsal: 28, titular: true },
        { name: "Santiago Naveda", pos: "MCD", dorsal: 35 },
        { name: "Miguel Ramírez", pos: "MC", dorsal: 36 },
        { name: "Lima", pos: "MCO", dorsal: 45 }
    ],
    Delanteros: [
        { name: "Brian Rodríguez", pos: "EI", dorsal: 7, titular: true },
        { name: "Henry Martin", pos: "DC", dorsal: 9, titular: true },
        { name: "Álex Zendejas", pos: "ED", dorsal: 10, titular: true },
        { name: "Victor Dávila", pos: "DC", dorsal: 11 },
        { name: "Isaías Violante", pos: "EI", dorsal: 12, titular: true },
        { name: "José Raúl Zúñiga", pos: "DC", dorsal: 19 },
        { name: "Patricio Salas", pos: "DC", dorsal: 33, titular: false },
        { name: "Esteban Lozano", pos: "DC", dorsal: 37 }
    ]
};
// #endregion

// #region cruzAzul
const cruzAzul = {
    "Director Técnico": [{ name: "Joel Huiqui", dorsal: 90 }],
    Arqueros: [
        { name: "Andrés Gudiño", dorsal: 1, titular: false },
        { name: "Kevin Mier", dorsal: 23, titular: true },
        { name: "Emmanuel Ochoa", dorsal: 30 }
    ],
    Defensores: [
        { name: "Omar Campos", pos: "LI", dorsal: 3, titular: true },
        { name: "Willer Ditta", pos: "DC", dorsal: 4, titular: true },
        { name: "Jesus Orozco Chiquete", pos: "DC", dorsal: 5, titular: false },
        { name: "Alán Montes", pos: "DC", dorsal: 12 },
        { name: "Jorge Rodarte", pos: "LD", dorsal: 22, titular: false },
        { name: "Fernando Sámano", pos: "LD", dorsal: 25 },
        { name: "Raymundo Rubio", pos: "DC", dorsal: 28 },
        { name: "Cristian Jiménez", pos: "DC", dorsal: 32 },
        { name: "Gonzalo Piovi", pos: "DC", dorsal: 33, titular: true }
    ],
    Mediocampistas: [
        { name: "Érik Lira", pos: "MCD", dorsal: 6, titular: true },
        { name: "Agustín Palavecino", pos: "MC", dorsal: 8, titular: true },
        { name: "Andres Montaño", pos: "MC", dorsal: 10, titular: false },
        { name: "Jeremy Marquez", pos: "MC", dorsal: 16, titular: true },
        { name: "Amaury García", pos: "MCD", dorsal: 17, titular: false },
        { name: "Carlos Rodríguez", pos: "MC", dorsal: 19, titular: true },
        { name: "José Paradela", pos: "MCO", dorsal: 20, titular: true }
    ],
    Delanteros: [
        { name: "Nicolás Ibañez", pos: "DC", dorsal: 9, titular: false },
        { name: "Christian Ebere", pos: "DC", dorsal: 11 },
        { name: "Juan Calero", pos: "DC", dorsal: 14 },
        { name: "Luka Romero", pos: "ED", dorsal: 18, titular: false },
        { name: "Gabriel Fernandez", pos: "DC", dorsal: 21, titular: true },
        { name: "Bryan Gamboa", pos: "DC", dorsal: 27 },
        { name: "Carlos Rotondi", pos: "EI", dorsal: 29 },
        { name: "Amaury Morales", pos: "ED", dorsal: 194 },
        { name: "Mateo Levy", pos: "DC", dorsal: 214 }
    ]
};
// #endregion

// #region leon
const leon = {
    "Director Técnico": [{ name: "Javier Gandolfi", dorsal: 90 }],
    Arqueros: [
        { name: "Jordan Garcia", dorsal: 1, titular: false },
        { name: "Oscar García", dorsal: 23, titular: true }
    ],
    Defensores: [
        { name: "Jhohan Romaña", pos: "DC", dorsal: 91, titular: true },
        { name: "Juan Guevara", pos: "DC", dorsal: 92, titular: true },
        { name: "Valentín Gauthier", pos: "DC", dorsal: 2 },
        { name: "Bryan Colula", pos: "LD", dorsal: 4, titular: false },
        { name: "Sebastian Vegas", pos: "DC", dorsal: 5 },
        { name: "Iván Moreno", pos: "LD", dorsal: 7, titular: true },
        { name: "Paul Bellón", pos: "DC", dorsal: 25, titular: false },
        { name: "Salvador Reyes", pos: "LI", dorsal: 26, titular: true },
        { name: "David Ramírez", pos: "LD", dorsal: 28 },
        { name: "Abraham Villegas", pos: "LI", dorsal: 33, titular: false }
    ],
    Mediocampistas: [
        { name: "Santiago Colombatto", pos: "MCD", dorsal: 93 },
        { name: "Nicolás Fonseca", pos: "MCD", dorsal: 94 },
        { name: "Sebastian Fierro", pos: "MC", dorsal: 95 },
        { name: "Sebastian Santos", pos: "MC", dorsal: 96, titular: false },
        { name: "Luis Valadez", pos: "MC", dorsal: 97 },
        { name: "Fernando Beltran", pos: "MC", dorsal: 6, titular: false },
        { name: "Daniel Arcila", pos: "MCO", dorsal: 13, titular: true },
        { name: "Rodrigo Echeverría", pos: "MCD", dorsal: 20, titular: true },
        { name: "Ángel Estrada", pos: "MCO", dorsal: 24 },
        { name: "Iván Rodríguez", pos: "MCD", dorsal: 29 }
    ],
    Delanteros: [
        { name: "Federico Viñas", pos: "DC", dorsal: 98 },
        { name: "Edgar Guerra", pos: "ED", dorsal: 99 },
        { name: "Juan Domínguez", pos: "ED", dorsal: 8 },
        { name: "Ismael Díaz", pos: "EI", dorsal: 11, titular: true },
        { name: "Jordi Cortizo", pos: "ED", dorsal: 16, titular: true },
        { name: "Gael García", pos: "EI", dorsal: 17 },
        { name: "Rogelio Funes Mori", pos: "DC", dorsal: 18, titular: false },
        { name: "Alfonso Alvarado", pos: "DC", dorsal: 19, titular: false },
        { name: "Diber Cambindo", pos: "DC", dorsal: 27, titular: true }
    ]
};
// #endregion

// #region monterrey
const monterrey = {
    "Director Técnico": [{ name: "Matias Almeyda", dorsal: 90 }],
    Arqueros: [
        { name: "Esteban Andrada", dorsal: 91 },
        { name: "César Ramos", dorsal: 92, titular: false },
        { name: "Luis Cardenas", dorsal: 22, titular: true },
        { name: "Santiago Mele", dorsal: 25 }
    ],
    Defensores: [
        { name: "Javier Casillas", pos: "LD", dorsal: 93 },
        { name: "Ricardo Chávez", pos: "LD", dorsal: 2, titular: true },
        { name: "Gerardo Arteaga", pos: "LI", dorsal: 3, titular: true },
        { name: "Victor Guzmán", pos: "DC", dorsal: 4, titular: true },
        { name: "Carlos Salcedo", pos: "DC", dorsal: 13, titular: true },
        { name: "Erick Aguirre", pos: "LD", dorsal: 14 },
        { name: "Alonso Aceves", pos: "LI", dorsal: 19, titular: false },
        { name: "Luis Reyes", pos: "LI", dorsal: 21, titular: false },
        { name: "Stefan Medina", pos: "LD", dorsal: 33, titular: false },
        { name: "César Bustos", pos: "DC", dorsal: 34 }
    ],
    Mediocampistas: [
        { name: "Orbelín Pineda", pos: "MC", dorsal: 94, titular: false },
        { name: "César Garza", pos: "MCD", dorsal: 95 },
        { name: "Fidel Ambriz", pos: "MCD", dorsal: 5, titular: true },
        { name: "Oliver Torres", pos: "MC", dorsal: 8, titular: true },
        { name: "Jorge Rodriguez", pos: "MCD", dorsal: 30 },
        { name: "Sebastian Rodriguez", pos: "MC", dorsal: 32 },
        { name: "Iker Fimbres", pos: "MCO", dorsal: 35, titular: false }
    ],
    Delanteros: [
        { name: "Hugo Cuypers", pos: "DC", dorsal: 96, titular: false },
        { name: "Diego Rossi", pos: "DC", dorsal: 97, titular: false },
        { name: "Luca Orellano", pos: "ED", dorsal: 11, titular: true },
        { name: "Jesus Corona", pos: "ED", dorsal: 17, titular: false },
        { name: "Uros Djurdjevic", pos: "DC", dorsal: 20 },
        { name: "Roberto de la Rosa", pos: "DC", dorsal: 27 },
        { name: "Lucas Ocampos", pos: "EI", dorsal: 29, titular: true }
    ]
};
// #endregion

// #region pachuca
const pachuca = {
    "Director Técnico": [{ name: "Benjamin Mora", dorsal: 90 }],
    Arqueros: [
        { name: "Carlos Moreno", dorsal: 25, titular: true },
        { name: "José Eulogio", dorsal: 31, titular: false }
    ],
    Defensores: [
        { name: "Francisco Venegas", pos: "LI", dorsal: 91 },
        { name: "Mauricio Isais", pos: "LI", dorsal: 92 },
        { name: "Sergio Barreto", pos: "DC", dorsal: 2, titular: true },
        { name: "Eduardo Bauermann", pos: "DC", dorsal: 4, titular: true },
        { name: "Jorge Berlanga", pos: "DC", dorsal: 13, titular: false },
        { name: "Carlos Sánchez", pos: "LD", dorsal: 14, titular: true },
        { name: "René López", pos: "LD", dorsal: 21, titular: false },
        { name: "Alan Mozo", pos: "LD", dorsal: 22 },
        { name: "Andrés Micolta", pos: "DC", dorsal: 33 },
        { name: "Pedro Martínez", pos: "DC", dorsal: 35 }
    ],
    Mediocampistas: [
        { name: "Rodolfo Pizarro", pos: "MCO", dorsal: 93 },
        { name: "Sergio Rodríguez", pos: "MC", dorsal: 94 },
        { name: "Israel Luna", pos: "MCO", dorsal: 15 },
        { name: "Christian Rivera", pos: "MCD", dorsal: 16, titular: true },
        { name: "Alan Bautista", pos: "MCO", dorsal: 26, titular: false },
        { name: "Elias Montiel", pos: "MCD", dorsal: 28, titular: true }
    ],
    Delanteros: [
        { name: "Kenedy", pos: "EI", dorsal: 95, titular: true },
        { name: "Illian Hernández", pos: "DC", dorsal: 96 },
        { name: "Adrian Alcaraz", pos: "DC", dorsal: 97 },
        { name: "Nicolas Vallejo", pos: "ED", dorsal: 98 },
        { name: "Oussama Idrissi", pos: "EI", dorsal: 11, titular: true },
        { name: "Alexei Domínguez", pos: "ED", dorsal: 18, titular: false },
        { name: "Salomon Rondon", pos: "DC", dorsal: 23, titular: true }
    ]
};
// #endregion

// #region tigres
const tigres = {
    "Director Técnico": [{ name: "Guido Pizarro", dorsal: 90 }],
    Arqueros: [
        { name: "Nahuel Guzman", dorsal: 1, titular: true },
        { name: "Antonio Carrera", dorsal: 13, titular: false },
        { name: "Felipe Rodriguez", dorsal: 25 }
    ],
    Defensores: [
        { name: "Alan Franco", pos: "DC", dorsal: 91 },
        { name: "Francisco Reyes", pos: "DC", dorsal: 92 },
        { name: "Marco Farfan", pos: "LI", dorsal: 3, titular: false },
        { name: "Juan Jose Purata", pos: "DC", dorsal: 4, titular: true },
        { name: "Jesús Garza", pos: "LD", dorsal: 14, titular: true },
        { name: "Fernando Ordóñez", pos: "LI", dorsal: 26 },
        { name: "Jesús Angulo", pos: "DC", dorsal: 27, titular: true },
        { name: "Joaquim", pos: "DC", dorsal: 28 },
        { name: "Vladimir Loroña", pos: "LD", dorsal: 32, titular: false },
        { name: "Rafael Guerrero", pos: "DC", dorsal: 33 },
        { name: "Osvaldo Rodríguez", pos: "LI", dorsal: 35 }
    ],
    Mediocampistas: [
        { name: "Henrique Simeone", pos: "MCD", dorsal: 93 },
        { name: "Cesar Araujo", pos: "MCD", dorsal: 5, titular: false },
        { name: "Juan Pablo Vigon", pos: "MC", dorsal: 6, titular: false },
        { name: "Fernando Gorriarán", pos: "MC", dorsal: 8, titular: true },
        { name: "Juan Brunetta", pos: "MCO", dorsal: 11, titular: true },
        { name: "Rômulo", pos: "MCD", dorsal: 23 }
    ],
    Delanteros: [
        { name: "Angel Correa", pos: "ED", dorsal: 7, titular: false },
        { name: "Diego Lainez", pos: "ED", dorsal: 16, titular: true },
        { name: "Rodrigo Aguirre", pos: "DC", dorsal: 17, titular: false },
        { name: "Marcelo Flores", pos: "EI", dorsal: 20, titular: true },
        { name: "Diego Sánchez", pos: "EI", dorsal: 30 },
        { name: "Ozziel Herrera", pos: "ED", dorsal: 77 }
    ]
};
// #endregion

// #region tijuana
const tijuana = {
    "Director Técnico": [{ name: "Sebastian Abreu", dorsal: 90 }],
    Arqueros: [
        { name: "Antonio Rodríguez", dorsal: 2, titular: true },
        { name: "Salim Hernández", dorsal: 29, titular: false }
    ],
    Defensores: [
        { name: "Rafael Fernandez", pos: "LD", dorsal: 3, titular: true },
        { name: "Unai Bilbao", pos: "DC", dorsal: 4, titular: false },
        { name: "Alejandro Gomez", pos: "DC", dorsal: 6, titular: true },
        { name: "Jackson Porozo", pos: "DC", dorsal: 12, titular: true },
        { name: "Alan Vega", pos: "LI", dorsal: 16 },
        { name: "Óscar Manzanarez", pos: "DC", dorsal: 25 },
        { name: "Pablo Ortiz", pos: "LI", dorsal: 33, titular: true }
    ],
    Mediocampistas: [
        { name: "Kevin Escamilla", pos: "MCD", dorsal: 5 },
        { name: "Iván Tona", pos: "MCD", dorsal: 8, titular: true },
        { name: "Gilberto Mora", pos: "MCO", dorsal: 10, titular: true },
        { name: "Ignacio Rivero", pos: "MC", dorsal: 15, titular: false },
        { name: "Ramiro Árciga", pos: "MC", dorsal: 17, titular: true },
        { name: "Ángel Zapata", pos: "MCD", dorsal: 20, titular: false },
        { name: "Aldahir Perez", pos: "MCO", dorsal: 26 },
        { name: "Frank Boya", pos: "MCD", dorsal: 34, titular: false }
    ],
    Delanteros: [
        { name: "Adonis Preciado", pos: "EI", dorsal: 7, titular: true },
        { name: "Mourad El Ghezouani", pos: "DC", dorsal: 9, titular: true },
        { name: "Diego Abreu", pos: "DC", dorsal: 19, titular: false },
        { name: "Josef Martinez", pos: "DC", dorsal: 30 },
        { name: "Yael Padilla", pos: "EI", dorsal: 31, titular: true }
    ]
};
// #endregion

// #region queretaro
const queretaro = {
    "Director Técnico": [{ name: "Esteban González", dorsal: 90 }],
    Arqueros: [
        { name: "Jose Hernández", dorsal: 91 },
        { name: "Guillermo Allison", dorsal: 25, titular: true }
    ],
    Defensores: [
        { name: "Paulo Victor", pos: "LI", dorsal: 92, titular: false },
        { name: "Omar Mendoza", pos: "LD", dorsal: 2 },
        { name: "Lucas Abascia", pos: "DC", dorsal: 2, titular: true },
        { name: "Diego Reyes", pos: "DC", dorsal: 9, titular: true },
        { name: "Carlos Villanueva", pos: "DC", dorsal: 15 },
        { name: "Bayron Duarte", pos: "LD", dorsal: 22, titular: true },
        { name: "Daniel Parra", pos: "LI", dorsal: 27, titular: true }
    ],
    Mediocampistas: [
        { name: "Enzo Giménez", pos: "MC", dorsal: 93, titular: false },
        { name: "Juan Cázares", pos: "MC", dorsal: 94, titular: true },
        { name: "Christopher Figueroa", pos: "MCO", dorsal: 95 },
        { name: "Carlo García", pos: "MC", dorsal: 4, titular: true },
        { name: "Santiago Homenchenko", pos: "MCD", dorsal: 6, titular: true },
        { name: "Bernardo Parra", pos: "MCD", dorsal: 8 },
        { name: "Erik Duenas", pos: "MC", dorsal: 18 },
        { name: "Alex Alcala", pos: "MCO", dorsal: 20 },
        { name: "Jesús Arellano", pos: "MC", dorsal: 30 },
        { name: "Mono Martínez", pos: "MCO", dorsal: 30 }
    ],
    Delanteros: [
        { name: "Jean Unjanque", pos: "ED", dorsal: 14, titular: true },
        { name: "Juan Robles", pos: "EI", dorsal: 23 },
        { name: "Pérez Reyes", pos: "DC", dorsal: 26 },
        { name: "Waldo Madrid", pos: "ED", dorsal: 29 },
        { name: "Ali Avila", pos: "DC", dorsal: 31, titular: true },
        { name: "Mateo Coronel", pos: "DC", dorsal: 37, titular: true },
        { name: "Víctor López", pos: "EI", dorsal: 47 }
    ]
};
// #endregion

// #region pumas
const pumas = {
    "Director Técnico": [{ name: "Esteban Solari", dorsal: 90 }],
    Arqueros: [
        { name: "Miguel Paul", dorsal: 91 },
        { name: "Keylor Navas", dorsal: 1, titular: true },
        { name: "Pablo Lara", dorsal: 35, titular: false },
        { name: "Rodrigo Parra", dorsal: 254 }
    ],
    Defensores: [
        { name: "Cristian Calderón", pos: "LI", dorsal: 92, titular: false },
        { name: "Pablo Bennevendo", pos: "LD", dorsal: 2, titular: true },
        { name: "Rubén Duarte", pos: "DC", dorsal: 3, titular: true },
        { name: "Nathan Silva", pos: "DC", dorsal: 6, titular: true },
        { name: "Pablo Monroy", pos: "LD", dorsal: 13 },
        { name: "Jesús Rivas", pos: "LD", dorsal: 19 },
        { name: "Tony Leone", pos: "DC", dorsal: 24 },
        { name: "Álvaro Angulo", pos: "LI", dorsal: 77, titular: true },
        { name: "Angel Azuaje", pos: "DC", dorsal: 215 }
    ],
    Mediocampistas: [
        { name: "Sebastián Córdova", pos: "MCO", dorsal: 93, titular: true },
        { name: "Piero Quispe", pos: "MCO", dorsal: 94 },
        { name: "Víctor Arteaga", pos: "MCD", dorsal: 95, titular: true },
        { name: "Rodrigo López", pos: "MC", dorsal: 7, titular: true },
        { name: "Santiago Trigos", pos: "MCD", dorsal: 20, titular: false },
        { name: "Ángel Rico", pos: "MCO", dorsal: 26 },
        { name: "Adalberto Carrasquilla", pos: "MC", dorsal: 28 },
        { name: "Pedro Vite", pos: "MC", dorsal: 45, titular: true }
    ],
    Delanteros: [
        { name: "Leo Suárez", pos: "ED", dorsal: 96 },
        { name: "Santiago López", pos: "DC", dorsal: 97 },
        { name: "Guillermo Martínez", pos: "DC", dorsal: 9, titular: false },
        { name: "José Juan Macías", pos: "DC", dorsal: 11 },
        { name: "Uriel Antuna", pos: "ED", dorsal: 21 },
        { name: "Alan Medina", pos: "ED", dorsal: 22, titular: false },
        { name: "Juninho", pos: "DC", dorsal: 23, titular: true },
        { name: "Robert Morales", pos: "DC", dorsal: 31, titular: false }
    ]
};
// #endregion

// #region necaxa
const necaxa = {
    "Director Técnico": [{ name: "Martín Varini Di Zioli", dorsal: 90 }],
    Arqueros: [
        { name: "Christopher Andrade", dorsal: 91, titular: false },
        { name: "Luis Jiménez", dorsal: 12, titular: true }
    ],
    Defensores: [
        { name: "Carlos Vargas", pos: "LI", dorsal: 92, titular: true },
        { name: "Kaiky Naves", pos: "DC", dorsal: 93, titular: false },
        { name: "Mauro Zaleta", pos: "LI", dorsal: 94, titular: false },
        { name: "Diego Ochoa", pos: "DC", dorsal: 95 },
        { name: "Emilio Martínez", pos: "LD", dorsal: 2, titular: false },
        { name: "Agustín Oliveros", pos: "DC", dorsal: 3, titular: true },
        { name: "Alexis Peña", pos: "DC", dorsal: 4 },
        { name: "Francisco Méndez", pos: "DC", dorsal: 20, titular: true },
        { name: "Raúl Martínez", pos: "DC", dorsal: 33, titular: true }
    ],
    Mediocampistas: [
        { name: "Pedro Pedraza", pos: "MCD", dorsal: 96, titular: false },
        { name: "Juan Pablo Torres", pos: "MCO", dorsal: 97 },
        { name: "Matías Espíndola", pos: "MCO", dorsal: 98, titular: false },
        { name: "Danny Leyva", pos: "MCD", dorsal: 6, titular: true },
        { name: "Lorenzo Faravelli", pos: "MCO", dorsal: 8, titular: true },
        { name: "Rogelio Cortéz", pos: "MCO", dorsal: 17, titular: false },
        { name: "Israel Tello", pos: "MCO", dorsal: 18 }
    ],
    Delanteros: [
        { name: "Misael Pedroza", pos: "DC", dorsal: 99, titular: false },
        { name: "Juan Valencia", pos: "DC", dorsal: 100, titular: true },
        { name: "Emilio Rodríguez", pos: "ED", dorsal: 101 },
        { name: "Kevin Rosero", pos: "ED", dorsal: 7 },
        { name: "Julian Carranza", pos: "DC", dorsal: 21, titular: true },
        { name: "Ricardo Monreal", pos: "DC", dorsal: 30, titular: true },
        { name: "Javier Ruiz", pos: "EI", dorsal: 35, titular: true }
    ]
};
// #endregion

// #region toluca
const toluca = {
    "Director Técnico": [{ name: "Antonio Mohamed", dorsal: null }],
    Arqueros: [
        { name: "Hugo González", dorsal: 1, titular: true },
        { name: "Ronaldo Beltrán", dorsal: 12 },
        { name: "David Shrem", dorsal: 18 },
        { name: "Luis García", dorsal: 22, titular: false }
    ],
    Defensores: [
        { name: "Diego Barbosa", pos: "LD", dorsal: 2, titular: true },
        { name: "Antonio Briseño", pos: "DC", dorsal: 3, titular: false },
        { name: "Bruno Mendez", pos: "DC", dorsal: 4, titular: true },
        { name: "Andres Pereira", pos: "DC", dorsal: 6 },
        { name: "Luan Garcia", pos: "DC", dorsal: 13, titular: true },
        { name: "Brian García", pos: "LI", dorsal: 17, titular: true },
        { name: "Santiago Simon", pos: "DC", dorsal: 19, titular: false },
        { name: "Jesús Gallardo", pos: "LI", dorsal: 20 },
        { name: "Everardo López", pos: "LD", dorsal: 25, titular: false }
    ],
    Mediocampistas: [
        { name: "Franco Romero", pos: "MCD", dorsal: 5, titular: false },
        { name: "Víctor Guzmán", pos: "MC", dorsal: 7, titular: true },
        { name: "Nicolas Castro", pos: "MCO", dorsal: 8, titular: false },
        { name: "Jesús Angulo", pos: "MC", dorsal: 10, titular: true },
        { name: "Marcel Ruiz", pos: "MC", dorsal: 14 },
        { name: "Pavel Pérez", pos: "MCD", dorsal: 15, titular: false },
        { name: "Fernando Arce", pos: "MC", dorsal: 24, titular: true },
        { name: "Jorge Díaz", pos: "MCO", dorsal: 29 }
    ],
    Delanteros: [
        { name: "Ernesto Vega", pos: "DC", dorsal: 9 },
        { name: "Helio Nunes", pos: "ED", dorsal: 11 },
        { name: "Edgar López", pos: "ED", dorsal: 21 },
        { name: "Oswaldo Virgen", pos: "EI", dorsal: 23 },
        { name: "Joao Dias", pos: "DC", dorsal: 26 },
        { name: "Erick Gutiérrez", pos: "DC", dorsal: 35 }
    ]
};
// #endregion

// #region santosLaguna
const santosLaguna = {
    "Director Técnico": [{ name: "Renato Alves", dorsal: null }],
    Arqueros: [
        { name: "Carlos Acevedo", dorsal: 1, titular: true },
        { name: "Héctor Holguín", dorsal: 33, titular: false }
    ],
    Defensores: [
        { name: "Mauricio Cuevas", pos: "LI", dorsal: 3 },
        { name: "José Abella", pos: "DC", dorsal: 4 },
        { name: "Efraín Orona", pos: "DC", dorsal: 14 },
        { name: "Emmanuel Echeverría", pos: "LD", dorsal: 17, titular: true },
        { name: "Franco Pardo", pos: "DC", dorsal: 18 },
        { name: "Kevin Picón", pos: "LD", dorsal: 22, titular: true },
        { name: "Felipe Sánchez", pos: "DC", dorsal: 25 },
        { name: "Jonathan Pérez", pos: "LI", dorsal: 28 }
    ],
    Mediocampistas: [
        { name: "Aldo López", pos: "MCD", dorsal: 5, titular: false },
        { name: "Javier Güemez", pos: "MC", dorsal: 6, titular: true },
        { name: "Diego González", pos: "MC", dorsal: 7 },
        { name: "Salvador Mariscal", pos: "MCD", dorsal: 8 },
        { name: "Ezequiel Bullaude", pos: "MCO", dorsal: 10, titular: true },
        { name: "Carlos Gruezo", pos: "MCD", dorsal: 11, titular: true },
        { name: "Joshua Mancha", pos: "MC", dorsal: 15 },
        { name: "Francisco Villalba", pos: "MCO", dorsal: 21, titular: true },
        { name: "Diego Medina", pos: "MC", dorsal: 24 },
        { name: "Ramiro Sordo", pos: "MCO", dorsal: 26, titular: false },
        { name: "Kevin Palacios", pos: "MC", dorsal: 77 }
    ],
    Delanteros: [
        { name: "Lucas Di Yorio", pos: "DC", dorsal: 9, titular: true },
        { name: "Eduardo Aguirre", pos: "DC", dorsal: 19 },
        { name: "Tahiel Jiménez", pos: "EI", dorsal: 29 }
    ]
};
// #endregion

// #region puebla
const puebla = {
    "Director Técnico": [{ name: "Gerardo Espinoza", dorsal: null }],
    Arqueros: [
        { name: "Ricardo Gutiérrez", dorsal: 28, titular: false },
        { name: "Jesús Rodríguez", dorsal: 33, titular: true }
    ],
    Defensores: [
        { name: "Ángel Leyva", pos: "LD", dorsal: 2 },
        { name: "Juan Vargas", pos: "DC", dorsal: 4, titular: true },
        { name: "Facundo Almada", pos: "DC", dorsal: 5 },
        { name: "Eduardo Navarro", pos: "DC", dorsal: 13, titular: true },
        { name: "Oscar Villa", pos: "LI", dorsal: 15 },
        { name: "José Pachuca", pos: "DC", dorsal: 20, titular: true }
    ],
    Mediocampistas: [
        { name: "Alberto Herrera", pos: "MC", dorsal: 3 },
        { name: "Fernando Monárrez", pos: "MC", dorsal: 7 },
        { name: "Omar Moreno", pos: "MCD", dorsal: 8 },
        { name: "Mathías Tomas", pos: "MCO", dorsal: 10 },
        { name: "Iker Moreno", pos: "MC", dorsal: 12, titular: true },
        { name: "Alonso Ramírez", pos: "MCD", dorsal: 16, titular: true },
        { name: "Raúl Castillo", pos: "MC", dorsal: 17 },
        { name: "Sergio Sanabria", pos: "MCO", dorsal: 21 },
        { name: "Carlos Baltazar", pos: "MC", dorsal: 22 },
        { name: "Alejandro Organista", pos: "MCO", dorsal: 24 },
        { name: "Kevin Velasco", pos: "MCD", dorsal: 26, titular: true },
        { name: "Brayan Garnica", pos: "MC", dorsal: 27 },
        { name: "Lucas Azevedo", pos: "MC", dorsal: 34 }
    ],
    Delanteros: [
        { name: "Luifer Hernández", pos: "DC", dorsal: 9 },
        { name: "Emiliano Gómez", pos: "ED", dorsal: 11, titular: true },
        { name: "Ignacio Maestro", pos: "EI", dorsal: 19 },
        { name: "Eduardo Mustre", pos: "DC", dorsal: 29 }
    ]
};
// #endregion

// #region fcJuarez
const fcJuarez = {
    "Director Técnico": [{ name: "Pedro Faria", dorsal: null }],
    Arqueros: [
        { name: "Sebastián Jurado", dorsal: 1, titular: true },
        { name: "Benny Díaz", dorsal: 24 },
        { name: "Guillermo Ruiz", dorsal: 27 }
    ],
    Defensores: [
        { name: "Gilberto Sepúlveda", pos: "LD", dorsal: 2, titular: true },
        { name: "Jesús Murillo", pos: "DC", dorsal: 3, titular: true },
        { name: "Manuel Mayorga", pos: "DC", dorsal: 4, titular: true },
        { name: "Eder López", pos: "LI", dorsal: 14 },
        { name: "Javier Aquino", pos: "LD", dorsal: 20, titular: true },
        { name: "Oscar Ortega", pos: "DC", dorsal: 23, titular: true },
        { name: "Francisco Nevárez", pos: "DC", dorsal: 33 },
        { name: "Bryan Romero", pos: "LI", dorsal: 35 }
    ],
    Mediocampistas: [
        { name: "Denzell García", pos: "MCD", dorsal: 5, titular: true },
        { name: "Ramón Rodríguez", pos: "MC", dorsal: 6 },
        { name: "Raymundo Fulgencio", pos: "MC", dorsal: 7 },
        { name: "Guilherme Castilho", pos: "MCD", dorsal: 8, titular: true },
        { name: "Madson De Souza Silva", pos: "MCO", dorsal: 9 },
        { name: "Ían Torres", pos: "MCO", dorsal: 10 },
        { name: "Jose Rodriguez", pos: "MC", dorsal: 11, titular: true },
        { name: "Lucas Romero", pos: "MCD", dorsal: 15 },
        { name: "Juan Sigala", pos: "MC", dorsal: 16 },
        { name: "Ricardo Oliveira", pos: "MCO", dorsal: 21, titular: true },
        { name: "Said Godínez", pos: "MC", dorsal: 25 }
    ],
    Delanteros: [
        { name: "Luca Martínez", pos: "ED", dorsal: 17 },
        { name: "Oscar Estupiñan", pos: "DC", dorsal: 19, titular: true },
        { name: "Ettson Ayón", pos: "EI", dorsal: 29 }
    ]
};
// #endregion

// #region atlas
const atlas = {
    "Director Técnico": [{ name: "Hernán Crespo", dorsal: null }],
    Arqueros: [
        { name: "Camilo Vargas", dorsal: 12, titular: true },
        { name: "Antonio Sánchez", dorsal: 22 }
    ],
    Defensores: [
        { name: "Gustavo Ferrareis", pos: "LD", dorsal: 2, titular: true },
        { name: "Jorge Sánchez", pos: "LD", dorsal: 3 },
        { name: "Adrián Mora", pos: "DC", dorsal: 4, titular: false },
        { name: "Jorge Rodríguez", pos: "DC", dorsal: 5, titular: true },
        { name: "Gaddi Aguirre", pos: "DC", dorsal: 13, titular: false },
        { name: "Paulo Ramírez", pos: "LI", dorsal: 15 },
        { name: "Milton Valenzuela", pos: "LI", dorsal: 16, titular: false },
        { name: "José Lozano", pos: "DC", dorsal: 17, titular: false },
        { name: "Rodrigo Schlegel", pos: "DC", dorsal: 21, titular: true },
        { name: "Manuel Capasso", pos: "DC", dorsal: 28, titular: true }
    ],
    Mediocampistas: [
        { name: "Edgar Zaldivar", pos: "MCD", dorsal: 6, titular: false },
        { name: "Luis Leite", pos: "MC", dorsal: 10 },
        { name: "Luis De Barros", pos: "MCO", dorsal: 11 },
        { name: "Sergio Hernández", pos: "MC", dorsal: 23 },
        { name: "Aldo Rocha", pos: "MCO", dorsal: 26, titular: true },
        { name: "Víctor Ríos", pos: "MCD", dorsal: 27, titular: true },
        { name: "Arturo González", pos: "MC", dorsal: 58 }
    ],
    Delanteros: [
        { name: "Ryan Mmaee", pos: "DC", dorsal: 8, titular: true }
    ]
};
// #endregion

const ligaMX = {
    atlante,
    atlas,
    atleticoSanLuis,
    chivas,
    clubAmerica,
    cruzAzul,
    fcJuarez,
    leon,
    monterrey,
    necaxa,
    pachuca,
    puebla,
    pumas,
    queretaro,
    santosLaguna,
    tigres,
    tijuana,
    toluca
};

export { atlante, atlas, atleticoSanLuis, chivas, clubAmerica, cruzAzul, fcJuarez, leon, ligaMX, monterrey, necaxa, pachuca, puebla, pumas, queretaro, santosLaguna, tigres, tijuana, toluca };