export interface Producto {

    
    idProducto: string | any;
    nombre: string,
    modelo: string,
    marca: string,
    material: string,
    imagen:string,
    alt:string
    precio:number
    descripcion:string,
    categoria:string,
    descuento:number,
    precioFinal?:number
    stock:number,
    
}