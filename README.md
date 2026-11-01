# Steffi’s Rezeptewelt

Mobile-first PWA für eine persönliche Rezeptsammlung mit Kategorien, Instagram-Links, Rezept-Reader und GitHub-Dateiimport.

## GitHub-Rezepte

Die veröffentlichte App liest den versionierten Bestand aus `data/recipes.json`. Neue Rezepte werden zunächst sofort im Browser gespeichert. Über **GitHub-Datei exportieren** wird der aktuelle Bestand als `recipes.json` heruntergeladen. Diese Datei anschließend im Repository als `data/recipes.json` ersetzen und committen; beim nächsten App-Aufruf ist der neue Bestand verfügbar.

Die App enthält bewusst keinen persönlichen GitHub-Token. Für automatisches Zurückschreiben aus der öffentlichen App wäre ein sicherer GitHub-OAuth-/PKCE-Flow oder ein kleines Backend mit geschütztem Secret erforderlich.

## Instagram-Import

Öffentliche Instagram-Posts und Reels können einzeln oder als Liste eingefügt werden. Die App liest die öffentliche Caption aus, erkennt Rezeptname, Zutaten-Bullets und Zubereitungssätze und speichert das Ergebnis lokal im Browser. Wenn der direkte Instagram-Zugriff per CORS blockiert wird, versucht die App einen öffentlichen CORS-Fallback ohne Login, Cookies oder Zugangsdaten. Private Posts oder Captions ohne Rezepttext bleiben als Link gespeichert und können manuell ergänzt werden.

## GitHub Pages

Im Repository ist ein Workflow unter `.github/workflows/pages.yml` enthalten. Einmalig in den Repository-Einstellungen unter **Pages → Build and deployment → Source** die Quelle **GitHub Actions** auswählen. Danach veröffentlicht GitHub Pages die App unter:

`https://bndkxbqf2g-stack.github.io/Rezepte/`

