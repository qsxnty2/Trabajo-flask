from flask import Flask
from flask_cors import CORS
import math as mt
from flask import jsonify
app=Flask(__name__)
CORS(app)

@app.route('/')
def hola_flask():
    return "<h1>¡Hola, Flask!</h1><hr>"

@app.route('/ruta2')
def ruta2():
    return "<strong>Estamos en la segunda ruta</strong>"

@app.route('/ruta3')
def ruta3():
    return "<em>Estamos en la tercera ruta</em><hr>"

## notas

@app.route("/notas")
@app.route("/notas/<float:nota1>/<float:nota2>/<float:nota3>")
@app.route("/notas/<int:nota1>/<int:nota2>/<int:nota3>")
def notas(nota1=0, nota2=0, nota3=0):
    resultado = (nota1 * 30) / 100 + (nota2 * 30) / 100 + (nota3 * 40) / 100
    return f"<h1>El resultado es: {resultado}</h1><hr>"

## edades

@app.route('/edades')
@app.route('/edades/<int:edad>')
def edades(edad=0):
    if edad < 18:
        R = "menor de edad"
    elif edad < 60:
        R = "adulto"
    else:
        R = "adulto mayor"
    return f"<h1>La persona es: {R}</h1><hr>"

## arreglos

import numpy as np

@app.route("/arreglos")
@app.route("/arreglos/<int:valores>/<int:columnas>")
@app.route("/arreglos/<int:valores>/<int:columnas>/<int:filas>")
def arreglos(valores=0, columnas=0, filas=0):
    if filas == 0:
        arreglos = np.random.randint(valores,size = columnas)
    else:
        arreglos = np.random.randint(valores,size =(filas,columnas))
        
    return f"<h1>el arreglo aleatorioes: {arreglos}</h1><hr>" 
    
if __name__ == "_main_":
    app.run(debug=True)


if __name__ == "__main__":
    app.run(debug=True)