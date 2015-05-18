<?php

    $emailDestino = "info@hotelcolonjunin.com.ar";
    $emailOrigen = "From:" . $_POST['email'];

    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    $resultado = mail($emailDestino, $emailOrigen, $mensaje);

    echo '<p>Gracias por enviarnos su consulta. En breve nos comunicaremos con usted</p><a href="index.html">Click para ir a nuestro sitio</a>';

?>
