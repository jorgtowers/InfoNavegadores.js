

//Div que aloja resultado de la comparaci�n
<div id="content"></div>

//Implementaci�n en HTML
<script type="text/javascript">
    var b = new ObtenerInfomacionNavegador();
    b.Metodos.ComparacionIE(b, 9, function () {
        b.Metodos.Notificacion.ConElementoHtml("content", "claseCSS", "Su navegadore es Internet Explore 6, y este portal esta optimizado para navegadores mayores, le recomendamos actualice su navegador.")
    });
</script>