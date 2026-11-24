"""Generează audio natural (Kokoro, voce neurală) pentru toate textele din tools/texts.json.
Folosire: python generate-audio.py <folder_model>  (folderul are model.onnx și voices.npz)
Scrie audio/<cheie>.mp3 și data/audio-index.js. Fișierele existente sunt sărite."""
import json, os, subprocess, sys, io
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
mdir = sys.argv[1]
if not os.path.exists(os.path.join(mdir, 'voices.npz')):
    # vocile vin ca fișiere .bin separate (float32, 510x1x256); le adunăm într-un .npz
    names = [f[:-4] for f in os.listdir(mdir) if f.endswith('.bin')]
    np.savez(os.path.join(mdir, 'voices.npz'), **{n: np.fromfile(os.path.join(mdir, n + '.bin'), dtype=np.float32).reshape(-1, 1, 256) for n in names})
k =Kokoro(os.path.join(mdir, 'model.onnx'), os.path.join(mdir, 'voices.npz'))
items = json.load(open(os.path.join(root, 'tools', 'texts.json')))
os.makedirs(os.path.join(root, 'audio'), exist_ok=True)
for i, it in enumerate(items):
    dst = os.path.join(root, 'audio', it['key'] + '.mp3')
    if os.path.exists(dst):
        continue
    a, sr = k.create(it['text'], voice=it['voice'], speed=1.0, lang='en-gb')
    pad = np.zeros(int(sr * 0.08), dtype=np.float32)
    buf = io.BytesIO(); sf.write(buf, np.concatenate([pad, a, pad]), sr, format='WAV')
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', '-', '-ac', '1', '-ar', '24000', '-b:a', '40k', dst], input=buf.getvalue(), check=True)
    if i % 50 == 0:
        print(i, len(items), flush=True)
have = sorted(f[:-4] for f in os.listdir(os.path.join(root, 'audio')) if f.endswith('.mp3'))
with open(os.path.join(root, 'data', 'audio-index.js'), 'w') as f:
    f.write('window.AUDIO_INDEX = ' + json.dumps({h: 1 for h in have}, separators=(',', ':')) + ';\n')
print('gata', len(have))
