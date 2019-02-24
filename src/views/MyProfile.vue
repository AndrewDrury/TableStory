<template>
  <div class="my-profile verticalCenter">
		<b-container fluid class="p-0 verticalCenter">
      <b-row>
        <b-col>
          <h1>My Profile</h1>
					<video autoplay id="webcam" class="d-flex align-items-start"></video>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<style lang="scss">
@import url("/src/assets/main.scss");
</style>

<script>
export default {
  data: () => {
    return {}
  },
  mounted: () => {
    navigator.mediaDevices.enumerateDevices().then( devices =>
		{
      console.log(devices)
      // this is the device id of webcam. WILL NEED TO CHANGE THIS FOR THE LOGITECH WEBCAM
			devices= devices.filter( v => (v.deviceId == "ccc2ae6220fa0a931628143b6d253ae6fda4906cb3c601c4ff2880392935907a")); 
			let device= devices[0];
			if( !device )
			{
				console.log("No devices!");
				return;
			} else {
        console.log(device)
      }
			
			let constraints =
			{
				audio: false, 
				video: {
					deviceId: { ideal: device.deviceId },
					width: { ideal: window.innerWidth/3 },
					height: { ideal: window.innerHeight }
				}
			};
			navigator.mediaDevices.getUserMedia(constraints)
			.then( stream =>
			{
        const video = document.getElementById("webcam")
        video.srcObject = stream
				console.log("DONE");
			})
			.catch( err =>
			{
				console.log(err.name + ": " + err.message);
			});	
		})
		.catch( err =>
		{
			console.log(err.name + ": " + err.message);
		});
  }
}
</script>
