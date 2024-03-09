import {
  CATEGORY_FIVE,
  CATEGORY_FIVE_FIVE,
  CATEGORY_FIVE_FOUR,
  CATEGORY_FIVE_THREE,
  CATEGORY_FIVE_TWO,
  CATEGORY_FOUR,
  CATEGORY_FOUR_FIVE,
  CATEGORY_FOUR_FOUR,
  CATEGORY_FOUR_THREE,
  CATEGORY_FOUR_TWO,
  CATEGORY_ONE,
  CATEGORY_ONE_FIVE,
  CATEGORY_ONE_FOUR,
  CATEGORY_ONE_THREE,
  CATEGORY_ONE_TWO,
  CATEGORY_THREE,
  CATEGORY_THREE_FIVE,
  CATEGORY_THREE_FOUR,
  CATEGORY_THREE_THREE,
  CATEGORY_THREE_TWO,
  CATEGORY_TWO,
  CATEGORY_TWO_FIVE,
  CATEGORY_TWO_FOUR,
  CATEGORY_TWO_THREE,
  CATEGORY_TWO_TWO,
} from 'assets/images';
import { Category } from 'models';

export const SIMULATE_MOVIES: Category[] = [
  {
    title: 'Suspenso',
    description: 'Categoría de suspenso',
    imageUrl: CATEGORY_ONE,
    movies: [
      {
        title: 'CACERÍA EN VENECIA',
        description:
          'Ya retirado y viviendo en un exilio autoimpuesto, Poirot asiste a regañadientes a una sesión de espiritismo en un palacio encantado. Pronto se ve inmerso en un siniestro mundo de sombras y secretos cuando uno de los invitados es asesinado.',
        imageUrl: CATEGORY_ONE,
        urlVideo: 'VXQQE5TEkHQ',
      },
      {
        title: 'NADIE PODRÁ SALVARTE',
        description:
          'Brynn encuentra consuelo entre las paredes de la casa donde creció hasta que una noche se despierta por unos extraños ruidos de intrusos sobrenaturales.',
        imageUrl: CATEGORY_ONE_TWO,
        urlVideo: 'ihVAtEmQQ_M',
      },
      {
        title: 'MÁS ALLÁ DE LA MONTAÑA',
        description:
          'Dos personas que no se conocen, un doctor y una reportera gráfica, tratan de sobrevivir después de sufrir un accidente aéreo en las montañas de Colorado. Sabiendo que nadie irá a rescatarlos, emprenden un peligroso viaje hacia la civilización.',
        imageUrl: CATEGORY_ONE_THREE,
        urlVideo: 'n1TiDcF-Qk0',
      },
      {
        title: 'CHEVALIER',
        description:
          'Hijo ilegítimo de una esclava africana y un francés, propietario de una plantación, Joseph Bologne ascendió hasta la cúspide de la sociedad francesa del siglo XVIII gracias a su increíble talento como violinista y compositor.',
        imageUrl: CATEGORY_ONE_FOUR,
        urlVideo: 'Bt-wkytoLgc',
      },
      {
        title: 'LOS OSCUROS SECRETOS DEL PENTÁGONO',
        description:
          'En 1971, los periodistas Katharine Graham y Ben Bradlee, del Washington Post, pusieron en riesgo sus carreras para luchar por la libertad de prensa, apoyar al The New York Times y exponer ante el público que el Gobierno estadounidense llevaba treinta años ocultando información.',
        imageUrl: CATEGORY_ONE_FIVE,
        urlVideo: 'i-WSXFaN29E',
      },
    ],
  },
  {
    title: 'Acción',
    description: 'Categoría de acción',
    imageUrl: CATEGORY_TWO,
    movies: [
      {
        title: 'RÁPIDOS Y FURIOSOS 8',
        description:
          'Con Dom y Letty de luna de miel, Brian y Mia retirados y el resto de la pandilla viviendo en paz, parece que todo está tranquilo. Sin embargo, una misteriosa mujer seducirá a Dom para adentrarlo en el mundo del crimen y traicionar a la pandilla. Ahora tendrán que unirse para traer a casa al hombre que los convirtió en una familia y detener a Cipher de desatar el caos.',
        imageUrl: CATEGORY_TWO,
        urlVideo: 'K9ApecASdpA',
      },
      {
        title: 'LA MOMIA',
        description:
          'Rick OConnell y un compañero descubren las ruinas de Hamunaptra. Después vuelven al mismo lugar con una egiptóloga y su hermano. Allí coinciden con un grupo de americanos que provocan la resurrección de la momia de un diabólico sacerdote egipcio.',
        imageUrl: CATEGORY_TWO_TWO,
        urlVideo: '8gUqc0Dn94w',
      },
      {
        title: 'EL PLANETA DE LOS SIMIOS',
        description:
          'George Taylor forma parte de la tripulación de una nave espacial en una misión de larga duración que se estrella en un planeta desconocido y aparentemente carente de vida inteligente. Sin embargo, pronto se dará cuenta de que está gobernado por una raza de simios mentalmente muy desarrollados que esclavizan a unos seres humanos que son incapaces de comunicarse. Cuando su líder, el doctor Zaius, descubre que Taylor posee el don de la palabra, decide eliminarlo.',
        imageUrl: CATEGORY_TWO_THREE,
        urlVideo: 'kjdOw0J2UNk',
      },
      {
        title: 'EL PROTEGIDO',
        description:
          'David Dunn es el único superviviente de un terrible accidente de tren. El misterioso Elijah Price ofrece a David una extraña explicación a por qué salió sin un solo rasguño - una explicación que amenaza con cambiar su vida y su familia para siempre.',
        imageUrl: CATEGORY_TWO_FOUR,
        urlVideo: 'Lnx-oLlZC4w',
      },
      {
        title: 'BARRY SEAL',
        description:
          'La historia de Barry Seal, un piloto a quien la CIA contrató en los años 80 para realizar una misión encubierta en América Central, la cual fue el origen del nacimiento del cártel de Medellín y casi terminó con la presidencia de Ronald Reagan.',
        imageUrl: CATEGORY_TWO_FIVE,
        urlVideo: 'GKwciFWx45Y',
      },
    ],
  },
  {
    title: 'Aventura',
    description: 'Categoría del futuro',
    imageUrl: CATEGORY_THREE,
    movies: [
      {
        title: 'VOLVER AL FUTURO II',
        description:
          'Doc vuelve a aparecer con una máquina del tiempo mucho más modernizada y le pide a Marty y a su novia que le acompañen al futuro. En el Hill Valley de 2015 deberán solucionar un problema con la ley que tendrá uno de los futuros hijos de Marty y Jenny. En el futuro, Biff Tannen roba la máquina del tiempo y vuelve al pasado para darle a su hijo un libro con estadísticas deportivas para poder ganar una enorme fortuna en las apuestas. Marty y Doc tendrán que parar la posible catástrofe del destino.',
        imageUrl: CATEGORY_THREE,
        urlVideo: 'ixLXR27eGCw',
      },
      {
        title: 'VOLVER AL FUTURO III',
        description:
          'Marty McFly sigue en 1955 y Doc ha retrocedido al año 1885, la época del salvaje oeste. Marty recibe una carta de Doc donde le informa de que la máquina del tiempo está averiada y no puede volver al presente, pero que no le importa seguir en el pasado. Sin embargo, Marty descubre una tumba en la que lee que Doc murió en 1885 y decide ir a rescatar a su amigo.',
        imageUrl: CATEGORY_THREE_TWO,
        urlVideo: '3C8c3EoEfw4',
      },
      {
        title: '127 HORAS',
        description:
          'Un intrépido montañero sufre una caída y queda atrapado en una profunda grieta. La única solución que encuentra, tras pasar varios días en la misma situación, es amputarse un brazo.',
        imageUrl: CATEGORY_THREE_THREE,
        urlVideo: 'aUOZN1-4_wQ',
      },
      {
        title: 'CALABAZOS DRAGONES',
        description:
          'Un encantador ladrón y un grupo de aventureros se embarcan en una búsqueda épica para recuperar una reliquia perdida hace mucho tiempo. Sin embargo, su aventura se tuerce peligrosamente cuando se meten con la gente equivocada.',
        imageUrl: CATEGORY_THREE_FOUR,
        urlVideo: 'YMHFdj5tnsQ',
      },
      {
        title: 'JURASSIC WORLD',
        description:
          'Han pasado 22 años desde que el millonario John Hammond clonara el primer dinosaurio. Con tecnologías mejoradas y nuevas medidas de seguridad, el parque temático "Jurassic World" abre sus puertas. La nueva atracción del parque es el Indominus Rex, una nueva especie de dinosaurio creada por los científicos de forma artificial y más peligrosa que las otras especies conocidas. Sin embargo, algo sale mal y el dinosaurio se escapa y provoca el caos en el parque.',
        imageUrl: CATEGORY_THREE_FIVE,
        urlVideo: 'RFinNxS5KN4',
      },
    ],
  },
  {
    title: 'Drama',
    description: 'Categoría de drama',
    imageUrl: CATEGORY_FOUR,
    movies: [
      {
        title: 'MISIÓN IMPOSIBLE | REPERCUSIÓN',
        description:
          'El espía Ethan Hunt recibe en Belfast un mensaje secreto: los autodenominados "Apóstoles", seguidores del anarquista Solomon Lane, capturado por Hunt hace dos años, están intentando hacerse con tres núcleos de plutonio para crear potentes armas nucleares muy fáciles de transportar.',
        imageUrl: CATEGORY_FOUR,
        urlVideo: '1iNy92H_uDQ',
      },
      {
        title: 'LA FURIA DEL OCÉANO',
        description:
          'Man-sik, nativo de Haeundae, perdió a su compañero de trabajo en un tsunami hace cuatro años, pero ahora lleva una vida sencilla; tiene una pequeña tienda de sushi y se prepara para proponerle matrimonio a su novia de mucho tiempo, Yeon-hee.',
        imageUrl: CATEGORY_FOUR_TWO,
        urlVideo: 'SMbvjuhUbnA',
      },
      {
        title: 'LA ÚLTIMA MONTAÑA',
        description:
          'La historia del alpinista británico Tom Ballard que desapareció con Daniele Nardi mientras intentaban escalar el Nanga Parbat, en Pakistán, en febrero de 2019. Tom era hijo de la alpinista Alison Hargreaves, que murió en el K2 en 1995.',
        imageUrl: CATEGORY_FOUR_THREE,
        urlVideo: 'jzA1VAmCA0k',
      },
      {
        title: 'UN LUGAR POR EL QUE PELEAR',
        description:
          'Greg, un agente de la Agencia de Seguridad Interna, es enviado a infiltrarse en una ZAD bajo una identidad falsa. Allí conoce a Myriam, una activista medioambiental. Dieciocho meses después, Greg regresa a la ZAD en misión oficial.',
        imageUrl: CATEGORY_FOUR_FOUR,
        urlVideo: 'PHY88msIqPk',
      },
      {
        title: 'EL CLUB DE LA PELEA',
        description:
          'Un empleado de oficina insomne en busca de una manera de cambiar su vida se cruza con un vendedor y crean un club de lucha clandestino como forma de terapia.',
        imageUrl: CATEGORY_FOUR_FIVE,
        urlVideo: 'eUm7FNowyNo',
      },
    ],
  },
  {
    title: 'Comedia',
    description: 'Categoría de comedia',
    imageUrl: CATEGORY_FIVE,
    movies: [
      {
        title: 'LA FAMILIA DE MI NOVIA',
        description:
          'Greg Focker va a conocer a los padres de su prometida. El problema es que debe conseguir la aprobación de su suegro, un antiguo agente de la CIA muy exigente y protector con su hija.',
        imageUrl: CATEGORY_FIVE,
        urlVideo: 'm5uMC4CfxSY',
      },
      {
        title: 'FREE GUY',
        description:
          'Un cajero de un banco descubre que en realidad es un personaje sin papel dentro de un brutal videojuego de mundo interactivo.',
        imageUrl: CATEGORY_FIVE_TWO,
        urlVideo: 'VMlmcUelw-c',
      },
      {
        title: 'DEADPOOL',
        description:
          'Wade Wilson, tras ser sometido a un cruel experimento científico, adquiere poderes especiales que le convierten en Deadpool. Armado con sus nuevas habilidades y un retorcido sentido del humor tratará de dar caza al hombre que casi destruye su vida.',
        imageUrl: CATEGORY_FIVE_THREE,
        urlVideo: 'kxyyKU8rgaU',
      },
      {
        title: 'WELCOME AL NORTE',
        description:
          'Los planes de Polito se estropean repentinamente cuando es enviado de manera obligatoria a trabajar a Tijuana por dos años. Sólo y en un lugar completamente diferente, el yucateco deberá encontrar la forma de adaptarse al norte de México hasta poder regresar a su tierra.',
        imageUrl: CATEGORY_FIVE_FOUR,
        urlVideo: 'lE7KE9rtTno',
      },
      {
        title: 'LOS PEQUEÑOS FOCKER',
        description:
          'Los Fockers ahora tienen mellizos. Después de superar incontables obstáculos, Greg Focker por fin tiene una relación más normal con su suegro Jack. Pero Greg consigue un empleo en una farmacéutica y la desconfianza de Jack hacia él se agudiza.',
        imageUrl: CATEGORY_FIVE_FIVE,
        urlVideo: 'z5BQMGQBVlk',
      },
    ],
  },
];
