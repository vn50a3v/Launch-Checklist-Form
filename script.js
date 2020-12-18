      // Write your JavaScript code here!
window.addEventListener ('load', () => {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
      const target = document.querySelector("#missionTarget"); 
  
      let index = 0;
      target.addEventListener('click', function(){
      target.innerHTML = `
         <div style="position: relative;left: 45%; margin-left: -100px;">
             <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
         </div>
      `;
      index = (index + 1) % json.length;
      });
      });
       });
let form = document.querySelector("#launchForm");
  // Update the Shuttle requirement
 const faulty = document.querySelector('#faultyItems');
 const fuel = document.getElementById('fuelId');
 const cargo = document.getElementById('cargoId');

 let pilot = document.getElementById('pilotName');
 let copilot = document.getElementById('copilotName');
 let Fuel = document.getElementById('fuelId');
 let Cargo = document.getElementById('cargoId');
 
 
 const status= document.getElementById('launchStatus');
 const fuelStatus = document.getElementById('fuelStatus');
 const cargoStatus = document.getElementById('cargoStatus');
 const submit = document.getElementById('Submit');
 
 
       submit.addEventListener('click', (event) => {

         
         

      
   if (!pilot.value ) {
      alert("All fields are required!");
     if(typeof pilot !== "string" ) {
         pilotNameError.innerText = 'Please enter the Pilot Name';
      
         event.preventDefault();
         return;
       }
   }
   else {
      pilotNameError.innerText = '';
   }  
   
   if (!copilot.value ) {
      if(typeof copilot !== "string" ) {
    copilotNameError.innerText = 'Please enter the Co-Pilot Name';
    event.preventDefault();
    return;
  }
}
    else {
     copilotNameError.innerText = '';
                    }     
 if (fuel.value < 10000){
             faulty.style.visibility = 'visible';
             status.innerText= "Shuttle not ready for launch";
             status.style.color= "red";
             fuelLevelError.innerText = 'Please enter a valid number';
             fuelStatus.innerText = "Fuel level too low for launch";
             event.preventDefault();

         }

         if (cargo.value >10000){
              faulty.style.visibility = 'visible';
              status.innerText= "Shuttle not ready for launch";
              status.style.color= "red";
              cargoStatus.innerText = "Cargo Mass is too much for the shuttle to take off";
              fuelLevelError.innerText = 'Please enter a valid number';
              event.preventDefault();
          }    

   if (!Fuel.value ) {
       if(typeof Fuel !== "number" ) {
         fuelLevelError.innerText = 'Please enter the Fuel Level';
         event.preventDefault();
         return;
       }
   }
  else {
   fuelLevelError.innerText = '';
    console.log (Fuel.value);

          }  
 
   if (!Cargo.value ) {
      if(typeof Fuel !== "number" ) {
        cargoMassError.innerText = 'Please enter the Cargo Mass';
        event.preventDefault();
        return;
      }
  }
 else {
  cargoMassError.innerText = '';
  
  }  
  
if ( pilot.value && copilot.value && fuel.value && Cargo.value)
  if(pilot.value)
  {
     if(copilot.value)
      {
         if (fuel.value > 10000) 
         {
           if (Cargo.value < 10000)
           {
             
            status.innerText= "Shuttle is ready for launch";
            status.style.color= "green";
            alert("Recorded!!!");
            }

         }

      }    
   }

         
       });

 
});





