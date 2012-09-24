
##ObtenerInfomacionNavegador
	Tipo...............:
	FechaCreacion......:01/01/0001 12:00:00 a.m.
	Autor..............:Jorge Torres
	ArchivoFisico......:InfoNavegadores.js
	Descripcion........:Obtiene información del Navegador, y en el caso de Internet Explorer incluye metodo de comparación para activar notificación al usuario

###Metodo:void (Object object,Int version,Object callback)
Compara la versión del Navegador contra la indicada por el usuario, y en caso de coincidir activa el callback

####Parametro: Object object
Recibe el objecto instanciado de la clase para poder ejecutar los metodos internos

####Parametro: Int version
Recibe numero de versión a comparar, contra la versión del Navegador

####Parametro: Object callback
Recibe función a ejecutar en caso de hacer match la versión suministrada contra la versión del Navegador


###Metodo:void (String url)
Redirije hacia una Url suministrada por el usuario

####Parametro: String url
Recibe dirección URL, hacia la cual debe ir la redirección


###Metodo:void (String mensaje)
Muestra al usuario un PopUp con un mensaje indicado por el usuario

####Parametro: String mensaje
Recibe mensaje que será mostrado al usuario vía PopUp


###Metodo:void (String selector,String stylecss,String texto)
Muestra al usuario un mensaje en el Body del Html y puede tener estilo de Css

####Parametro: String selector
id de elemento Html para ubicar el elemento en el Body

####Parametro: String stylecss
nombre de clase Css, que decorará el elemento Html

####Parametro: String texto
texto que será mostrado en el elemento Html



###Propiedad: String Nombre
Retorna nombre del Navegador

###Propiedad: String SistemaOperativo
Retorna sistema operativo del Navegador

###Propiedad: String Agente
Retorna UserAgent del Navegador

###Propiedad: Int Version
Retorna el numero de versión del Navegador

###Propiedad: Int VersionIE
Retorna el numero de versión de Internet Explorer


.
