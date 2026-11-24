"""Construiește dist/vorbeste.html: aplicația într-un singur fișier (fără înregistrări audio; folosește vocea telefonului)."""
import os, re
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
h = open(os.path.join(root, 'index.html')).read()
h = h.replace('<link rel="stylesheet" href="app.css">', '<style>\n' + open(os.path.join(root, 'app.css')).read() + '\n</style>')
h = h.replace('<script src="data/audio-index.js"></script>\n', '')
h = re.sub(r'<script src="([^"]+)"></script>', lambda m: '<script>\n' + open(os.path.join(root, m.group(1))).read() + '\n</script>', h)
os.makedirs(os.path.join(root, 'dist'), exist_ok=True)
open(os.path.join(root, 'dist', 'vorbeste.html'), 'w').write(h)
print('dist/vorbeste.html', len(h) // 1024, 'KB')
