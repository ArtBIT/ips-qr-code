# IPS QR Code Generator

### What is this?
This is a simple CLI tool to generate IPS QR Codes for easy mobile banking payments. 

### Install

    $ npm i -g ips-qr-code

### Example Usage

    $ ips-qr-code --naziv-platioca "@artbit" --racun-platioca "123456789012345678" --naziv-primaoca "GitHub Ltd," --racun-primaoca "123456789012345678" --sifra-placanja "221" --iznos "RSD1," --svrha-placanja "Example usage" --to-datauri
    $ data:image/png;base64,iVBORw0KGg...SUVORK5CYII=


### Options
##### -k, --kod  [string=PR]
Identifikacioni kod koji opisuje sadržaj QR koda.
Moguće vrednosti su:
 - PR – za QR kod na štampanom računu velikih izdavalaca računa
 - PT – za QR kod na prodajnom mestu, prikazan od strane trgovca
 - PK – za QR kod na prodajnom mestu, prikazan od strane kupca
 - EK – za QR kod u aplikaciji e-commerce

##### -r, --racun-primaoca [string] (required)
Broj računa primaoca plaćanja označava broj tekućeg odnosno drugog platnog računa primaoca plaćanja u skladu s propisima;

##### -n, --naziv-primaoca [string] (required)
Naziv i sedište primaoca plaćanja označava poslovno ime ili skraćeno poslovno ime primaoca plaćanja, odnosno naziv pod kojim je evidentiran u registru nadležnog organa. Ako naziv primaoca plaćanja sadrži i njegovo sedište, onda nije potrebno navoditi to sedište; 

##### -i, --iznos [string] (required)
Valuta i iznos novčanih sredstava predstavlja oznaku RSD i iznos, u kome se obavezno upisuje decimalna zapeta, iza koje se ne moraju pisati nevažeće decimalne nule (primer: RSD1025).  Minimalni iznos naloga je RSD0,01, a maksimalni iznos naloga je RSD99999999999999,99. Pri unosu iznosa, hiljade se ne odvajaju tačkama. Nije dozvoljeno izostaviti cifru za celo mesto u iznosu. Na primer: RSD,01 nije ispravan iznos, ispravno je RSD0,01;          

##### -o, --racun-platioca [string] (required)
Broj računa platioca označava broj tekućeg odnosno drugog platnog računa platioca u skladu s propisima;                    

##### -p, --naziv-platioca [string] (required)
Naziv i sedište platioca predstavlja ime i prezime i adresu platioca (ulica, broj i mesto)

##### --sf, --sifra-placanja [number] (required)
Šifra plaćanja označava numerički podatak od tri cifre, od kojih prva identifikuje način plaćanja, a druge dve osnovu;           

##### -s, --svrha-placanja [string] (required)
Svrha plaćanja označava podatke o nameni i osnovu prenosa, odnosno uplate novčanih sredstava;

##### -m, --MCC [string]
MCC je oznaka Merchant Code Category – kod kategorije trgovca u skladu sa ISO 18245. Spisak dozvoljenih kodova biće utvrđen tehničkom dokumentacijom sistema IPS NBS;          

##### --jf, --jednokratna-sifra [string]
Jednokratna šifra platioca predstavlja TOTR vrednost (jednokratnu šifru čije je važenje vremenski ograničeno, npr. pet minuta).Banka platioca stvara jednokratnu šifru, ali i izvršava autorizaciju transakcije plaćanja;       

##### --ro, --poziv-na-broj [string]
Poziv na broj odobrenja primaoca plaćanja označava dopunske podatke za primaoca plaćanja u skladu s propisima;                               

##### --rl, --referenca-primaoca [string]
Referenca primaoca plaćanja označava dopunske podatke za primaoca plaćanja u slobodnoj formi;

##### --rp, --referenca-placanja [string]
Referenca koja identifikuje transakciju na prodajnom mestu predstavlja jedinstveni identifikator samog plaćanja, ukupne dužine 19

##### --scale [number=4]
The scale of the QR code pixels

##### --margin [number=4]
The size of the margin around the QR code

##### --bg-color [string=#ffffffff]
The color of the QR code light pixels

##### --fg-color [string=#000000ff]
The color of the QR code dark pixels

##### --height [number]
Width of the QR image                    

##### --width [number]
Width of the QR image                    

##### --to-file [string]
The filename to output the QR image to   

##### --to-datauri
Output QR code as a data URI            

##### --to-text
Output terminal friendly QR code        


## IPS QR Code Format
Elementi naloga za prenos prikazani u QR kodu [PDF Izvor](http://https://www.nbs.rs/internet/latinica/15/mediji/vesti/20180507_preporuke_QRkod.pdf "PDF Izvor")

### Opis elemenata:
- Tag **K**: Identifikacioni kod označava sadržaj QR koda i može imati vrednosti:
  - **PR** – za QR kod na štampanom računu velikih izdavalaca računa
  - **PT** – za QR kod na prodajnom mestu, prikazan od strane trgovca
  - **PK** – za QR kod na prodajnom mestu, prikazan od strane kupca
  - **EK** – za QR kod u aplikaciji e-commerce;
- Tag **V**: Verzija označava verziju prezentacije QR koda, fiksna vrednost je 01;
- Tag **C**: Znakovni skup se koristi u prezentaciji, fiksna vrednost 1 označava upotrebu UTF-8 kodnog rasporeda;
- Tag **R**: Broj računa primaoca plaćanja označava broj tekućeg odnosno drugog platnog računa primaoca plaćanja u skladu s propisima;
- Tag **N**: Naziv i sedište primaoca plaćanja označava poslovno ime ili skraćeno poslovno ime primaoca plaćanja, odnosno naziv pod kojim je evidentiran u registru nadležnog organa. Ako naziv primaoca plaćanja sadrži i njegovo sedište, onda nije potrebno navoditi to sedište;
- Tag **I**: Valuta i iznos novčanih sredstava predstavlja oznaku RSD i iznos, u kome se obavezno upisuje decimalna zapeta, iza koje se ne moraju pisati nevažeće decimalne nule (primer: RSD1025). Minimalni iznos naloga je RSD0,01, a maksimalni iznos naloga je RSD99999999999999,99.  Pri unosu iznosa, hiljade se ne odvajaju tačkama. Nije dozvoljeno izostaviti cifru za celo mesto u iznosu. Na primer: RSD,01 nije ispravan iznos, ispravno je RSD0,01;
- Tag **O**: Broj računa platioca označava broj tekućeg odnosno drugog platnog računa platioca u skladu s propisima;
- Tag **P**: Naziv i sedište platioca predstavlja ime i prezime i adresu platioca (ulica, broj i mesto);
- Tag **SF**: Šifra plaćanja označava numerički podatak od tri cifre, od kojih prva identifikuje način plaćanja, a druge dve osnovu;
- Tag **S**: Svrha plaćanja označava podatke o nameni i osnovu prenosa, odnosno uplate novčanih sredstava;
- Tag **M**: MCC je oznaka Merchant Code Category – kod kategorije trgovca u skladu sa ISO 18245. Spisak dozvoljenih kodova biće utvrđen tehničkom dokumentacijom sistema IPS NBS;
- Tag **JS**: Jednokratna šifra platioca predstavlja TOTR vrednost (jednokratnu šifru čije je važenje vremenski ograničeno, npr. pet minuta).  Banka platioca stvara jednokratnu šifru, ali i izvršava autorizaciju transakcije plaćanja;
- Tag **RO**: Poziv na broj odobrenja primaoca plaćanja označava dopunske podatke za primaoca plaćanja u skladu s propisima;
- Tag **RL**: Referenca primaoca plaćanja označava dopunske podatke za primaoca plaćanja u slobodnoj formi;
- Tag **RP**: Referenca koja identifikuje transakciju na prodajnom mestu predstavlja jedinstveni identifikator samog plaćanja, ukupne dužine 19 karaktera u sledećem formatu: `[TID 8a][Year 2n][Julian day – redni broj dana u godini 3n][Transaction number 6n];`

### Format zapisa
Svako polje navodi se kao par definisanog taga i sadržaja tog polja. Polja se razdvajaju
delimiterom – uspravnom crtom (|). Poslednje polje u sadržaju predstavlja kraj zapisa.
Delimiter ne sme biti deo sadržaja polja. Ako ne sadrže vrednost, tagovi opcionih polja se ne navode u QR kodu.

# License
MIT
