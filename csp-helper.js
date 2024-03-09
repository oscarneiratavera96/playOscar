/* eslint-disable no-console */

/**
 * Este script es parte del proceso de construcción y no
 * forma parte del ejecutable final.
 *
 * Permite calcular el SHA-256 del inline script del archivo
 * HTML especificado. Con este valor calculado es posible
 * configurar las cabeceras de CSP correspondientes.
 *
 * Se requiere registrar logs en la salida estandar con el
 * fin de que puedan ser visualizados en el proceso de
 * construcción.
 *
 * El cálculo se realiza de acuerdo a lo indicado en el
 * siguiente enlace:
 *
 * - https://csplite.com/csp24/
 */
const fs = require('fs');
const crypto = require('crypto');

const args = process.argv.slice(2);

const input = fs.readFileSync(args[0]);
const result = crypto.createHash('sha256').update(input).digest('base64');
let ident = input;

// Trunca el texto en caso de que sobrepase los 40 caracteres.
if (ident.length >= 40) {
  ident = ident.slice(0, 40);
}

// Reemplaza caracteres de acuerdo a definición oficial CSP.
const sha256 = result.replace('-', '+').replace('_', '/');

console.log(`[sha256-${sha256}]: <script>${ident}...</script>`);
