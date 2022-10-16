import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import HomeButton from '../homepage/HomeButton'
import openMap from 'react-native-open-maps';
let zips = [
  {
      "zip_code": 53001,
      "latitude": 43.658488,
      "longitude": -87.973717,
      "city": "Adell",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53002,
      "latitude": 43.382128,
      "longitude": -88.26219,
      "city": "Allenton",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53003,
      "latitude": 43.217506,
      "longitude": -88.525315,
      "city": "Ashippun",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53004,
      "latitude": 43.499631,
      "longitude": -87.918042,
      "city": "Belgium",
      "state": "WI",
      "county": "Ozaukee"
    },
    {
      "zip_code": 53005,
      "latitude": 43.062707,
      "longitude": -88.105906,
      "city": "Brookfield",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53006,
      "latitude": 43.602789,
      "longitude": -88.52302,
      "city": "Brownsville",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53007,
      "latitude": 43.108459,
      "longitude": -88.071489,
      "city": "Butler",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53008,
      "latitude": 43.018696,
      "longitude": -88.302997,
      "city": "Brookfield",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53010,
      "latitude": 43.682727,
      "longitude": -88.350947,
      "city": "Campbellsport",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 53011,
      "latitude": 43.725504,
      "longitude": -88.048378,
      "city": "Cascade",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53012,
      "latitude": 43.321475,
      "longitude": -88.004033,
      "city": "Cedarburg",
      "state": "WI",
      "county": "Ozaukee"
    },
    {
      "zip_code": 53013,
      "latitude": 43.590548,
      "longitude": -87.85532,
      "city": "Cedar Grove",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53014,
      "latitude": 44.020561,
      "longitude": -88.185906,
      "city": "Chilton",
      "state": "WI",
      "county": "Calumet"
    },
    {
      "zip_code": 53015,
      "latitude": 43.935653,
      "longitude": -87.80346,
      "city": "Cleveland",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 53016,
      "latitude": 43.31546,
      "longitude": -88.720642,
      "city": "Clyman",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53017,
      "latitude": 43.209445,
      "longitude": -88.241501,
      "city": "Colgate",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53018,
      "latitude": 43.015666,
      "longitude": -88.386519,
      "city": "Delafield",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53019,
      "latitude": 43.672543,
      "longitude": -88.50384,
      "city": "Eden",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 53020,
      "latitude": 43.827363,
      "longitude": -87.9915,
      "city": "Elkhart Lake",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53021,
      "latitude": 43.477015,
      "longitude": -87.961162,
      "city": "Fredonia",
      "state": "WI",
      "county": "Ozaukee"
    },
    {
      "zip_code": 53022,
      "latitude": 43.235477,
      "longitude": -88.124711,
      "city": "Germantown",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53023,
      "latitude": 43.772128,
      "longitude": -88.041299,
      "city": "Glenbeulah",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53024,
      "latitude": 43.299956,
      "longitude": -87.94104,
      "city": "Grafton",
      "state": "WI",
      "county": "Ozaukee"
    },
    {
      "zip_code": 53026,
      "latitude": 43.718294,
      "longitude": -87.618716,
      "city": "Greenbush",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53027,
      "latitude": 43.357616,
      "longitude": -88.319032,
      "city": "Hartford",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53029,
      "latitude": 43.123679,
      "longitude": -88.336087,
      "city": "Hartland",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53031,
      "latitude": 43.639395,
      "longitude": -87.915705,
      "city": "Hingham",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53032,
      "latitude": 43.422045,
      "longitude": -88.624268,
      "city": "Horicon",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53033,
      "latitude": 43.367185,
      "longitude": -88.252892,
      "city": "Hubertus",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53034,
      "latitude": 43.330523,
      "longitude": -88.603032,
      "city": "Hustisford",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53035,
      "latitude": 43.36296,
      "longitude": -88.581515,
      "city": "Iron Ridge",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53036,
      "latitude": 43.147748,
      "longitude": -88.588628,
      "city": "Ixonia",
      "state": "WI",
      "county": "Jefferson"
    },
    {
      "zip_code": 53037,
      "latitude": 43.32393,
      "longitude": -88.152212,
      "city": "Jackson",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53038,
      "latitude": 43.092348,
      "longitude": -88.743276,
      "city": "Johnson Creek",
      "state": "WI",
      "county": "Jefferson"
    },
    {
      "zip_code": 53039,
      "latitude": 43.372221,
      "longitude": -88.710157,
      "city": "Juneau",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53040,
      "latitude": 43.499425,
      "longitude": -88.206447,
      "city": "Kewaskum",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53042,
      "latitude": 43.96317,
      "longitude": -87.955059,
      "city": "Kiel",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 53044,
      "latitude": 43.748441,
      "longitude": -87.776246,
      "city": "Kohler",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53045,
      "latitude": 43.06081,
      "longitude": -88.15589,
      "city": "Brookfield",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53046,
      "latitude": 43.153279,
      "longitude": -88.164427,
      "city": "Lannon",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53047,
      "latitude": 43.256793,
      "longitude": -88.6281,
      "city": "Lebanon",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53048,
      "latitude": 43.516912,
      "longitude": -88.480811,
      "city": "Lomira",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53049,
      "latitude": 43.875302,
      "longitude": -88.287108,
      "city": "Malone",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 53050,
      "latitude": 43.483463,
      "longitude": -88.545925,
      "city": "Mayville",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53051,
      "latitude": 43.124189,
      "longitude": -88.227543,
      "city": "Menomonee Falls",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53052,
      "latitude": 43.018696,
      "longitude": -88.302997,
      "city": "Menomonee Falls",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53056,
      "latitude": 43.146023,
      "longitude": -88.30975,
      "city": "Merton",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53057,
      "latitude": 43.711957,
      "longitude": -88.443585,
      "city": "Mount Calvary",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 53058,
      "latitude": 43.109127,
      "longitude": -88.40248,
      "city": "Nashotah",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53059,
      "latitude": 43.289809,
      "longitude": -88.533958,
      "city": "Neosho",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53060,
      "latitude": 43.433807,
      "longitude": -88.062338,
      "city": "Newburg",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53061,
      "latitude": 43.949886,
      "longitude": -88.101954,
      "city": "New Holstein",
      "state": "WI",
      "county": "Calumet"
    },
    {
      "zip_code": 53062,
      "latitude": 44.067942,
      "longitude": -88.223131,
      "city": "New Holstein",
      "state": "WI",
      "county": "Calumet"
    },
    {
      "zip_code": 53063,
      "latitude": 43.957599,
      "longitude": -87.792815,
      "city": "Newton",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 53064,
      "latitude": 43.018696,
      "longitude": -88.302997,
      "city": "North Lake",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53065,
      "latitude": 43.690246,
      "longitude": -88.678209,
      "city": "Oakfield",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 53066,
      "latitude": 43.087062,
      "longitude": -88.463305,
      "city": "Oconomowoc",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53069,
      "latitude": 43.117886,
      "longitude": -88.439353,
      "city": "Okauchee",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53070,
      "latitude": 43.620857,
      "longitude": -87.810616,
      "city": "Oostburg",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53072,
      "latitude": 43.080185,
      "longitude": -88.264875,
      "city": "Pewaukee",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53073,
      "latitude": 43.768454,
      "longitude": -87.975773,
      "city": "Plymouth",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53074,
      "latitude": 43.387702,
      "longitude": -87.881232,
      "city": "Port Washington",
      "state": "WI",
      "county": "Ozaukee"
    },
    {
      "zip_code": 53075,
      "latitude": 43.582924,
      "longitude": -88.000555,
      "city": "Random Lake",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53076,
      "latitude": 43.2727,
      "longitude": -88.206716,
      "city": "Richfield",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53078,
      "latitude": 43.304408,
      "longitude": -88.504428,
      "city": "Rubicon",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53079,
      "latitude": 43.797531,
      "longitude": -88.201679,
      "city": "Saint Cloud",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 53080,
      "latitude": 43.432544,
      "longitude": -87.947537,
      "city": "Saukville",
      "state": "WI",
      "county": "Ozaukee"
    },
    {
      "zip_code": 53081,
      "latitude": 43.722489,
      "longitude": -87.856793,
      "city": "Sheboygan",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53082,
      "latitude": 43.718294,
      "longitude": -87.618716,
      "city": "Sheboygan",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53083,
      "latitude": 43.775428,
      "longitude": -87.860803,
      "city": "Sheboygan",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53085,
      "latitude": 43.726404,
      "longitude": -87.853069,
      "city": "Sheboygan Falls",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53086,
      "latitude": 43.327417,
      "longitude": -88.260878,
      "city": "Slinger",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53088,
      "latitude": 44.080455,
      "longitude": -88.312404,
      "city": "Stockbridge",
      "state": "WI",
      "county": "Calumet"
    },
    {
      "zip_code": 53089,
      "latitude": 43.148887,
      "longitude": -88.245381,
      "city": "Sussex",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53090,
      "latitude": 43.443839,
      "longitude": -88.19631,
      "city": "West Bend",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53091,
      "latitude": 43.483635,
      "longitude": -88.450107,
      "city": "Theresa",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53092,
      "latitude": 43.235856,
      "longitude": -87.981188,
      "city": "Thiensville",
      "state": "WI",
      "county": "Ozaukee"
    },
    {
      "zip_code": 53093,
      "latitude": 43.662704,
      "longitude": -87.930254,
      "city": "Waldo",
      "state": "WI",
      "county": "Sheboygan"
    },
    {
      "zip_code": 53094,
      "latitude": 43.132599,
      "longitude": -88.743595,
      "city": "Watertown",
      "state": "WI",
      "county": "Jefferson"
    },
    {
      "zip_code": 53095,
      "latitude": 43.422223,
      "longitude": -88.195862,
      "city": "West Bend",
      "state": "WI",
      "county": "Washington"
    },
    {
      "zip_code": 53097,
      "latitude": 43.247112,
      "longitude": -87.980914,
      "city": "Mequon",
      "state": "WI",
      "county": "Ozaukee"
    },
    {
      "zip_code": 53098,
      "latitude": 43.276444,
      "longitude": -88.715408,
      "city": "Watertown",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53099,
      "latitude": 43.414202,
      "longitude": -88.704914,
      "city": "Woodland",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53101,
      "latitude": 42.58098,
      "longitude": -87.662878,
      "city": "Bassett",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53102,
      "latitude": 42.500141,
      "longitude": -88.079983,
      "city": "Benet Lake",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53103,
      "latitude": 42.882441,
      "longitude": -88.205514,
      "city": "Big Bend",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53104,
      "latitude": 42.553518,
      "longitude": -88.028986,
      "city": "Bristol",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53105,
      "latitude": 42.692103,
      "longitude": -88.228793,
      "city": "Burlington",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53108,
      "latitude": 42.803697,
      "longitude": -87.930936,
      "city": "Caledonia",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53109,
      "latitude": 42.535968,
      "longitude": -88.144386,
      "city": "Camp Lake",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53110,
      "latitude": 42.948015,
      "longitude": -87.866831,
      "city": "Cudahy",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53114,
      "latitude": 42.658281,
      "longitude": -88.660964,
      "city": "Darien",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53115,
      "latitude": 42.641556,
      "longitude": -88.653496,
      "city": "Delavan",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53118,
      "latitude": 42.951536,
      "longitude": -88.444097,
      "city": "Dousman",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53119,
      "latitude": 42.929074,
      "longitude": -88.47489,
      "city": "Eagle",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53120,
      "latitude": 42.756533,
      "longitude": -88.507327,
      "city": "East Troy",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53121,
      "latitude": 42.671666,
      "longitude": -88.563961,
      "city": "Elkhorn",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53122,
      "latitude": 43.048211,
      "longitude": -88.087888,
      "city": "Elm Grove",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53125,
      "latitude": 42.545625,
      "longitude": -88.463036,
      "city": "Fontana",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53126,
      "latitude": 42.785553,
      "longitude": -87.995471,
      "city": "Franksville",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53127,
      "latitude": 42.960098,
      "longitude": -88.374455,
      "city": "Genesee Depot",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53128,
      "latitude": 42.549412,
      "longitude": -88.438624,
      "city": "Genoa City",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53129,
      "latitude": 42.937765,
      "longitude": -87.998935,
      "city": "Greendale",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53130,
      "latitude": 42.943614,
      "longitude": -88.046454,
      "city": "Hales Corners",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53132,
      "latitude": 42.887289,
      "longitude": -88.009597,
      "city": "Franklin",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53137,
      "latitude": 43.008958,
      "longitude": -88.6726,
      "city": "Helenville",
      "state": "WI",
      "county": "Jefferson"
    },
    {
      "zip_code": 53138,
      "latitude": 42.66749,
      "longitude": -88.541721,
      "city": "Honey Creek",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53139,
      "latitude": 42.720022,
      "longitude": -88.120616,
      "city": "Kansasville",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53140,
      "latitude": 42.622449,
      "longitude": -87.830375,
      "city": "Kenosha",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53141,
      "latitude": 42.58098,
      "longitude": -87.662878,
      "city": "Kenosha",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53142,
      "latitude": 42.558221,
      "longitude": -87.925876,
      "city": "Kenosha",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53143,
      "latitude": 42.53607,
      "longitude": -87.824828,
      "city": "Kenosha",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53144,
      "latitude": 42.618427,
      "longitude": -87.948079,
      "city": "Kenosha",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53146,
      "latitude": 42.969924,
      "longitude": -88.177554,
      "city": "New Berlin",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53147,
      "latitude": 42.617877,
      "longitude": -88.52023,
      "city": "Lake Geneva",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53148,
      "latitude": 42.648665,
      "longitude": -88.359044,
      "city": "Lyons",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53149,
      "latitude": 42.97594,
      "longitude": -88.329731,
      "city": "Mukwonago",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53150,
      "latitude": 42.88799,
      "longitude": -88.132708,
      "city": "Muskego",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53151,
      "latitude": 42.973459,
      "longitude": -88.127689,
      "city": "New Berlin",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53152,
      "latitude": 42.574616,
      "longitude": -88.232632,
      "city": "New Munster",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53153,
      "latitude": 42.940971,
      "longitude": -88.401712,
      "city": "North Prairie",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53154,
      "latitude": 42.886266,
      "longitude": -87.89198,
      "city": "Oak Creek",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53156,
      "latitude": 42.893937,
      "longitude": -88.59712,
      "city": "Palmyra",
      "state": "WI",
      "county": "Jefferson"
    },
    {
      "zip_code": 53157,
      "latitude": 42.540048,
      "longitude": -88.358167,
      "city": "Pell Lake",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53158,
      "latitude": 42.52926,
      "longitude": -87.885546,
      "city": "Pleasant Prairie",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53159,
      "latitude": 42.555695,
      "longitude": -88.296914,
      "city": "Powers Lake",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53167,
      "latitude": 42.748168,
      "longitude": -88.243586,
      "city": "Rochester",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53168,
      "latitude": 42.574598,
      "longitude": -88.137535,
      "city": "Salem",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53170,
      "latitude": 42.552018,
      "longitude": -88.160836,
      "city": "Silver Lake",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53171,
      "latitude": 42.642298,
      "longitude": -87.903161,
      "city": "Somers",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53172,
      "latitude": 42.911616,
      "longitude": -87.950533,
      "city": "South Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53176,
      "latitude": 42.636038,
      "longitude": -88.415987,
      "city": "Springfield",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53177,
      "latitude": 42.712962,
      "longitude": -87.934013,
      "city": "Sturtevant",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53178,
      "latitude": 43.018327,
      "longitude": -88.600429,
      "city": "Sullivan",
      "state": "WI",
      "county": "Jefferson"
    },
    {
      "zip_code": 53179,
      "latitude": 42.517168,
      "longitude": -88.138001,
      "city": "Trevor",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53181,
      "latitude": 42.523887,
      "longitude": -88.235389,
      "city": "Twin Lakes",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53182,
      "latitude": 42.739435,
      "longitude": -88.083092,
      "city": "Union Grove",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53183,
      "latitude": 43.003573,
      "longitude": -88.376916,
      "city": "Wales",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53184,
      "latitude": 42.561543,
      "longitude": -88.597153,
      "city": "Walworth",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53185,
      "latitude": 42.763168,
      "longitude": -88.197361,
      "city": "Waterford",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53186,
      "latitude": 42.987835,
      "longitude": -88.217715,
      "city": "Waukesha",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53187,
      "latitude": 43.018696,
      "longitude": -88.302997,
      "city": "Waukesha",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53188,
      "latitude": 42.994564,
      "longitude": -88.241786,
      "city": "Waukesha",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53189,
      "latitude": 42.95163,
      "longitude": -88.296321,
      "city": "Waukesha",
      "state": "WI",
      "county": "Waukesha"
    },
    {
      "zip_code": 53190,
      "latitude": 42.784255,
      "longitude": -88.592559,
      "city": "Whitewater",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53191,
      "latitude": 42.691288,
      "longitude": -88.635035,
      "city": "Williams Bay",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53192,
      "latitude": 42.507165,
      "longitude": -88.191337,
      "city": "Wilmot",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53194,
      "latitude": 42.58098,
      "longitude": -87.662878,
      "city": "Woodworth",
      "state": "WI",
      "county": "Kenosha"
    },
    {
      "zip_code": 53195,
      "latitude": 42.513649,
      "longitude": -88.484322,
      "city": "Zenda",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53201,
      "latitude": 43.011264,
      "longitude": -87.958409,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53202,
      "latitude": 43.043213,
      "longitude": -87.894734,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53203,
      "latitude": 43.038313,
      "longitude": -87.916534,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53204,
      "latitude": 43.019463,
      "longitude": -87.925534,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53205,
      "latitude": 43.053112,
      "longitude": -87.933185,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53206,
      "latitude": 43.074311,
      "longitude": -87.933135,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53207,
      "latitude": 42.975115,
      "longitude": -87.894682,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53208,
      "latitude": 43.045962,
      "longitude": -87.963536,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53209,
      "latitude": 43.140909,
      "longitude": -87.942653,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53210,
      "latitude": 43.071111,
      "longitude": -87.973786,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53211,
      "latitude": 43.082018,
      "longitude": -87.889534,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53212,
      "latitude": 43.074862,
      "longitude": -87.907178,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53213,
      "latitude": 43.075461,
      "longitude": -87.999511,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53214,
      "latitude": 43.021514,
      "longitude": -88.017587,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53215,
      "latitude": 43.006014,
      "longitude": -87.942935,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53216,
      "latitude": 43.086244,
      "longitude": -87.976988,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53217,
      "latitude": 43.13446,
      "longitude": -87.933386,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53218,
      "latitude": 43.11546,
      "longitude": -87.991687,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53219,
      "latitude": 42.995814,
      "longitude": -87.990335,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53220,
      "latitude": 42.955864,
      "longitude": -87.993285,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53221,
      "latitude": 42.950565,
      "longitude": -87.987933,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53222,
      "latitude": 43.082161,
      "longitude": -88.036938,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53223,
      "latitude": 43.162959,
      "longitude": -87.977896,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53224,
      "latitude": 43.163122,
      "longitude": -88.022586,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53225,
      "latitude": 43.115159,
      "longitude": -88.040188,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53226,
      "latitude": 43.049312,
      "longitude": -88.041387,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53227,
      "latitude": 43.000926,
      "longitude": -88.031418,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53228,
      "latitude": 42.967564,
      "longitude": -88.043386,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53233,
      "latitude": 43.037213,
      "longitude": -87.933529,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53234,
      "latitude": 43.017412,
      "longitude": -87.569664,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53235,
      "latitude": 42.969865,
      "longitude": -87.873732,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53237,
      "latitude": 43.017412,
      "longitude": -87.569664,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53259,
      "latitude": 43.038663,
      "longitude": -87.913934,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53263,
      "latitude": 43.074583,
      "longitude": -88.06044,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53267,
      "latitude": 43.044013,
      "longitude": -87.909834,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53268,
      "latitude": 43.038513,
      "longitude": -87.909584,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53270,
      "latitude": 43.038763,
      "longitude": -87.903634,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53274,
      "latitude": 43.017412,
      "longitude": -87.569664,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53277,
      "latitude": 43.038863,
      "longitude": -87.902384,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53278,
      "latitude": 43.038863,
      "longitude": -87.902384,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53280,
      "latitude": 43.040963,
      "longitude": -87.957786,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53281,
      "latitude": 43.040963,
      "longitude": -87.957786,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53284,
      "latitude": 43.017412,
      "longitude": -87.569664,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53285,
      "latitude": 43.017412,
      "longitude": -87.569664,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53288,
      "latitude": 43.040613,
      "longitude": -87.909784,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53290,
      "latitude": 43.037263,
      "longitude": -87.914034,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53293,
      "latitude": 43.040813,
      "longitude": -87.919135,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53295,
      "latitude": 43.017412,
      "longitude": -87.569664,
      "city": "Milwaukee",
      "state": "WI",
      "county": "Milwaukee"
    },
    {
      "zip_code": 53401,
      "latitude": 42.727153,
      "longitude": -87.675979,
      "city": "Racine",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53402,
      "latitude": 42.755628,
      "longitude": -87.821815,
      "city": "Racine",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53403,
      "latitude": 42.700619,
      "longitude": -87.835901,
      "city": "Racine",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53404,
      "latitude": 42.756718,
      "longitude": -87.812275,
      "city": "Racine",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53405,
      "latitude": 42.731827,
      "longitude": -87.820925,
      "city": "Racine",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53406,
      "latitude": 42.72993,
      "longitude": -87.866213,
      "city": "Racine",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53407,
      "latitude": 42.731224,
      "longitude": -87.782818,
      "city": "Racine",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53408,
      "latitude": 42.727153,
      "longitude": -87.675979,
      "city": "Racine",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53490,
      "latitude": 42.727153,
      "longitude": -87.675979,
      "city": "Racine",
      "state": "WI",
      "county": "Racine"
    },
    {
      "zip_code": 53501,
      "latitude": 42.605454,
      "longitude": -89.070448,
      "city": "Afton",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53502,
      "latitude": 42.712827,
      "longitude": -89.45123,
      "city": "Albany",
      "state": "WI",
      "county": "Green"
    },
    {
      "zip_code": 53503,
      "latitude": 43.119643,
      "longitude": -89.947679,
      "city": "Arena",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53504,
      "latitude": 42.690143,
      "longitude": -89.922697,
      "city": "Argyle",
      "state": "WI",
      "county": "Lafayette"
    },
    {
      "zip_code": 53505,
      "latitude": 42.659301,
      "longitude": -88.83065,
      "city": "Avalon",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53506,
      "latitude": 43.138475,
      "longitude": -90.280725,
      "city": "Avoca",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53507,
      "latitude": 43.008396,
      "longitude": -89.897387,
      "city": "Barneveld",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53508,
      "latitude": 42.903829,
      "longitude": -89.586339,
      "city": "Belleville",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53510,
      "latitude": 42.685375,
      "longitude": -90.263828,
      "city": "Belmont",
      "state": "WI",
      "county": "Lafayette"
    },
    {
      "zip_code": 53511,
      "latitude": 42.562039,
      "longitude": -89.086045,
      "city": "Beloit",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53512,
      "latitude": 42.669779,
      "longitude": -89.072779,
      "city": "Beloit",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53515,
      "latitude": 43.113953,
      "longitude": -89.624544,
      "city": "Black Earth",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53516,
      "latitude": 42.693258,
      "longitude": -90.104765,
      "city": "Blanchardville",
      "state": "WI",
      "county": "Lafayette"
    },
    {
      "zip_code": 53517,
      "latitude": 43.03822,
      "longitude": -89.804576,
      "city": "Blue Mounds",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53518,
      "latitude": 42.97045,
      "longitude": -90.571655,
      "city": "Blue River",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53520,
      "latitude": 42.605797,
      "longitude": -89.580126,
      "city": "Brodhead",
      "state": "WI",
      "county": "Green"
    },
    {
      "zip_code": 53521,
      "latitude": 42.717122,
      "longitude": -89.582703,
      "city": "Brooklyn",
      "state": "WI",
      "county": "Green"
    },
    {
      "zip_code": 53522,
      "latitude": 42.563199,
      "longitude": -89.778793,
      "city": "Browntown",
      "state": "WI",
      "county": "Green"
    },
    {
      "zip_code": 53523,
      "latitude": 42.987505,
      "longitude": -89.080742,
      "city": "Cambridge",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53525,
      "latitude": 42.56239,
      "longitude": -88.859993,
      "city": "Clinton",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53526,
      "latitude": 42.963325,
      "longitude": -90.369319,
      "city": "Cobb",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53527,
      "latitude": 43.071165,
      "longitude": -89.196996,
      "city": "Cottage Grove",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53528,
      "latitude": 43.106453,
      "longitude": -89.695091,
      "city": "Cross Plains",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53529,
      "latitude": 43.239966,
      "longitude": -89.523346,
      "city": "Dane",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53530,
      "latitude": 42.69112,
      "longitude": -90.134781,
      "city": "Darlington",
      "state": "WI",
      "county": "Lafayette"
    },
    {
      "zip_code": 53531,
      "latitude": 43.057662,
      "longitude": -89.091798,
      "city": "Deerfield",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53532,
      "latitude": 43.149066,
      "longitude": -89.260855,
      "city": "De Forest",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53533,
      "latitude": 43.007063,
      "longitude": -90.192522,
      "city": "Dodgeville",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53534,
      "latitude": 42.803797,
      "longitude": -89.101389,
      "city": "Edgerton",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53535,
      "latitude": 43.011323,
      "longitude": -90.133932,
      "city": "Edmund",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53536,
      "latitude": 42.766359,
      "longitude": -89.250152,
      "city": "Evansville",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53537,
      "latitude": 42.672575,
      "longitude": -89.211151,
      "city": "Footville",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53538,
      "latitude": 42.926467,
      "longitude": -88.841626,
      "city": "Fort Atkinson",
      "state": "WI",
      "county": "Jefferson"
    },
    {
      "zip_code": 53540,
      "latitude": 43.234509,
      "longitude": -90.261804,
      "city": "Gotham",
      "state": "WI",
      "county": "Richland"
    },
    {
      "zip_code": 53541,
      "latitude": 42.579894,
      "longitude": -90.031186,
      "city": "Gratiot",
      "state": "WI",
      "county": "Lafayette"
    },
    {
      "zip_code": 53542,
      "latitude": 42.632325,
      "longitude": -89.15942,
      "city": "Hanover",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53543,
      "latitude": 42.991078,
      "longitude": -90.133812,
      "city": "Highland",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53544,
      "latitude": 42.871497,
      "longitude": -89.923881,
      "city": "Hollandale",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53545,
      "latitude": 42.710981,
      "longitude": -89.112201,
      "city": "Janesville",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53546,
      "latitude": 42.663574,
      "longitude": -88.947859,
      "city": "Janesville",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53547,
      "latitude": 42.729359,
      "longitude": -89.030111,
      "city": "Janesville",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53549,
      "latitude": 42.993502,
      "longitude": -88.759793,
      "city": "Jefferson",
      "state": "WI",
      "county": "Jefferson"
    },
    {
      "zip_code": 53550,
      "latitude": 42.564434,
      "longitude": -89.507906,
      "city": "Juda",
      "state": "WI",
      "county": "Green"
    },
    {
      "zip_code": 53551,
      "latitude": 43.080902,
      "longitude": -88.913251,
      "city": "Lake Mills",
      "state": "WI",
      "county": "Jefferson"
    },
    {
      "zip_code": 53553,
      "latitude": 42.963106,
      "longitude": -90.320561,
      "city": "Linden",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53554,
      "latitude": 42.898716,
      "longitude": -90.511593,
      "city": "Livingston",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53555,
      "latitude": 43.342813,
      "longitude": -89.557023,
      "city": "Lodi",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53556,
      "latitude": 43.241475,
      "longitude": -90.265197,
      "city": "Lone Rock",
      "state": "WI",
      "county": "Richland"
    },
    {
      "zip_code": 53557,
      "latitude": 43.343056,
      "longitude": -88.791442,
      "city": "Lowell",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53558,
      "latitude": 43.010519,
      "longitude": -89.363862,
      "city": "Mc Farland",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53559,
      "latitude": 43.173921,
      "longitude": -89.091315,
      "city": "Marshall",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53560,
      "latitude": 43.190983,
      "longitude": -89.729261,
      "city": "Mazomanie",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53561,
      "latitude": 43.364531,
      "longitude": -89.66396,
      "city": "Merrimac",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53562,
      "latitude": 43.114772,
      "longitude": -89.529153,
      "city": "Middleton",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53563,
      "latitude": 42.737804,
      "longitude": -89.041277,
      "city": "Milton",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53565,
      "latitude": 42.989701,
      "longitude": -90.152558,
      "city": "Mineral Point",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53566,
      "latitude": 42.612966,
      "longitude": -89.656994,
      "city": "Monroe",
      "state": "WI",
      "county": "Green"
    },
    {
      "zip_code": 53569,
      "latitude": 43.031263,
      "longitude": -90.492475,
      "city": "Montfort",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53570,
      "latitude": 42.74305,
      "longitude": -89.621013,
      "city": "Monticello",
      "state": "WI",
      "county": "Green"
    },
    {
      "zip_code": 53571,
      "latitude": 43.277325,
      "longitude": -89.356403,
      "city": "Morrisonville",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53572,
      "latitude": 42.973438,
      "longitude": -89.513903,
      "city": "Mount Horeb",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53573,
      "latitude": 43.1234,
      "longitude": -90.488423,
      "city": "Muscoda",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53574,
      "latitude": 42.816273,
      "longitude": -89.651287,
      "city": "New Glarus",
      "state": "WI",
      "county": "Green"
    },
    {
      "zip_code": 53575,
      "latitude": 42.933918,
      "longitude": -89.389642,
      "city": "Oregon",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53576,
      "latitude": 42.614273,
      "longitude": -89.233129,
      "city": "Orfordville",
      "state": "WI",
      "county": "Rock"
    },
    {
      "zip_code": 53577,
      "latitude": 43.293776,
      "longitude": -90.022327,
      "city": "Plain",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53578,
      "latitude": 43.360759,
      "longitude": -89.808407,
      "city": "Prairie Du Sac",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53579,
      "latitude": 43.287987,
      "longitude": -88.887444,
      "city": "Reeseville",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53580,
      "latitude": 42.856934,
      "longitude": -90.377784,
      "city": "Rewey",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53581,
      "latitude": 43.366148,
      "longitude": -90.430225,
      "city": "Richland Center",
      "state": "WI",
      "county": "Richland"
    },
    {
      "zip_code": 53582,
      "latitude": 43.016577,
      "longitude": -89.986458,
      "city": "Ridgeway",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53583,
      "latitude": 43.251127,
      "longitude": -89.89584,
      "city": "Sauk City",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53584,
      "latitude": 43.279435,
      "longitude": -90.287566,
      "city": "Sextonville",
      "state": "WI",
      "county": "Richland"
    },
    {
      "zip_code": 53585,
      "latitude": 42.607688,
      "longitude": -88.623745,
      "city": "Sharon",
      "state": "WI",
      "county": "Walworth"
    },
    {
      "zip_code": 53586,
      "latitude": 42.605221,
      "longitude": -90.113635,
      "city": "Shullsburg",
      "state": "WI",
      "county": "Lafayette"
    },
    {
      "zip_code": 53587,
      "latitude": 42.579926,
      "longitude": -89.931751,
      "city": "South Wayne",
      "state": "WI",
      "county": "Lafayette"
    },
    {
      "zip_code": 53588,
      "latitude": 43.230001,
      "longitude": -90.040066,
      "city": "Spring Green",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53589,
      "latitude": 42.931289,
      "longitude": -89.168354,
      "city": "Stoughton",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53590,
      "latitude": 43.195712,
      "longitude": -89.209418,
      "city": "Sun Prairie",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53591,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Sun Prairie",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53593,
      "latitude": 42.995697,
      "longitude": -89.566512,
      "city": "Verona",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53594,
      "latitude": 43.12904,
      "longitude": -88.947513,
      "city": "Waterloo",
      "state": "WI",
      "county": "Jefferson"
    },
    {
      "zip_code": 53595,
      "latitude": 42.976078,
      "longitude": -90.141299,
      "city": "Dodgeville",
      "state": "WI",
      "county": "Iowa"
    },
    {
      "zip_code": 53596,
      "latitude": 43.192403,
      "longitude": -89.26288,
      "city": "Sun Prairie",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53597,
      "latitude": 43.183972,
      "longitude": -89.322655,
      "city": "Waunakee",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53598,
      "latitude": 43.207783,
      "longitude": -89.34178,
      "city": "Windsor",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53599,
      "latitude": 42.649309,
      "longitude": -89.862202,
      "city": "Woodford",
      "state": "WI",
      "county": "Lafayette"
    },
    {
      "zip_code": 53701,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53702,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53703,
      "latitude": 43.053085,
      "longitude": -89.352764,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53704,
      "latitude": 43.104429,
      "longitude": -89.322135,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53705,
      "latitude": 43.073147,
      "longitude": -89.45681,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53706,
      "latitude": 43.077755,
      "longitude": -89.413326,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53707,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53708,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53709,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53710,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53711,
      "latitude": 43.021252,
      "longitude": -89.417973,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53713,
      "latitude": 43.037167,
      "longitude": -89.397066,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53714,
      "latitude": 43.118663,
      "longitude": -89.312644,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53715,
      "latitude": 43.061839,
      "longitude": -89.394619,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53716,
      "latitude": 43.063103,
      "longitude": -89.313327,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53717,
      "latitude": 43.015966,
      "longitude": -89.656734,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53718,
      "latitude": 43.11416,
      "longitude": -89.249067,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53719,
      "latitude": 43.03125,
      "longitude": -89.494568,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53725,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53726,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53744,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53777,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53778,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53779,
      "latitude": 43.098202,
      "longitude": -89.324196,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53780,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53782,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53783,
      "latitude": 43.15955,
      "longitude": -89.285235,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53784,
      "latitude": 43.048908,
      "longitude": -89.338447,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53785,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53786,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53787,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53788,
      "latitude": 43.076691,
      "longitude": -89.37632,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53789,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53790,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53791,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53792,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53793,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53794,
      "latitude": 43.06956,
      "longitude": -89.423861,
      "city": "Madison",
      "state": "WI",
      "county": "Dane"
    },
    {
      "zip_code": 53801,
      "latitude": 42.796401,
      "longitude": -90.823145,
      "city": "Bagley",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53802,
      "latitude": 42.873625,
      "longitude": -90.936354,
      "city": "Beetown",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53803,
      "latitude": 42.554499,
      "longitude": -90.350817,
      "city": "Benton",
      "state": "WI",
      "county": "Lafayette"
    },
    {
      "zip_code": 53804,
      "latitude": 42.838191,
      "longitude": -90.907665,
      "city": "Bloomington",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53805,
      "latitude": 42.896051,
      "longitude": -90.779071,
      "city": "Boscobel",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53806,
      "latitude": 42.782451,
      "longitude": -90.945303,
      "city": "Cassville",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53807,
      "latitude": 42.751647,
      "longitude": -90.699166,
      "city": "Cuba City",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53808,
      "latitude": 42.635081,
      "longitude": -90.583298,
      "city": "Dickeyville",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53809,
      "latitude": 42.806387,
      "longitude": -90.677324,
      "city": "Fennimore",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53810,
      "latitude": 42.822065,
      "longitude": -90.982153,
      "city": "Glen Haven",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53811,
      "latitude": 42.543893,
      "longitude": -90.536322,
      "city": "Hazel Green",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53812,
      "latitude": 42.859325,
      "longitude": -90.791337,
      "city": "Kieler",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53813,
      "latitude": 42.864155,
      "longitude": -90.684965,
      "city": "Lancaster",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53816,
      "latitude": 42.975521,
      "longitude": -90.84962,
      "city": "Mount Hope",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53817,
      "latitude": 42.942183,
      "longitude": -90.964596,
      "city": "Patch Grove",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53818,
      "latitude": 42.795971,
      "longitude": -90.644975,
      "city": "Platteville",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53820,
      "latitude": 42.692445,
      "longitude": -90.731654,
      "city": "Potosi",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53821,
      "latitude": 43.084008,
      "longitude": -91.069064,
      "city": "Prairie Du Chien",
      "state": "WI",
      "county": "Crawford"
    },
    {
      "zip_code": 53824,
      "latitude": 42.859325,
      "longitude": -90.791337,
      "city": "Sinsinawa",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53825,
      "latitude": 42.926596,
      "longitude": -90.583575,
      "city": "Stitzer",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53826,
      "latitude": 43.110147,
      "longitude": -90.957097,
      "city": "Wauzeka",
      "state": "WI",
      "county": "Crawford"
    },
    {
      "zip_code": 53827,
      "latitude": 43.035813,
      "longitude": -90.853002,
      "city": "Woodman",
      "state": "WI",
      "county": "Grant"
    },
    {
      "zip_code": 53901,
      "latitude": 43.50666,
      "longitude": -89.399335,
      "city": "Portage",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53910,
      "latitude": 43.892066,
      "longitude": -89.827509,
      "city": "Adams",
      "state": "WI",
      "county": "Adams"
    },
    {
      "zip_code": 53911,
      "latitude": 43.336846,
      "longitude": -89.36061,
      "city": "Arlington",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53913,
      "latitude": 43.446602,
      "longitude": -89.863957,
      "city": "Baraboo",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53916,
      "latitude": 43.466482,
      "longitude": -88.862852,
      "city": "Beaver Dam",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53917,
      "latitude": 43.414202,
      "longitude": -88.704914,
      "city": "Beaver Dam",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53919,
      "latitude": 43.740975,
      "longitude": -88.62245,
      "city": "Brandon",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 53920,
      "latitude": 43.7076,
      "longitude": -89.551629,
      "city": "Briggsville",
      "state": "WI",
      "county": "Marquette"
    },
    {
      "zip_code": 53922,
      "latitude": 43.517272,
      "longitude": -88.73346,
      "city": "Burnett",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53923,
      "latitude": 43.550235,
      "longitude": -89.15173,
      "city": "Cambria",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53924,
      "latitude": 43.46358,
      "longitude": -90.28225,
      "city": "Cazenovia",
      "state": "WI",
      "county": "Richland"
    },
    {
      "zip_code": 53925,
      "latitude": 43.3569,
      "longitude": -89.12088,
      "city": "Columbus",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53926,
      "latitude": 43.679317,
      "longitude": -89.186656,
      "city": "Dalton",
      "state": "WI",
      "county": "Green Lake"
    },
    {
      "zip_code": 53927,
      "latitude": 43.95546,
      "longitude": -89.941771,
      "city": "Dellwood",
      "state": "WI",
      "county": "Adams"
    },
    {
      "zip_code": 53928,
      "latitude": 43.426605,
      "longitude": -89.149069,
      "city": "Doylestown",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53929,
      "latitude": 43.82702,
      "longitude": -90.10446,
      "city": "Elroy",
      "state": "WI",
      "county": "Juneau"
    },
    {
      "zip_code": 53930,
      "latitude": 43.6866,
      "longitude": -89.483441,
      "city": "Endeavor",
      "state": "WI",
      "county": "Marquette"
    },
    {
      "zip_code": 53931,
      "latitude": 43.747481,
      "longitude": -88.866516,
      "city": "Fairwater",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 53932,
      "latitude": 43.417126,
      "longitude": -89.070459,
      "city": "Fall River",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53933,
      "latitude": 43.568169,
      "longitude": -88.895723,
      "city": "Fox Lake",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53934,
      "latitude": 43.997966,
      "longitude": -89.777051,
      "city": "Friendship",
      "state": "WI",
      "county": "Adams"
    },
    {
      "zip_code": 53935,
      "latitude": 43.590116,
      "longitude": -89.05931,
      "city": "Friesland",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53936,
      "latitude": 43.947894,
      "longitude": -89.72751,
      "city": "Grand Marsh",
      "state": "WI",
      "county": "Adams"
    },
    {
      "zip_code": 53937,
      "latitude": 43.390863,
      "longitude": -90.128539,
      "city": "Hillpoint",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53939,
      "latitude": 43.6911,
      "longitude": -89.130237,
      "city": "Kingston",
      "state": "WI",
      "county": "Green Lake"
    },
    {
      "zip_code": 53940,
      "latitude": 43.593912,
      "longitude": -89.791242,
      "city": "Lake Delton",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53941,
      "latitude": 43.547459,
      "longitude": -90.117243,
      "city": "La Valle",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53942,
      "latitude": 43.468211,
      "longitude": -90.161478,
      "city": "Lime Ridge",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53943,
      "latitude": 43.385775,
      "longitude": -90.017885,
      "city": "Loganville",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53944,
      "latitude": 43.714061,
      "longitude": -89.949337,
      "city": "Lyndon Station",
      "state": "WI",
      "county": "Juneau"
    },
    {
      "zip_code": 53946,
      "latitude": 43.723578,
      "longitude": -89.065361,
      "city": "Markesan",
      "state": "WI",
      "county": "Green Lake"
    },
    {
      "zip_code": 53947,
      "latitude": 43.746464,
      "longitude": -89.138441,
      "city": "Marquette",
      "state": "WI",
      "county": "Green Lake"
    },
    {
      "zip_code": 53948,
      "latitude": 43.908679,
      "longitude": -90.07242,
      "city": "Mauston",
      "state": "WI",
      "county": "Juneau"
    },
    {
      "zip_code": 53949,
      "latitude": 43.812581,
      "longitude": -89.372011,
      "city": "Montello",
      "state": "WI",
      "county": "Marquette"
    },
    {
      "zip_code": 53950,
      "latitude": 43.911145,
      "longitude": -90.165918,
      "city": "New Lisbon",
      "state": "WI",
      "county": "Juneau"
    },
    {
      "zip_code": 53951,
      "latitude": 43.4031,
      "longitude": -89.872232,
      "city": "North Freedom",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53952,
      "latitude": 43.767789,
      "longitude": -89.463944,
      "city": "Oxford",
      "state": "WI",
      "county": "Marquette"
    },
    {
      "zip_code": 53953,
      "latitude": 43.764385,
      "longitude": -89.4576,
      "city": "Packwaukee",
      "state": "WI",
      "county": "Marquette"
    },
    {
      "zip_code": 53954,
      "latitude": 43.516772,
      "longitude": -89.31459,
      "city": "Pardeeville",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53955,
      "latitude": 43.433273,
      "longitude": -89.394518,
      "city": "Poynette",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53956,
      "latitude": 43.534002,
      "longitude": -88.946714,
      "city": "Randolph",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53957,
      "latitude": 43.535249,
      "longitude": -89.006845,
      "city": "Randolph",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53958,
      "latitude": 43.393767,
      "longitude": -89.95589,
      "city": "Reedsburg",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53959,
      "latitude": 43.482108,
      "longitude": -89.966806,
      "city": "Reedsburg",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53960,
      "latitude": 43.398335,
      "longitude": -89.250177,
      "city": "Rio",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53961,
      "latitude": 43.459884,
      "longitude": -89.931931,
      "city": "Rock Springs",
      "state": "WI",
      "county": "Sauk"
    },
    {
      "zip_code": 53962,
      "latitude": 43.94521,
      "longitude": -90.049489,
      "city": "Union Center",
      "state": "WI",
      "county": "Juneau"
    },
    {
      "zip_code": 53963,
      "latitude": 43.459309,
      "longitude": -88.754483,
      "city": "Waupun",
      "state": "WI",
      "county": "Dodge"
    },
    {
      "zip_code": 53964,
      "latitude": 43.848698,
      "longitude": -89.478459,
      "city": "Westfield",
      "state": "WI",
      "county": "Marquette"
    },
    {
      "zip_code": 53965,
      "latitude": 43.568982,
      "longitude": -89.44168,
      "city": "Wisconsin Dells",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 53968,
      "latitude": 43.690867,
      "longitude": -90.203595,
      "city": "Wonewoc",
      "state": "WI",
      "county": "Juneau"
    },
    {
      "zip_code": 53969,
      "latitude": 43.498907,
      "longitude": -89.30497,
      "city": "Wyocena",
      "state": "WI",
      "county": "Columbia"
    },
    {
      "zip_code": 54001,
      "latitude": 45.348566,
      "longitude": -92.401379,
      "city": "Amery",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54002,
      "latitude": 44.969171,
      "longitude": -92.441061,
      "city": "Baldwin",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54003,
      "latitude": 44.789742,
      "longitude": -92.448434,
      "city": "Beldenville",
      "state": "WI",
      "county": "Pierce"
    },
    {
      "zip_code": 54004,
      "latitude": 45.31484,
      "longitude": -92.430772,
      "city": "Clayton",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54005,
      "latitude": 45.282945,
      "longitude": -92.429816,
      "city": "Clear Lake",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54006,
      "latitude": 45.554321,
      "longitude": -92.662155,
      "city": "Cushing",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54007,
      "latitude": 45.087504,
      "longitude": -92.379021,
      "city": "Deer Park",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54009,
      "latitude": 45.36179,
      "longitude": -92.549952,
      "city": "Dresser",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54010,
      "latitude": 44.734759,
      "longitude": -92.465532,
      "city": "East Ellsworth",
      "state": "WI",
      "county": "Pierce"
    },
    {
      "zip_code": 54011,
      "latitude": 44.740142,
      "longitude": -92.548289,
      "city": "Ellsworth",
      "state": "WI",
      "county": "Pierce"
    },
    {
      "zip_code": 54012,
      "latitude": 45.11453,
      "longitude": -92.276235,
      "city": "Emerald",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54013,
      "latitude": 45.060365,
      "longitude": -92.248403,
      "city": "Glenwood City",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54014,
      "latitude": 44.655504,
      "longitude": -92.573652,
      "city": "Hager City",
      "state": "WI",
      "county": "Pierce"
    },
    {
      "zip_code": 54015,
      "latitude": 44.966939,
      "longitude": -92.456512,
      "city": "Hammond",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54016,
      "latitude": 44.971853,
      "longitude": -92.481156,
      "city": "Hudson",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54017,
      "latitude": 45.090925,
      "longitude": -92.496993,
      "city": "New Richmond",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54020,
      "latitude": 45.283783,
      "longitude": -92.535618,
      "city": "Osceola",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54021,
      "latitude": 44.747209,
      "longitude": -92.640483,
      "city": "Prescott",
      "state": "WI",
      "county": "Pierce"
    },
    {
      "zip_code": 54022,
      "latitude": 44.802351,
      "longitude": -92.595365,
      "city": "River Falls",
      "state": "WI",
      "county": "Pierce"
    },
    {
      "zip_code": 54023,
      "latitude": 44.974357,
      "longitude": -92.59762,
      "city": "Roberts",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54024,
      "latitude": 45.509689,
      "longitude": -92.611733,
      "city": "Saint Croix Falls",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54025,
      "latitude": 45.081379,
      "longitude": -92.474419,
      "city": "Somerset",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54026,
      "latitude": 45.265619,
      "longitude": -92.480793,
      "city": "Star Prairie",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54027,
      "latitude": 44.945813,
      "longitude": -92.25605,
      "city": "Wilson",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54028,
      "latitude": 44.946202,
      "longitude": -92.376526,
      "city": "Woodville",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54082,
      "latitude": 45.080119,
      "longitude": -92.746568,
      "city": "Houlton",
      "state": "WI",
      "county": "Saint Croix"
    },
    {
      "zip_code": 54101,
      "latitude": 44.792284,
      "longitude": -88.044067,
      "city": "Abrams",
      "state": "WI",
      "county": "Oconto"
    },
    {
      "zip_code": 54102,
      "latitude": 45.492839,
      "longitude": -88.049604,
      "city": "Amberg",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54103,
      "latitude": 45.672311,
      "longitude": -88.530545,
      "city": "Armstrong Creek",
      "state": "WI",
      "county": "Forest"
    },
    {
      "zip_code": 54104,
      "latitude": 45.420602,
      "longitude": -88.246901,
      "city": "Athelstane",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54106,
      "latitude": 44.470235,
      "longitude": -88.454719,
      "city": "Black Creek",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54107,
      "latitude": 44.699153,
      "longitude": -88.454312,
      "city": "Bonduel",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54110,
      "latitude": 44.163209,
      "longitude": -88.133876,
      "city": "Brillion",
      "state": "WI",
      "county": "Calumet"
    },
    {
      "zip_code": 54111,
      "latitude": 44.810274,
      "longitude": -88.391648,
      "city": "Cecil",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54112,
      "latitude": 45.306273,
      "longitude": -88.002389,
      "city": "Coleman",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54113,
      "latitude": 44.348711,
      "longitude": -88.361208,
      "city": "Combined Locks",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54114,
      "latitude": 45.261661,
      "longitude": -88.078001,
      "city": "Crivitz",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54115,
      "latitude": 44.453629,
      "longitude": -87.978279,
      "city": "De Pere",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54119,
      "latitude": 45.591557,
      "longitude": -88.222435,
      "city": "Dunbar",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54120,
      "latitude": 45.74447,
      "longitude": -88.47565,
      "city": "Fence",
      "state": "WI",
      "county": "Florence"
    },
    {
      "zip_code": 54121,
      "latitude": 45.845525,
      "longitude": -88.284254,
      "city": "Florence",
      "state": "WI",
      "county": "Florence"
    },
    {
      "zip_code": 54123,
      "latitude": 44.211065,
      "longitude": -88.151532,
      "city": "Forest Junction",
      "state": "WI",
      "county": "Calumet"
    },
    {
      "zip_code": 54124,
      "latitude": 44.916397,
      "longitude": -88.174299,
      "city": "Gillett",
      "state": "WI",
      "county": "Oconto"
    },
    {
      "zip_code": 54125,
      "latitude": 45.648826,
      "longitude": -88.333152,
      "city": "Goodman",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54126,
      "latitude": 44.347365,
      "longitude": -88.037736,
      "city": "Greenleaf",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54127,
      "latitude": 44.804687,
      "longitude": -88.269238,
      "city": "Green Valley",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54128,
      "latitude": 44.806061,
      "longitude": -88.732786,
      "city": "Gresham",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54129,
      "latitude": 44.146516,
      "longitude": -88.195124,
      "city": "Hilbert",
      "state": "WI",
      "county": "Calumet"
    },
    {
      "zip_code": 54130,
      "latitude": 44.334465,
      "longitude": -88.295776,
      "city": "Kaukauna",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54131,
      "latitude": 44.416326,
      "longitude": -88.464873,
      "city": "Freedom",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54135,
      "latitude": 44.88646,
      "longitude": -88.575133,
      "city": "Keshena",
      "state": "WI",
      "county": "Menominee"
    },
    {
      "zip_code": 54136,
      "latitude": 44.303208,
      "longitude": -88.473445,
      "city": "Kimberly",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54137,
      "latitude": 44.755693,
      "longitude": -88.289822,
      "city": "Krakow",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54138,
      "latitude": 45.308254,
      "longitude": -88.477771,
      "city": "Lakewood",
      "state": "WI",
      "county": "Oconto"
    },
    {
      "zip_code": 54139,
      "latitude": 45.063468,
      "longitude": -88.214802,
      "city": "Lena",
      "state": "WI",
      "county": "Oconto"
    },
    {
      "zip_code": 54140,
      "latitude": 44.294746,
      "longitude": -88.316305,
      "city": "Little Chute",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54141,
      "latitude": 44.744566,
      "longitude": -87.995493,
      "city": "Little Suamico",
      "state": "WI",
      "county": "Oconto"
    },
    {
      "zip_code": 54143,
      "latitude": 45.086805,
      "longitude": -87.716311,
      "city": "Marinette",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54149,
      "latitude": 45.095725,
      "longitude": -88.47889,
      "city": "Mountain",
      "state": "WI",
      "county": "Oconto"
    },
    {
      "zip_code": 54150,
      "latitude": 44.86893,
      "longitude": -88.618552,
      "city": "Neopit",
      "state": "WI",
      "county": "Menominee"
    },
    {
      "zip_code": 54151,
      "latitude": 45.579448,
      "longitude": -87.918821,
      "city": "Niagara",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54152,
      "latitude": 44.566799,
      "longitude": -88.458164,
      "city": "Nichols",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54153,
      "latitude": 44.897088,
      "longitude": -88.082586,
      "city": "Oconto",
      "state": "WI",
      "county": "Oconto"
    },
    {
      "zip_code": 54154,
      "latitude": 44.901999,
      "longitude": -88.125829,
      "city": "Oconto Falls",
      "state": "WI",
      "county": "Oconto"
    },
    {
      "zip_code": 54155,
      "latitude": 44.447167,
      "longitude": -88.23333,
      "city": "Oneida",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54156,
      "latitude": 45.392437,
      "longitude": -87.904337,
      "city": "Pembine",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54157,
      "latitude": 45.174269,
      "longitude": -87.902,
      "city": "Peshtigo",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54159,
      "latitude": 45.205901,
      "longitude": -87.8274,
      "city": "Porterfield",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54160,
      "latitude": 44.119917,
      "longitude": -88.096495,
      "city": "Potter",
      "state": "WI",
      "county": "Calumet"
    },
    {
      "zip_code": 54161,
      "latitude": 45.117544,
      "longitude": -87.977136,
      "city": "Pound",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54162,
      "latitude": 44.583761,
      "longitude": -88.103417,
      "city": "Pulaski",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54165,
      "latitude": 44.430443,
      "longitude": -88.463328,
      "city": "Seymour",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54166,
      "latitude": 44.745058,
      "longitude": -88.664156,
      "city": "Shawano",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54169,
      "latitude": 44.167388,
      "longitude": -88.229438,
      "city": "Sherwood",
      "state": "WI",
      "county": "Calumet"
    },
    {
      "zip_code": 54170,
      "latitude": 44.482935,
      "longitude": -88.589547,
      "city": "Shiocton",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54171,
      "latitude": 44.726641,
      "longitude": -88.121792,
      "city": "Sobieski",
      "state": "WI",
      "county": "Oconto"
    },
    {
      "zip_code": 54173,
      "latitude": 44.635701,
      "longitude": -88.122034,
      "city": "Suamico",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54174,
      "latitude": 45.111843,
      "longitude": -88.418694,
      "city": "Suring",
      "state": "WI",
      "county": "Oconto"
    },
    {
      "zip_code": 54175,
      "latitude": 45.309457,
      "longitude": -88.605896,
      "city": "Townsend",
      "state": "WI",
      "county": "Oconto"
    },
    {
      "zip_code": 54177,
      "latitude": 45.383307,
      "longitude": -87.876231,
      "city": "Wausaukee",
      "state": "WI",
      "county": "Marinette"
    },
    {
      "zip_code": 54180,
      "latitude": 44.494921,
      "longitude": -88.124743,
      "city": "Wrightstown",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54182,
      "latitude": 44.731453,
      "longitude": -88.369842,
      "city": "Zachow",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54201,
      "latitude": 44.596017,
      "longitude": -87.540266,
      "city": "Algoma",
      "state": "WI",
      "county": "Kewaunee"
    },
    {
      "zip_code": 54202,
      "latitude": 45.077002,
      "longitude": -87.14603,
      "city": "Baileys Harbor",
      "state": "WI",
      "county": "Door"
    },
    {
      "zip_code": 54203,
      "latitude": 44.109853,
      "longitude": -87.483874,
      "city": "Branch",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54204,
      "latitude": 44.752379,
      "longitude": -87.625888,
      "city": "Brussels",
      "state": "WI",
      "county": "Door"
    },
    {
      "zip_code": 54205,
      "latitude": 44.596082,
      "longitude": -87.637308,
      "city": "Casco",
      "state": "WI",
      "county": "Kewaunee"
    },
    {
      "zip_code": 54207,
      "latitude": 44.091021,
      "longitude": -87.990241,
      "city": "Collins",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54208,
      "latitude": 44.459153,
      "longitude": -87.885734,
      "city": "Denmark",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54209,
      "latitude": 45.012261,
      "longitude": -87.266031,
      "city": "Egg Harbor",
      "state": "WI",
      "county": "Door"
    },
    {
      "zip_code": 54210,
      "latitude": 45.253108,
      "longitude": -87.044698,
      "city": "Ellison Bay",
      "state": "WI",
      "county": "Door"
    },
    {
      "zip_code": 54211,
      "latitude": 45.159184,
      "longitude": -87.171024,
      "city": "Ephraim",
      "state": "WI",
      "county": "Door"
    },
    {
      "zip_code": 54212,
      "latitude": 45.11038,
      "longitude": -87.209899,
      "city": "Fish Creek",
      "state": "WI",
      "county": "Door"
    },
    {
      "zip_code": 54213,
      "latitude": 44.722418,
      "longitude": -87.528122,
      "city": "Forestville",
      "state": "WI",
      "county": "Door"
    },
    {
      "zip_code": 54214,
      "latitude": 44.204875,
      "longitude": -87.715629,
      "city": "Francis Creek",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54215,
      "latitude": 44.222585,
      "longitude": -87.801651,
      "city": "Kellnersville",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54216,
      "latitude": 44.438185,
      "longitude": -87.592719,
      "city": "Kewaunee",
      "state": "WI",
      "county": "Kewaunee"
    },
    {
      "zip_code": 54217,
      "latitude": 44.541977,
      "longitude": -87.670551,
      "city": "Luxemburg",
      "state": "WI",
      "county": "Kewaunee"
    },
    {
      "zip_code": 54220,
      "latitude": 44.109709,
      "longitude": -87.714403,
      "city": "Manitowoc",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54221,
      "latitude": 44.132295,
      "longitude": -87.599031,
      "city": "Manitowoc",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54226,
      "latitude": 45.059713,
      "longitude": -87.006012,
      "city": "Maplewood",
      "state": "WI",
      "county": "Door"
    },
    {
      "zip_code": 54227,
      "latitude": 44.276554,
      "longitude": -87.801651,
      "city": "Maribel",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54228,
      "latitude": 44.167783,
      "longitude": -87.739206,
      "city": "Mishicot",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54229,
      "latitude": 44.571416,
      "longitude": -87.833306,
      "city": "New Franken",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54230,
      "latitude": 44.142382,
      "longitude": -87.904684,
      "city": "Reedsville",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54232,
      "latitude": 44.005714,
      "longitude": -87.922351,
      "city": "Saint Nazianz",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54234,
      "latitude": 45.178293,
      "longitude": -87.101748,
      "city": "Sister Bay",
      "state": "WI",
      "county": "Door"
    },
    {
      "zip_code": 54235,
      "latitude": 44.945314,
      "longitude": -87.384142,
      "city": "Sturgeon Bay",
      "state": "WI",
      "county": "Door"
    },
    {
      "zip_code": 54240,
      "latitude": 44.282802,
      "longitude": -87.632398,
      "city": "Tisch Mills",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54241,
      "latitude": 44.225538,
      "longitude": -87.627759,
      "city": "Two Rivers",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54245,
      "latitude": 44.053321,
      "longitude": -87.899912,
      "city": "Valders",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54246,
      "latitude": 45.373786,
      "longitude": -86.897472,
      "city": "Washington Island",
      "state": "WI",
      "county": "Door"
    },
    {
      "zip_code": 54247,
      "latitude": 44.189293,
      "longitude": -87.781594,
      "city": "Whitelaw",
      "state": "WI",
      "county": "Manitowoc"
    },
    {
      "zip_code": 54301,
      "latitude": 44.494385,
      "longitude": -87.976051,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54302,
      "latitude": 44.495042,
      "longitude": -87.978652,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54303,
      "latitude": 44.552247,
      "longitude": -88.078803,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54304,
      "latitude": 44.497541,
      "longitude": -88.032443,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54305,
      "latitude": 44.460064,
      "longitude": -88.007382,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54306,
      "latitude": 44.460064,
      "longitude": -88.007382,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54307,
      "latitude": 44.460064,
      "longitude": -88.007382,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54308,
      "latitude": 44.459509,
      "longitude": -87.805912,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54311,
      "latitude": 44.523605,
      "longitude": -87.957687,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54313,
      "latitude": 44.54964,
      "longitude": -87.99597,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54324,
      "latitude": 44.460064,
      "longitude": -88.007382,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54344,
      "latitude": 44.42504,
      "longitude": -88.111252,
      "city": "Green Bay",
      "state": "WI",
      "county": "Brown"
    },
    {
      "zip_code": 54401,
      "latitude": 44.961874,
      "longitude": -89.794002,
      "city": "Wausau",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54402,
      "latitude": 44.900936,
      "longitude": -89.7701,
      "city": "Wausau",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54403,
      "latitude": 44.952863,
      "longitude": -89.531804,
      "city": "Wausau",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54404,
      "latitude": 44.466554,
      "longitude": -90.02136,
      "city": "Marshfield",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54405,
      "latitude": 44.960186,
      "longitude": -90.374893,
      "city": "Abbotsford",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54406,
      "latitude": 44.393087,
      "longitude": -89.335313,
      "city": "Amherst",
      "state": "WI",
      "county": "Portage"
    },
    {
      "zip_code": 54407,
      "latitude": 44.530435,
      "longitude": -89.356252,
      "city": "Amherst Junction",
      "state": "WI",
      "county": "Portage"
    },
    {
      "zip_code": 54408,
      "latitude": 45.008812,
      "longitude": -89.357822,
      "city": "Aniwa",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54409,
      "latitude": 45.160809,
      "longitude": -89.093942,
      "city": "Antigo",
      "state": "WI",
      "county": "Langlade"
    },
    {
      "zip_code": 54410,
      "latitude": 44.535658,
      "longitude": -90.007245,
      "city": "Arpin",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54411,
      "latitude": 44.982348,
      "longitude": -90.007765,
      "city": "Athens",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54412,
      "latitude": 44.559652,
      "longitude": -90.00532,
      "city": "Auburndale",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54413,
      "latitude": 44.298272,
      "longitude": -90.140404,
      "city": "Babcock",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54414,
      "latitude": 44.919163,
      "longitude": -89.1042,
      "city": "Birnamwood",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54415,
      "latitude": 44.619128,
      "longitude": -89.918563,
      "city": "Blenker",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54416,
      "latitude": 44.898739,
      "longitude": -88.838922,
      "city": "Bowler",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54417,
      "latitude": 45.02735,
      "longitude": -89.654118,
      "city": "Brokaw",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54418,
      "latitude": 45.160395,
      "longitude": -88.994008,
      "city": "Bryant",
      "state": "WI",
      "county": "Langlade"
    },
    {
      "zip_code": 54420,
      "latitude": 44.606893,
      "longitude": -90.375852,
      "city": "Chili",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54421,
      "latitude": 44.879977,
      "longitude": -90.384734,
      "city": "Colby",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54422,
      "latitude": 44.944027,
      "longitude": -90.52792,
      "city": "Curtiss",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54423,
      "latitude": 44.580724,
      "longitude": -89.586502,
      "city": "Custer",
      "state": "WI",
      "county": "Portage"
    },
    {
      "zip_code": 54424,
      "latitude": 45.272303,
      "longitude": -89.086848,
      "city": "Deerbrook",
      "state": "WI",
      "county": "Langlade"
    },
    {
      "zip_code": 54425,
      "latitude": 44.996496,
      "longitude": -90.374411,
      "city": "Dorchester",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54426,
      "latitude": 44.904647,
      "longitude": -90.012469,
      "city": "Edgar",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54427,
      "latitude": 44.808419,
      "longitude": -89.301349,
      "city": "Eland",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54428,
      "latitude": 45.413361,
      "longitude": -89.143347,
      "city": "Elcho",
      "state": "WI",
      "county": "Langlade"
    },
    {
      "zip_code": 54429,
      "latitude": 44.780171,
      "longitude": -89.247809,
      "city": "Elderon",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54430,
      "latitude": 45.212455,
      "longitude": -88.83459,
      "city": "Elton",
      "state": "WI",
      "county": "Langlade"
    },
    {
      "zip_code": 54432,
      "latitude": 44.900936,
      "longitude": -89.7701,
      "city": "Galloway",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54433,
      "latitude": 45.197791,
      "longitude": -90.632113,
      "city": "Gilman",
      "state": "WI",
      "county": "Taylor"
    },
    {
      "zip_code": 54434,
      "latitude": 45.206757,
      "longitude": -90.484132,
      "city": "Jump River",
      "state": "WI",
      "county": "Taylor"
    },
    {
      "zip_code": 54435,
      "latitude": 45.38097,
      "longitude": -89.607232,
      "city": "Gleason",
      "state": "WI",
      "county": "Lincoln"
    },
    {
      "zip_code": 54436,
      "latitude": 44.607247,
      "longitude": -90.457313,
      "city": "Granton",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54437,
      "latitude": 44.660403,
      "longitude": -90.6756,
      "city": "Greenwood",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54439,
      "latitude": 45.206757,
      "longitude": -90.484132,
      "city": "Hannibal",
      "state": "WI",
      "county": "Taylor"
    },
    {
      "zip_code": 54440,
      "latitude": 44.797963,
      "longitude": -89.513916,
      "city": "Hatley",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54441,
      "latitude": 44.645875,
      "longitude": -90.105056,
      "city": "Hewitt",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54442,
      "latitude": 45.366386,
      "longitude": -89.670022,
      "city": "Irma",
      "state": "WI",
      "county": "Lincoln"
    },
    {
      "zip_code": 54443,
      "latitude": 44.588962,
      "longitude": -89.707997,
      "city": "Junction City",
      "state": "WI",
      "county": "Portage"
    },
    {
      "zip_code": 54444,
      "latitude": 45.249382,
      "longitude": -89.032136,
      "city": "Kempster",
      "state": "WI",
      "county": "Langlade"
    },
    {
      "zip_code": 54446,
      "latitude": 44.729482,
      "longitude": -90.634557,
      "city": "Loyal",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54447,
      "latitude": 45.16658,
      "longitude": -90.769811,
      "city": "Lublin",
      "state": "WI",
      "county": "Taylor"
    },
    {
      "zip_code": 54448,
      "latitude": 44.875437,
      "longitude": -89.80077,
      "city": "Marathon",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54449,
      "latitude": 44.589394,
      "longitude": -90.190595,
      "city": "Marshfield",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54450,
      "latitude": 45.006232,
      "longitude": -89.047379,
      "city": "Mattoon",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54451,
      "latitude": 45.164705,
      "longitude": -90.445798,
      "city": "Medford",
      "state": "WI",
      "county": "Taylor"
    },
    {
      "zip_code": 54452,
      "latitude": 45.217518,
      "longitude": -89.713291,
      "city": "Merrill",
      "state": "WI",
      "county": "Lincoln"
    },
    {
      "zip_code": 54454,
      "latitude": 44.598179,
      "longitude": -89.904543,
      "city": "Milladore",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54455,
      "latitude": 44.809226,
      "longitude": -89.701277,
      "city": "Mosinee",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54456,
      "latitude": 44.688149,
      "longitude": -90.669407,
      "city": "Neillsville",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54457,
      "latitude": 44.299968,
      "longitude": -89.920843,
      "city": "Nekoosa",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54458,
      "latitude": 44.490241,
      "longitude": -89.310944,
      "city": "Nelsonville",
      "state": "WI",
      "county": "Portage"
    },
    {
      "zip_code": 54459,
      "latitude": 45.451541,
      "longitude": -90.287732,
      "city": "Ogema",
      "state": "WI",
      "county": "Price"
    },
    {
      "zip_code": 54460,
      "latitude": 44.900923,
      "longitude": -90.627475,
      "city": "Owen",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54462,
      "latitude": 45.386148,
      "longitude": -88.971242,
      "city": "Pearson",
      "state": "WI",
      "county": "Langlade"
    },
    {
      "zip_code": 54463,
      "latitude": 45.525897,
      "longitude": -89.236033,
      "city": "Pelican Lake",
      "state": "WI",
      "county": "Oneida"
    },
    {
      "zip_code": 54464,
      "latitude": 45.249382,
      "longitude": -89.032136,
      "city": "Phlox",
      "state": "WI",
      "county": "Langlade"
    },
    {
      "zip_code": 54465,
      "latitude": 45.362544,
      "longitude": -88.950339,
      "city": "Pickerel",
      "state": "WI",
      "county": "Langlade"
    },
    {
      "zip_code": 54466,
      "latitude": 44.408897,
      "longitude": -90.190911,
      "city": "Pittsville",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54467,
      "latitude": 44.413942,
      "longitude": -89.565507,
      "city": "Plover",
      "state": "WI",
      "county": "Portage"
    },
    {
      "zip_code": 54469,
      "latitude": 44.350934,
      "longitude": -89.876274,
      "city": "Port Edwards",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54470,
      "latitude": 45.208013,
      "longitude": -90.168991,
      "city": "Rib Lake",
      "state": "WI",
      "county": "Taylor"
    },
    {
      "zip_code": 54471,
      "latitude": 44.929692,
      "longitude": -89.364964,
      "city": "Ringle",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54472,
      "latitude": 44.466554,
      "longitude": -90.02136,
      "city": "Marshfield",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54473,
      "latitude": 44.605786,
      "longitude": -89.356834,
      "city": "Rosholt",
      "state": "WI",
      "county": "Portage"
    },
    {
      "zip_code": 54474,
      "latitude": 44.898819,
      "longitude": -89.712935,
      "city": "Rothschild",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54475,
      "latitude": 44.474097,
      "longitude": -89.795501,
      "city": "Rudolph",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54476,
      "latitude": 44.866501,
      "longitude": -89.576968,
      "city": "Schofield",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54479,
      "latitude": 44.805167,
      "longitude": -90.141112,
      "city": "Spencer",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54480,
      "latitude": 45.19405,
      "longitude": -90.302783,
      "city": "Stetsonville",
      "state": "WI",
      "county": "Taylor"
    },
    {
      "zip_code": 54481,
      "latitude": 44.551808,
      "longitude": -89.531871,
      "city": "Stevens Point",
      "state": "WI",
      "county": "Portage"
    },
    {
      "zip_code": 54484,
      "latitude": 44.809072,
      "longitude": -90.030674,
      "city": "Stratford",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54485,
      "latitude": 45.396466,
      "longitude": -89.217933,
      "city": "Summit Lake",
      "state": "WI",
      "county": "Langlade"
    },
    {
      "zip_code": 54486,
      "latitude": 44.75984,
      "longitude": -89.039052,
      "city": "Tigerton",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54487,
      "latitude": 45.337814,
      "longitude": -89.765239,
      "city": "Tomahawk",
      "state": "WI",
      "county": "Lincoln"
    },
    {
      "zip_code": 54488,
      "latitude": 44.840956,
      "longitude": -90.257456,
      "city": "Unity",
      "state": "WI",
      "county": "Marathon"
    },
    {
      "zip_code": 54489,
      "latitude": 44.462338,
      "longitude": -90.003283,
      "city": "Vesper",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54490,
      "latitude": 45.330939,
      "longitude": -90.401519,
      "city": "Westboro",
      "state": "WI",
      "county": "Taylor"
    },
    {
      "zip_code": 54491,
      "latitude": 45.248003,
      "longitude": -88.803154,
      "city": "White Lake",
      "state": "WI",
      "county": "Langlade"
    },
    {
      "zip_code": 54492,
      "latitude": 44.509433,
      "longitude": -89.528584,
      "city": "Stevens Point",
      "state": "WI",
      "county": "Portage"
    },
    {
      "zip_code": 54493,
      "latitude": 44.715341,
      "longitude": -90.769733,
      "city": "Willard",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54494,
      "latitude": 44.379694,
      "longitude": -89.918546,
      "city": "Wisconsin Rapids",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54495,
      "latitude": 44.388082,
      "longitude": -89.922751,
      "city": "Wisconsin Rapids",
      "state": "WI",
      "county": "Wood"
    },
    {
      "zip_code": 54498,
      "latitude": 44.944248,
      "longitude": -90.638388,
      "city": "Withee",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54499,
      "latitude": 44.801314,
      "longitude": -89.11476,
      "city": "Wittenberg",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54501,
      "latitude": 45.704474,
      "longitude": -89.386562,
      "city": "Rhinelander",
      "state": "WI",
      "county": "Oneida"
    },
    {
      "zip_code": 54511,
      "latitude": 45.711791,
      "longitude": -88.810386,
      "city": "Argonne",
      "state": "WI",
      "county": "Forest"
    },
    {
      "zip_code": 54512,
      "latitude": 46.078442,
      "longitude": -89.531393,
      "city": "Boulder Junction",
      "state": "WI",
      "county": "Vilas"
    },
    {
      "zip_code": 54513,
      "latitude": 45.584525,
      "longitude": -90.166914,
      "city": "Brantwood",
      "state": "WI",
      "county": "Price"
    },
    {
      "zip_code": 54514,
      "latitude": 46.394779,
      "longitude": -90.628174,
      "city": "Butternut",
      "state": "WI",
      "county": "Ashland"
    },
    {
      "zip_code": 54515,
      "latitude": 45.535762,
      "longitude": -90.504465,
      "city": "Catawba",
      "state": "WI",
      "county": "Price"
    },
    {
      "zip_code": 54517,
      "latitude": 46.645163,
      "longitude": -90.442721,
      "city": "Clam Lake",
      "state": "WI",
      "county": "Ashland"
    },
    {
      "zip_code": 54519,
      "latitude": 46.072385,
      "longitude": -89.260939,
      "city": "Conover",
      "state": "WI",
      "county": "Vilas"
    },
    {
      "zip_code": 54520,
      "latitude": 45.511846,
      "longitude": -88.891846,
      "city": "Crandon",
      "state": "WI",
      "county": "Forest"
    },
    {
      "zip_code": 54521,
      "latitude": 45.988126,
      "longitude": -89.265609,
      "city": "Eagle River",
      "state": "WI",
      "county": "Vilas"
    },
    {
      "zip_code": 54524,
      "latitude": 45.814336,
      "longitude": -90.453045,
      "city": "Fifield",
      "state": "WI",
      "county": "Price"
    },
    {
      "zip_code": 54525,
      "latitude": 46.395746,
      "longitude": -90.191139,
      "city": "Gile",
      "state": "WI",
      "county": "Iron"
    },
    {
      "zip_code": 54526,
      "latitude": 45.486195,
      "longitude": -90.847935,
      "city": "Glen Flora",
      "state": "WI",
      "county": "Rusk"
    },
    {
      "zip_code": 54527,
      "latitude": 46.126107,
      "longitude": -90.611172,
      "city": "Glidden",
      "state": "WI",
      "county": "Ashland"
    },
    {
      "zip_code": 54529,
      "latitude": 45.690115,
      "longitude": -89.663974,
      "city": "Harshaw",
      "state": "WI",
      "county": "Oneida"
    },
    {
      "zip_code": 54530,
      "latitude": 45.518558,
      "longitude": -90.743138,
      "city": "Hawkins",
      "state": "WI",
      "county": "Rusk"
    },
    {
      "zip_code": 54531,
      "latitude": 45.74835,
      "longitude": -89.821598,
      "city": "Hazelhurst",
      "state": "WI",
      "county": "Oneida"
    },
    {
      "zip_code": 54532,
      "latitude": 45.337678,
      "longitude": -89.735524,
      "city": "Heafford Junction",
      "state": "WI",
      "county": "Lincoln"
    },
    {
      "zip_code": 54534,
      "latitude": 46.371032,
      "longitude": -90.221645,
      "city": "Hurley",
      "state": "WI",
      "county": "Iron"
    },
    {
      "zip_code": 54536,
      "latitude": 46.318241,
      "longitude": -90.342024,
      "city": "Iron Belt",
      "state": "WI",
      "county": "Iron"
    },
    {
      "zip_code": 54537,
      "latitude": 45.528816,
      "longitude": -90.606178,
      "city": "Kennan",
      "state": "WI",
      "county": "Price"
    },
    {
      "zip_code": 54538,
      "latitude": 46.068073,
      "longitude": -89.76566,
      "city": "Lac Du Flambeau",
      "state": "WI",
      "county": "Vilas"
    },
    {
      "zip_code": 54539,
      "latitude": 45.775685,
      "longitude": -89.574808,
      "city": "Lake Tomahawk",
      "state": "WI",
      "county": "Oneida"
    },
    {
      "zip_code": 54540,
      "latitude": 46.073659,
      "longitude": -89.444514,
      "city": "Land O Lakes",
      "state": "WI",
      "county": "Vilas"
    },
    {
      "zip_code": 54541,
      "latitude": 45.561723,
      "longitude": -88.706496,
      "city": "Laona",
      "state": "WI",
      "county": "Forest"
    },
    {
      "zip_code": 54542,
      "latitude": 45.913837,
      "longitude": -88.623498,
      "city": "Long Lake",
      "state": "WI",
      "county": "Florence"
    },
    {
      "zip_code": 54543,
      "latitude": 45.72293,
      "longitude": -89.557263,
      "city": "Mc Naughton",
      "state": "WI",
      "county": "Oneida"
    },
    {
      "zip_code": 54545,
      "latitude": 46.155097,
      "longitude": -89.845465,
      "city": "Manitowish Waters",
      "state": "WI",
      "county": "Vilas"
    },
    {
      "zip_code": 54546,
      "latitude": 46.320677,
      "longitude": -90.746141,
      "city": "Mellen",
      "state": "WI",
      "county": "Ashland"
    },
    {
      "zip_code": 54547,
      "latitude": 46.143746,
      "longitude": -90.110725,
      "city": "Mercer",
      "state": "WI",
      "county": "Iron"
    },
    {
      "zip_code": 54548,
      "latitude": 45.827583,
      "longitude": -89.824294,
      "city": "Minocqua",
      "state": "WI",
      "county": "Oneida"
    },
    {
      "zip_code": 54550,
      "latitude": 46.396613,
      "longitude": -90.309085,
      "city": "Montreal",
      "state": "WI",
      "county": "Iron"
    },
    {
      "zip_code": 54552,
      "latitude": 45.846473,
      "longitude": -90.360373,
      "city": "Park Falls",
      "state": "WI",
      "county": "Price"
    },
    {
      "zip_code": 54554,
      "latitude": 46.092807,
      "longitude": -89.257762,
      "city": "Phelps",
      "state": "WI",
      "county": "Vilas"
    },
    {
      "zip_code": 54555,
      "latitude": 45.724607,
      "longitude": -90.370984,
      "city": "Phillips",
      "state": "WI",
      "county": "Price"
    },
    {
      "zip_code": 54556,
      "latitude": 45.532944,
      "longitude": -90.28166,
      "city": "Prentice",
      "state": "WI",
      "county": "Price"
    },
    {
      "zip_code": 54557,
      "latitude": 46.200011,
      "longitude": -89.738691,
      "city": "Presque Isle",
      "state": "WI",
      "county": "Vilas"
    },
    {
      "zip_code": 54558,
      "latitude": 45.942092,
      "longitude": -89.686925,
      "city": "Saint Germain",
      "state": "WI",
      "county": "Vilas"
    },
    {
      "zip_code": 54559,
      "latitude": 46.502552,
      "longitude": -90.402719,
      "city": "Saxon",
      "state": "WI",
      "county": "Iron"
    },
    {
      "zip_code": 54560,
      "latitude": 46.02023,
      "longitude": -89.497889,
      "city": "Sayner",
      "state": "WI",
      "county": "Vilas"
    },
    {
      "zip_code": 54561,
      "latitude": 46.061297,
      "longitude": -89.485834,
      "city": "Star Lake",
      "state": "WI",
      "county": "Vilas"
    },
    {
      "zip_code": 54562,
      "latitude": 45.762075,
      "longitude": -89.157339,
      "city": "Three Lakes",
      "state": "WI",
      "county": "Oneida"
    },
    {
      "zip_code": 54563,
      "latitude": 45.45197,
      "longitude": -90.964443,
      "city": "Tony",
      "state": "WI",
      "county": "Rusk"
    },
    {
      "zip_code": 54564,
      "latitude": 45.725515,
      "longitude": -89.943993,
      "city": "Tripoli",
      "state": "WI",
      "county": "Oneida"
    },
    {
      "zip_code": 54565,
      "latitude": 46.370313,
      "longitude": -90.434344,
      "city": "Upson",
      "state": "WI",
      "county": "Iron"
    },
    {
      "zip_code": 54566,
      "latitude": 45.443574,
      "longitude": -88.619413,
      "city": "Wabeno",
      "state": "WI",
      "county": "Forest"
    },
    {
      "zip_code": 54568,
      "latitude": 45.859618,
      "longitude": -89.653705,
      "city": "Woodruff",
      "state": "WI",
      "county": "Oneida"
    },
    {
      "zip_code": 54601,
      "latitude": 43.85456,
      "longitude": -91.132072,
      "city": "La Crosse",
      "state": "WI",
      "county": "La Crosse"
    },
    {
      "zip_code": 54602,
      "latitude": 43.907739,
      "longitude": -91.167621,
      "city": "La Crosse",
      "state": "WI",
      "county": "La Crosse"
    },
    {
      "zip_code": 54603,
      "latitude": 43.853763,
      "longitude": -91.246238,
      "city": "La Crosse",
      "state": "WI",
      "county": "La Crosse"
    },
    {
      "zip_code": 54610,
      "latitude": 44.346721,
      "longitude": -91.836481,
      "city": "Alma",
      "state": "WI",
      "county": "Buffalo"
    },
    {
      "zip_code": 54611,
      "latitude": 44.451027,
      "longitude": -90.975918,
      "city": "Alma Center",
      "state": "WI",
      "county": "Jackson"
    },
    {
      "zip_code": 54612,
      "latitude": 44.251711,
      "longitude": -91.387699,
      "city": "Arcadia",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54613,
      "latitude": 44.079992,
      "longitude": -89.803877,
      "city": "Arkdale",
      "state": "WI",
      "county": "Adams"
    },
    {
      "zip_code": 54614,
      "latitude": 43.919308,
      "longitude": -91.081457,
      "city": "Bangor",
      "state": "WI",
      "county": "La Crosse"
    },
    {
      "zip_code": 54615,
      "latitude": 44.295394,
      "longitude": -90.83128,
      "city": "Black River Falls",
      "state": "WI",
      "county": "Jackson"
    },
    {
      "zip_code": 54616,
      "latitude": 44.251701,
      "longitude": -91.264753,
      "city": "Blair",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54618,
      "latitude": 43.988481,
      "longitude": -90.239261,
      "city": "Camp Douglas",
      "state": "WI",
      "county": "Juneau"
    },
    {
      "zip_code": 54619,
      "latitude": 43.851133,
      "longitude": -90.699047,
      "city": "Cashton",
      "state": "WI",
      "county": "Monroe"
    },
    {
      "zip_code": 54620,
      "latitude": 44.087601,
      "longitude": -90.842289,
      "city": "Cataract",
      "state": "WI",
      "county": "Monroe"
    },
    {
      "zip_code": 54621,
      "latitude": 43.667006,
      "longitude": -90.741409,
      "city": "Chaseburg",
      "state": "WI",
      "county": "Vernon"
    },
    {
      "zip_code": 54622,
      "latitude": 44.237714,
      "longitude": -91.741701,
      "city": "Cochrane",
      "state": "WI",
      "county": "Buffalo"
    },
    {
      "zip_code": 54623,
      "latitude": 43.574486,
      "longitude": -91.043819,
      "city": "Coon Valley",
      "state": "WI",
      "county": "Vernon"
    },
    {
      "zip_code": 54624,
      "latitude": 43.480668,
      "longitude": -91.133309,
      "city": "De Soto",
      "state": "WI",
      "county": "Vernon"
    },
    {
      "zip_code": 54625,
      "latitude": 44.14309,
      "longitude": -91.520432,
      "city": "Dodge",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54626,
      "latitude": 43.220573,
      "longitude": -91.034135,
      "city": "Eastman",
      "state": "WI",
      "county": "Crawford"
    },
    {
      "zip_code": 54627,
      "latitude": 44.184171,
      "longitude": -91.257707,
      "city": "Ettrick",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54628,
      "latitude": 43.319219,
      "longitude": -91.054678,
      "city": "Ferryville",
      "state": "WI",
      "county": "Crawford"
    },
    {
      "zip_code": 54629,
      "latitude": 44.170774,
      "longitude": -91.674962,
      "city": "Fountain City",
      "state": "WI",
      "county": "Buffalo"
    },
    {
      "zip_code": 54630,
      "latitude": 44.094809,
      "longitude": -91.339528,
      "city": "Galesville",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54631,
      "latitude": 43.269667,
      "longitude": -90.83178,
      "city": "Gays Mills",
      "state": "WI",
      "county": "Crawford"
    },
    {
      "zip_code": 54632,
      "latitude": 43.618089,
      "longitude": -90.837971,
      "city": "Genoa",
      "state": "WI",
      "county": "Vernon"
    },
    {
      "zip_code": 54634,
      "latitude": 43.616843,
      "longitude": -90.659829,
      "city": "Hillsboro",
      "state": "WI",
      "county": "Vernon"
    },
    {
      "zip_code": 54635,
      "latitude": 44.40376,
      "longitude": -91.044171,
      "city": "Hixton",
      "state": "WI",
      "county": "Jackson"
    },
    {
      "zip_code": 54636,
      "latitude": 43.968617,
      "longitude": -91.223484,
      "city": "Holmen",
      "state": "WI",
      "county": "La Crosse"
    },
    {
      "zip_code": 54637,
      "latitude": 43.88013,
      "longitude": -90.272928,
      "city": "Hustler",
      "state": "WI",
      "county": "Juneau"
    },
    {
      "zip_code": 54638,
      "latitude": 43.816431,
      "longitude": -90.40265,
      "city": "Kendall",
      "state": "WI",
      "county": "Monroe"
    },
    {
      "zip_code": 54639,
      "latitude": 43.600044,
      "longitude": -90.636482,
      "city": "La Farge",
      "state": "WI",
      "county": "Vernon"
    },
    {
      "zip_code": 54640,
      "latitude": 43.266172,
      "longitude": -91.022031,
      "city": "Lynxville",
      "state": "WI",
      "county": "Crawford"
    },
    {
      "zip_code": 54641,
      "latitude": 43.94521,
      "longitude": -90.049489,
      "city": "Mather",
      "state": "WI",
      "county": "Juneau"
    },
    {
      "zip_code": 54642,
      "latitude": 44.196358,
      "longitude": -90.979249,
      "city": "Melrose",
      "state": "WI",
      "county": "Jackson"
    },
    {
      "zip_code": 54643,
      "latitude": 44.186869,
      "longitude": -90.635831,
      "city": "Millston",
      "state": "WI",
      "county": "Jackson"
    },
    {
      "zip_code": 54644,
      "latitude": 44.021422,
      "longitude": -91.03295,
      "city": "Mindoro",
      "state": "WI",
      "county": "La Crosse"
    },
    {
      "zip_code": 54645,
      "latitude": 43.206361,
      "longitude": -90.940479,
      "city": "Mount Sterling",
      "state": "WI",
      "county": "Crawford"
    },
    {
      "zip_code": 54646,
      "latitude": 44.022637,
      "longitude": -90.130552,
      "city": "Necedah",
      "state": "WI",
      "county": "Juneau"
    },
    {
      "zip_code": 54648,
      "latitude": 43.83159,
      "longitude": -90.647476,
      "city": "Norwalk",
      "state": "WI",
      "county": "Monroe"
    },
    {
      "zip_code": 54649,
      "latitude": 43.971514,
      "longitude": -90.361161,
      "city": "Oakdale",
      "state": "WI",
      "county": "Monroe"
    },
    {
      "zip_code": 54650,
      "latitude": 43.886664,
      "longitude": -91.130399,
      "city": "Onalaska",
      "state": "WI",
      "county": "La Crosse"
    },
    {
      "zip_code": 54651,
      "latitude": 43.696538,
      "longitude": -90.548053,
      "city": "Ontario",
      "state": "WI",
      "county": "Vernon"
    },
    {
      "zip_code": 54652,
      "latitude": 43.470286,
      "longitude": -90.774539,
      "city": "Readstown",
      "state": "WI",
      "county": "Vernon"
    },
    {
      "zip_code": 54653,
      "latitude": 43.841142,
      "longitude": -90.950732,
      "city": "Rockland",
      "state": "WI",
      "county": "La Crosse"
    },
    {
      "zip_code": 54654,
      "latitude": 43.206361,
      "longitude": -90.940479,
      "city": "Seneca",
      "state": "WI",
      "county": "Crawford"
    },
    {
      "zip_code": 54655,
      "latitude": 43.369813,
      "longitude": -90.808363,
      "city": "Soldiers Grove",
      "state": "WI",
      "county": "Crawford"
    },
    {
      "zip_code": 54656,
      "latitude": 43.949925,
      "longitude": -90.752783,
      "city": "Sparta",
      "state": "WI",
      "county": "Monroe"
    },
    {
      "zip_code": 54657,
      "latitude": 43.274205,
      "longitude": -90.924336,
      "city": "Steuben",
      "state": "WI",
      "county": "Crawford"
    },
    {
      "zip_code": 54658,
      "latitude": 43.669102,
      "longitude": -91.134346,
      "city": "Stoddard",
      "state": "WI",
      "county": "Vernon"
    },
    {
      "zip_code": 54659,
      "latitude": 44.291449,
      "longitude": -91.087671,
      "city": "Taylor",
      "state": "WI",
      "county": "Jackson"
    },
    {
      "zip_code": 54660,
      "latitude": 43.983826,
      "longitude": -90.473336,
      "city": "Tomah",
      "state": "WI",
      "county": "Monroe"
    },
    {
      "zip_code": 54661,
      "latitude": 44.076755,
      "longitude": -91.460168,
      "city": "Trempealeau",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54662,
      "latitude": 44.003084,
      "longitude": -90.562005,
      "city": "Tunnel City",
      "state": "WI",
      "county": "Monroe"
    },
    {
      "zip_code": 54664,
      "latitude": 43.501783,
      "longitude": -90.706816,
      "city": "Viola",
      "state": "WI",
      "county": "Richland"
    },
    {
      "zip_code": 54665,
      "latitude": 43.530515,
      "longitude": -90.991573,
      "city": "Viroqua",
      "state": "WI",
      "county": "Vernon"
    },
    {
      "zip_code": 54666,
      "latitude": 43.987879,
      "longitude": -90.466582,
      "city": "Warrens",
      "state": "WI",
      "county": "Monroe"
    },
    {
      "zip_code": 54667,
      "latitude": 43.653701,
      "longitude": -90.841723,
      "city": "Westby",
      "state": "WI",
      "county": "Vernon"
    },
    {
      "zip_code": 54669,
      "latitude": 43.897572,
      "longitude": -91.120198,
      "city": "West Salem",
      "state": "WI",
      "county": "La Crosse"
    },
    {
      "zip_code": 54670,
      "latitude": 43.848835,
      "longitude": -90.468791,
      "city": "Wilton",
      "state": "WI",
      "county": "Monroe"
    },
    {
      "zip_code": 54701,
      "latitude": 44.75653,
      "longitude": -91.473097,
      "city": "Eau Claire",
      "state": "WI",
      "county": "Eau Claire"
    },
    {
      "zip_code": 54702,
      "latitude": 44.726626,
      "longitude": -91.285931,
      "city": "Eau Claire",
      "state": "WI",
      "county": "Eau Claire"
    },
    {
      "zip_code": 54703,
      "latitude": 44.80456,
      "longitude": -91.477897,
      "city": "Eau Claire",
      "state": "WI",
      "county": "Eau Claire"
    },
    {
      "zip_code": 54720,
      "latitude": 44.803612,
      "longitude": -91.442253,
      "city": "Altoona",
      "state": "WI",
      "county": "Eau Claire"
    },
    {
      "zip_code": 54721,
      "latitude": 44.602774,
      "longitude": -92.062219,
      "city": "Arkansaw",
      "state": "WI",
      "county": "Pepin"
    },
    {
      "zip_code": 54722,
      "latitude": 44.726811,
      "longitude": -91.212598,
      "city": "Augusta",
      "state": "WI",
      "county": "Eau Claire"
    },
    {
      "zip_code": 54723,
      "latitude": 44.631517,
      "longitude": -92.435186,
      "city": "Bay City",
      "state": "WI",
      "county": "Pierce"
    },
    {
      "zip_code": 54724,
      "latitude": 45.042352,
      "longitude": -91.408026,
      "city": "Bloomer",
      "state": "WI",
      "county": "Chippewa"
    },
    {
      "zip_code": 54725,
      "latitude": 45.075804,
      "longitude": -92.013036,
      "city": "Boyceville",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54726,
      "latitude": 45.00521,
      "longitude": -91.175615,
      "city": "Boyd",
      "state": "WI",
      "county": "Chippewa"
    },
    {
      "zip_code": 54727,
      "latitude": 45.015803,
      "longitude": -91.353301,
      "city": "Cadott",
      "state": "WI",
      "county": "Chippewa"
    },
    {
      "zip_code": 54728,
      "latitude": 45.405423,
      "longitude": -91.828102,
      "city": "Chetek",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54729,
      "latitude": 44.958689,
      "longitude": -91.319492,
      "city": "Chippewa Falls",
      "state": "WI",
      "county": "Chippewa"
    },
    {
      "zip_code": 54730,
      "latitude": 45.037889,
      "longitude": -91.888046,
      "city": "Colfax",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54731,
      "latitude": 45.357563,
      "longitude": -91.088353,
      "city": "Conrath",
      "state": "WI",
      "county": "Rusk"
    },
    {
      "zip_code": 54732,
      "latitude": 45.125153,
      "longitude": -91.170922,
      "city": "Cornell",
      "state": "WI",
      "county": "Chippewa"
    },
    {
      "zip_code": 54733,
      "latitude": 45.261871,
      "longitude": -91.845156,
      "city": "Dallas",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54734,
      "latitude": 45.001949,
      "longitude": -92.099665,
      "city": "Downing",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54735,
      "latitude": 44.946496,
      "longitude": -91.90344,
      "city": "Downsville",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54736,
      "latitude": 44.640224,
      "longitude": -91.831869,
      "city": "Durand",
      "state": "WI",
      "county": "Pepin"
    },
    {
      "zip_code": 54737,
      "latitude": 44.749316,
      "longitude": -92.04191,
      "city": "Eau Galle",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54738,
      "latitude": 44.394025,
      "longitude": -91.411701,
      "city": "Eleva",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54739,
      "latitude": 44.855107,
      "longitude": -91.736968,
      "city": "Elk Mound",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54740,
      "latitude": 44.744453,
      "longitude": -92.226414,
      "city": "Elmwood",
      "state": "WI",
      "county": "Pierce"
    },
    {
      "zip_code": 54741,
      "latitude": 44.659822,
      "longitude": -91.014753,
      "city": "Fairchild",
      "state": "WI",
      "county": "Eau Claire"
    },
    {
      "zip_code": 54742,
      "latitude": 44.762892,
      "longitude": -91.306304,
      "city": "Fall Creek",
      "state": "WI",
      "county": "Eau Claire"
    },
    {
      "zip_code": 54743,
      "latitude": 44.311074,
      "longitude": -91.806396,
      "city": "Gilmanton",
      "state": "WI",
      "county": "Buffalo"
    },
    {
      "zip_code": 54744,
      "latitude": 45.319786,
      "longitude": -91.881754,
      "city": "Hillsdale",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54745,
      "latitude": 45.150752,
      "longitude": -91.121308,
      "city": "Holcombe",
      "state": "WI",
      "county": "Chippewa"
    },
    {
      "zip_code": 54746,
      "latitude": 44.516708,
      "longitude": -90.709853,
      "city": "Humbird",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54747,
      "latitude": 44.356483,
      "longitude": -91.443718,
      "city": "Independence",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54748,
      "latitude": 45.088875,
      "longitude": -91.256794,
      "city": "Jim Falls",
      "state": "WI",
      "county": "Chippewa"
    },
    {
      "zip_code": 54749,
      "latitude": 44.947538,
      "longitude": -92.07521,
      "city": "Knapp",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54750,
      "latitude": 44.623923,
      "longitude": -92.29072,
      "city": "Maiden Rock",
      "state": "WI",
      "county": "Pierce"
    },
    {
      "zip_code": 54751,
      "latitude": 44.867809,
      "longitude": -91.943198,
      "city": "Menomonie",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54754,
      "latitude": 44.436841,
      "longitude": -90.796318,
      "city": "Merrillan",
      "state": "WI",
      "county": "Jackson"
    },
    {
      "zip_code": 54755,
      "latitude": 44.48773,
      "longitude": -91.68068,
      "city": "Mondovi",
      "state": "WI",
      "county": "Buffalo"
    },
    {
      "zip_code": 54756,
      "latitude": 44.473584,
      "longitude": -91.910518,
      "city": "Nelson",
      "state": "WI",
      "county": "Buffalo"
    },
    {
      "zip_code": 54757,
      "latitude": 45.118159,
      "longitude": -91.486707,
      "city": "New Auburn",
      "state": "WI",
      "county": "Chippewa"
    },
    {
      "zip_code": 54758,
      "latitude": 44.333502,
      "longitude": -91.347015,
      "city": "Osseo",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54759,
      "latitude": 44.509108,
      "longitude": -92.131821,
      "city": "Pepin",
      "state": "WI",
      "county": "Pepin"
    },
    {
      "zip_code": 54760,
      "latitude": 44.424863,
      "longitude": -91.207421,
      "city": "Pigeon Falls",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54761,
      "latitude": 44.619607,
      "longitude": -92.180419,
      "city": "Plum City",
      "state": "WI",
      "county": "Pierce"
    },
    {
      "zip_code": 54762,
      "latitude": 45.262353,
      "longitude": -91.992842,
      "city": "Prairie Farm",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54763,
      "latitude": 45.168279,
      "longitude": -91.875797,
      "city": "Ridgeland",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54764,
      "latitude": 44.946496,
      "longitude": -91.90344,
      "city": "Rock Falls",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54765,
      "latitude": 45.142866,
      "longitude": -91.699794,
      "city": "Sand Creek",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54766,
      "latitude": 45.349548,
      "longitude": -90.887173,
      "city": "Sheldon",
      "state": "WI",
      "county": "Rusk"
    },
    {
      "zip_code": 54767,
      "latitude": 44.781928,
      "longitude": -92.283761,
      "city": "Spring Valley",
      "state": "WI",
      "county": "Pierce"
    },
    {
      "zip_code": 54768,
      "latitude": 44.993395,
      "longitude": -91.069525,
      "city": "Stanley",
      "state": "WI",
      "county": "Chippewa"
    },
    {
      "zip_code": 54769,
      "latitude": 44.508365,
      "longitude": -92.232594,
      "city": "Stockholm",
      "state": "WI",
      "county": "Pepin"
    },
    {
      "zip_code": 54770,
      "latitude": 44.387425,
      "longitude": -91.394415,
      "city": "Strum",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54771,
      "latitude": 44.894112,
      "longitude": -90.790684,
      "city": "Thorp",
      "state": "WI",
      "county": "Clark"
    },
    {
      "zip_code": 54772,
      "latitude": 45.094148,
      "longitude": -91.879257,
      "city": "Wheeler",
      "state": "WI",
      "county": "Dunn"
    },
    {
      "zip_code": 54773,
      "latitude": 44.443778,
      "longitude": -91.285758,
      "city": "Whitehall",
      "state": "WI",
      "county": "Trempealeau"
    },
    {
      "zip_code": 54774,
      "latitude": 45.07413,
      "longitude": -91.294397,
      "city": "Chippewa Falls",
      "state": "WI",
      "county": "Chippewa"
    },
    {
      "zip_code": 54801,
      "latitude": 45.922016,
      "longitude": -91.811707,
      "city": "Spooner",
      "state": "WI",
      "county": "Washburn"
    },
    {
      "zip_code": 54805,
      "latitude": 45.434373,
      "longitude": -91.965942,
      "city": "Almena",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54806,
      "latitude": 46.558577,
      "longitude": -90.738773,
      "city": "Ashland",
      "state": "WI",
      "county": "Ashland"
    },
    {
      "zip_code": 54810,
      "latitude": 45.421648,
      "longitude": -92.378752,
      "city": "Balsam Lake",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54812,
      "latitude": 45.47734,
      "longitude": -91.86779,
      "city": "Barron",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54813,
      "latitude": 45.557393,
      "longitude": -92.016728,
      "city": "Barronett",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54814,
      "latitude": 46.853517,
      "longitude": -90.915934,
      "city": "Bayfield",
      "state": "WI",
      "county": "Bayfield"
    },
    {
      "zip_code": 54816,
      "latitude": 46.682796,
      "longitude": -91.143254,
      "city": "Benoit",
      "state": "WI",
      "county": "Bayfield"
    },
    {
      "zip_code": 54817,
      "latitude": 45.732675,
      "longitude": -91.615044,
      "city": "Birchwood",
      "state": "WI",
      "county": "Washburn"
    },
    {
      "zip_code": 54818,
      "latitude": 45.423409,
      "longitude": -91.848206,
      "city": "Brill",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54819,
      "latitude": 45.469246,
      "longitude": -91.293073,
      "city": "Bruce",
      "state": "WI",
      "county": "Rusk"
    },
    {
      "zip_code": 54820,
      "latitude": 46.555409,
      "longitude": -91.605419,
      "city": "Brule",
      "state": "WI",
      "county": "Douglas"
    },
    {
      "zip_code": 54821,
      "latitude": 46.21018,
      "longitude": -91.189305,
      "city": "Cable",
      "state": "WI",
      "county": "Bayfield"
    },
    {
      "zip_code": 54822,
      "latitude": 45.465645,
      "longitude": -91.68441,
      "city": "Cameron",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54824,
      "latitude": 45.420898,
      "longitude": -92.544088,
      "city": "Centuria",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54826,
      "latitude": 45.495679,
      "longitude": -92.037821,
      "city": "Comstock",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54827,
      "latitude": 46.834502,
      "longitude": -91.092821,
      "city": "Cornucopia",
      "state": "WI",
      "county": "Bayfield"
    },
    {
      "zip_code": 54828,
      "latitude": 45.837967,
      "longitude": -91.291784,
      "city": "Couderay",
      "state": "WI",
      "county": "Sawyer"
    },
    {
      "zip_code": 54829,
      "latitude": 45.42772,
      "longitude": -91.899489,
      "city": "Cumberland",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54830,
      "latitude": 45.972603,
      "longitude": -92.292996,
      "city": "Danbury",
      "state": "WI",
      "county": "Burnett"
    },
    {
      "zip_code": 54832,
      "latitude": 46.682796,
      "longitude": -91.143254,
      "city": "Drummond",
      "state": "WI",
      "county": "Bayfield"
    },
    {
      "zip_code": 54834,
      "latitude": 45.742371,
      "longitude": -91.476541,
      "city": "Edgewater",
      "state": "WI",
      "county": "Sawyer"
    },
    {
      "zip_code": 54835,
      "latitude": 45.780382,
      "longitude": -91.224718,
      "city": "Exeland",
      "state": "WI",
      "county": "Sawyer"
    },
    {
      "zip_code": 54836,
      "latitude": 46.452892,
      "longitude": -92.171445,
      "city": "Foxboro",
      "state": "WI",
      "county": "Douglas"
    },
    {
      "zip_code": 54837,
      "latitude": 45.526263,
      "longitude": -92.429333,
      "city": "Frederic",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54838,
      "latitude": 46.293033,
      "longitude": -91.894633,
      "city": "Gordon",
      "state": "WI",
      "county": "Douglas"
    },
    {
      "zip_code": 54839,
      "latitude": 46.682796,
      "longitude": -91.143254,
      "city": "Grand View",
      "state": "WI",
      "county": "Bayfield"
    },
    {
      "zip_code": 54840,
      "latitude": 45.795342,
      "longitude": -92.693513,
      "city": "Grantsburg",
      "state": "WI",
      "county": "Burnett"
    },
    {
      "zip_code": 54841,
      "latitude": 45.620445,
      "longitude": -91.801751,
      "city": "Haugen",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54842,
      "latitude": 46.514162,
      "longitude": -91.862136,
      "city": "Hawthorne",
      "state": "WI",
      "county": "Douglas"
    },
    {
      "zip_code": 54843,
      "latitude": 45.955223,
      "longitude": -91.278308,
      "city": "Hayward",
      "state": "WI",
      "county": "Sawyer"
    },
    {
      "zip_code": 54844,
      "latitude": 46.682796,
      "longitude": -91.143254,
      "city": "Herbster",
      "state": "WI",
      "county": "Bayfield"
    },
    {
      "zip_code": 54845,
      "latitude": 45.799612,
      "longitude": -92.153743,
      "city": "Hertel",
      "state": "WI",
      "county": "Burnett"
    },
    {
      "zip_code": 54846,
      "latitude": 46.376072,
      "longitude": -90.761153,
      "city": "High Bridge",
      "state": "WI",
      "county": "Ashland"
    },
    {
      "zip_code": 54847,
      "latitude": 46.599552,
      "longitude": -91.437437,
      "city": "Iron River",
      "state": "WI",
      "county": "Bayfield"
    },
    {
      "zip_code": 54848,
      "latitude": 45.490835,
      "longitude": -91.0943,
      "city": "Ladysmith",
      "state": "WI",
      "county": "Rusk"
    },
    {
      "zip_code": 54849,
      "latitude": 46.493011,
      "longitude": -91.71342,
      "city": "Lake Nebagamon",
      "state": "WI",
      "county": "Douglas"
    },
    {
      "zip_code": 54850,
      "latitude": 46.803272,
      "longitude": -90.692287,
      "city": "La Pointe",
      "state": "WI",
      "county": "Ashland"
    },
    {
      "zip_code": 54851,
      "latitude": 45.468941,
      "longitude": -92.521938,
      "city": "Lewis",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54853,
      "latitude": 45.455357,
      "longitude": -92.467658,
      "city": "Luck",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54854,
      "latitude": 46.652638,
      "longitude": -91.733798,
      "city": "Maple",
      "state": "WI",
      "county": "Douglas"
    },
    {
      "zip_code": 54855,
      "latitude": 46.366834,
      "longitude": -90.840821,
      "city": "Marengo",
      "state": "WI",
      "county": "Ashland"
    },
    {
      "zip_code": 54856,
      "latitude": 46.362341,
      "longitude": -91.116899,
      "city": "Mason",
      "state": "WI",
      "county": "Bayfield"
    },
    {
      "zip_code": 54857,
      "latitude": 45.609562,
      "longitude": -91.61965,
      "city": "Mikana",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54858,
      "latitude": 45.51583,
      "longitude": -92.461712,
      "city": "Milltown",
      "state": "WI",
      "county": "Polk"
    },
    {
      "zip_code": 54859,
      "latitude": 46.09709,
      "longitude": -91.859913,
      "city": "Minong",
      "state": "WI",
      "county": "Washburn"
    },
    {
      "zip_code": 54861,
      "latitude": 46.560783,
      "longitude": -90.619716,
      "city": "Odanah",
      "state": "WI",
      "county": "Ashland"
    },
    {
      "zip_code": 54862,
      "latitude": 45.797008,
      "longitude": -91.127234,
      "city": "Ojibwa",
      "state": "WI",
      "county": "Sawyer"
    },
    {
      "zip_code": 54864,
      "latitude": 46.594249,
      "longitude": -91.815333,
      "city": "Poplar",
      "state": "WI",
      "county": "Douglas"
    },
    {
      "zip_code": 54865,
      "latitude": 46.715564,
      "longitude": -91.353195,
      "city": "Port Wing",
      "state": "WI",
      "county": "Bayfield"
    },
    {
      "zip_code": 54867,
      "latitude": 45.800649,
      "longitude": -91.268979,
      "city": "Radisson",
      "state": "WI",
      "county": "Sawyer"
    },
    {
      "zip_code": 54868,
      "latitude": 45.519692,
      "longitude": -91.826575,
      "city": "Rice Lake",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54870,
      "latitude": 45.73714,
      "longitude": -91.775875,
      "city": "Sarona",
      "state": "WI",
      "county": "Washburn"
    },
    {
      "zip_code": 54871,
      "latitude": 45.878356,
      "longitude": -91.79215,
      "city": "Shell Lake",
      "state": "WI",
      "county": "Washburn"
    },
    {
      "zip_code": 54872,
      "latitude": 45.782741,
      "longitude": -92.385751,
      "city": "Siren",
      "state": "WI",
      "county": "Burnett"
    },
    {
      "zip_code": 54873,
      "latitude": 46.417261,
      "longitude": -91.810992,
      "city": "Solon Springs",
      "state": "WI",
      "county": "Douglas"
    },
    {
      "zip_code": 54874,
      "latitude": 46.568809,
      "longitude": -91.935156,
      "city": "South Range",
      "state": "WI",
      "county": "Douglas"
    },
    {
      "zip_code": 54875,
      "latitude": 45.945201,
      "longitude": -91.675448,
      "city": "Springbrook",
      "state": "WI",
      "county": "Washburn"
    },
    {
      "zip_code": 54876,
      "latitude": 45.821216,
      "longitude": -91.462771,
      "city": "Stone Lake",
      "state": "WI",
      "county": "Sawyer"
    },
    {
      "zip_code": 54880,
      "latitude": 46.574982,
      "longitude": -92.117578,
      "city": "Superior",
      "state": "WI",
      "county": "Douglas"
    },
    {
      "zip_code": 54888,
      "latitude": 45.966368,
      "longitude": -91.886372,
      "city": "Trego",
      "state": "WI",
      "county": "Washburn"
    },
    {
      "zip_code": 54889,
      "latitude": 45.400115,
      "longitude": -92.074695,
      "city": "Turtle Lake",
      "state": "WI",
      "county": "Barron"
    },
    {
      "zip_code": 54890,
      "latitude": 46.525129,
      "longitude": -91.921631,
      "city": "Wascott",
      "state": "WI",
      "county": "Douglas"
    },
    {
      "zip_code": 54891,
      "latitude": 46.697289,
      "longitude": -90.904151,
      "city": "Washburn",
      "state": "WI",
      "county": "Bayfield"
    },
    {
      "zip_code": 54893,
      "latitude": 45.869606,
      "longitude": -92.30286,
      "city": "Webster",
      "state": "WI",
      "county": "Burnett"
    },
    {
      "zip_code": 54895,
      "latitude": 45.40913,
      "longitude": -91.423051,
      "city": "Weyerhaeuser",
      "state": "WI",
      "county": "Rusk"
    },
    {
      "zip_code": 54896,
      "latitude": 45.832746,
      "longitude": -91.014362,
      "city": "Winter",
      "state": "WI",
      "county": "Sawyer"
    },
    {
      "zip_code": 54901,
      "latitude": 44.005661,
      "longitude": -88.55756,
      "city": "Oshkosh",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54902,
      "latitude": 43.99461,
      "longitude": -88.526025,
      "city": "Oshkosh",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54903,
      "latitude": 44.06858,
      "longitude": -88.644873,
      "city": "Oshkosh",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54904,
      "latitude": 44.062366,
      "longitude": -88.623779,
      "city": "Oshkosh",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54906,
      "latitude": 44.06858,
      "longitude": -88.644873,
      "city": "Oshkosh",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54909,
      "latitude": 44.379544,
      "longitude": -89.356552,
      "city": "Almond",
      "state": "WI",
      "county": "Portage"
    },
    {
      "zip_code": 54911,
      "latitude": 44.275702,
      "longitude": -88.370856,
      "city": "Appleton",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54912,
      "latitude": 44.416326,
      "longitude": -88.464873,
      "city": "Appleton",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54913,
      "latitude": 44.345553,
      "longitude": -88.434297,
      "city": "Appleton",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54914,
      "latitude": 44.271285,
      "longitude": -88.486307,
      "city": "Appleton",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54915,
      "latitude": 44.373778,
      "longitude": -88.444396,
      "city": "Appleton",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54919,
      "latitude": 44.416326,
      "longitude": -88.464873,
      "city": "Appleton",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54921,
      "latitude": 44.341602,
      "longitude": -89.526303,
      "city": "Bancroft",
      "state": "WI",
      "county": "Portage"
    },
    {
      "zip_code": 54922,
      "latitude": 44.432373,
      "longitude": -88.559628,
      "city": "Bear Creek",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54923,
      "latitude": 43.915726,
      "longitude": -89.027124,
      "city": "Berlin",
      "state": "WI",
      "county": "Green Lake"
    },
    {
      "zip_code": 54926,
      "latitude": 44.617819,
      "longitude": -89.016622,
      "city": "Big Falls",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54927,
      "latitude": 44.103137,
      "longitude": -88.653949,
      "city": "Butte Des Morts",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54928,
      "latitude": 44.735836,
      "longitude": -88.876673,
      "city": "Caroline",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54929,
      "latitude": 44.593386,
      "longitude": -88.868093,
      "city": "Clintonville",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54930,
      "latitude": 44.026085,
      "longitude": -89.486854,
      "city": "Coloma",
      "state": "WI",
      "county": "Waushara"
    },
    {
      "zip_code": 54931,
      "latitude": 44.416326,
      "longitude": -88.464873,
      "city": "Dale",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54932,
      "latitude": 43.832253,
      "longitude": -88.582166,
      "city": "Eldorado",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 54933,
      "latitude": 44.668605,
      "longitude": -88.704318,
      "city": "Embarrass",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54934,
      "latitude": 44.003153,
      "longitude": -88.839692,
      "city": "Eureka",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54935,
      "latitude": 43.734724,
      "longitude": -88.523176,
      "city": "Fond Du Lac",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 54936,
      "latitude": 43.740559,
      "longitude": -88.522984,
      "city": "Fond Du Lac",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 54937,
      "latitude": 43.765009,
      "longitude": -88.605657,
      "city": "Fond Du Lac",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 54940,
      "latitude": 44.272779,
      "longitude": -88.833282,
      "city": "Fremont",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54941,
      "latitude": 43.85627,
      "longitude": -88.985883,
      "city": "Green Lake",
      "state": "WI",
      "county": "Green Lake"
    },
    {
      "zip_code": 54942,
      "latitude": 44.286983,
      "longitude": -88.556406,
      "city": "Greenville",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54943,
      "latitude": 44.103548,
      "longitude": -89.491566,
      "city": "Hancock",
      "state": "WI",
      "county": "Waushara"
    },
    {
      "zip_code": 54944,
      "latitude": 44.342058,
      "longitude": -88.588244,
      "city": "Hortonville",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54945,
      "latitude": 44.572209,
      "longitude": -89.071142,
      "city": "Iola",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54946,
      "latitude": 44.336537,
      "longitude": -89.146258,
      "city": "King",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54947,
      "latitude": 44.194993,
      "longitude": -88.688629,
      "city": "Larsen",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54948,
      "latitude": 44.781006,
      "longitude": -88.890714,
      "city": "Leopolis",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54949,
      "latitude": 44.488057,
      "longitude": -88.926954,
      "city": "Manawa",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54950,
      "latitude": 44.546623,
      "longitude": -88.937717,
      "city": "Marion",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54951,
      "latitude": 44.416326,
      "longitude": -88.464873,
      "city": "Medina",
      "state": "WI",
      "county": "Outagamie"
    },
    {
      "zip_code": 54952,
      "latitude": 44.141025,
      "longitude": -88.569088,
      "city": "Menasha",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54956,
      "latitude": 44.170785,
      "longitude": -88.658087,
      "city": "Neenah",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54957,
      "latitude": 44.198944,
      "longitude": -88.678863,
      "city": "Neenah",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54960,
      "latitude": 43.922097,
      "longitude": -89.310982,
      "city": "Neshkoro",
      "state": "WI",
      "county": "Marquette"
    },
    {
      "zip_code": 54961,
      "latitude": 44.405595,
      "longitude": -88.859107,
      "city": "New London",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54962,
      "latitude": 44.426783,
      "longitude": -88.993214,
      "city": "Ogdensburg",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54963,
      "latitude": 44.050782,
      "longitude": -88.754887,
      "city": "Omro",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54964,
      "latitude": 43.956653,
      "longitude": -88.71918,
      "city": "Pickett",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54965,
      "latitude": 44.155967,
      "longitude": -89.02096,
      "city": "Pine River",
      "state": "WI",
      "county": "Waushara"
    },
    {
      "zip_code": 54966,
      "latitude": 44.191887,
      "longitude": -89.297481,
      "city": "Plainfield",
      "state": "WI",
      "county": "Waushara"
    },
    {
      "zip_code": 54967,
      "latitude": 44.134044,
      "longitude": -88.986361,
      "city": "Poy Sippi",
      "state": "WI",
      "county": "Waushara"
    },
    {
      "zip_code": 54968,
      "latitude": 43.832741,
      "longitude": -89.122651,
      "city": "Princeton",
      "state": "WI",
      "county": "Green Lake"
    },
    {
      "zip_code": 54969,
      "latitude": 44.269991,
      "longitude": -88.775457,
      "city": "Readfield",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54970,
      "latitude": 44.080217,
      "longitude": -89.217031,
      "city": "Redgranite",
      "state": "WI",
      "county": "Waushara"
    },
    {
      "zip_code": 54971,
      "latitude": 43.782526,
      "longitude": -88.533445,
      "city": "Ripon",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 54974,
      "latitude": 43.775697,
      "longitude": -88.659504,
      "city": "Rosendale",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 54975,
      "latitude": 44.461926,
      "longitude": -88.915027,
      "city": "Royalton",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54976,
      "latitude": 44.209313,
      "longitude": -89.096856,
      "city": "Saxeville",
      "state": "WI",
      "county": "Waushara"
    },
    {
      "zip_code": 54977,
      "latitude": 44.451051,
      "longitude": -89.146915,
      "city": "Scandinavia",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54978,
      "latitude": 44.79604,
      "longitude": -88.898362,
      "city": "Tilleda",
      "state": "WI",
      "county": "Shawano"
    },
    {
      "zip_code": 54979,
      "latitude": 43.839613,
      "longitude": -88.543924,
      "city": "Van Dyne",
      "state": "WI",
      "county": "Fond Du Lac"
    },
    {
      "zip_code": 54980,
      "latitude": 43.988578,
      "longitude": -88.771167,
      "city": "Waukau",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54981,
      "latitude": 44.429163,
      "longitude": -89.04668,
      "city": "Waupaca",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54982,
      "latitude": 44.075321,
      "longitude": -89.271177,
      "city": "Wautoma",
      "state": "WI",
      "county": "Waushara"
    },
    {
      "zip_code": 54983,
      "latitude": 44.332498,
      "longitude": -88.922821,
      "city": "Weyauwega",
      "state": "WI",
      "county": "Waupaca"
    },
    {
      "zip_code": 54984,
      "latitude": 44.168882,
      "longitude": -89.223228,
      "city": "Wild Rose",
      "state": "WI",
      "county": "Waushara"
    },
    {
      "zip_code": 54985,
      "latitude": 44.070584,
      "longitude": -88.517762,
      "city": "Winnebago",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54986,
      "latitude": 44.124886,
      "longitude": -88.745129,
      "city": "Winneconne",
      "state": "WI",
      "county": "Winnebago"
    },
    {
      "zip_code": 54990,
      "latitude": 44.461926,
      "longitude": -88.915027,
      "city": "Iola",
      "state": "WI",
      "county": "Waupaca"
    },
]

    let dotmarkers = JSON.parse(`[{"lat":44.319853,"lng":-91.913504,"title":"Alma service center                     \\n407 S. 2nd Street                       \\nAlma,WI,54610"},{"lat":45.161503,"lng":-89.153877,"title":"Antigo service center                   \\n2124 Clermont Street                    \\nAntigo,WI,54409"},{"lat":44.296663,"lng":-88.417186,"title":"Appleton service center                 \\n711 W. Association Drive                \\nAppleton,WI,54914"},{"lat":46.575648,"lng":-90.90998,"title":"Ashland service center                  \\n2501 Golf Course Road                   \\nAshland,WI,54806"},{"lat":45.933009,"lng":-90.45233,"title":"Park Falls service center               \\n330 S. 4th Avenue                       \\nPark Falls,WI,54552"},{"lat":46.46327,"lng":-90.195581,"title":"Hurley service center                   \\n1200 State Hwy 51N                      \\nHurley,WI,54534"},{"lat":46.566017,"lng":-91.415527,"title":"Iron River service center               \\n7615 Railroad Street                    \\nIron River,WI,54847"},{"lat":46.0202,"lng":-91.475553,"title":"Hayward service center                  \\n15614 Windrose Lane, Suite 340          \\nHayward,WI,54843"},{"lat":43.452907,"lng":-88.807962,"title":"Beaver Dam service center               \\nN7146 E. Plaza Drive                    \\nBeaver Dam,WI,53916"},{"lat":42.523054,"lng":-88.989075,"title":"Beloit service center                   \\n1900 Sutler Avenue                      \\nBeloit,WI,53511"},{"lat":45.568818,"lng":-88.903356,"title":"Crandon service center                  \\n110 S. Lake Avenue                      \\nCrandon,WI,54520"},{"lat":44.863928,"lng":-91.464808,"title":"Eau Claire service center               \\n3115 Melby Street                       \\nEau Claire,WI,54703"},{"lat":44.793786,"lng":-91.507697,"title":"Eau Claire South service center         \\nEau Claire State Office Building        \\n718 W. Clairemont Avenue                \\nEau Claire,WI,54701"},{"lat":42.65832,"lng":-88.539022,"title":"Elkhorn service center                  \\n835 S. Lincoln Street                   \\nElkhorn,WI,53121"},{"lat":45.913795,"lng":-89.255913,"title":"Eagle River service center              \\n302 W. Pine Street                      \\nEagle River,WI,54521"},{"lat":43.759933,"lng":-88.477702,"title":"Fond du Lac service center              \\n833 S. Rolling Meadows Drive            \\nFond du Lac,WI,54937"},{"lat":44.021471,"lng":-88.152949,"title":"Chilton service center                  \\n104 Southside Shopping Center           \\n(on Chestnut Street)                    \\nChilton,WI,53014"},{"lat":44.478512,"lng":-88.076269,"title":"Green Bay service center                \\n942 Vanderperren Way                    \\nGreen Bay,WI,54304"},{"lat":44.94685,"lng":-92.710449,"title":"Hudson service center                   \\nBusiness Park, Suite 100                \\n2100 O'Neil Road                        \\nHudson,WI,54016"},{"lat":45.122383,"lng":-92.536636,"title":"New Richmond service center             \\nCivic Center                            \\n156 E. 1st Street                       \\nNew Richmond,WI,54017"},{"lat":42.671621,"lng":-88.97265,"title":"Janesville service center               \\n645 S. Wright Road                      \\nJanesville,WI,53546"},{"lat":42.602978,"lng":-89.659378,"title":"Monroe service center                   \\n815 1st Avenue                          \\nMonroe,WI,53566"},{"lat":42.592382,"lng":-87.91381,"title":"Kenosha service center                  \\n4911 88th Avenue, Suite A               \\nKenosha,WI,53144"},{"lat":43.878283,"lng":-91.179099,"title":"La Crosse area service center           \\n9477 Hwy 16 East                        \\nOnalaska,WI,54650"},{"lat":45.47861,"lng":-91.112119,"title":"Ladysmith service center                \\nNorth Business Center, Suite 1          \\nN5273 Hwy 27                            \\nLadysmith,WI,54848"},{"lat":45.132367,"lng":-90.331699,"title":"Medford service center                  \\n624 S. 8th Street                       \\nMedford,WI,54451"},{"lat":45.807789,"lng":-91.896988,"title":"Spooner service center                  \\nW7074 Green Valley Road                 \\nSpooner,WI,54801"},{"lat":45.686173,"lng":-90.398799,"title":"Phillips service center                 \\nMunicipal Center                        \\n174 S. Eyder Avenue                     \\nPhillips,WI,54555"},{"lat":44.959759,"lng":-90.933235,"title":"Stanley service center                  \\nFire Hall, 239 E. 1st Avenue            \\nStanley,WI,54768"},{"lat":43.078848,"lng":-89.528795,"title":"Madison West service center             \\n8417 Excelsior Drive                    \\nMadison,WI,53717"},{"lat":42.99407,"lng":-87.912716,"title":"Milwaukee-Central service center        \\n2701 S. Chase Avenue                    \\nMilwaukee,WI,53207"},{"lat":43.125685,"lng":-89.322077,"title":"Madison East service center             \\n2001 Bartillon Drive                    \\nMadison,WI,53704"},{"lat":44.661252,"lng":-90.171262,"title":"Marshfield service center               \\n503 S. Cherry Avenue                    \\nMarshfield,WI,54449"},{"lat":44.947147,"lng":-90.319992,"title":"Abbotsford service center               \\nCity Hall                               \\n203 N. 1st Street                       \\nAbbotsford,WI,54405"},{"lat":43.040462,"lng":-87.919418,"title":"Milwaukee-Downtown service center       \\n819 N. 6th Street                       \\nMilwaukee,WI,53203"},{"lat":45.180418,"lng":-89.687545,"title":"Merrill service center                  \\n100 S. Mill Street, Suite 103           \\nMerrill,WI,54452"},{"lat":43.128193,"lng":-87.954085,"title":"Milwaukee-Northeast service center      \\n6073 N. Teutonia Ave.                   \\nMilwaukee,WI,53209"},{"lat":43.133766,"lng":-88.002226,"title":"Milwaukee-Northwest service center      \\n7301 W. Mill Road                       \\nMilwaukee,WI,53218"},{"lat":44.62878,"lng":-91.967003,"title":"Durand service center                   \\n116 W. Main Street                      \\nDurand,WI,54736"},{"lat":44.731688,"lng":-92.475137,"title":"Ellsworth service center                \\n179 E. Main Street                      \\nEllsworth,WI,54011"},{"lat":44.884125,"lng":-91.89817,"title":"Menomonie service center                \\n393 Red Cedar Street, Suite 7           \\nMenomonie,WI,54751"},{"lat":45.295132,"lng":-92.364614,"title":"Amery service center                    \\n950 Elden Avenue                        \\nAmery,WI,54001"},{"lat":45.055766,"lng":-87.734375,"title":"Peshtigo service center                 \\n101 N. Ogden Road                       \\nPeshtigo,WI,54157"},{"lat":44.886436,"lng":-87.868866,"title":"Oconto service station                  \\n1008 Pecor Street                       \\nOconto,WI,54153"},{"lat":45.919988,"lng":-88.26065,"title":"Florence service center                 \\nWild Rivers Interpretive Center         \\n4793 Forestry Drive                     \\nFlorence,WI,54121"},{"lat":42.92934,"lng":-87.879723,"title":"South Milwaukee service center          \\n1835 College Avenue                     \\nSouth Milwaukee,WI,53172"},{"lat":42.945175,"lng":-87.982635,"title":"Milwaukee-Southwest service center      \\n5500 W. Grange Avenue                   \\nGreendale,WI,53129"},{"lat":44.073604,"lng":-87.692614,"title":"Manitowoc service center                \\n3651 Dewey St.                          \\nManitowoc,WI,54220"},{"lat":44.031719,"lng":-88.591883,"title":"Oshkosh service center                  \\n2301 Omro Road                          \\nOshkosh,WI,54904"},{"lat":42.729792,"lng":-90.448541,"title":"Platteville service center              \\nHighway 151 Industrial Park             \\n31 Means Drive                          \\nPlatteville,WI,53818"},{"lat":42.667446,"lng":-90.130463,"title":"Darlington service center               \\n197 Christensen Drive                   \\nDarlington,WI,53530"},{"lat":42.96516,"lng":-90.134979,"title":"Dodgeville service center               \\nSpringate Mall                          \\n316 W. Spring Street                    \\nDodgeville,WI,53533"},{"lat":43.567818,"lng":-89.472891,"title":"Portage service center                  \\n2888 Village Road                       \\nPortage,WI,53901"},{"lat":43.532925,"lng":-90.023369,"title":"Reedsburg service center                \\nTown Hall                               \\n600 W. Main Street                      \\nReedsburg,WI,53959"},{"lat":43.480492,"lng":-89.769062,"title":"Baraboo service center                  \\n1000 Log Lodge Court                    \\nBaraboo,WI,53913"},{"lat":43.2729,"lng":-89.726402,"title":"Sauk City service center                \\nCommunity Center                        \\n730 Monroe Street                       \\nSauk City,WI,53583"},{"lat":42.714937,"lng":-87.901762,"title":"Racine/Sturtevant service center        \\n9531 Rayne Road                         \\nSturtevant,WI,53177"},{"lat":43.320281,"lng":-90.359732,"title":"Richland Center service center          \\n26136 Executive Lane, Suite A           \\nRichland Center,WI,53581"},{"lat":43.026475,"lng":-91.126083,"title":"Prairie du Chien service center         \\n65 Riverside Square, Suite 6            \\nPrairie du Chien,WI,53821"},{"lat":43.575977,"lng":-90.889633,"title":"Viroqua service center                  \\n1316 N. Main Street                     \\nViroqua,WI,54665"},{"lat":45.634176,"lng":-89.444793,"title":"Rhinelander service center              \\nState DOT Building                      \\n510 Hanson Lake Road                    \\nRhinelander,WI,54501"},{"lat":45.508452,"lng":-91.764298,"title":"Rice Lake service center                \\n735 West Avenue (same as 19th Street)   \\nRice Lake,WI,54868"},{"lat":45.793085,"lng":-92.380764,"title":"Siren service center                    \\n24248 WI-35 70                          \\nUnit A                                  \\nSiren,WI,54872"},{"lat":45.573618,"lng":-92.480861,"title":"Luck service center                     \\nLuck Lions Club                         \\n300 S. 1st Street                       \\nLuck,WI,54853"},{"lat":43.755512,"lng":-87.755088,"title":"Sheboygan service center                \\n3603 Kohler Memorial Drive              \\nSheboygan,WI,53081"},{"lat":44.844982,"lng":-87.366188,"title":"Sturgeon Bay service center             \\nBay Ridge Mall                          \\n1009 Egg Harbor Road                    \\nSturgeon Bay,WI,54235"},{"lat":44.608259,"lng":-87.438419,"title":"Algoma service center                   \\n514 4th Street                          \\nAlgoma,WI,54201"},{"lat":44.780228,"lng":-88.574127,"title":"Shawano service center                  \\n1340 E. Green Bay St. (Hwy 29)          \\nShawano,WI,54166"},{"lat":44.8796,"lng":-88.623269,"title":"Keshena service center                  \\nW2727 Our Children's Road               \\nKeshena,WI,54135"},{"lat":43.38986,"lng":-87.953716,"title":"Saukville service center                \\n501 N. Dekora Woods Blvd.               \\nSaukville,WI,53080"},{"lat":46.734269,"lng":-92.102627,"title":"Superior service center                 \\n1701 N. 4th Street                      \\nSuperior,WI,54880"},{"lat":44.525701,"lng":-89.523371,"title":"Stevens Point service center            \\n1001 Maple Bluff Road                   \\nSuite 2                                 \\nStevens Point,WI,54481"},{"lat":44.000393,"lng":-90.504189,"title":"Tomah service center                    \\n1021 N. Superior Ave.                   \\nTomah,WI,54660"},{"lat":43.964481,"lng":-89.818848,"title":"Adams service center                    \\n478 N. Oak Street                       \\nAdams,WI,53910"},{"lat":43.79608,"lng":-90.073927,"title":"Mauston service center                  \\n318 E. State Street                     \\nMauston,WI,53948"},{"lat":43.891724,"lng":-89.489906,"title":"Westfield service center                \\n438 Industrial Drive                    \\nWestfield,WI,53964"},{"lat":43.398511,"lng":-88.197411,"title":"West Bend service center                \\n1516 W. Paradise Drive                  \\nWest Bend,WI,53095"},{"lat":44.368395,"lng":-91.332285,"title":"Whitehall service center                \\n36270 Tower Drive                       \\nSuite 400                               \\nWhitehall,WI,54773"},{"lat":44.558175,"lng":-90.596424,"title":"Neillsville service center              \\n400 Hewett Street                       \\nNeillsville,WI,54456"},{"lat":44.29568,"lng":-90.833507,"title":"Black River Falls service center        \\n618 E. Main Street(Hwy 54)              \\nBlack River Falls,WI,54615"},{"lat":44.822692,"lng":-89.170243,"title":"Wittenberg service center               \\nCommunity Center                        \\n208 W. Vinal Street                     \\nWittenberg,WI,54499"},{"lat":43.04722,"lng":-88.259257,"title":"Waukesha area service center            \\n2019 Golf Road                          \\nPewaukee,WI,53072"},{"lat":44.356735,"lng":-89.100307,"title":"Waupaca service center                  \\n801 W. Fulton Street                    \\nWaupaca,WI,54981"},{"lat":43.969193,"lng":-88.923515,"title":"Berlin service center                   \\nW832 State Road 91                      \\nBerlin,WI,54923"},{"lat":44.076979,"lng":-89.299294,"title":"Wautoma service center                  \\n715 W. Main Street                      \\nWautoma,WI,54982"},{"lat":44.379982,"lng":-89.843528,"title":"Wisconsin Rapids service center         \\nState Office Building                   \\n1681 2nd Avenue S.                      \\nWisconsin Rapids,WI,54495"},{"lat":43.189887,"lng":-88.740035,"title":"Watertown service center                \\n810 West Street                         \\nWatertown,WI,53094"},{"lat":42.929287,"lng":-88.837326,"title":"Fort Atkinson service center            \\nMunicipal Building                      \\n101 N. Main Street                      \\nFort Atkinson,WI,53538"},{"lat":44.908877,"lng":-89.651935,"title":"Wausau service center                   \\n225051 Rib Mountain Drive               \\nWausau,WI,54401"}]`)

    function rad(x : any) {
        return x * Math.PI / 180;
    }
    function find_closest(zipCode: string) {
                let zipNum = parseInt(zipCode)
                let location;
                for(let i = 0; i < zips.length; i++){
                     if(zips[i].zip_code == zipNum){
                        location = zips[i]
                    }
                }
                console.log(location)
                var testmarkers = dotmarkers;
                var lat = (location as any).latitude
                var lng =  (location as any).longitude
                var earthRadius = 3959; //In Miles.
                var distances = []
                var stationListLength=3;
                
                for (let i = 0; i < testmarkers.length; i++) {
                    var mlat = testmarkers[i].lat;
                    var mlng = testmarkers[i].lng;
                    var dLat = rad(mlat - lat);
                    var dLong = rad(mlng - lng);
                    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat))
                            * Math.cos(rad(mlat)) * Math.sin(dLong / 2)
                            * Math.sin(dLong / 2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    var distance = earthRadius * c;
                    distances[i] = Distance(i, distance);
                }
                
                distances.sort(function(a, b){
                    return a.distance-b.distance;
                    });   

                
                if (distances.length<stationListLength) {
                    stationListLength = distances.length;

                }
            return(testmarkers[distances[0].index])
    }
    function Distance(index: any, distance: any){
        return {index : index, distance: distance}
    }


async function findAddress(zipCode: string){
   let address = find_closest(zipCode).title.split("\n")
   return address[1].replace("                   ","")+address[2]
}
const DriversLicence = () => {
    const [address, setAddress] = useState("")
    const [input, setInput] = useState("")
    let search = async ()=>{
        setAddress(await findAddress(input))
    }
    let openMapHandle = () => {
        openMap({query:address})
    }
    return (
        <View>
            <HomeButton/>
            <Text>Drivers Licence</Text>
            <Text>Zip Code: {address}</Text>
            
            <TextInput onSubmitEditing={search} onChangeText={newText => setInput(newText)}></TextInput>
            <Button title="Get DMV address" onPress={search}  />
            {address != "" &&
                <Button title="Open Map" onPress={openMapHandle}  />
            }
        </View>
    )
} 

export default DriversLicence

const styles = StyleSheet.create({
    
})
