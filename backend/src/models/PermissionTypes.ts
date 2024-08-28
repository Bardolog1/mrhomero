// PermissionTypes.ts

/**
 * Enum de permisos con numeración y descripciones en español.
 * 
 * La numeración ayuda a identificar y gestionar los permisos en la base de datos o en la lógica de negocio.
 * Los permisos están clasificados en categorías lógicas para facilitar la administración y el mantenimiento.
 */
export enum PermissionTypes {

  /** Permisos básicos para garantizar el acceso a la aplicación sin poder a realizar ninguna acción */
  ONLY_BASIC_ACCESS = "1:Acceso básico",
  
  /** Permisos de productos */
  CAN_ADD_PRODUCTS = "2:Puede agregar productos",
  CAN_READ_PRODUCTS = "3:Puede leer productos",
  CAN_EDIT_PRODUCTS = "4:Puede editar productos",
  CAN_DELETE_PRODUCTS = "5:Puede eliminar productos",
  
  /** Permisos de clientes */
  CAN_ADD_CUSTOMERS = "6:Puede agregar clientes",
  CAN_READ_CUSTOMERS = "7:Puede leer clientes",
  CAN_EDIT_CUSTOMERS = "8:Puede editar clientes",
  CAN_DELETE_CUSTOMERS = "9:Puede eliminar clientes",
  
  /** Permisos de empleados */
  CAN_ADD_EMPLOYEES = "10:Puede agregar empleados",
  CAN_READ_EMPLOYEES = "11:Puede leer empleados",
  CAN_EDIT_EMPLOYEES = "12:Puede editar empleados",
  CAN_DELETE_EMPLOYEES = "13:Puede eliminar empleados",
  
  /** Permiso de promoción de empleados */
  CAN_PROMOTE_EMPLOYEES = "14:Puede promover empleados",
  
  /** Permisos de órdenes (Comandas) */
  CAN_GENERATE_ORDERS = "15:Puede generar órdenes (Comandas)",
  CAN_READ_ORDERS = "16:Puede leer órdenes (Comandas)",
  CAN_EDIT_ORDERS = "17:Puede editar órdenes (Comandas)",
  CAN_DELETE_ORDERS = "18:Puede eliminar órdenes (Comandas)",
  
  /** Permisos de facturas */
  CAN_GENERATE_INVOICES = "19:Puede generar facturas",
  CAN_READ_INVOICES = "20:Puede leer facturas",
  CAN_EDIT_INVOICES = "21:Puede editar facturas",
  CAN_DELETE_INVOICES = "22:Puede eliminar facturas",
  
  /** Permisos de reportes */
  CAN_ADD_REPORTS = "23:Puede agregar reportes",
  CAN_READ_REPORTS = "24:Puede leer reportes",
  CAN_EDIT_REPORTS = "25:Puede editar reportes",
  CAN_DELETE_REPORTS = "26:Puede eliminar reportes",
  
  /** Permisos de categorías */
  CAN_ADD_CATEGORIES = "27:Puede agregar categorías",
  CAN_READ_CATEGORIES = "28:Puede leer categorías",
  CAN_EDIT_CATEGORIES = "29:Puede editar categorías",
  CAN_DELETE_CATEGORIES = "30:Puede eliminar categorías",
  
  /** Permisos de marcas */
  CAN_ADD_BRANDS = "31:Puede agregar marcas",
  CAN_READ_BRANDS = "32:Puede leer marcas",
  CAN_EDIT_BRANDS = "33:Puede editar marcas",
  CAN_DELETE_BRANDS = "34:Puede eliminar marcas",
  
  /** Permisos de ingredientes */
  CAN_ADD_INGREDIENTS = "35:Puede agregar ingredientes",
  CAN_READ_INGREDIENTS = "36:Puede leer ingredientes",
  CAN_EDIT_INGREDIENTS = "37:Puede editar ingredientes",
  CAN_DELETE_INGREDIENTS = "38:Puede eliminar ingredientes",
  
  /** Permisos de documentos */
  CAN_ADD_DOCUMENTS = "39:Puede agregar documentos",
  CAN_READ_DOCUMENTS = "40:Puede leer documentos",
  CAN_EDIT_DOCUMENTS = "41:Puede editar documentos",
  CAN_DELETE_DOCUMENTS = "42:Puede eliminar documentos",
  
  /** Permisos de tipos de documentos */
  CAN_ADD_DOCUMENT_TYPES = "43:Puede agregar tipos de documentos",
  CAN_READ_DOCUMENT_TYPES = "44:Puede leer tipos de documentos",
  CAN_EDIT_DOCUMENT_TYPES = "45:Puede editar tipos de documentos",
  CAN_DELETE_DOCUMENT_TYPES = "46:Puede eliminar tipos de documentos",
  
  /** Permisos de permisos */
  CAN_ADD_PERMISSIONS = "47:Puede agregar permisos",
  CAN_READ_PERMISSIONS = "48:Puede leer permisos",
  CAN_EDIT_PERMISSIONS = "49:Puede editar permisos",
  CAN_DELETE_PERMISSIONS = "50:Puede eliminar permisos",
  
  /** Permisos de roles */
  CAN_ADD_ROLES = "51:Puede agregar roles",
  CAN_READ_ROLES = "52:Puede leer roles",
  CAN_EDIT_ROLES = "53:Puede editar roles",
  CAN_DELETE_ROLES = "54:Puede eliminar roles",
  
  /** Permisos de departamentos */
  CAN_ADD_DEPARTMENTS = "55:Puede agregar departamentos",
  CAN_READ_DEPARTMENTS = "56:Puede leer departamentos",
  CAN_EDIT_DEPARTMENTS = "57:Puede editar departamentos",
  CAN_DELETE_DEPARTMENTS = "58:Puede eliminar departamentos",
  
  /** Permisos de ventas */
  CAN_READ_SALES = "59:Puede leer ventas",
  CAN_EDIT_SALES = "60:Puede editar ventas",
  CAN_DELETE_SALES = "61:Puede eliminar ventas",
  
  /** Permisos de compras */
  CAN_ADD_PURCHASES = "62:Puede agregar compras (Ordenes de compra o compras a proveedores)",
  CAN_READ_PURCHASES = "63:Puede leer compras (Ordenes de compra o compras a proveedores)",
  CAN_EDIT_PURCHASES = "64:Puede editar compras (Ordenes de compra o compras a proveedores)",
  CAN_DELETE_PURCHASES = "65:Puede eliminar compras (Ordenes de compra o compras a proveedores)",
  
  /** Permisos de proveedores */
  CAN_ADD_SUPPLIERS = "66:Puede agregar proveedores",
  CAN_READ_SUPPLIERS = "67:Puede leer proveedores",
  CAN_EDIT_SUPPLIERS = "68:Puede editar proveedores",
  CAN_DELETE_SUPPLIERS = "69:Puede eliminar proveedores",
  
  /** Permisos de gastos */
  CAN_ADD_EXPENSES = "70:Puede agregar gastos (Gastos de mantenimiento, gastos de operación, etc.)",
  CAN_READ_EXPENSES = "71:Puede leer gastos (Gastos de mantenimiento, gastos de operación, etc.)",
  CAN_EDIT_EXPENSES = "72:Puede editar gastos (Gastos de mantenimiento, gastos de operación, etc.)",
  CAN_DELETE_EXPENSES = "73:Puede eliminar gastos (Gastos de mantenimiento, gastos de operación, etc.)",
  
  /** Permisos de métodos de pago */
  CAN_ADD_PAYMENTS = "74:Puede agregar tipos métodos de pago",
  CAN_READ_PAYMENTS = "75:Puede leer tipos métodos de pago",
  CAN_EDIT_PAYMENTS = "76:Puede editar tipos métodos de pago",
  CAN_DELETE_PAYMENTS = "77:Puede eliminar tipos métodos de pago",
  
  /** Permisos de nóminas */
  CAN_ADD_PAYROLLS = "78:Puede agregar nóminas",
  CAN_READ_PAYROLLS = "79:Puede leer nóminas",
  CAN_EDIT_PAYROLLS = "80:Puede editar nóminas",
  CAN_DELETE_PAYROLLS = "81:Puede eliminar nóminas",
  
  /** Permisos de activos */
  CAN_ADD_ASSETS = "82:Puede agregar activos",
  CAN_READ_ASSETS = "83:Puede leer activos",
  CAN_EDIT_ASSETS = "84:Puede editar activos",
  CAN_DELETE_ASSETS = "85:Puede eliminar activos",
  
  /** Permisos de monedas */
  CAN_ADD_CURRENCIES = "86:Puede agregar monedas",
  CAN_READ_CURRENCIES = "87:Puede leer monedas",
  CAN_EDIT_CURRENCIES = "88:Puede editar monedas",
  CAN_DELETE_CURRENCIES = "89:Puede eliminar monedas",
  
  /** Permisos de impuestos */
  CAN_ADD_TAXES = "90:Puede agregar impuestos",
  CAN_READ_TAXES = "91:Puede leer impuestos",
  CAN_EDIT_TAXES = "92:Puede editar impuestos",
  CAN_DELETE_TAXES = "93:Puede eliminar impuestos",
  
  /** Permisos de mesas */
  CAN_ADD_TABLES = "94:Puede agregar mesas",
  CAN_READ_TABLES = "95:Puede leer mesas",
  CAN_EDIT_TABLES = "96:Puede editar mesas",
  CAN_DELETE_TABLES = "97:Puede eliminar mesas",
  
  /** Permisos de reservaciones */
  CAN_ADD_RESERVATIONS = "98:Puede agregar reservaciones",
  CAN_READ_RESERVATIONS = "99:Puede leer reservaciones",
  CAN_EDIT_RESERVATIONS = "100:Puede editar reservaciones",
  CAN_DELETE_RESERVATIONS = "101:Puede eliminar reservaciones",
  
  /** Permisos de delivery */
  CAN_ADD_DELIVERY = "102:Puede agregar delivery",
  CAN_READ_DELIVERY = "103:Puede leer delivery",
  CAN_EDIT_DELIVERY = "104:Puede editar delivery",
  CAN_DELETE_DELIVERY = "105:Puede eliminar delivery",
  
  /** Permisos de eventos */
  CAN_ADD_EVENTS = "106:Puede agregar eventos",
  CAN_READ_EVENTS = "107:Puede leer eventos",
  CAN_EDIT_EVENTS = "108:Puede editar eventos",
  CAN_DELETE_EVENTS = "109:Puede eliminar eventos"
}

/**
 * Clase de utilidad para manejar permisos.
 * 
 * Proporciona métodos para obtener el ID y la descripción de los permisos del enum `PermissionTypes`.
 */
export class PermissionHelper {
  /**
   * Obtiene el ID del permiso.
   * 
   * @param permission El permiso del tipo `PermissionTypes`.
   * @returns El ID del permiso como una cadena.
   */
  static getId(permission: PermissionTypes): string {
      return permission.split(":")[0];
  }

  /**
   * Obtiene la descripción del permiso.
   * 
   * @param permission El permiso del tipo `PermissionTypes`.
   * @returns La descripción del permiso como una cadena.
   */
  static getDescription(permission: PermissionTypes): string {
      return permission.split(":")[1];
  }
}
