AFRAME.registerComponent("car-model", {
    schema: {
      model: { type: "string", default: "./cyberpunk_car/scene.gltf" },
      rotationY:{type:'number',default:1}
    },
    init: function() {

      this.el.setAttribute("gltf-model", this.data.model);
      const position = { x: 0, y: 70, z:50 };
      const rotation = { x: 0, y:-75, z: 0 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
    }
  });