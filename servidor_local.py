"""Servidor local de STUDY OS.

Igual que `python -m http.server`, pero le indica al navegador que no guarde
los archivos en caché, así siempre se ven los resúmenes y preguntas actualizados.

Uso: python servidor_local.py [puerto]   (por defecto 8080)
"""
import functools
import http.server
import os
import sys

CARPETA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "Sistema_Estudio_Interactivo")


class SinCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    puerto = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    manejador = functools.partial(SinCache, directory=CARPETA)
    with http.server.ThreadingHTTPServer(("127.0.0.1", puerto), manejador) as servidor:
        print(f"STUDY OS en http://localhost:{puerto}  (Ctrl+C para cerrar)")
        servidor.serve_forever()
