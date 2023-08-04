<?php
if ($_SERVER['REQUEST_METHOD']=="POST") {

		$telefono = $_POST['telefono'];
		$correo = $_POST['correo'];
		$mensaje = $_POST['mensaje'];

		$destinatario = "julioalb4488@gmail.com";

		$asunto = "mensaje del formulario de contacto";
		$cuerpoMensaje = "Telefono: " . $telefono ."\n";
		$cuerpoMensaje .= "Correo Electronico: " . $correo . "\n";
		$cuerpoMensaje .= "Mensaje : \n" . $mensaje;

		if (mail($destinatario, $asunto, $cuerpoMensaje)) {
			echo "Mensaje enviado correctamente";
		}else{
			echo "Hubo un error al enviar el mensaje";
		}
}


?>