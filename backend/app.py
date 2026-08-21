from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="123",
        database="negozio"
    )

# 1. Endpoint Lista Prodotti
@app.route("/api/prodotti", methods=["GET"])
def get_prodotti():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    query = "SELECT id, nome FROM prodotti"
    cursor.execute(query)
    prodotti = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(prodotti)

# 2. Dettaglio Prodotto con notazione sicura %s
@app.route("/api/prodotti/<int:id>", methods=["GET"])
def get_prodotto_by_id(id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    
    # Query parametrizzata con %s per prevenire SQL Injection
    query = "SELECT id, nome, prezzo, (prezzo * 1.22) AS prezzo_ivato FROM prodotti WHERE id = %s"
    cursor.execute(query, (id,))
    prodotto = cursor.fetchone() 
    
    cursor.close()
    conn.close()
    
    if prodotto:
        return jsonify(prodotto)
    else: 
        return jsonify({"error": "Prodotto non trovato"}), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)