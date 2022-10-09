import * as THREE from '../../libs/three.weapp.js'
import { OrbitControls } from '../../jsm/controls/OrbitControls'

 
Page({
  data: {
    canvasId: null
  },
  onLoad: function () {
    wx.createSelectorQuery()
      .select('#c')
      .node()
      .exec((res) => {
        let canvasId = res[0].node._canvasId
        const canvas = THREE.global.registerCanvas(canvasId, res[0].node)
        
        this.setData({ canvasId })

        const camera = new THREE.PerspectiveCamera(70, canvas.width / canvas.height, 1, 1000);
        camera.position.z = 500;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xAAAAAA);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
      
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.autoRotate = true;
        controls.enableZoom = true;
        camera.position.set(200, 200, 500);
        controls.update();
        const geometry = new THREE.SphereGeometry(225,225,225); 
      
        const texture = new THREE.TextureLoader().load('./map6.png');
        const material = new THREE.MeshBasicMaterial({ map: texture });
      
         
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
      
        renderer.setPixelRatio(wx.getSystemInfoSync().pixelRatio);
        renderer.setSize(canvas.width, canvas.height);
        const backgroundcolor = new THREE.Color('#152238')
        scene.background = backgroundcolor;
        // const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        // scene.add( light );
        function onWindowResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(canvas.width, canvas.height);
        }
        function render() {
          canvas.requestAnimationFrame(render);
          // mesh.rotation.x += 0.005;
          // mesh.rotation.y += 0.01;
          controls.update();
          renderer.render(scene, camera);
        }

        render()

      })
  },
  onUnload: function () {
    THREE.global.unregisterCanvas(this.data.canvasId)
  },
  touchStart(e) {
    console.log('canvas', e)
    THREE.global.touchEventHandlerFactory('canvas', 'touchstart')(e)
  },
  touchMove(e) {
    console.log('canvas', e)
    THREE.global.touchEventHandlerFactory('canvas', 'touchmove')(e)
  },
  touchEnd(e) {
    console.log('canvas', e)
    THREE.global.touchEventHandlerFactory('canvas', 'touchend')(e)
  },
  touchCancel(e) {
    // console.log('canvas', e)
  },
  longTap(e) {
    // console.log('canvas', e)
  },
  tap(e) {
    // console.log('canvas', e)
  },
  documentTouchStart(e) {
    // console.log('document',e)
  },
  documentTouchMove(e) {
    // console.log('document',e)
  },
  documentTouchEnd(e) {
    // console.log('document',e)
  },
})
