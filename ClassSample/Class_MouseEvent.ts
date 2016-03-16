﻿module egret3d {
    export class Class_MouseEvent extends Class_View3D {

        private cube: Mesh;
        private mouse3DManager: Mouse3DManager;
        private view1: View3D;
        constructor() {
            super();
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("mon");
            var tex: ImageTexture = new ImageTexture(img);
            var mat: TextureMaterial = new TextureMaterial(tex);
            //var mat: ColorMaterial = new ColorMaterial(0xff0000);
            var geometery: SphereGeometry = new SphereGeometry();
            this.cube = new Mesh(geometery, mat);


            this.cube.mouseEnable = true;
            this.cube.addEventListener(Event3D.MOUSE_DOWN, (e) => this.onMouseDown(e));
            this.cube.addEventListener(Event3D.MOUSE_UP, (e) => this.onMouseUp(e));
            this.cube.addEventListener(Event3D.MOUSE_CLICK, (e) => this.onClick(e));
            this.cube.addEventListener(Event3D.MOUSE_MOVE, (e) => this.onMouseMove(e));


            this.view1 = new View3D(0, 0, window.innerWidth, window.innerHeight);
            this.view1.camera3D.lookAt(new Vector3D(0, 0, -1000), new Vector3D(0, 0, 0));
            this.view1.backColor = 0xff000000;
            this._egret3DCanvas.addView3D(this.view1);
            this.view1.addChild3D(this.cube);

            var lights: LightGroup = new LightGroup();
            var dirLight: DirectLight = new DirectLight(new Vector3D(-0.5, 0.6, 0.2));
            dirLight.diffuse = 0xff0000ff;
            lights.addLight(dirLight);
            this.cube.material.lightGroup = lights;
            this.mouse3DManager = new Mouse3DManager(this.view1.camera3D, this.view1, this._egret3DCanvas);
            this._egret3DCanvas.start();
            this._egret3DCanvas.addEventListener(Event3D.ENTER_FRAME, (e) => this.update(e));

        }

        private onMouseDown(code: number): void {
            console.log("OnMouseDown");
        }
        private onMouseUp(code: number): void {
            console.log("onMouseUp");
        }
        private onClick(code: number): void {
            console.log("onClick");
        }
        private onMouseMove(e: MouseEvent): void {
            console.log("onMouseMove");
        }
        public update(e: Event3D) {
            this.mouse3DManager.update(this.view1.entityCollect);
            this.cube.rotationY += 0.5;
            this.cube.rotationX += 0.5;
        }
    }
} 