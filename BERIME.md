(instructions in slovene language)
# Zaposlitveni test: React #1
Dan je preprost prototip aplikacije, napisan s knjižnico React.

Namen aplikacije je voditi seznam opravil za ljudi: dodamo
lahko osebe, pri vsaki osebi pa lahko dodamo opravila.

Namen testa je da kandidat optimizira izvajanje aplikacije.

## Razvojno okolje
Potrebna je zadnja različica LTS programja [NodeJS](https://nodejs.org/). Po
njegovi namestitvi je potrebno v korenskem imeniku z izvorno kodo zagnati
```shell
npm install
```
da se namestijo vse potrebne knjižnice.

Izvorna koda se nahaja v imenikih [src](src) in [static](static).
Aplikacijo zaženemo z:
```shell
npm start
```
To zažene vgrajeni spletni strežnik na portu 8088. Aplikacijo potem
naložite iz naslova `http://localhost:8088`.

## Naloga
V aplikaciji so strateško postavljeni ukazi `console.log()`, katerih
namen je da nam prikažejo sled izvajanja kode. Njihov izpis vidimo v
konzoli brkljalnika. Iz tega izpisa, oz. iz te sledi izvajanja, je
razvidno, da se ob zagonu aplikacije vrhnja komponenta App izriše
trikrat. Nadalje opazimo da ob vsakem dodajanju osebe, ali opravila,
se celotna aplikacija izriše dvakrat.

Aplikacija torej "trpi" za ponavljajočim se izrisovanjem. Ali jo je
mogoče optimizirati tako, da se zmanjša potrebno število ponavljajočih
izrisovanj? Idealno bi bilo, da ne bi bilo nobenih ponavljanj. Ali je
to mogoče doseči?

Pri tem ni dovoljeno spreminjanje CSS; rešitev se naj sestoji samo iz
sprememb v kodi JavaScript, rezultirajoča HTML in CSS naj ostaneta
nespremenjena. Povedano drugače: DOM naj ostane enak.

Razložite kako je mogoče znižati število ponavljanj izrisovanja, oz.
zakaj to ni mogoče. Če je število ponavljanj mogoče znižati, ustrezno
spremenite obstoječo kodo in jo priložite k odgovoru.

