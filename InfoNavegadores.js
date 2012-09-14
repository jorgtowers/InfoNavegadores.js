function ObtenerInfomacionNavegador() {
        this.Propiedades = {
            Nombre: { Get: function () { return navigator.appName; } },
            SistemaOperativo: { Get: function () { return navigator.platform; } },
            Agente: { Get: function () { return navigator.userAgent; } },
            Version: { Get: function () { return navigator.appVersion; } },            
            VersionIE: {
                Get: function () {
                    if (navigator.appName == 'Microsoft Internet Explorer') {
                        var ua = navigator.userAgent;
                        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                        if (re.exec(ua) != null)
                            return parseFloat(RegExp.$1);
                    }
                }
            }
        };
        this.Metodos = {
            ComparacionIE: function (object, version, callback) {
                if (version == object.Propiedades.VersionIE.Get()) {
                    if (callback) {
                        callback();
                    }
                }
            },
            Redireccion: function (url) { window.location.href = url; },
            Notificacion: {
                ConAlerta: function (mensaje) { alert(mensaje) },
                ConElementoHtml: function (selector, styleCss, texto) {
                    var x = document.getElementById(selector);
                    if (x != null) {
                        x.setAttribute("class", styleCss);
                        var p = document.createElement("p");
                        text = document.createTextNode(texto);
                        x.appendChild(text);
                    }
                }
            }
        };
    }