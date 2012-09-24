//------------- ReadMe --------------//


Nombre..............:ObtenerInfomacionNavegador
Tipo................:
FechaCreacion.......:01/01/0001 12:00:00 a.m.
Autor...............:Jorge Torres
ArchivoFisico.......:InfoNavegadores
Descripcion.........:

//------------- Metodos .............//
	Nombre.............:ComparacionIE
	Tipo...............:Void
	Descripcion........:Compara la versión del Navegador contra la indicada por el usuario, y en caso de coincidir activa el callback

//------------- Parametro
		Nombre............:object
		Tipo..............:Object
		Descripcion.......:Resive el objecto instanciado de la clase para poder ejecutar los metodos internos

//------------- Parametro
		Nombre............:version
		Tipo..............:Int
		Descripcion.......:Resive numero de versión a comparar, contra la versión del Navegador

//------------- Parametro
		Nombre............:callback
		Tipo..............:Object
		Descripcion.......:Resive función a ejecutar en caso de hacer match la versión suministrada contra la versión del Navegador


	Nombre.............:Redireccion
	Tipo...............:Void
	Descripcion........:Redirije hacia una Url suministrada por el usuario

//------------- Parametro
		Nombre............:url
		Tipo..............:String
		Descripcion.......:Resive dirección URL, hacia la cual debe ir la redirección


	Nombre.............:Notificacion.ConAlerta
	Tipo...............:Void
	Descripcion........:Muestra al usuario un PopUp con un mensaje indicado por el usuario

//------------- Parametro
		Nombre............:mensaje
		Tipo..............:String
		Descripcion.......:Resive mensaje que será mostrado al usuario vía PopUp


	Nombre.............:Notificacion.ConElementoHtml
	Tipo...............:Void
	Descripcion........:Muestra al usuario un mensaje en el Body del Html y puede tener estilo de Css

//------------- Parametro
		Nombre............:selector
		Tipo..............:String
		Descripcion.......:Resive id de elemento Html para ubicar el elemento en el Body

//------------- Parametro
		Nombre............:styleCss
		Tipo..............:String
		Descripcion.......:Resive nombre de clase Css, que decorará el elemento Html

//------------- Parametro
		Nombre............:texto
		Tipo..............:String
		Descripcion.......:Resive texto que será mostrado en el elemento Html



//------------- Propiedades .........//
	Nombre.............:Nombre
	Tipo...............:String
	Descripcion........:Retorna nombre del Navegador

	Nombre.............:SistemaOperativo
	Tipo...............:String
	Descripcion........:Retorna sistema operativo del Navegador

	Nombre.............:Agente
	Tipo...............:String
	Descripcion........:Retorna UserAgent del Navegador

	Nombre.............:Version
	Tipo...............:Int
	Descripcion........:Retorna el numero de versión del Navegador

	Nombre.............:VersionIE
	Tipo...............:Int
	Descripcion........:Retorna el numero de versión de Internet Explore


//------------- Variables ...........//
.
