'use strict'



var vector = [50,60,30,40];



	/* Declaramos otras variables que
	 * nos serviran para iterar. */
	var i, j, aux;

	/* Ordenamos el array de enteros. */
	for (i = 0; i <= 2; i++) {
		for (j = 3; j >= i + 1; j--) {
			if (vector[j - 1] > vector[j]) {
				aux = vector[j];
				vector[j] = vector[j - 1];
				vector[j - 1] = aux;
			}
		}
	}

	/* Imprimimos el array de enteros. */
	for (i = 0; i <= 3; i++) {
		console.log("%d ", vector[i]);
	}




