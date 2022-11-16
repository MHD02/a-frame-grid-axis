// copy and paste this code on your own document (foo.js)
// this is grid axies for your 3D visualisation 
// version tested of a frame (0.7.1)

const sceneEl = document.querySelector('a-scene');
function gridAxis() {
    const sceneEl = document.querySelector('a-scene');
    let radiusOfCenterSphere = 0.05;
    let posYellow = 0.5;
    let posNegative = -1;
    let posPositive = 1;
    let greenRadius = 0.005;
    let blueRadius = 0.005;
    let redRadius = 0.005;
    let YellowRadius = 0.005;
    let numberOfRow = 11.5;
    let heightOfRow = 22;
    sceneEl.insertAdjacentHTML('afterbegin', `<a-sphere color="gray" radius="${radiusOfCenterSphere}" class="import-grid-axis"></a-sphere>`);
    while (posYellow < numberOfRow) {
        sceneEl.insertAdjacentHTML('afterbegin', `
            <a-cylinder color="green" height="22" radius="0.005" position="0 0 0" class="import-grid-axis">
            <a-box width="0" height="0" rotation="0 0 180" class="import-grid-axis">
            <a-cylinder color="yellow" height="0.5" rotation="0 0 0 " radius="0.009" position="0 ${posYellow} 0" class="import-grid-axis"></a-cylinder>
            </a-box>
            </a-cylinder>
            <a-cylinder color="red" height="${heightOfRow}" rotation="0 0 90 " radius="0.005" position="0 0 0" class="import-grid-axis">
            <a-cylinder color="yellow" height="0.5" rotation="0 0 0 " radius="0.009" position="0 ${posYellow} 0" class="import-grid-axis"></a-cylinder>
            <a-cylinder color="#C1B7B7" height="${heightOfRow}" rotation="0 0 0 " radius="0.001" position="0 0 ${posNegative}" class="import-grid-axis"></a-cylinder>
            <a-cylinder color="#C1B7B7" height="${heightOfRow}" rotation="0 0 0 " radius="0.001" position="0 0 ${posPositive}" class="import-grid-axis"></a-cylinder>
            </a-cylinder>
            <a-cylinder color="blue" height="${heightOfRow}" rotation="0 90 90 " radius="0.005" position="0 0 0" class="import-grid-axis">
            <a-box width="0" height="0" rotation="180 0 0">
            <a-cylinder color="yellow" height="0.5" rotation="0 0 0 " radius="0.009" position="0 ${posYellow} 0" class="import-grid-axis"></a-cylinder>
            <a-cylinder color="#C1B7B7" height="${heightOfRow}" rotation="0 0 0 " radius="0.001" position="0 0 ${posNegative}" class="import-grid-axis"></a-cylinder>
            <a-cylinder color="#C1B7B7" height="${heightOfRow}" rotation="0 0 0 " radius="0.001" position="0 0 ${posPositive}" class="import-grid-axis">
            </a-cylinder>
            </a-box>
            </a-cylinder>
        
    `);
        posYellow++
        posNegative--
        posPositive++
    }
    sceneEl.insertAdjacentHTML("afterbegin", `<div class='position-axies'> 
        <span style="color:red;">X:
        <span style="color:white;" class="ui-x"></span>
        </span>
        &nbsp;
        <span style="color:green;">Y:
        <span style="color:white;" class="ui-y"></span>
        </span>
        &nbsp;
        <span style="color:blue;">Z:
        <span style="color:white;" class="ui-z"></span>
        </span>
        &nbsp;
        </div> 
    `);
  
    function uiDisplay(x, y, z, nani) {
        let get = nani;
        let UiPositionAxies = document.querySelector('.position-axies');
        var position = document.querySelector('a-scene').camera.el.object3D.position;
        if (get === nani) {
            document.querySelector('.ui-x').innerHTML = Math.round(position.x * 100) / 100;
            document.querySelector('.ui-y').innerHTML = Math.round(position.y * 100) / 100;
            document.querySelector('.ui-z').innerHTML = Math.round(position.z * 100) / 100;
        } else {
            let cameraPosX = Math.round(x * 100) / 100;
            let cameraPosY = Math.round(y * 100) / 100;
            let cameraPosZ = Math.round(z * 100) / 100;
            document.querySelector('.ui-x').innerHTML = cameraPosX;
            document.querySelector('.ui-y').innerHTML = cameraPosY;
            document.querySelector('.ui-z').innerHTML = cameraPosZ;
        }
        UiPositionAxies.style.cssText = `
            position: absolute;
            z-index:99999;
            top:20px;
            right:50px;
            color:white;
            padding: 5px 10px;
            user-select:none;
            -webkit-user-select:none;
            `;
    }
    uiDisplay()
    document.addEventListener('keydown', (e) => {
        var position = document.querySelector('a-scene').camera.el.object3D.position;
        uiDisplay(position.x, position.y, position.z, true)
    });
   
    
  
}

gridAxis();
