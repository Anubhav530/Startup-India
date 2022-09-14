import React from 'react'
import { useState } from 'react'


// const ErrorCode = () => {
    const errorJson =
        [
            {
                "id": 1,
                "name": "Afghanistan",
                "iso3": "AFG",
                "iso2": "AF",
                "phone_code": "93",
                "capital": "Kabul",
                "currency": "AFN",
                "currency_symbol": "؋",
                "tld": ".af",
                "native": "افغانستان",
                "region": "Asia",
                "subregion": "Southern Asia",
                "latitude": "33.00000000",
                "longitude": "65.00000000",
                "emoji": "🇦🇫",
                "emojiU": "U+1F1E6 U+1F1EB",
                "timezones": [
                    {
                        "zoneName": "Asia/Kabul",
                        "gmtOffset": "16200",
                        "gmtOffsetName": "UTC+04:30",
                        "abbreviation": "AFT",
                        "tzName": "Afghanistan Time",
                        "country_id": 1
                    }
                ],
                "translations": [
                    {
                        "kr": "아프가니스탄",
                        "br": "Afeganistão",
                        "pt": "Afeganistão",
                        "nl": "Afghanistan",
                        "hr": "Afganistan",
                        "fa": "افغانستان",
                        "de": "Afghanistan",
                        "es": "Afganistán",
                        "fr": "Afghanistan",
                        "ja": "アフガニスタン",
                        "it": "Afghanistan",
                        "cn": "阿富汗",
                        "country_id": 1
                    }
                ]
            },
            {
                "id": 2,
                "name": "Aland Islands",
                "iso3": "ALA",
                "iso2": "AX",
                "phone_code": "+358-18",
                "capital": "Mariehamn",
                "currency": "EUR",
                "currency_symbol": "€",
                "tld": ".ax",
                "native": "Åland",
                "region": "Europe",
                "subregion": "Northern Europe",
                "latitude": "60.11666700",
                "longitude": "19.90000000",
                "emoji": "🇦🇽",
                "emojiU": "U+1F1E6 U+1F1FD",
                "timezones": [
                    {
                        "zoneName": "Europe/Mariehamn",
                        "gmtOffset": "7200",
                        "gmtOffsetName": "UTC+02:00",
                        "abbreviation": "EET",
                        "tzName": "Eastern European Time",
                        "country_id": 2
                    }
                ],
                "translations": [
                    {
                        "kr": "올란드 제도",
                        "br": "Ilhas de Aland",
                        "pt": "Ilhas de Aland",
                        "nl": "Ålandeilanden",
                        "hr": "Ålandski otoci",
                        "fa": "جزایر الند",
                        "de": "Åland",
                        "es": "Alandia",
                        "fr": "Åland",
                        "ja": "オーランド諸島",
                        "it": "Isole Aland",
                        "cn": "奥兰群岛",
                        "country_id": 2
                    }
                ]
            },
            {
                "id": 3,
                "name": "Albania",
                "iso3": "ALB",
                "iso2": "AL",
                "phone_code": "355",
                "capital": "Tirana",
                "currency": "ALL",
                "currency_symbol": "Lek",
                "tld": ".al",
                "native": "Shqipëria",
                "region": "Europe",
                "subregion": "Southern Europe",
                "latitude": "41.00000000",
                "longitude": "20.00000000",
                "emoji": "🇦🇱",
                "emojiU": "U+1F1E6 U+1F1F1",
                "timezones": [
                    {
                        "zoneName": "Europe/Tirane",
                        "gmtOffset": "3600",
                        "gmtOffsetName": "UTC+01:00",
                        "abbreviation": "CET",
                        "tzName": "Central European Time",
                        "country_id": 3
                    }
                ],
                "translations": [
                    {
                        "kr": "알바니아",
                        "br": "Albânia",
                        "pt": "Albânia",
                        "nl": "Albanië",
                        "hr": "Albanija",
                        "fa": "آلبانی",
                        "de": "Albanien",
                        "es": "Albania",
                        "fr": "Albanie",
                        "ja": "アルバニア",
                        "it": "Albania",
                        "cn": "阿尔巴尼亚",
                        "country_id": 3
                    }
                ]
            },
            {
                "id": 4,
                "name": "Algeria",
                "iso3": "DZA",
                "iso2": "DZ",
                "phone_code": "213",
                "capital": "Algiers",
                "currency": "DZD",
                "currency_symbol": "دج",
                "tld": ".dz",
                "native": "الجزائر",
                "region": "Africa",
                "subregion": "Northern Africa",
                "latitude": "28.00000000",
                "longitude": "3.00000000",
                "emoji": "🇩🇿",
                "emojiU": "U+1F1E9 U+1F1FF",
                "timezones": [
                    {
                        "zoneName": "Africa/Algiers",
                        "gmtOffset": "3600",
                        "gmtOffsetName": "UTC+01:00",
                        "abbreviation": "CET",
                        "tzName": "Central European Time",
                        "country_id": 4
                    }
                ],
                "translations": [
                    {
                        "kr": "알제리",
                        "br": "Argélia",
                        "pt": "Argélia",
                        "nl": "Algerije",
                        "hr": "Alžir",
                        "fa": "الجزایر",
                        "de": "Algerien",
                        "es": "Argelia",
                        "fr": "Algérie",
                        "ja": "アルジェリア",
                        "it": "Algeria",
                        "cn": "阿尔及利亚",
                        "country_id": 4
                    }
                ]
            },
            {
                "id": 5,
                "name": "American Samoa",
                "iso3": "ASM",
                "iso2": "AS",
                "phone_code": "+1-684",
                "capital": "Pago Pago",
                "currency": "USD",
                "currency_symbol": "$",
                "tld": ".as",
                "native": "American Samoa",
                "region": "Oceania",
                "subregion": "Polynesia",
                "latitude": "-14.33333333",
                "longitude": "-170.00000000",
                "emoji": "🇦🇸",
                "emojiU": "U+1F1E6 U+1F1F8",
                "timezones": [
                    {
                        "zoneName": "Pacific/Pago_Pago",
                        "gmtOffset": "-39600",
                        "gmtOffsetName": "UTC-11:00",
                        "abbreviation": "SST",
                        "tzName": "Samoa Standard Time",
                        "country_id": 5
                    }
                ],
                "translations": [
                    {
                        "kr": "아메리칸사모아",
                        "br": "Samoa Americana",
                        "pt": "Samoa Americana",
                        "nl": "Amerikaans Samoa",
                        "hr": "Američka Samoa",
                        "fa": "ساموآی آمریکا",
                        "de": "Amerikanisch-Samoa",
                        "es": "Samoa Americana",
                        "fr": "Samoa américaines",
                        "ja": "アメリカ領サモア",
                        "it": "Samoa Americane",
                        "cn": "美属萨摩亚",
                        "country_id": 5
                    }
                ]
            },
            {
                "id": 6,
                "name": "Andorra",
                "iso3": "AND",
                "iso2": "AD",
                "phone_code": "376",
                "capital": "Andorra la Vella",
                "currency": "EUR",
                "currency_symbol": "€",
                "tld": ".ad",
                "native": "Andorra",
                "region": "Europe",
                "subregion": "Southern Europe",
                "latitude": "42.50000000",
                "longitude": "1.50000000",
                "emoji": "🇦🇩",
                "emojiU": "U+1F1E6 U+1F1E9",
                "timezones": [
                    {
                        "zoneName": "Europe/Andorra",
                        "gmtOffset": "3600",
                        "gmtOffsetName": "UTC+01:00",
                        "abbreviation": "CET",
                        "tzName": "Central European Time",
                        "country_id": 6
                    }
                ],
                "translations": [
                    {
                        "kr": "안도라",
                        "br": "Andorra",
                        "pt": "Andorra",
                        "nl": "Andorra",
                        "hr": "Andora",
                        "fa": "آندورا",
                        "de": "Andorra",
                        "es": "Andorra",
                        "fr": "Andorre",
                        "ja": "アンドラ",
                        "it": "Andorra",
                        "cn": "安道尔",
                        "country_id": 6
                    }
                ]
            },
            {
                "id": 7,
                "name": "Angola",
                "iso3": "AGO",
                "iso2": "AO",
                "phone_code": "244",
                "capital": "Luanda",
                "currency": "AOA",
                "currency_symbol": "Kz",
                "tld": ".ao",
                "native": "Angola",
                "region": "Africa",
                "subregion": "Middle Africa",
                "latitude": "-12.50000000",
                "longitude": "18.50000000",
                "emoji": "🇦🇴",
                "emojiU": "U+1F1E6 U+1F1F4",
                "timezones": [
                    {
                        "zoneName": "Africa/Luanda",
                        "gmtOffset": "3600",
                        "gmtOffsetName": "UTC+01:00",
                        "abbreviation": "WAT",
                        "tzName": "West Africa Time",
                        "country_id": 7
                    }
                ],
                "translations": [
                    {
                        "kr": "앙골라",
                        "br": "Angola",
                        "pt": "Angola",
                        "nl": "Angola",
                        "hr": "Angola",
                        "fa": "آنگولا",
                        "de": "Angola",
                        "es": "Angola",
                        "fr": "Angola",
                        "ja": "アンゴラ",
                        "it": "Angola",
                        "cn": "安哥拉",
                        "country_id": 7
                    }
                ]
            },
            {
                "id": 8,
                "name": "Anguilla",
                "iso3": "AIA",
                "iso2": "AI",
                "phone_code": "+1-264",
                "capital": "The Valley",
                "currency": "XCD",
                "currency_symbol": "$",
                "tld": ".ai",
                "native": "Anguilla",
                "region": "Americas",
                "subregion": "Caribbean",
                "latitude": "18.25000000",
                "longitude": "-63.16666666",
                "emoji": "🇦🇮",
                "emojiU": "U+1F1E6 U+1F1EE",
                "timezones": [
                    {
                        "zoneName": "America/Anguilla",
                        "gmtOffset": "-14400",
                        "gmtOffsetName": "UTC-04:00",
                        "abbreviation": "AST",
                        "tzName": "Atlantic Standard Time",
                        "country_id": 8
                    }
                ],
                "translations": [
                    {
                        "kr": "앵귈라",
                        "br": "Anguila",
                        "pt": "Anguila",
                        "nl": "Anguilla",
                        "hr": "Angvila",
                        "fa": "آنگویلا",
                        "de": "Anguilla",
                        "es": "Anguilla",
                        "fr": "Anguilla",
                        "ja": "アンギラ",
                        "it": "Anguilla",
                        "cn": "安圭拉",
                        "country_id": 8
                    }
                ]
            },
            {
                "id": 9,
                "name": "Antarctica",
                "iso3": "ATA",
                "iso2": "AQ",
                "phone_code": "",
                "capital": "",
                "currency": "",
                "currency_symbol": "$",
                "tld": ".aq",
                "native": "Antarctica",
                "region": "Polar",
                "subregion": "",
                "latitude": "-74.65000000",
                "longitude": "4.48000000",
                "emoji": "🇦🇶",
                "emojiU": "U+1F1E6 U+1F1F6",
                "timezones": [
                    {
                        "zoneName": "Antarctica/Casey",
                        "gmtOffset": "39600",
                        "gmtOffsetName": "UTC+11:00",
                        "abbreviation": "AWST",
                        "tzName": "Australian Western Standard Time",
                        "country_id": 9
                    },
                    {
                        "zoneName": "Antarctica/Davis",
                        "gmtOffset": "25200",
                        "gmtOffsetName": "UTC+07:00",
                        "abbreviation": "DAVT",
                        "tzName": "Davis Time",
                        "country_id": 9
                    },
                    {
                        "zoneName": "Antarctica/DumontDUrville",
                        "gmtOffset": "36000",
                        "gmtOffsetName": "UTC+10:00",
                        "abbreviation": "DDUT",
                        "tzName": "Dumont d'Urville Time",
                        "country_id": 9
                    },
                    {
                        "zoneName": "Antarctica/Mawson",
                        "gmtOffset": "18000",
                        "gmtOffsetName": "UTC+05:00",
                        "abbreviation": "MAWT",
                        "tzName": "Mawson Station Time",
                        "country_id": 9
                    },
                    {
                        "zoneName": "Antarctica/McMurdo",
                        "gmtOffset": "46800",
                        "gmtOffsetName": "UTC+13:00",
                        "abbreviation": "NZDT",
                        "tzName": "New Zealand Daylight Time",
                        "country_id": 9
                    },
                    {
                        "zoneName": "Antarctica/Palmer",
                        "gmtOffset": "-10800",
                        "gmtOffsetName": "UTC-03:00",
                        "abbreviation": "CLST",
                        "tzName": "Chile Summer Time",
                        "country_id": 9
                    },
                    {
                        "zoneName": "Antarctica/Rothera",
                        "gmtOffset": "-10800",
                        "gmtOffsetName": "UTC-03:00",
                        "abbreviation": "ROTT",
                        "tzName": "Rothera Research Station Time",
                        "country_id": 9
                    },
                    {
                        "zoneName": "Antarctica/Syowa",
                        "gmtOffset": "10800",
                        "gmtOffsetName": "UTC+03:00",
                        "abbreviation": "SYOT",
                        "tzName": "Showa Station Time",
                        "country_id": 9
                    },
                    {
                        "zoneName": "Antarctica/Troll",
                        "gmtOffset": "0",
                        "gmtOffsetName": "UTC±00",
                        "abbreviation": "GMT",
                        "tzName": "Greenwich Mean Time",
                        "country_id": 9
                    },
                    {
                        "zoneName": "Antarctica/Vostok",
                        "gmtOffset": "21600",
                        "gmtOffsetName": "UTC+06:00",
                        "abbreviation": "VOST",
                        "tzName": "Vostok Station Time",
                        "country_id": 9
                    }
                ],
                "translations": [
                    {
                        "kr": "남극",
                        "br": "Antártida",
                        "pt": "Antárctida",
                        "nl": "Antarctica",
                        "hr": "Antarktika",
                        "fa": "جنوبگان",
                        "de": "Antarktika",
                        "es": "Antártida",
                        "fr": "Antarctique",
                        "ja": "南極大陸",
                        "it": "Antartide",
                        "cn": "南极洲",
                        "country_id": 9
                    }
                ]
            },
            {
                "id": 10,
                "name": "Antigua And Barbuda",
                "iso3": "ATG",
                "iso2": "AG",
                "phone_code": "+1-268",
                "capital": "St. John's",
                "currency": "XCD",
                "currency_symbol": "$",
                "tld": ".ag",
                "native": "Antigua and Barbuda",
                "region": "Americas",
                "subregion": "Caribbean",
                "latitude": "17.05000000",
                "longitude": "-61.80000000",
                "emoji": "🇦🇬",
                "emojiU": "U+1F1E6 U+1F1EC",
                "timezones": [
                    {
                        "zoneName": "America/Antigua",
                        "gmtOffset": "-14400",
                        "gmtOffsetName": "UTC-04:00",
                        "abbreviation": "AST",
                        "tzName": "Atlantic Standard Time",
                        "country_id": 10
                    }
                ],
                "translations": [
                    {
                        "kr": "앤티가 바부다",
                        "br": "Antígua e Barbuda",
                        "pt": "Antígua e Barbuda",
                        "nl": "Antigua en Barbuda",
                        "hr": "Antigva i Barbuda",
                        "fa": "آنتیگوا و باربودا",
                        "de": "Antigua und Barbuda",
                        "es": "Antigua y Barbuda",
                        "fr": "Antigua-et-Barbuda",
                        "ja": "アンティグア・バーブーダ",
                        "it": "Antigua e Barbuda",
                        "cn": "安提瓜和巴布达",
                        "country_id": 10
                    }
                ]
            }
        ]

    // const [errArray ,setErrArray] = useState(errorJson)
// }

export default errorJson;