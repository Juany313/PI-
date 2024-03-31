//! LA IMPORTANCIA DEL RESET EN CSS
/* 
    Tener en cuenta estos puntos clave:
        Ressetear los estilos del boxModel, margin, padding, bordes, 
        box-sizing.
        Usar el inspector de elementos correctamente.
        Workflow de trabajo: tener una rutina y pasos para maquetar páginas web y aplicarle estilos.

*/

//! POSITION en CSS [GUÍA COMPLETA] en ESPAÑOL 🔴 Eduardo Fierro Pro
//?POSITION
/* 
    Qué es el position
    Tipos de position
    Conceptos en el position
    Reglas memótecnicas
    Consejos para el position
    Cuidado con el Absolute
    Alineación con el position
*/
//* ¿Que es?
/* 
    La propiedad nos permite decirle cómo se va a colocar una etiquera y desde donde se mueve.

    Tiene múltiples valores:
        Static.
        Relative.
        Absolute.
        Fixed.
        Sticky.
*/

//* Conceptos del position
/* 
    Vamos a analizar los 4 conceptos esenciales:
        Flow o Flujo.
        Etiquetas hermanas/contiguas o estiquetas contenedoras.
        Colocación.
        Referencia de colocación.
*/

//? Flow/ Flujo
/* 
    Cuando hablamos del flow o flujo de colocación hablamos de si la etiqueta tiene 
    esa propiedad por defecto o nosotros "obligamos" a la etiqueta a colocarse de forma diferente.
    Existen dos tipos:
        Natural, el que ya viene por defecto.
        Impuesto, el que escribimos nosotros.
*/
//?Etiquetas hermanas/contiguas o estiquetas contenedoras.
/* 
    Etiqueta contenedora: Es la que agrupa a otra etiqueta.
    Etiquetas hermanas: Las estiquetas contiguas a otra.
*/
//?Colocación
/* 
    Cuando hablamos de colocación hablamos de si las etiquetas funcionan con float o flex.
    Estas dos propiedades nos permiten colocar las estiquetas hermanas/contiguas una al lado de otra.
*/
//?Referencia de colocación
/* 
    La clave del position es que una etiqueta dependiendo del position cambia la referencia de sus 
    propiedades top,left,right y bottom.

    Es importante recordar el concepto contenedora e hija
    Y existen 4 referencias:
        Sin referencia.
        Su borde.
        Borde contenedora.
        Borde del Viewport.
*/

//!IMPORTANTE ESTO 
//? Static y relative funciona el flex
/* 
    Static no tiene referencia.
    Relative toma como referencia su borde.
 */
//? Absolute y fixed se superponen, no se apliaca el flex.
//* Cuando pongas un absolute a la contenedora ponele relative.
/* 
    Absolute toma como referencia el borde de su contenedor, el contenedor tiene que tener position relative, 
    sino toma el body
    Fixed toma como referencia el viewport
*/

//? Cuando uso Absolute? 
/* 
    Cuando quiero superponer varias etiquetas hermanas.
    Cuando quiero alinear una etiqueta a los bordes del padre.
*/
//? Cuidado con el Absolute
/* 
    Si pones absolute recuerda ponerla relative al padre.
    Cuando pones absolute la contenedora no toma el tamaño de la hija, esto te obliga a ponerle un height 
    al padre y tendras que cambiarlo en Responsive Design con Breakpoints.
*/

//! Consejos
/* 
    No uses position absolute a lo loco, se usa para superponer etiquetas o para dejar elelemento al borde del padre.
    Piensa siempre en la referencia.
*/

//! CÓMO CENTRAR ETIQUETAS en HTML respecto al POSITION en CSS

//? CENTRAR EN STATIC Y RELATIVE
/* 
    centrar horizontal:
        1 etiqueta, se usa margin auto.
        Mas de una, hay que calcular los anchos y margenes, ejemplocuatro etiquetas, le adas ancho de 25% o 
        menos si tiene margenes.
    Centrar vertical: 
        Se le da Padding a la etiqueta contenedora (padre).

    (se le pone display flex al padre)
        centrar horizontal con flex: 
            Justify-content: center
        Centrar vertical con flex:
            Align-items: center
*/

//? CENTRAR EN ABSOLUTE Y FIXED
/* 
    Recordemos que abosluted y fixed se superponen, esto implica:
        No se pueden centrar varias etiquetas.
        Float y flex no funcionan.
        Tienen en cuenta la contenedora.
        El punto clave son las medidas(px o porcentaje).

*/

//! 5 Claves a tener en cuanta para centrar:
/* 
    Es un texto o una caja?
    Es una etiqueta o muchas?
    Que position tiene?
    Uso o no flex?
    Uso margin o calc()?
*/
