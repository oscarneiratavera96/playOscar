import 'yup';

declare module 'yup' {
  interface StringSchema {
    rut(rut: string): StringSchema;
    soloNumero(message?: string): StringSchema;
    noNumero(message?: string): StringSchema;
    documentNumber(documentNumber: string): StringSchema;
    numeroCliente(numeroCliente: string): StringSchema;
    equalTo(ref: any, message?: string): StringSchema;
  }
}
