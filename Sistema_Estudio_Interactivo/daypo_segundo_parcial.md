# Daypo - Base de Datos 1 (segundo parcial) - Módulos 3 y 4

Fuente: daypo.com/base-datos-1-segundo-parcial.html (148 preguntas). Formato de Daypo: la(s) primera(s) opción(es) listada(s) tras la pregunta son las correctas.
Uso personal de estudio; no incluir en el PDF a subir.

1. ¿Qué palabra clave se utiliza en la cláusula SELECT para eliminar las tuplas duplicadas del resultado de una consulta?. DISTINCT. ALL. EXCEPT.

2. ¿Cómo se denomina la cláusula que proporciona un filtro de grupos a una consulta con funciones de grupos y a veces con la cláusula Group By?. HAVING. GROUP BY. ORDER BY.

3. ¿A qué tipo de base de datos es posible acceder mediante SQL?. Relacionales. No relacionales.

4. Completa el Situación seleccionando la palabra que falta en el siguiente concepto: "SQL es un lenguaje ________ de "alto nivel" o "de no procedimiento", que gracias a su fuerte base teórica y su orientación al manejo de conjuntos de registros, y no a registros individuales, permite una alta productividad en codificación y la orientación a objetos". Declarativo. Procedimental.

5. ¿Qué devuelve la siguiente sentencia SQL? SELECT UPPER(nombre) FROM alumno;. Nombre de los alumnos en mayúsculas. Nombre de los alumnos en minúscula. Nombre de los alumnos ordenados ascendentemente.

6. ¿Qué devuelve la siguiente sentencia SQL? SELECT LOWER(nombre) FROM alumno;. Nombre de los alumnos en minúsculas. Nombre de los alumnos en mayúsculas.

7. ¿Cuál de las siguientes funciones se usa para completar a la izquierda con un carácter hasta una cantidad de caracteres determinada?. LPAD. LTRIM. INITCAP.

8. ¿Cuál es el operador que se utiliza en la cláusula SELECT e indica que deben traerse todas las columnas de la o las tablas seleccionadas?. *. -.

9. ¿Cuál es la sentencia SQL que permite consultar los datos que están en las tablas y en las vistas?. SELECT. GROUP BY. HAVING.

10. ¿Cuál es la cláusula obligatoria en la mayoría de las bases de datos para las consultas SELECT?. SELECT. FROM. ORDER BY.

11. ¿Cuál de las siguientes funciones numéricas devuelve un valor numérico, redondeado a la longitud o precisión especificada?. ROUND. TRUNC. SIGN.

12. ¿Cómo se denominan las subconsultas que deben devolver un solo valor? Seleccione la opción correcta. Escalares. Multicolumna.

13. ¿Cuántos valores puede devolver una subconsulta ESCALAR, ubicada en la cláusula SELECT de la consulta principal? Seleccione la opción correcta. Uno. Ninguno.

14. ¿Cuál es la función de SQL que cuenta las filas seleccionadas y filtradas por la consulta y muestra el resultado del conteo?. COUNT(). ROUND(). TRUNC().

15. ¿Qué devuelve la siguiente sentencia SQL? "SELECT SUBSTR(nombre,0,3) FROM alumno;". Las tres primeras letras de una columna llamada "nombre". Las tres últimas letras de una columna llamada "nombre". El contenido de la columna "nombre" con "0" reemplazando a los valores "3" que contiene esta columna.

16. ¿Qué devuelve la siguiente función SQL? "GREATEST (value1, value2)". El mayor valor entre value1 y value2. El menor valor entre value1 y value2. La diferencia de valores entre value1 y value2.

17. ¿Qué devuelve la siguiente función SQL? "LEAST (value1, value2)". El menor valor entre value1 y value2. El mayor valor entre value1 y value2. El promedio de valores entre value1 y value2.

18. ¿Cuál es la cláusula que toma las filas del conjunto de tablas reunidas en el FROM y las separa en grupos con las filas que tienen el mismo valor en la columna nombrada en esta?. GROUP BY. HAVING. ORDER BY.

19. Completa el Situación seleccionando la palabra que falta en el siguiente concepto: "La forma de nombrar una tabla con una abreviatura en el FROM, para poder luego usar en las otras cláusulas esta abreviatura en vez del nombre completo de la tabla, se denomina _______ de la tabla". Alias. Nombre. Columna.

20. ¿Cuál es la cláusula en la que se enumeran las tablas, vistas y subconsultas que deben ser seleccionadas para buscar las columnas que se enumeran en el SELECT?. FROM. WHERE. ORDER BY.

21. ¿Cuál de las siguientes funciones devuelve un carácter de acuerdo a un solo parámetro?. CHR. CONCAT. SUBSTR.

22. Seleccione la opción correcta. En consultas multitablas, las tablas participantes deben obligatoriamente: Conectarse en la condición de reunión o en la cláusula ON por columnas que tengan el mismo dominio. Conectarse a través de sus claves primarias. Conectarse a través de las columnas con el mismo nombre.

23. ¿Qué sentencias SQL pueden aplicar un filtro con la sentencia WHERE? Seleccione la opción correcta. SELECT, UPDATE, DELETE exclusivamente. SELECT exclusivamente. SELECT, UPDATE, DELETE, CREATE (sin subconsultas).

24. Completa el Situación seleccionando la opción correcta. Las subconsultas dentro de las sentencias SQL tienen la característica: De permitir el uso de valores que no se conocen de antemano y que están en la base de datos. De acelerar la ejecución de la sentencia al disminuir los accesos a la base de datos. De permitir establecer relaciones de referencia externas con otras consultas guardadas en el diccionario.

25. En el momento de escribir una consulta que usa alguna función de grupo, ¿qué se debe tener en cuenta? Seleccione la opción correcta. Ignoran las filas que tengan valores null en la columna en la que se aplican. No se pueden usar en la cláusula HAVING. Se pueden usar en la cláusula WHERE.

26. En el momento de escribir una sentencia INSERT, ¿qué debes tener en cuenta? Seleccione la opción correcta. Permite ingresar más de una fila con el uso de subconsultas. Únicamente puede insertar una sola fila por vez. No puede prescindir de la cláusula VALUES.

27. En el momento de escribir una sentencia UPDATE, ¿qué deberás tener en cuenta? Seleccione la opción correcta. Sin la cláusula WHERE, afecta a todas las filas de la tabla. Permite usar subconsultas solamente en el WHERE. No requiere COMMIT para confirmar el cambio.

28. Para evitar crear una vista que no se usará con frecuencia es posible escribir una subconsulta que tenga ese rol en el FROM, ¿Cómo se denomina a estas subconsultas que cumplen el rol de una vista?. In line views. Views on line.

29. Analizas una consulta sobre la tabla clientes, con alias "C". Encuentras en la subconsulta que en la cláusula WHERE de la misma se compara con una columna con el prefijo "C." ¿Qué es?. Una referencia externa. Un error de escritura. Una referencia foránea.

30. Analizas una consulta con subconsultas. ¿Qué debes buscar en la subconsulta para determinar que es una subconsulta correlacionada?. Un alias de una tabla del from de la consulta principal. El operador Outer Join. La presencia de un asterisco.

31. Analizas una situación en la que la consulta debe devolver las filas en un determinado orden. Decides aplicar la cláusula ORDER BY. ¿Cuál de las siguientes afirmaciones es correcta acerca de su uso?. Es la última cláusula de la sentencia SELECT. Debe tener un modificador ASC para indicar este sentido de ordenación. El orden de las columnas en la cláusula no tiene ninguna importancia.

32. Analizas las cláusulas del SELECT. Cuando tomas a HAVING, la debes distinguir de otra cláusula ya que filtran cosas distintas ¿Cuál es la otra cláusula y por qué se distinguen?. Con WHERE porque esta filtra filas y HAVING filtra por funciones de grupo. Con GROUP BY porque aquella filtra filas y esta determina grupos. Con ORDER BY porque esta ordena filas y WHERE filtra filas.

33. Analizas las cláusulas del SELECT. Cuando tomas a EXISTS, se distingue de los otros operadores de comparación por una característica única. ¿Cuál es la característica que distingue a EXISTS del resto de operadores?. Tiene dos partes, no requiere valor a la izquierda de EXISTS. Basta con la expresión EXISTS sin más argumentos. Se puede usar en el FROM.

34. ¿Cuáles son las ventajas principales de utilizar SQL? Selecciona las 4 (cuatro) respuestas correctas. No es un lenguaje propiedad de un proveedor de base de datos. La mayoría de los sistemas de administración de base de datos lo usa. Es fácil de aprender. Puede ejecutar operaciones de base de datos sofisticadas y complejas. Permite su utilización en cualquier tipo de base de datos.

35. ¿Cuáles de las siguientes son las funciones de grupo más usadas en SQL? Selecciona las 4 (cuatro) respuestas correctas. AVG(). COUNT(). STDDEV(). VARIANCE(). MOD().

36. ¿Qué opciones son sentencias DML? Selecciona las 4 (cuatro) respuestas correctas. INSERT. UPDATE. MERGE. DELETE. WHERE.

37. Por ser muy utilizadas las subconsultas, es necesario definir dónde se las puede usar. ¿En qué sentencias y cláusulas se pueden usar las subconsultas? Selecciona las 4 (cuatro) respuestas correctas. SELECT del SELECT. SET del UPDATE. WHERE de todas las sentencias que lo usan. INSERT. GROUP BY del SELECT.

38. Juliana comenzó el desarrollo de una aplicación. SQL es uno de los lenguajes que se utilizarán. ¿Qué podemos afirmar sobre este lenguaje? Selecciona las 4 (cuatro) respuestas correctas. No es propiedad de un proveedor de base de datos. Es usado por la mayoría de los sistemas de administración de bases de datos. Es fácil de aprender. Es un lenguaje poderoso con posibilidad de realizar operaciones complejas. Es orientado a objetos.

39. Estamos por comenzar el desarrollo de una aplicación y estudiamos a SQL como uno de los lenguajes que se utilizarán. ¿Cuáles de las siguientes son características de este lenguaje? Selecciona las 4 (cuatro) respuestas correctas. Procesa los datos como grupos y no como unidades individuales. Provee navegación automática a los datos. Sus sentencias son complejas y poderosas individualmente. SQL no tiene sentencias de control de flujo desde su origen. Permite el manejo de errores con las excepciones.

40. En una consulta a desarrollar para un reporte tienes que negar un operador de comparación. ¿Qué operadores usan NOT para negar la comparación? Selecciona las 4 (cuatro) respuestas correctas. BETWEEN. IN. EXISTS. LIKE. ANY.

41. ¿Cuáles son las características principales de la clave primaria? Selecciona las 3 (tres) respuestas correctas. Mínima. Candidata. Superclave. Restrictiva.

42. ¿Cuáles son las características principales del lenguaje de consultas SQL? Selecciona las 3 (tres) respuestas correctas. Declarativo. Interno. Orientado a conjuntos. Orientado a objetos.

43. ¿Cuáles de las siguientes son funciones generales de comparación? Selecciona las 2 (dos) respuestas correctas. GREATEST. LEAST. INITCAP. REPLACE.

44. ¿Cuáles son las cláusulas obligatorias en el SQL de Oracle? Selecciona las dos (2) opciones correctas. SELECT. FROM. ANY. POWER.

45. El reporte de un tester indica que la sentencia "SELECT id, nombre FROM tabla t WHERE EXISTS (SELECT 'x' FROM tabla1 t1 WHERE t1.id = t.id) es incorrecta porque le falta un valor entre WHERE y EXISTS. Falso. Verdadero.

46. Te encuentras con un reporte que tiene que documentar su funcionamiento. Al revisar la consulta SELECT Nombre, ApellidoFROM Empleados WHERE Sueldo >= 20000" le han escrito un comentario que dice "devuelve el nombre y apellido SOLAMENTE de los empleados con un sueldo mayor a 20000". ¿Es verdadera o falsa esta afirmación del comentario?. Falso. Verdadero.

47. SQL contiene sentencias que permiten controlar el flujo de la ejecución de las operaciones. Falso. Verdadero.

48. Las funciones de grupo pueden aparecer en lista de columnas en el SELECT y en las condiciones dentro de las cláusulas WHERE y HAVING. Falso. Verdadero.

49. Las funciones de fila simple pueden aparecer en lista de columnas en el SELECT y en las condiciones dentro de las cláusulas WHERE. Verdadero. Falso.

50. Cuando se escribe una consulta SELECT con una subconsulta sin correlación, es decir, que no contiene referencias a la consulta principal, el compilador ejecuta primero la subconsulta. Verdadero. Falso.

51. ¿Cuál es la cláusula en la que se escriben condiciones de filtro que permiten elegir aquellas filas que se quieren mostrar?. WHERE. SELECT. FROM.

52. Analizas las cláusulas de la operación "a RIGHT JOIN b ON (condición)". ¿Cuál es el resultado de esta operación?. Devuelve todas las filas de "b" junto con las filas de "a" que cumplen con la condición ubicada en ON (). Devuelve todas las filas de "a" junto con las filas de "b" que cumplen con la condición ubicada en ON (). Devuelve todas las filas de "a" junto con todas las filas de "b" que cumplen o no, con la condición ubicada en ON (). Devuelve las filas de "a" que cumplen, junto con las de "b", con la condición ubicada en ON ().

53. ¿Cuál es la sentencia en DDL que se utiliza para eliminar los objetos, junto con las filas contenidas, las restricciones e índices relacionados?. DROP. DELETE. TRUNCATE.

54. Completa el Situación seleccionando la palabra que falta en el siguiente concepto DDL: "La sentencia _________ borra las filas en bloque y deja la estructura de columnas, índices y constraints sin modificaciones". TRUNCATE. DELETE. MODIFY.

55. ¿Cuál es la sentencia en DDL que se utiliza para cambiar estructuras principales como tablas y, por ejemplo, agregarle componentes como columnas y constraints para responder a las necesidades del modelo?. ALTER. DROP. MODIFY.

56. Completa el Situación seleccionando la palabra que falta en el siguiente concepto DDL: "Las columnas que durante el análisis han sido determinadas como claves candidatas, pueden utilizar la restricción __________ que impide insertar una fila con un valor repetido en esta columna". UNIQUE. CHECK. MODIFY.

57. ¿Cuál es la sentencia DDL completa que se utiliza para agregar constraints en una tabla "NN"?. ALTER TABLE NN ADD. ALTER TABLE NN ENABLE. ALTER TABLE NN CREATE.

58. Durante la creación del modelo de datos debemos crear una tabla y nos encontramos con la sentencia "CREATE TABLE mitabla (id number(8) primary key, micolumna varchar2(40));" que creará una tabla pero, ¿Con qué característica?. No está relacionada con ninguna otra tabla. Tiene una microcolumna como clave primaria. Está relacionada a otra tabla a través de la primary key. Está definida como del tipo asociativo.

59. Seleccione la opción correcta. Para crear un modelo de datos, tenemos que tener en cuenta que los objetos de la base de datos se agrupan lógicamente en: Esquemas. Niveles. Transacciones.

60. En el momento de escribir una sentencia TRUNCATE, ¿qué debes tener en cuenta? Seleccione la opción correcta. No requiere Commit para confirmar el cambio. Eliminará completamente las filas junto con la estructura de la tabla. Eliminará la tabla aunque tuviera constraints referenciales a su clave primaria.

61. Juliana necesita eliminar una tabla. Debe escribir la sentencia "DROP TABLE mitabla;". ¿Qué debe tener en cuenta? Seleccione la opción correcta. Eliminará la tabla y las filas, no pudiendo revertir este cambio con ROLLBACK. Dará error si "mitabla" ya existía. Eliminará la tabla y las filas, pudiendo revertir este cambio con ROLLBACK.

62. Seleccione la opción correcta. Necesitas eliminar la tabla "mitabla". Se debe escribir la sentencia "DROP TABLE mitabla;" teniendo en cuenta que: Es correcta y eliminará todas las filas y la estructura. Es correcta y eliminará todas las filas de la tabla "mitabla", quedando la estructura intacta. Es incorrecta porque no tiene la palabra clave FROM.

63. Seleccione la opción correcta. Si usas DROP TEMPORARY TABLE mitabla: No se ejecuta un COMMIT. Se puede deshacer la operación DROP. La tabla es borrada temporalmente.

64. Carla usa "DROP TEMPORARY TABLE mitabla". ¿Qué sucede al usar esta sentencia?. Se elimina la tabla temporaria "mitabla". Se borran las filas, pero pueden recuperarse con ROLLBACK. Se elimina la tabla "mitabla", pero se puede recuperar con COMMIT.

65. Para el manejo de transacciones existe el sublenguaje TCL y sus tres sentencias. ¿Cuáles de las siguientes opciones pertenecen a este sublenguaje? Selecciona las 4 (cuatro) respuestas correctas. COMMIT. ROLLBACK. SAVEPOINT. SAVE ALL. COMMIT TO SAVEPOINT.

66. Cuando el desarrollador necesita insertar una sola fila en una tabla, suele obviar la lista de columnas y solamente completa la cláusula VALUES del INSERT con los valores a cargar. Esto no es recomendable en las sentencias INSERT que se deben incorporar a aplicaciones ya que se pierde la pista de qué columnas se están insertando. Verdadero. Falso.

67. Completa el Situación seleccionando la palabra que falta en el siguiente concepto: "Cada valor manipulado en la base de datos tiene asociado un tipo de datos. El tipo de dato de un valor se asocia a un conjunto fijo de ________ que este posee". Propiedades. Valores. Columnas.

68. ¿Cuál de los siguientes tipos de datos se utiliza para almacenar caracteres alfanuméricos de longitud variable?. VARCHAR. CHAR. CHARACTER.

69. ¿Cuál es el tipo de datos más adecuado para asignar a una columna que debe almacenar una fecha?. DATE. INT. VARCHAR.

70. Completa el Situación seleccionando la palabra que falta en el siguiente concepto: "La restricción __________ impide insertar una fila con un valor repetido en esta columna". UNIQUE. CHECK. MODIFY.

71. Necesitas crear la tabla "miotratabla". Se presenta la siguiente sentencia "CREATE TABLE miotratabla (id number(6) primary key, texto varchar2(50), mitabla_id number(6) references mitabla(id))" ¿Qué resultado se debe esperar?. Creará una tabla 'miotratabla' que referencia a la tabla 'mitabla'. Creará una tabla 'miotratabla' e insertará una fila en 'mitabla'. No creará la tabla por error de compilación.

72. Seleccione la opción correcta. Necesitas crear la tabla "mitabla". Se debe escribir la sentencia "CREATE TABLE mitabla (id number(8) primary key, micolumna varchar2(40));" que tiene como característica: No estar relacionada con ninguna otra tabla. Estar relacionada a otra tabla a través de una primary key. Estar definida como del tipo asociativo.

73. ¿Cuáles de las siguientes son funciones de carácter, es decir, funciones que devuelven valores caracteres? Selecciona las 4 (cuatro) respuestas correctas. LPAD. CHR. REPLACE. SUBSTR. EXTRACT.

74. ¿Cómo se llaman las unidades de ejecución que contienen las sentencias ejecutables en la extensión procedimental de SQL? Seleccione la opción correcta. Bloques. Unidades. Consultas.

75. Completa con la palabra que falta en el siguiente concepto: SQL/PSM es un lenguaje basado en un estándar, por lo que tiene características ______ entre los motores de datos. Comunes. Totalmente diferentes. Complementarias.

76. Indica la palabra que falta en el siguiente concepto: en PL/SQL la gestión de excepciones es ___________ a la hora de generar las unidades de trabajo. Opcional. Obligatoria. Necesaria.

77. ¿Cómo se inicia un bloque PL/SQL que no tiene que declarar ninguna variable?. BEGIN. DECLARE. DROP.

78. Es la colección de procedimientos, funciones y otros componentes que tienen dos partes: una especificación y un cuerpo que contiene el código de los procedimientos y de las funciones especificadas. ¿A qué tipo de construcción disponible en PL/SQL hace referencia dicho concepto?. Paquetes. Funciones. Triggers.

79. Indica la palabra que falta en el siguiente concepto: SQL es un lenguaje ________ a un único propósito de "alto nivel" o "de no procedimiento", que gracias a su fuerte base teórica y su orientación al manejo de conjuntos de registros, y no a registros individuales, permite una alta productividad en codificación y la orientación a objetos. Limitado. Procedimental. Metódico.

80. ¿Cuál es el tipo de datos propio de PL/SQL que se usa para almacenar variables con tipos de datos compuestos?. RECORD. TABLE. BOOLEAN.

81. ¿Con qué operador se expresa la concatenación en PL/SQL?. ||. **. :=.

82. ¿Cuál es el tipo de datos propio de PL/SQL que se usa para almacenar valores TRUE, FALSE o NULL?. BOOLEAN. INT. NUMERIC.

83. ¿Cómo se denomina la sentencia que define el punto de confirmación de una transacción en PL/SQL?. COMMIT. SAVEPOINT. ROLLBACK.

84. ¿Qué cláusula se usa en SQL/PSM para definir a que variable asignar una columna de la lista del SELECT?. INTO. BEGIN. DECLARE.

85. ¿Para qué se utilizan los cursores en SQL/PSM? Seleccione la opción correcta. Para realizar consultas SELECT. Para realizar consultas INSERT. Para realizar consultas UPDATE.

86. ¿Qué sentencia de control de flujo se usa para recorrer un cursor?. Bucle o loop. Una bifurcación repetitiva. Un bucle definido con IF.

87. ¿Qué acción realiza PL/SQL con la siguiente instrucción para cursores explícitos? "FETCH nombre_cursor INTO lista_variables". Leer datos del cursor. Declarar el cursor. Abrir el cursor.

88. ¿Qué acción realiza la siguiente instrucción? CLOSE nombre_cursor;. Cierra un cursor. Abre un cursor. Cierra un bloque con un cursor definido.

89. ¿Qué acción realiza la siguiente instrucción? OPEN nombre_cursor;. Abre un cursor. Cierra un cursor. Abre un bloque con un cursor definido.

90. ¿Qué instrucción se utiliza en PL/SQL para liberar los recursos usados por un cursor?. CLOSE. END. FETCH.

91. ¿Qué efecto tiene la sentencia "FETCH nombre_cursor INTO v_1, v_2;"en un loop dentro de un bloque SQL/PSM?. Se toma una fila del curso en las variables que correspondan. El bucle finaliza cuando encuentra el dato solicitado. El bucle finaliza cuando no encuentra el dato solicitado.

92. ¿Qué función se usa en SQL/PSM para definir el limitador de cadenas?. DELIMITER ;. end string ;. END ;.

93. ¿Qué función se usa en SQL/PSM para concatenar cadenas?. CONCAT. ||. +.

94. Indique la palabra que falta en el siguiente concepto: "Los cursores se emplean para realizar consultas que pueden devolver cero o más de una _________". Fila. Columna. Tabla.

95. ¿Cómo se declara un cursor explícito en PL/SQL?. CURSOR nombre_cursor IS instrucción_SELECT;. CURSOR nombre_cursor (valor1, valor2,.., valorN)instrucción_SELECT;.

96. ¿Cuál de las siguientes funciones no puede usarse en un disparador?. RETURN. INSERT. DELETE.

97. Seleccione las 3 (tres) respuestas correctas. ¿Cuáles son las zonas en las que se constituyen los bloques en PL/SQL?. Declaraciones. Instrucciones. Excepciones. Inicialización.

98. Seleccione las 2 (dos) respuestas correctas. ¿Cuáles son las únicas cláusulas obligatorias dentro del lenguaje PL/SQL?. BEGIN. END. DECLARE. EXCEPTION.

99. Seleccione las 4 (cuatro) respuestas correctas. ¿Cuáles son las características distintivas de PL/SQL como lenguaje de programación?. Centralización de la lógica en la aplicación. Permite una administración más sencilla de los cambios. Comunicación directa o nativa con otros objetos de la base de datos Oracle. Fácil de leer y posee muchas características para modularizar el manejo de código y de los errores. Reglas de negocio descentralizadas a lo largo de la aplicación.

100. Seleccione las 2 (dos) respuestas correctas. ¿Cuáles de las siguientes son sentencias SQL no permitidas en las rutinas almacenadas?. LOCK TABLES. UNLOCK TABLES. DELETE. UPDATE.

101. Seleccione las 4 (cuatro) respuestas correctas. ¿Qué debe considerarse al trabajar con cursores explícitos en PL/SQL?. Cuando un cursor está cerrado, no se puede leer. Cuando leemos un cursor debemos comprobar el resultado de la lectura utilizando los atributos de los cursores. Cuando se cierra el cursor, es ilegal tratar de usarlo. Es ilegal tratar de cerrar un cursor que ya está cerrado o no ha sido abierto. Cuando un cursor está cerrado, se puede leer.

102. SQL contiene sentencias que permiten controlar el flujo de la ejecución de las operaciones, no necesitando ninguna extensión procedimental. Falso. Verdadero.

103. Seleccione las 4 (cuatro) respuestas correctas. ¿Cuáles de los siguientes son las sentencias que se usan cuando usamos cursores en SQL/PSM?. OPEN. CLOSE. FETCH. INTO. DELIMITER.

104. Seleccione las 3 (tres) respuestas correctas. "PL/SQL son las siglas de Procedural Language/Structured Query Language. PL / SQL ofrece un conjunto de comandos de procedimiento, organizados en bloques (explicados a continuación), que complementan y amplían el alcance de SQL". ¿Cuáles de los siguientes son los comandos mencionados?. Sentencias IF. Bucles. Asignaciones. Sentencias JAVA.

105. Las construcciones en PL/SQL, PROCEDIMIENTOS y FUNCIONES pueden devolver valores al entorno que lo llamó. Verdadero. Falso.

106. La excepción "invalid_cursor" ocurre cuando se quiere abrir un cursor que ha sido abierto previamente. Falso. Verdadero.

107. ¿Cuál de las siguientes opciones completa una afirmación correcta? "En la sentencia CASE la comparación con los valores no coincide con las cláusulas WHEN, se ejecuta lo que está en la cláusula __________". ELSE. WHILE. CASE.

108. ¿Cuál es la opción que completa correctamente la siguiente frase? "Para escribir aplicaciones con acceso a bases de datos con los lenguajes de uso general como Cobol, C o Fortran, sin usar las extensiones procedimentales de SQL, se escriben sentencias de este lenguaje conocido como ________". Embedded SQL o SQL Empotrado. SQL incluido. SQL/PSM.

109. En el momento de escribir una consulta que puede devolver una o mas filas, debes tener en cuenta que tienes que usar: Un cursor. Un procedimiento. Una función.

110. En el momento de escribir una función se debe tener en cuenta que debe incluirse una sentencia, ¿Cuál?. RETURN. EXECUTE. IF.

111. Seleccione la opción correcta. En el momento de escribir en un bloque procedimental una sentencia UPDATE se debe tener en cuenta que: Sin la cláusula WHERE, afecta a todas las filas de la Tabla. Permite usar sub consultas solamente en el WHERE. No requiere COMMIT para confirmar el cambio.

112. Seleccione las 4 (cuatro) respuestas correctas. Por ser muy utilizadas las subconsultas, es necesario definir dónde se las puede usar. ¿En qué sentencias y cláusulas se pueden usar las subconsultas?. SELECT del SELECT. SET del UPDATE. WHERE de todas las sentencias que lo usa. INSERT. En el GROUP BY del SELECT.

113. Seleccione las 4 (cuatro) respuestas correctas. Al querer utilizar el lenguaje SQL para el desarrollo de una aplicación cuyos datos están en una base de datos, ¿cuáles de las siguientes son ventajas de este lenguaje?. No es propiedad de un proveedor de base de datos. Es usado por la mayoría de los sistemas de administración de bases de datos. Es fácil de aprender. Es un lenguaje poderoso con posibilidad de realizar operaciones complejas. Es orientado a objetos.

114. Seleccione las 4 (cuatro) respuestas correctas. Estamos por comenzar el desarrollo de una aplicación y estudiamos a SQL/PSM como uno de los lenguajes que se utilizarán, ¿cuáles de las siguientes son características de este lenguaje?. Procesa los datos con SQL. Provee tratamiento de excepciones. Sus sentencias están agrupadas en bloques. Tiene sentencias de control de flujo. Permite el manejo de errores con las excepciones.

115. Seleccione las 4 (cuatro) respuestas correctas. Tienes que construir un bloque con una consulta que debe usar varias condiciones, ¿qué operadores de comparación usan NOT para negar la comparación?. BETWEEN. IN. EXISTS. LIKE. ANY.

116. Para construir un bloque que tenga la necesidad de ejecutar distintas operaciones repetitivas dentro de una bifurcación, ¿cómo se las puede definir a estas distintas operaciones? Seleccione la opción correcta. Anidando un bucle while dentro de cada salida de una bifurcación. Procesando primero el bucle y luego la bifurcación. Haciendo dos procedimientos diferentes.

117. Es necesario tratar con distintas operaciones en caso de que sea verdadera una bifurcación y otra en caso de ser falsa, ¿con qué cláusula del IF puedes tratar esta situación?. ELSE. WHEN. END IF;.

118. Cuando en una aplicación tienes que resolver con una consulta select, que además de las columnas necesitas hacer cálculos en cada fila recuperada, es recomendable usar una Función. Verdadero. Falso.

119. Cuando en una aplicación tienes que resolver una serie de tareas como parte del proceso de un bloque y estimas que esta serie de tareas las vas a necesitar realizar en otros procesos, ¿qué es recomendable construir?. Un procedimiento con esas tareas. Una consulta compleja. Un bloque para cada situación.

120. Analizando una aplicación en la que es posible que se den situaciones como que un select no devuelva filas o tenga un comportamiento no esperado. ¿Cuál de las siguientes afirmaciones es correcta acerca de como tratar la situación?. Usar el manejo de excepciones. Usar cursores.

121. Analizando una aplicación encontramos que debemos aplicar una bifurcación múltiple, ¿con qué cláusula trataremos cada valor posible esperado?. Con WHEN valor THEN. Con IF simple. Con IF CASE.

122. Analizando en un proceso que la condición para bifurcación no está dada por un valor sino por una condición mas compleja, en el IF podemos usar una cláusula que permita evaluar varias condiciones. ¿Cuál es la cláusula que permite evaluar varias condiciones?. ELSEIF condicion THEN. ELSE condicion THEN. CASE valor.

123. Analizando las partes de un bloque, ¿cuál es la sección donde se define un cursor?. En la sección declarativa. En la sección de tratamiento de excepciones. En la sección ejecutable.

124. Analizando el cuerpo de un bloque persistente de SQL/PSM encontramos la sentencia RETURN. ¿Qué tipo de construcción es?. Una función. Un procedimiento o un disparador. Una función o un disparador.

125. El uso de los disparadores se basa en eventos asociados a procedimientos y funciones. Falso. Verdadero.

126. Te encuentras con una aplicación que usa disparadores y el desarrollador te informa "que un disparador BEFORE se ejecuta solo si cualquier disparador AFTER y la operación misma de fila se ejecuta correctamente". Falso. Verdadero.

127. En MySQL y SQL/PSM se encuentran diversas definiciones de bucle, pero algunas otras se encuentran ausentes como, por ejemplo, FOR. Verdadero. Falso.

128. ¿Cuál es la diferencia principal entre SQL y SQL/PSM?. SQL le dice a la base de datos qué hacer, no cómo hacerlo y SQL/PSM controla cómo se procesan las sentencias. SQL es un motor de base de datos y SQL/PSM un compilador de base de datos. SQL/PSM ejecuta una declaración a la vez y SQL puede ejecutar varios bloques de código a la vez.

129. ¿Cuál es el nombre de la sección en la que se atiende la correspondiente excepción si en algún momento ocurriera un error en el bloque de código?. EXCEPTION. BEGIN. INTO.

130. Los controladores de áreas de memoria que almacenan los resultados de una sentencia SQL son comúnmente denominados: Cursores. Sentencias. Procedimientos.

131. Es el conjunto de sentencias que aceptan y retornan cero o más variables exclusivamente a través de los parámetros. ¿A qué tipo de construcción posible de realizar con PL/SQL hace referencia este concepto?. Procedimientos. Consultas.

132. Durante la creación de una aplicación debes poder hacer un proceso o un cálculo y para ejecutarlo debes incluir la llamada en un SELECT. ¿Qué tipo de construcción usarías?. Una función almacenada. Un procedimiento. Un disparador.

133. Durante la creación de una aplicación necesitas que al modificar una fila en una tabla, haya un proceso automático que ejecute cambios en otra tabla. ¿Qué tipo de construcción usarías?. Disparador. Procedimiento. Función.

134. En el momento de escribir una sentencia DELETE, ¿qué se debe tener en cuenta?. Sin la cláusula WHERE, afecta a todas las filas de la tabla. Eliminará completamente las filas junto con la estructura de la tabla. Eliminará la tabla aunque tuviera constraints referenciales a su clave primaria.

135. En el momento de ser necesario eliminar una tabla, se debe escribir la sentencia "DROP TABLE mitabla;". ¿Qué debes tener en cuenta? Seleccione la opción correcta. En algunas extensiones procedimentales como PL/SQL no se pueden usar sentencias DDL como DROP TABLE. Dará error si "mitabla" ya existía. Eliminará la tabla y las filas, pudiendo revertir este cambio con ROLLBACK.

136. En el momento de ser necesario definir varias variables en un bloque SQL/PSM, ¿qué debes usar para cada variable la sentencia? Seleccione la opción correcta. DECLARE. DEFINE. DELIMITER.

137. Cuando estás desarrollando un bloque almacenado, las sentencias SQL tienen acceso completo a cualquier variable de programa almacenada. Verdadero. Falso.

138. Seleccione las 3 (tres) respuestas correctas. Supongamos que tienes que manejar las transacciones en un bloque SQL/PSM. ¿Cuáles de las siguientes podrías usar?. COMMIT. ROLLBACK. SAVEPOINT. SAVE ALL.

139. Cuando se quiere modificar un procedimiento ya existente es necesario eliminar el anterior. ¿Con cuál de las siguientes sentencias se puede eliminar un procedimiento?. DROP PROCEDURE nombre_procedimiento. DROP nombre_procedimiento.

140. ¿Cuál de las siguientes opciones es correcta cuando se analiza el uso de un disparador?. Si falla un disparador BEFORE, no se realiza la operación en la fila correspondiente. Si falla un disparador AFTER, no se realiza la operación en la fila correspondiente. No es tenido en cuenta el éxito del disparador, la operación que lo dispara se ejecuta siempre.

141. Vas a aplicar disparadores en tu aplicación. ¿Cuál de las siguientes opciones es correcta cuando se analiza el uso de un disparador?. Los disparadores se asocian siempre a una tabla. Los disparadores son independientes de las tablas. Los disparadores necesitan un procedimiento que los ejecuten explícitamente.

142. Es el conjunto de sentencias que aceptan parámetros y que su tarea principal es calcular un valor y devolverlo para finalizar su trabajo. ¿A qué tipo de construcción disponible en SQL/PSM hace referencia dicho concepto?. Funciones. Sentencias.

143. ¿A qué tipo de construcción disponible en PL/SQL hace referencia el siguiente concepto? "Conjunto de sentencias ejecutables asociadas a una tabla y ejecutado ante la ocurrencia de eventos determinados". Triggers. Sentencias.

144. Teniendo en cuenta la siguiente sintaxis realizada en SQL/PSM, "DECLARE nombre_cursor CURSOR FOR sentencia_SELECT;". ¿Qué se crea?. Se declara un cursor. Se usa un cursor.

145. ¿Para qué sirve la sentencia CASE?. Implementa una construcción condicional compleja. Crea una bifurcación simple. Implementa un bucle CASE.

146. Seleccione las 4 (cuatro) respuestas correctas. ¿Cuáles son las categorías en las que pueden dividirse los módulos en PL/SQL?. Procedimientos. Funciones. Triggers. Paquetes. Consultas.

147. En el momento de ser necesario bloquear una tabla, se debe escribir la sentencia "LOCK TABLE;". ¿Qué debes tener en cuenta? Seleccione la opción correcta. En algunas extensiones procedimentales como SQL/PSM no se pueden usar sentencias como LOCK TABLE. Creará una tabla 'miotratabla' e insertará una fila en 'mitabla'. No creará la tabla por error de compilación.

148. Seleccione la opción correcta. En el momento de ser necesario en un bloque SQL/PSM recorrer una tabla para procesar una a una las filas, debes considerar usar: La estructura CURSOR. La sentencia SELECT.
