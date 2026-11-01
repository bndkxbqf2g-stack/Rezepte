# Steffi’s Rezeptewelt

Mobile-first PWA für eine persönliche Rezeptsammlung mit Kategorien, Instagram-Links, Rezept-Reader und GitHub-Dateiimport.

## GitHub-Rezepte

Die veröffentlichte App liest den gemeinsamen Bestand aus `data/recipes.json`. Für den einfachen Alltag kann GitHub einmal direkt in der App verbunden werden: Repository, Branch und ein fein-granularer GitHub-Schlüssel mit `Contents: Read and write` werden auf dem Schreibgerät hinterlegt. Danach werden neue, bearbeitete, gelöschte oder favorisierte Rezepte automatisch in `data/recipes.json` gespeichert. Auf dem anderen Handy reicht **Aktualisieren**.

Der Schlüssel bleibt ausschließlich im lokalen Speicher des verbundenen Browsers. Dafür sollte ein eigener, fein-granularer Schlüssel verwendet werden, der nur Zugriff auf dieses Repository hat. Ohne Verbindung bleibt der Export als `recipes.json` als manueller Fallback verfügbar.

## Instagram-Import

Öffentliche Instagram-Posts und Reels können einzeln oder als Liste eingefügt werden. Die App liest die öffentliche Caption aus, erkennt Rezeptname, Zutaten-Bullets und Zubereitungssätze und speichert das Ergebnis lokal im Browser. Wenn der direkte Instagram-Zugriff per CORS blockiert wird, versucht die App einen öffentlichen CORS-Fallback ohne Login, Cookies oder Zugangsdaten. Private Posts oder Captions ohne Rezepttext bleiben als Link gespeichert und können manuell ergänzt werden.

## GitHub Pages

Im Repository ist ein Workflow unter `.github/workflows/pages.yml` enthalten. Einmalig in den Repository-Einstellungen unter **Pages → Build and deployment → Source** die Quelle **GitHub Actions** auswählen. Danach veröffentlicht GitHub Pages die App unter:

`https://bndkxbqf2g-stack.github.io/Rezepte/`

