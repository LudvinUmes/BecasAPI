export interface OrganizacionAttributes {
    id: number;
    id_usuario: number;
    nombre: string;
    tipo: string;
    pais: string;
    contacto_email: string;
    sitio_web: string;
    telefono: string;
    fecha_creacion?: Date;
}

export interface OrganizacionCreationAttributes
    extends Partial<OrganizacionAttributes> {}
