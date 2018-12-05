(function(){
  var byId = document.getElementById.bind(document)
  const cameraDist = 1000
  var container, stats;
  var camera, controls, scene, renderer, dragControls;
  var objects = [];

  function getSoundcloud(){
    const host2widgetBaseUrl = {
      "wt.soundcloud.test" : "wt.soundcloud.test:9200/",
      "wt.soundcloud.com" : "wt.soundcloud.com/player/",
      "w.soundcloud.com"  : "w.soundcloud.com/player/"
    }
    const songUrl = 'https://soundcloud.com/itsmisterangles/haunting-me-kubbis-reprise'
    const widgetUrl = "http://w.soundcloud.com/player/?url=" + songUrl;
    const iframe = byId('demo-2-sc')
    iframe.src = widgetUrl
    return SC.Widget(iframe)
  }

  function init() {

    container = byId('demo-2-scene');

    let height = 500
    let width = container.offsetWidth

    camera = new THREE.PerspectiveCamera( 70, width / height, 1, 5000 );
    camera.position.z = cameraDist;

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );

    scene.add( new THREE.AmbientLight( 0x505050 ) );

    var light = new THREE.SpotLight( 0xffffff, 1.5 );
    light.position.set( 0, 500, 2000 );
    light.angle = Math.PI / 9;

    light.castShadow = true;
    light.shadow.camera.near = 1000;
    light.shadow.camera.far = 4000;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    scene.add( light );

    var geometry = new THREE.BoxBufferGeometry( 40, 40, 40 );

    for ( var i = 0; i < 100; i ++ ) {

      var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

      object.position.x = Math.random() * 1000 - 500;
      object.position.y = Math.random() * 600 - 300;
      object.position.z = Math.random() * 800 - 400;

      object.rotation.x = Math.random() * 2 * Math.PI;
      object.rotation.y = Math.random() * 2 * Math.PI;
      object.rotation.z = Math.random() * 2 * Math.PI;

      object.scale.x = Math.random() * 2 + 1;
      object.scale.y = Math.random() * 2 + 1;
      object.scale.z = Math.random() * 2 + 1;

      object.castShadow = true;
      object.receiveShadow = true;

      scene.add( object );

      objects.push( object );

    }

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( width, height );

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    container.appendChild( renderer.domElement );

    dragControls = new THREE.DragControls( objects, camera, renderer.domElement );
    dragControls.addEventListener( 'dragstart', function () {

      controls.enabled = false;

    } );
    dragControls.addEventListener( 'dragend', function () {

      controls.enabled = true;

    } );

    controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    var info = document.createElement( 'div' );
    info.style.position = 'absolute';
    info.style.top = '10px';
    info.style.width = '100%';
    info.style.textAlign = 'center';
    info.innerHTML = '<a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> webgl - draggable cubes';
    container.appendChild( info );

    stats = new Stats();
    container.appendChild( stats.dom );

    //

  }
  //


  function animate() {
    requestAnimationFrame( animate );

    render();
  }

  function render() {
    controls.update();
    renderer.render( scene, camera );
  }


  function demo2(){
    init()

    Frames.registerType({
      type: 'vector'
      , default: new THREE.Vector3()
      , interpolator: (from, to, t) => {
        let v = new THREE.Vector3()
        if (!from){ console.log(from, to)}
        v.copy( from )
        return v.lerp( to, t )
      }
    })

    let s = new THREE.Spherical()

    s.setFromVector3( camera.position )
    const schema = { cameraPhi: s.phi, cameraTheta: s.theta, cameraR: s.radius }

    objects.forEach( (obj, i) => {
      schema[`object-${i}`] = {
        type: 'vector'
        , default: obj.position.clone()
      }
    })

    const frames = Frames( schema )
    // console.log(frames._schema)

    dragControls.addEventListener('drag', (e) => {
      let i = objects.indexOf( e.object )

      frames.meddle({
        [`object-${i}`]: e.object.position.clone()
      }, { easing: Frames.Easing.Elastic.Out })
    })

    let userMeddle = false
    controls.addEventListener('start', e => {
      userMeddle = true
    })

    controls.addEventListener('end', e => {
      userMeddle = false
    })

    controls.addEventListener('change', e => {
      if ( !userMeddle ){ return }

      s.setFromVector3( e.target.object.position )

      frames.meddle({
        cameraPhi: s.phi
        , cameraTheta: s.theta
        , cameraR: s.radius
      }, { easing: Frames.Easing.Elastic.Out })
    })

    frames.add({
      cameraTheta: 10 * 2 * Math.PI
    }, {
      id: 'camera'
      , time: '04:54'
      , duration: '04:54'
    })

    for ( let i = 0, l = objects.length; i < l; i++ ){
      let x = Math.random() * 1000 - 500
      let y = Math.random() * 600 - 300
      let z = Math.random() * 800 - 400

      frames.add({
        [`object-${i}`]: new THREE.Vector3(x, y, z)
      }, {
        time: (Math.random() * 60 + 11) * 1000
        , duration: '10s'
        , easing: Frames.Easing.Bounce.Out
      })
    }

    // console.log(frames.timeline)

    animate()

    const widget = getSoundcloud()

    widget.bind(SC.Widget.Events.PLAY_PROGRESS, e => {
      let time = e.currentPosition
      frames.seek(time)

      let state = frames.state

      s.radius = state.cameraR
      s.phi = state.cameraPhi
      s.theta = state.cameraTheta

      // console.log(state['object-2'])

      // console.log(time, state.cameraTheta)
      camera.position.setFromSpherical( s )
      controls.update()

      objects.forEach( (obj, i) => {
        obj.position.copy( state[`object-${i}`] )
      })
      stats.update()
    })
  }

  demo2()
})()
