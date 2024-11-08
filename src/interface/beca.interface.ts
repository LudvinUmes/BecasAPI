export interface BecaAttributes {
    id: number;
    id_organizacion: number;
    nombre_beca: string;
    descripcion: string;
    monto: number;
    fecha_inicio: Date;
    fecha_fin: Date;
    pais_destino: string;
    nivel_academico: string;
}

export interface BecaCreationAttributes extends Partial<BecaAttributes> {}
