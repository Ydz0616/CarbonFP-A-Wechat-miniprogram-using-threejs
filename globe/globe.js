// pages/globe/globe.js
import * as THREE from '../../threejs.miniprogram-master/build/three.weapp.min'
import { OrbitControls } from '../../threejs.miniprogram-master/examples/jsm/controls/OrbitControls'



Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad(options) {
    wx.createSelectorQuery()
    .select('#c')
    .node()
    .exec((res) => {
      const canvas = THREE.global.registerCanvas(res[0].node)
        
      this.setData({ canvasId: canvas._canvasId })

      const camera = new THREE.PerspectiveCamera(70, canvas.width / canvas.height, 1, 1000);
      camera.position.z = 500;
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xAAAAAA);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
    
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
    
      camera.position.set(200, 200, 500);
      controls.update();
      const geometry = new THREE.BoxBufferGeometry(200, 200, 200);
    
      const texture = new THREE.TextureLoader().load('./pikachu.png');
      const material = new THREE.MeshBasicMaterial({ map: texture });
    
      // const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    
      // renderer.setPixelRatio(wx.getSystemInfoSync().pixelRatio);
      // renderer.setSize(canvas.width, canvas.height);
    
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() { 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
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
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})