<?php

    $destino = "info@hotelcolonjunin.com.ar";
    $desde = $_POST['email'];
    $subject = "Nueva consulta ingresada: " . $_POST['nombre'] . "-" . $_POST['telefono'];
    $mensaje = $_POST['mensaje'];
    mail($destino, $subject, $mensaje, $desde);
    echo '<p>Gracias por enviarnos su consulta. En breve nos comunicaremos con usted</p><a href="index.html">Click para ir a nuestro sitio</a>';

?>