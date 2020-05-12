# IPS QR Code Generator

### Install

    $ npm i -g ips-qr-code

### Example Usage

    $ ips-qr-code --naziv-platioca "@artbit" --racun-platioca "123456789012345678" --naziv-primaoca "GitHub Ltd," --racun-primaoca "123456789012345678" --sifra-placanja "221" --iznos "RSD1," --svrha-placanja "Example usage" --to-datauri
	$ ![result](data:image/png;base64,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)

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
 -  **PR** – za QR kod na štampanom računu velikih izdavalaca računa
 -  **PT** – za QR kod na prodajnom mestu, prikazan od strane trgovca
 -  **PK** – za QR kod na prodajnom mestu, prikazan od strane kupca
 -  **EK** – za QR kod u aplikaciji e-commerce;
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