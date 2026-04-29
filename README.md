# API för arbetserfarenheter i kurs DT207G, Laboration 3
REST-webbtjänst för att hantera arbetserfarenheter.
Byggt med Express och MongoDB.
Innehåller grundläggande funktionalitet för CRUD.

## Länk
Liveversion av webbtjänst: https://dt207g-lab3.onrender.com/workexperience

## Installation
Webbtjänsten använder MongoDB som databas tillsamans med Mongoose för struktur och validering. Efter klonat repository kör kommando npm install för installation av nödvändiga npm paket. Kör kommando npm run start för att starta servern.

## Användning
Webbtjänsten kan nås på följande sätt:

| Metod | Ändpunkt | Beskrivning |
| ----- | -------- | ----------- |
| GET | /workexperience | Hämtar alla workexperiences |
| GET | /workexperience/:id | Hämtar en specifik workexperience |
| POST | /workexperience | Lagrar en ny workexperience |
| PUT | /workexperience/:id | Uppdaterar en existerande workexperience |
| DELETE | /workexperience/:id | Raderar en workexperience |

En work experience returneras/skickas som JSON enligt nedan:
```json
{
  "companyname": "Nextjet",
  "jobtitle": "Trafikassistent",
  "startdate": "2013-04-01",
  "enddate": "2026-07-01"
}
```

Av Elisa L. 2026