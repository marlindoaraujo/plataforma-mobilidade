document.getElementById("camera").onclick = function() {
	navigator.camera.getPicture(function(imageData){
		cameraCallback(imageData)
	}, function(){
		console.log('ee')
	},{ destinationType: Camera.DestinationType.FILE_URI })
}

function cameraCallback(imageData) {

   var image = document.getElementById('self')
   image.src = imageData


   navigator.notification.alert("Olá", function(){},'Obrigado', 'OK')


}