#!/bin/sh

###########################################################
# Permite calcular el SHA256 del bloque script principal
# del archivo HTML especificado.
#
# Argumentos:
#
# arg01: Archivo HTML a procesar buscando scripts.
# arg02: Archivo TEXT con SHA256 de scripts.
###########################################################

HTML_INPUT=${1}
TEXT_OUTPUT=${2}
TEMP_OUTPUT="script-temp.js"

grep '<script>' ${HTML_INPUT} | grep -o '<script>.*</script>' | sed 's/<script>//g' | sed 's/<\/script>//g' | sed -E 's/<script src.*>//g' | tr -d '\n' > ${TEMP_OUTPUT}

node csp-helper.js ${TEMP_OUTPUT} > ${TEXT_OUTPUT}
