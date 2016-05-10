﻿module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.MaterialMethodData
    * @classdesc
    * 材质球的特效数据
    * @version Egret 3.0
    * @platform Web,Native
    */
    export class MaterialMethodData {

        public static lightmapMethod: string = "lightmapMethod";
        public static uvRollMethod: string = "uvRollMethod";

        public type: string;
        public usePower: boolean;
        public texture: string;
        public uSpeed: number = 0;
        public vSpeed: number = 0;

        constructor() {
        }
    }
}