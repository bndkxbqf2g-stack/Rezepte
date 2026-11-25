# Steffi’s Rezeptewelt

Mobile-first PWA für eine persönliche Rezeptsammlung mit Kategorien, Instagram-Links, Rezept-Reader und GitHub-Dateiimport.

## GitHub-Rezepte

Die veröffentlichte App liest den gemeinsamen Bestand aus `data/recipes.json`. Für den einfachen Alltag kann GitHub einmal direkt in der App verbunden werden: Repository, Branch und ein fein-granularer GitHub-Schlüssel mit `Contents: Read and write` werden auf dem Schreibgerät hinterlegt. Danach werden neue, bearbeitete, gelöschte oder favorisierte Rezepte automatisch in `data/recipes.json` gespeichert. **Aktualisieren** ruft die JSON-Datei mit deaktiviertem Browser-Cache ab und ersetzt den lokalen Rezeptbestand vollständig durch ihren Inhalt.

Gelöschte Rezepte werden lokal zusätzlich als gelöscht markiert. Dadurch können sie bei einem noch nicht abgeschlossenen GitHub-Sync oder beim Zusammenführen alter Daten nicht wieder auftauchen. Eine erneute Speicherung mit demselben Rezept/Link hebt diese Markierung ausdrücklich wieder auf.

## Datierte Rezeptkategorien

Zeitlich geplante Rezeptgruppen werden als Kategorie mit `temporary: true` und einem ISO-Zeitpunkt in `promoteAfter` gespeichert. Jedes Rezept dieser Gruppe erhält zusätzlich `promoteToCategoryId` für die spätere normale Kategorie. Beim Start, beim Aktualisieren und beim GitHub-Abgleich prüft die App das Datum; nach Ablauf verschiebt sie die Rezepte automatisch in ihre Zielkategorien, entfernt die leere temporäre Kategorie und synchronisiert die Änderung bei bestehender GitHub-Verbindung. Bleibt die App geöffnet, wird die Übernahme zum passenden Zeitpunkt ebenfalls automatisch ausgeführt. Dieser Ablauf kann für künftige Datumsgruppen mit denselben Feldern wiederverwendet werden.

Im Rezept-Reader stehen außerdem **Kopieren** und **Teilen** zur Verfügung. Kopiert beziehungsweise teilt werden Titel, Zeit, Portionen, Zutaten, Zubereitung, Notiz und Quelle. Wenn das Gerät kein natives Teilen unterstützt, wird der vollständige Rezeptinhalt kopiert.

Der Schlüssel bleibt ausschließlich im lokalen Speicher des verbundenen Browsers. Dafür sollte ein eigener, fein-granularer Schlüssel verwendet werden, der nur Zugriff auf dieses Repository hat. Ohne Verbindung bleibt der Export als `recipes.json` als manueller Fallback verfügbar.

## Instagram-Import

Öffentliche Instagram-Posts und Reels können einzeln oder als Liste eingefügt werden. Die App liest die öffentliche Caption aus, erkennt Rezeptname, Zutaten-Bullets und Zubereitungssätze und speichert das Ergebnis lokal im Browser. Wenn der direkte Instagram-Zugriff per CORS blockiert wird, versucht die App einen öffentlichen CORS-Fallback ohne Login, Cookies oder Zugangsdaten. Private Posts oder Captions ohne Rezepttext bleiben als Link gespeichert und können manuell ergänzt werden.

## GitHub Pages

Im Repository ist ein Workflow unter `.github/workflows/pages.yml` enthalten. Einmalig in den Repository-Einstellungen unter **Pages → Build and deployment → Source** die Quelle **GitHub Actions** auswählen. Danach veröffentlicht GitHub Pages die App unter:

`https://bndkxbqf2g-stack.github.io/Rezepte/`

