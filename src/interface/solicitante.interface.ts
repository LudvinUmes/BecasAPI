export interface SolicitanteAttributes {
    id: number;
    id_usuario: number;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    genero: string;
    pais_residencia: string;
    nivel_educativo: string;
    campo_estudio: string;
    fecha_creacion?: Date;
}

export interface SolicitanteCreationAttributes
    extends Partial<SolicitanteAttributes> {}
