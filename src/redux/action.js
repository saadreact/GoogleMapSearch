export const searchPlaces = (searchText) => {
  return async (dispatch) => {
    try {
      // Simulate API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Mock data for places
      const mockData = [
        {
            "name": "Afghanistan",
            "id": 0
        },
        {
            "name": "Akrotiri",
            "id": 1
        },
        {
            "name": "Albania",
            "id": 2
        },
        {
            "name": "Algeria",
            "id": 3
        },
        {
            "name": "American Samoa",
            "id": 4
        },
        {
            "name": "Andorra",
            "id": 5
        },
        {
            "name": "Angola",
            "id": 6
        },
        {
            "name": "Anguilla",
            "id": 7
        },
        {
            "name": "Antigua and Barbuda",
            "id": 8
        },
        {
            "name": "Argentina",
            "id": 9
        },
        {
            "name": "Armenia",
            "id": 10
        },
        {
            "name": "Aruba",
            "id": 11
        },
        {
            "name": "Australia",
            "id": 12
        },
        {
            "name": "Austria",
            "id": 13
        },
        {
            "name": "Azerbaijan",
            "id": 14
        },
        {
            "name": "Bahrain",
            "id": 15
        },
        {
            "name": "Bangladesh",
            "id": 16
        },
        {
            "name": "Barbados",
            "id": 17
        },
        {
            "name": "Belarus",
            "id": 18
        },
        {
            "name": "Belgium",
            "id": 19
        },
        {
            "name": "Belize",
            "id": 20
        },
        {
            "name": "Benin",
            "id": 21
        },
        {
            "name": "Bermuda",
            "id": 22
        },
        {
            "name": "Bhutan",
            "id": 23
        },
        {
            "name": "Bolivia",
            "id": 24
        },
        {
            "name": "Bonaire, Sint Eustatius, and Saba",
            "id": 25
        },
        {
            "name": "Bosnia and Herzegovina",
            "id": 26
        },
        {
            "name": "Botswana",
            "id": 27
        },
        {
            "name": "Brazil",
            "id": 28
        },
        {
            "name": "British Indian Ocean Territory",
            "id": 29
        },
        {
            "name": "British Virgin Islands",
            "id": 30
        },
        {
            "name": "Brunei",
            "id": 31
        },
        {
            "name": "Bulgaria",
            "id": 32
        },
        {
            "name": "Burkina Faso",
            "id": 33
        },
        {
            "name": "Burundi",
            "id": 34
        },
        {
            "name": "Cabo Verde",
            "id": 35
        },
        {
            "name": "Cambodia",
            "id": 36
        },
        {
            "name": "Cameroon",
            "id": 37
        },
        {
            "name": "Canada",
            "id": 38
        },
        {
            "name": "Cayman Islands",
            "id": 39
        },
        {
            "name": "Central African Republic",
            "id": 40
        },
        {
            "name": "Chad",
            "id": 41
        },
        {
            "name": "Chile",
            "id": 42
        },
        {
            "name": "China",
            "id": 43
        },
        {
            "name": "Christmas Island",
            "id": 44
        },
        {
            "name": "Cocos (Keeling) Islands",
            "id": 45
        },
        {
            "name": "Colombia",
            "id": 46
        },
        {
            "name": "Comoros",
            "id": 47
        },
        {
            "name": "Congo (Brazzaville)",
            "id": 48
        },
        {
            "name": "Congo (Kinshasa)",
            "id": 49
        },
        {
            "name": "Cook Islands",
            "id": 50
        },
        {
            "name": "Costa Rica",
            "id": 51
        },
        {
            "name": "CÃ´te d'Ivoire",
            "id": 52
        },
        {
            "name": "Croatia",
            "id": 53
        },
        {
            "name": "Cuba",
            "id": 54
        },
        {
            "name": "CuraÃ§ao",
            "id": 55
        },
        {
            "name": "Cyprus",
            "id": 56
        },
        {
            "name": "Czechia",
            "id": 57
        },
        {
            "name": "Denmark",
            "id": 58
        },
        {
            "name": "Dhekelia",
            "id": 59
        },
        {
            "name": "Djibouti",
            "id": 60
        },
        {
            "name": "Dominica",
            "id": 61
        },
        {
            "name": "Dominican Republic",
            "id": 62
        },
        {
            "name": "Ecuador",
            "id": 63
        },
        {
            "name": "Egypt",
            "id": 64
        },
        {
            "name": "El Salvador",
            "id": 65
        },
        {
            "name": "Equatorial Guinea",
            "id": 66
        },
        {
            "name": "Eritrea",
            "id": 67
        },
        {
            "name": "Estonia",
            "id": 68
        },
        {
            "name": "Ethiopia",
            "id": 69
        },
        {
            "name": "Falkland Islands (Islas Malvinas)",
            "id": 70
        },
        {
            "name": "Faroe Islands",
            "id": 71
        },
        {
            "name": "Federated States of Micronesia",
            "id": 72
        },
        {
            "name": "Fiji",
            "id": 73
        },
        {
            "name": "Finland",
            "id": 74
        },
        {
            "name": "France",
            "id": 75
        },
        {
            "name": "French Guiana",
            "id": 76
        },
        {
            "name": "French Polynesia",
            "id": 77
        },
        {
            "name": "French Southern and Antarctic Lands",
            "id": 78
        },
        {
            "name": "Gabon",
            "id": 79
        },
        {
            "name": "Gaza Strip",
            "id": 80
        },
        {
            "name": "Georgia",
            "id": 81
        },
        {
            "name": "Germany",
            "id": 82
        },
        {
            "name": "Ghana",
            "id": 83
        },
        {
            "name": "Gibraltar",
            "id": 84
        },
        {
            "name": "Greece",
            "id": 85
        },
        {
            "name": "Greenland",
            "id": 86
        },
        {
            "name": "Grenada",
            "id": 87
        },
        {
            "name": "Guadeloupe",
            "id": 88
        },
        {
            "name": "Guam",
            "id": 89
        },
        {
            "name": "Guatemala",
            "id": 90
        },
        {
            "name": "Guernsey",
            "id": 91
        },
        {
            "name": "Guinea",
            "id": 92
        },
        {
            "name": "Guinea-Bissau",
            "id": 93
        },
        {
            "name": "Guyana",
            "id": 94
        },
        {
            "name": "Haiti",
            "id": 95
        },
        {
            "name": "Honduras",
            "id": 96
        },
        {
            "name": "Hong Kong",
            "id": 97
        },
        {
            "name": "Hungary",
            "id": 98
        },
        {
            "name": "Iceland",
            "id": 99
        },
        {
            "name": "India",
            "id": 100
        },
        {
            "name": "Indonesia",
            "id": 101
        },
        {
            "name": "Iran",
            "id": 102
        },
        {
            "name": "Iraq",
            "id": 103
        },
        {
            "name": "Ireland",
            "id": 104
        },
        {
            "name": "Isle Of Man",
            "id": 105
        },
        {
            "name": "Israel",
            "id": 106
        },
        {
            "name": "Italy",
            "id": 107
        },
        {
            "name": "Jamaica",
            "id": 108
        },
        {
            "name": "Japan",
            "id": 109
        },
        {
            "name": "Jersey",
            "id": 110
        },
        {
            "name": "Jordan",
            "id": 111
        },
        {
            "name": "Kazakhstan",
            "id": 112
        },
        {
            "name": "Kenya",
            "id": 113
        },
        {
            "name": "Kiribati",
            "id": 114
        },
        {
            "name": "Kosovo",
            "id": 115
        },
        {
            "name": "Kuwait",
            "id": 116
        },
        {
            "name": "Kyrgyzstan",
            "id": 117
        },
        {
            "name": "Laos",
            "id": 118
        },
        {
            "name": "Latvia",
            "id": 119
        },
        {
            "name": "Lebanon",
            "id": 120
        },
        {
            "name": "Lesotho",
            "id": 121
        },
        {
            "name": "Liberia",
            "id": 122
        },
        {
            "name": "Libya",
            "id": 123
        },
        {
            "name": "Liechtenstein",
            "id": 124
        },
        {
            "name": "Lithuania",
            "id": 125
        },
        {
            "name": "Luxembourg",
            "id": 126
        },
        {
            "name": "Macau",
            "id": 127
        },
        {
            "name": "Macedonia",
            "id": 128
        },
        {
            "name": "Madagascar",
            "id": 129
        },
        {
            "name": "Malawi",
            "id": 130
        },
        {
            "name": "Malaysia",
            "id": 131
        },
        {
            "name": "Maldives",
            "id": 132
        },
        {
            "name": "Mali",
            "id": 133
        },
        {
            "name": "Malta",
            "id": 134
        },
        {
            "name": "Marshall Islands",
            "id": 135
        },
        {
            "name": "Martinique",
            "id": 136
        },
        {
            "name": "Mauritania",
            "id": 137
        },
        {
            "name": "Mauritius",
            "id": 138
        },
        {
            "name": "Mayotte",
            "id": 139
        },
        {
            "name": "Mexico",
            "id": 140
        },
        {
            "name": "Moldova",
            "id": 141
        },
        {
            "name": "Monaco",
            "id": 142
        },
        {
            "name": "Mongolia",
            "id": 143
        },
        {
            "name": "Montenegro",
            "id": 144
        },
        {
            "name": "Montserrat",
            "id": 145
        },
        {
            "name": "Morocco",
            "id": 146
        },
        {
            "name": "Mozambique",
            "id": 147
        },
        {
            "name": "Myanmar",
            "id": 148
        },
        {
            "name": "Namibia",
            "id": 149
        },
        {
            "name": "Nauru",
            "id": 150
        },
        {
            "name": "Nepal",
            "id": 151
        },
        {
            "name": "Netherlands",
            "id": 152
        },
        {
            "name": "New Caledonia",
            "id": 153
        },
        {
            "name": "New Zealand",
            "id": 154
        },
        {
            "name": "Nicaragua",
            "id": 155
        },
        {
            "name": "Niger",
            "id": 156
        },
        {
            "name": "Nigeria",
            "id": 157
        },
        {
            "name": "Niue",
            "id": 158
        },
        {
            "name": "Norfolk Island",
            "id": 159
        },
        {
            "name": "North Korea",
            "id": 160
        },
        {
            "name": "Northern Mariana Islands",
            "id": 161
        },
        {
            "name": "Norway",
            "id": 162
        },
        {
            "name": "Oman",
            "id": 163
        },
        {
            "name": "Pakistan",
            "id": 164
        },
        {
            "name": "Palau",
            "id": 165
        },
        {
            "name": "Panama",
            "id": 166
        },
        {
            "name": "Papua New Guinea",
            "id": 167
        },
        {
            "name": "Paracel Islands",
            "id": 168
        },
        {
            "name": "Paraguay",
            "id": 169
        },
        {
            "name": "Peru",
            "id": 170
        },
        {
            "name": "Philippines",
            "id": 171
        },
        {
            "name": "Pitcairn Islands",
            "id": 172
        },
        {
            "name": "Poland",
            "id": 173
        },
        {
            "name": "Portugal",
            "id": 174
        },
        {
            "name": "Puerto Rico",
            "id": 175
        },
        {
            "name": "Qatar",
            "id": 176
        },
        {
            "name": "Reunion",
            "id": 177
        },
        {
            "name": "Romania",
            "id": 178
        },
        {
            "name": "Russia",
            "id": 179
        },
        {
            "name": "Rwanda",
            "id": 180
        },
        {
            "name": "Saint Barthelemy",
            "id": 181
        },
        {
            "name": "Saint Helena, Ascension, and Tristan da Cunha",
            "id": 182
        },
        {
            "name": "Saint Kitts and Nevis",
            "id": 183
        },
        {
            "name": "Saint Lucia",
            "id": 184
        },
        {
            "name": "Saint Martin",
            "id": 185
        },
        {
            "name": "Saint Pierre and Miquelon",
            "id": 186
        },
        {
            "name": "Saint Vincent and the Grenadines",
            "id": 187
        },
        {
            "name": "Samoa",
            "id": 188
        },
        {
            "name": "San Marino",
            "id": 189
        },
        {
            "name": "Sao Tome and Principe",
            "id": 190
        },
        {
            "name": "Saudi Arabia",
            "id": 191
        },
        {
            "name": "Senegal",
            "id": 192
        },
        {
            "name": "Serbia",
            "id": 193
        },
        {
            "name": "Seychelles",
            "id": 194
        },
        {
            "name": "Sierra Leone",
            "id": 195
        },
        {
            "name": "Singapore",
            "id": 196
        },
        {
            "name": "Sint Maarten",
            "id": 197
        },
        {
            "name": "Slovakia",
            "id": 198
        },
        {
            "name": "Slovenia",
            "id": 199
        },
        {
            "name": "Solomon Islands",
            "id": 200
        },
        {
            "name": "Somalia",
            "id": 201
        },
        {
            "name": "South Africa",
            "id": 202
        },
        {
            "name": "South Georgia and South Sandwich Islands",
            "id": 203
        },
        {
            "name": "South Korea",
            "id": 204
        },
        {
            "name": "South Sudan",
            "id": 205
        },
        {
            "name": "Spain",
            "id": 206
        },
        {
            "name": "Spratly Islands",
            "id": 207
        },
        {
            "name": "Sri Lanka",
            "id": 208
        },
        {
            "name": "Sudan",
            "id": 209
        },
        {
            "name": "Suriname",
            "id": 210
        },
        {
            "name": "Svalbard",
            "id": 211
        },
        {
            "name": "Swaziland",
            "id": 212
        },
        {
            "name": "Sweden",
            "id": 213
        },
        {
            "name": "Switzerland",
            "id": 214
        },
        {
            "name": "Syria",
            "id": 215
        },
        {
            "name": "Taiwan",
            "id": 216
        },
        {
            "name": "Tajikistan",
            "id": 217
        },
        {
            "name": "Tanzania",
            "id": 218
        },
        {
            "name": "Thailand",
            "id": 219
        },
        {
            "name": "The Bahamas",
            "id": 220
        },
        {
            "name": "The Gambia",
            "id": 221
        },
        {
            "name": "Timor-Leste",
            "id": 222
        },
        {
            "name": "Togo",
            "id": 223
        },
        {
            "name": "Tokelau",
            "id": 224
        },
        {
            "name": "Tonga",
            "id": 225
        },
        {
            "name": "Trinidad and Tobago",
            "id": 226
        },
        {
            "name": "Tunisia",
            "id": 227
        },
        {
            "name": "Turkey",
            "id": 228
        },
        {
            "name": "Turkmenistan",
            "id": 229
        },
        {
            "name": "Turks and Caicos Islands",
            "id": 230
        },
        {
            "name": "Tuvalu",
            "id": 231
        },
        {
            "name": "U.S. Virgin Islands",
            "id": 232
        },
        {
            "name": "Uganda",
            "id": 233
        },
        {
            "name": "Ukraine",
            "id": 234
        },
        {
            "name": "United Arab Emirates",
            "id": 235
        },
        {
            "name": "United Kingdom",
            "id": 236
        },
        {
            "name": "United States",
            "id": 237
        },
        {
            "name": "Uruguay",
            "id": 238
        },
        {
            "name": "Uzbekistan",
            "id": 239
        },
        {
            "name": "Vanuatu",
            "id": 240
        },
        {
            "name": "Vatican City",
            "id": 241
        },
        {
            "name": "Venezuela",
            "id": 242
        },
        {
            "name": "Vietnam",
            "id": 243
        },
        {
            "name": "Wallis and Futuna",
            "id": 244
        },
        {
            "name": "West Bank",
            "id": 245
        },
        {
            "name": "Yemen",
            "id": 246
        },
        {
            "name": "Zambia",
            "id": 247
        },
        {
            "name": "Zimbabwe",
            "id": 248
        }
    ]

      // Filter places based on search text
      const filteredPlaces = mockData.filter((place) =>
        place.name.toLowerCase().includes(searchText.toLowerCase())
      );

      // Dispatch the success action with the filtered places
      dispatch({ type: "SEARCH_PLACES_SUCCESS", payload: filteredPlaces });
    } catch (error) {
      // Dispatch the failure action with the error message
      dispatch({ type: "SEARCH_PLACES_FAILURE", payload: error.message });
    }
  };
};

export const selectPlace = (place) => {
  return { type: "SELECT_PLACE", payload: place };
};
